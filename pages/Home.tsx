import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown, Zap, Users, Repeat, Star, Upload, Loader2, Play, Film } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const FeatureCard: React.FC<{ 
  icon: React.ElementType, 
  title: string, 
  desc: string 
}> = ({ icon: Icon, title, desc }) => (
  <div className="group bg-dark-900 p-8 rounded-2xl border border-white/5 hover:border-brand-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] relative overflow-hidden h-full flex flex-col">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center mb-6 text-brand-400 group-hover:text-brand-300 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-500/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0">
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-display font-bold text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-light text-sm">{desc}</p>
  </div>
);

const StepCard: React.FC<{
  number: string,
  title: string,
  desc: string
}> = ({ number, title, desc }) => (
  <div className="relative flex flex-col items-center text-center p-6 bg-dark-800/50 rounded-xl border border-white/5 backdrop-blur-sm">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-white flex items-center justify-center font-display font-bold text-xl mb-4 shadow-[0_0_15px_rgba(124,58,237,0.4)]">
      {number}
    </div>
    <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide">{title}</h3>
    <p className="text-sm text-slate-400">{desc}</p>
  </div>
);

const ClientCard: React.FC<{
  title: string,
  problems: string[]
}> = ({ title, problems }) => (
  <div className="bg-dark-900 p-6 rounded-2xl border border-white/10 hover:border-brand-500/30 transition-colors">
    <h3 className="font-display font-bold text-lg text-white mb-4 pb-2 border-b border-white/10">{title}</h3>
    <ul className="space-y-3">
      {problems.map((p, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
          <CheckCircle size={16} className="text-brand-500 mt-0.5 shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.4)] rounded-full" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const VeoDemo: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setVideoUrl(null); // Reset video if new image selected
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    const fileInput = fileInputRef.current;
    if (!imagePreview || !fileInput?.files?.[0]) return;
    
    try {
      // 1. Check API Key
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
        // Race condition mitigation: assume success and proceed, or prompt user to click again if it fails
      }

      setIsGenerating(true);
      setStatus('Initializing Neural Engine...');

      // 2. Prepare Data
      const file = fileInput.files[0];
      const base64Data = imagePreview.split(',')[1];
      
      // 3. Initialize Client
      // Create new instance to ensure latest API key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      setStatus('Uploading to Veo-3.1...');
      
      // 4. Start Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Cinematic, fluid motion, organic movement, high quality, 4k, slow motion',
        image: {
          imageBytes: base64Data,
          mimeType: file.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      // 5. Poll for completion
      setStatus('Generating Video (this takes a moment)...');
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      // 6. Fetch Result
      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        setStatus('Downloading Stream...');
        const downloadLink = operation.response.generatedVideos[0].video.uri;
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      } else {
        throw new Error("No video generated");
      }

    } catch (error: any) {
      console.error(error);
      if (error.message?.includes("Requested entity was not found") || error.message?.includes("404")) {
        setStatus("Session expired. Please select API Key again.");
        await (window as any).aistudio.openSelectKey();
      } else {
        setStatus('Generation failed. Try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full bg-dark-900 rounded-2xl border border-brand-500/30 overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.2)] relative group">
       {/* Tech decorative header */}
       <div className="h-8 bg-dark-950 border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex gap-1.5">
             <div className="w-2 h-2 rounded-full bg-red-500"></div>
             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-[10px] font-mono text-brand-400 tracking-widest uppercase opacity-70">
             VEO-3.1 // NEURAL ANIMATION
          </div>
       </div>

       <div className="p-1 bg-dark-950">
          <div className="relative aspect-video bg-dark-900 rounded-lg overflow-hidden border border-white/5 group-hover:border-brand-500/20 transition-colors">
            {videoUrl ? (
              <video 
                src={videoUrl} 
                autoPlay 
                loop 
                muted 
                controls 
                className="w-full h-full object-cover"
              />
            ) : imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-10">
                 <Film size={48} className="mb-4 opacity-50" />
                 <span className="text-sm font-mono uppercase tracking-wide">Ready for Input</span>
              </div>
            )}

            {/* Overlay Interface */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 pointer-events-auto z-10">
               {isGenerating ? (
                 <div className="bg-dark-900/80 backdrop-blur border border-brand-500/30 rounded-xl p-4 flex items-center gap-4">
                    <Loader2 className="animate-spin text-brand-400" size={24} />
                    <div className="flex-grow">
                       <div className="text-xs font-mono text-brand-300 mb-1 uppercase tracking-wider">{status}</div>
                       <div className="h-1 bg-dark-800 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-500 w-1/3 animate-glow"></div>
                       </div>
                    </div>
                 </div>
               ) : (
                 <div className="flex gap-3">
                   <div className="flex-grow">
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="veo-upload"
                      />
                      <label 
                        htmlFor="veo-upload"
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl cursor-pointer transition-all text-sm font-medium text-slate-300"
                      >
                         <Upload size={16} /> {imagePreview ? 'Change Image' : 'Upload Image'}
                      </label>
                   </div>
                   {imagePreview && (
                     <button 
                       onClick={generateVideo}
                       className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.4)] flex items-center gap-2 transition-all"
                     >
                       <Play size={16} fill="currentColor" /> ANIMATE
                     </button>
                   )}
                 </div>
               )}
            </div>
          </div>
       </div>
    </div>
  );
};

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24 md:pb-0 bg-dark-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Gradients/Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-brand-600/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/50 text-brand-300 text-sm font-medium mb-8 border border-brand-500/30 shadow-[0_0_15px_rgba(124,58,237,0.2)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_#a78bfa]"></span>
                <span className="tracking-wide">PREDICTABLE SALES SYSTEMS</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-8 leading-tight">
                STOP CHASING TOOLS. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-200 to-cyan-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                  BUILD A SALES SYSTEM.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
                We don't just "add AI." We engineer smart websites, organized CRMs, and practical AI assistants into one simple engine that drives revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-display font-bold text-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2 border border-brand-400/20"
                >
                  BOOK STRATEGY CALL <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => document.getElementById('core-four')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-slate-300 border border-white/20 rounded-lg font-display font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:border-brand-400/50 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  HOW IT WORKS <ChevronDown size={20} />
                </button>
              </div>
            </div>

            {/* Right Column: Veo Demo */}
            <div className="relative">
               {/* Decorative glow behind the demo */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-600/20 blur-[80px] rounded-full pointer-events-none"></div>
               <VeoDemo />
               <div className="mt-4 text-center text-xs text-slate-500 font-mono">
                  POWERED BY VEO-3.1 // GENERATIVE VIDEO PREVIEW
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Core Four */}
      <section id="core-four" className="py-24 bg-dark-950 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 tracking-wide">OUR CORE FOUR</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              We focus on what truly moves the needle. Our Core Four makes sure you’re not just online—you’re <span className="text-brand-400 font-semibold">optimized for growth</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <FeatureCard 
              icon={Zap}
              title="INSTANT CONNECTION"
              desc="Connect with leads instantly. Speed to lead is everything in modern sales."
            />
            <FeatureCard 
              icon={Repeat}
              title="AUTOMATED FOLLOW-UP"
              desc="Automate follow-ups so no potential customer ever slips through the cracks."
            />
            <FeatureCard 
              icon={Star}
              title="HIGH-CONVERTING BRAND"
              desc="Showcase a high-converting brand with websites designed to sell, not just look pretty."
            />
             <FeatureCard 
              icon={Users}
              title="HYBRID SUPPORT"
              desc="Combine 24/7 AI + human support so you never miss an opportunity, day or night."
            />
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-dark-900/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-wide">WHO WE HELP</h2>
              <p className="text-slate-400">Businesses ready to scale beyond manual chaos.</p>
            </div>
            <button 
              onClick={() => navigate('/services')}
              className="text-brand-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all hover:text-brand-300 font-display tracking-wide"
            >
              VIEW FULL SERVICES <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ClientCard 
              title="Attorneys & Law Firms" 
              problems={["Missed calls = lost cases", "Manual intake takes too long", "Follow-up is inconsistent"]}
            />
            <ClientCard 
              title="Car Dealerships" 
              problems={["Leads get cold quickly", "Repetitive inventory questions", "Booking test drives is manual"]}
            />
            <ClientCard 
              title="Agencies & Service Biz" 
              problems={["Feast or famine pipeline", "Proposal chasing eats time", "Need to automate onboarding"]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">SYSTEM DEPLOYMENT</h2>
            <p className="text-slate-400">From chaos to clarity in four simple steps.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-brand-900 -z-10"></div>
                
              <StepCard number="01" title="AUDIT" desc="Discovery call to map your current bottlenecks." />
              <StepCard number="02" title="BLUEPRINT" desc="We design your ideal sales process flow." />
              <StepCard number="03" title="BUILD" desc="We deploy the website, CRM, and AI agents." />
              <StepCard number="04" title="LAUNCH" desc="Training, testing, and optimization for ROI." />
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block p-4 bg-brand-900/20 rounded-xl border border-brand-500/20 backdrop-blur-sm">
                <p className="font-medium text-brand-300 flex items-center gap-2">
                  <Zap size={18} className="fill-brand-300" /> Average implementation time: <span className="font-bold text-white">7-14 days</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wide">PACKAGES</h2>
            <p className="text-slate-400">Choose the bundle that fits your growth stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Core */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col hover:border-brand-500/30 transition-all">
              <h3 className="text-xl font-display font-bold mb-2 text-white">CERRANA CORE</h3>
              <p className="text-slate-500 text-sm mb-6">Sales & CRM OS foundation.</p>
              <div className="text-3xl font-display font-bold mb-2 text-slate-200">$147<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <div className="text-xs text-slate-500 mb-6 font-mono">+ $497 Setup</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> Sales Process Design</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> Full CRM Setup</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> Email/SMS Automations</li>
              </ul>
              <button onClick={() => navigate('/pricing')} className="w-full py-3 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 transition-colors font-semibold font-display tracking-wide">VIEW DETAILS</button>
            </div>

            {/* Growth Bundle */}
            <div className="bg-dark-900 rounded-2xl p-8 border-2 border-brand-500 shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col relative transform scale-105 z-20">
              <div className="absolute top-0 right-0 bg-brand-600 text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg text-white font-display tracking-wider shadow-[0_0_10px_rgba(124,58,237,0.5)]">POPULAR</div>
              <h3 className="text-xl font-display font-bold mb-2 text-white">GROWTH BUNDLE</h3>
              <p className="text-brand-200 text-sm mb-6">Core + AI Assistant 24/7.</p>
              <div className="text-3xl font-display font-bold mb-2 text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-200">$347<span className="text-sm font-normal text-white">/mo</span></div>
              <div className="text-xs text-brand-300/80 mb-6 font-mono">+ $997 Setup</div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-400 shrink-0 shadow-[0_0_5px_#a78bfa]" /> <span className="font-bold">Everything in Core</span></li>
                <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-400 shrink-0 shadow-[0_0_5px_#a78bfa]" /> AI Assistant (Capture)</li>
                <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-400 shrink-0 shadow-[0_0_5px_#a78bfa]" /> Auto-Booking & Follow-up</li>
                <li className="flex gap-3 text-sm text-white"><CheckCircle size={16} className="text-brand-400 shrink-0 shadow-[0_0_5px_#a78bfa]" /> Lead Qualification</li>
              </ul>
              <button onClick={() => navigate('/pricing')} className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white transition-all font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] font-display tracking-wide">VIEW DETAILS</button>
            </div>

            {/* Full Funnel */}
            <div className="bg-dark-900/50 rounded-2xl p-8 border border-white/10 flex flex-col hover:border-brand-500/30 transition-all">
              <h3 className="text-xl font-display font-bold mb-2 text-white">FULL FUNNEL</h3>
              <p className="text-slate-500 text-sm mb-6">Core + Capture + Website.</p>
              <div className="text-3xl font-display font-bold mb-2 text-slate-200">$397<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <div className="text-xs text-slate-500 mb-6 font-mono">+ $1,497 Setup</div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> <span className="font-bold">Everything in Growth</span></li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> High-Converting Website</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> SEO Structure</li>
                <li className="flex gap-3 text-sm text-slate-400"><CheckCircle size={16} className="text-brand-500 shrink-0" /> Priority Support</li>
              </ul>
              <button onClick={() => navigate('/pricing')} className="w-full py-3 rounded-lg border border-white/20 text-slate-300 hover:bg-white/10 transition-colors font-semibold font-display tracking-wide">VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white tracking-wide">FAQ</h2>
          </div>
          <div className="space-y-4">
            <details className="bg-dark-900 p-6 rounded-xl border border-white/5 group cursor-pointer open:border-brand-500/30 transition-colors">
              <summary className="font-semibold text-white flex justify-between items-center list-none font-display tracking-wide">
                Do I need to understand AI to use this?
                <span className="transition group-open:rotate-180 text-brand-500"><ChevronDown size={20} /></span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">Not at all. We build the "black box" for you. You just interact with the dashboard and the results (booked calls, qualified leads).</p>
            </details>
            <details className="bg-dark-900 p-6 rounded-xl border border-white/5 group cursor-pointer open:border-brand-500/30 transition-colors">
              <summary className="font-semibold text-white flex justify-between items-center list-none font-display tracking-wide">
                What CRM do you use?
                <span className="transition group-open:rotate-180 text-brand-500"><ChevronDown size={20} /></span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">We specialize in HighLevel (GoHighLevel) implementations because of its all-in-one capability, but we can also integrate with HubSpot or Salesforce for custom packages.</p>
            </details>
            <details className="bg-dark-900 p-6 rounded-xl border border-white/5 group cursor-pointer open:border-brand-500/30 transition-colors">
              <summary className="font-semibold text-white flex justify-between items-center list-none font-display tracking-wide">
                What if I already have a website?
                <span className="transition group-open:rotate-180 text-brand-500"><ChevronDown size={20} /></span>
              </summary>
              <p className="mt-4 text-slate-400 leading-relaxed">No problem. We can embed our funnels, forms, and chat widgets onto your existing site, or build landing pages that link out from it.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};