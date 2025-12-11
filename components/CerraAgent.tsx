import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Zap, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { useNavigate } from 'react-router-dom';

/* --- SOUND ENGINE (WEB AUDIO API) --- */
const SoundEngine = {
    ctx: null as AudioContext | null,
    
    init: () => {
        if (!SoundEngine.ctx) {
            SoundEngine.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (SoundEngine.ctx?.state === 'suspended') {
            SoundEngine.ctx.resume();
        }
    },

    playBlip: () => {
        if (!SoundEngine.ctx) return;
        const osc = SoundEngine.ctx.createOscillator();
        const gain = SoundEngine.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, SoundEngine.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, SoundEngine.ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, SoundEngine.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, SoundEngine.ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(SoundEngine.ctx.destination);
        osc.start();
        osc.stop(SoundEngine.ctx.currentTime + 0.1);
    },

    playTyping: () => {
         if (!SoundEngine.ctx) return;
        const osc = SoundEngine.ctx.createOscillator();
        const gain = SoundEngine.ctx.createGain();
        osc.type = 'square';
        const freq = 200 + Math.random() * 50; // Variation
        osc.frequency.setValueAtTime(freq, SoundEngine.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, SoundEngine.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, SoundEngine.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(SoundEngine.ctx.destination);
        osc.start();
        osc.stop(SoundEngine.ctx.currentTime + 0.05);
    },

    playGlitch: () => {
         if (!SoundEngine.ctx) return;
        const osc = SoundEngine.ctx.createOscillator();
        const gain = SoundEngine.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, SoundEngine.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(50, SoundEngine.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.1, SoundEngine.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, SoundEngine.ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(SoundEngine.ctx.destination);
        osc.start();
        osc.stop(SoundEngine.ctx.currentTime + 0.2);
    }
};

export const CerraAgent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [dialogueStep, setDialogueStep] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const { language } = useLanguage();
    const navigate = useNavigate();

    // @ts-ignore
    const t = translations[language].cerra;

    // Trigger Popup after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
            // Don't play sound automatically to respect browser policies, wait for hover/click
        }, 5000); 
        return () => clearTimeout(timer);
    }, []);

    // Typing Effect Logic
    useEffect(() => {
        if (!isOpen) return;
        
        const currentText = t.greetings[dialogueStep];
        if (!currentText) return;

        setTypedText('');
        let i = 0;
        
        const typeInterval = setInterval(() => {
            if (i < currentText.length) {
                setTypedText(prev => prev + currentText.charAt(i));
                if (!isMuted && Math.random() > 0.5) SoundEngine.playTyping(); // Play sound occasionally
                i++;
            } else {
                clearInterval(typeInterval);
                // Auto advance step if not the last one (question)
                if (dialogueStep < t.greetings.length - 1) {
                     setTimeout(() => {
                         setDialogueStep(prev => prev + 1);
                         if(!isMuted) SoundEngine.playBlip();
                     }, 1500);
                }
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [isOpen, dialogueStep, language]);

    const handleOpen = () => {
        SoundEngine.init();
        if(!isMuted) SoundEngine.playGlitch();
        setIsOpen(true);
        setHasInteracted(true);
        setShowPopup(false); // Hide the teaser
    };

    const handleClose = () => {
         setIsOpen(false);
         setDialogueStep(0); // Reset
    };

    const handleChoice = (choice: 'yes' | 'no') => {
        if (!isMuted) SoundEngine.playBlip();
        if (choice === 'yes') {
            setTypedText(t.responseYes);
            setTimeout(() => {
                navigate('/contact');
                handleClose();
            }, 2000);
        } else {
            setTypedText(t.responseNo);
            setTimeout(() => handleClose(), 3000);
        }
    };

    if (!showPopup && !isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            
            {/* 1. THE POPUP TEASER (Before Opening) */}
            {showPopup && !isOpen && (
                <div className="pointer-events-auto flex flex-col items-end gap-2 animate-in slide-in-from-right duration-500">
                    <div className="bg-dark-900/90 border border-brand-500/50 text-brand-400 text-xs font-mono p-2 rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)] mb-2 backdrop-blur-md relative overflow-hidden group cursor-pointer" onClick={handleOpen}>
                        <div className="absolute inset-0 bg-brand-500/10 animate-pulse"></div>
                        <div className="relative z-10 flex items-center gap-2">
                            <Zap size={12} className="animate-bounce" />
                            {t.cta}
                        </div>
                    </div>
                    
                    {/* The Orb Trigger */}
                    <div 
                        onClick={handleOpen}
                        className="w-16 h-16 relative cursor-pointer group"
                        onMouseEnter={() => !isMuted && SoundEngine.playBlip()}
                    >
                        <div className="absolute inset-0 bg-brand-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-cyan-400 rounded-full flex items-center justify-center border-2 border-white/20 shadow-2xl relative overflow-hidden">
                             {/* Inner Eye Animation */}
                             <div className="w-8 h-8 bg-dark-950 rounded-full flex items-center justify-center relative">
                                 <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)] animate-ping absolute"></div>
                                 <div className="w-2 h-2 bg-white rounded-full relative z-10"></div>
                             </div>
                             {/* Scan lines */}
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* 2. THE CHAT INTERFACE (Expanded) */}
            {isOpen && (
                <div className="pointer-events-auto w-[320px] md:w-[380px] bg-dark-950/95 backdrop-blur-xl border border-brand-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300 origin-bottom-right">
                    
                    {/* Header */}
                    <div className="h-12 bg-dark-900 border-b border-white/10 flex items-center justify-between px-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-display font-bold text-white tracking-widest text-sm">CERRA.OS</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <button onClick={() => setIsMuted(!isMuted)} className="text-slate-500 hover:text-white transition-colors">
                                 {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                             </button>
                             <button onClick={handleClose} className="text-slate-500 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 min-h-[200px] flex flex-col font-mono text-sm relative">
                        {/* Scan Line Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10 opacity-20"></div>
                        
                        <div className="text-brand-400 text-xs mb-4 opacity-70">
                            {t.intro}
                        </div>

                        <div className="flex-grow space-y-2">
                            <div className="text-white typing-cursor leading-relaxed">
                                <span className="mr-2 text-cyan-400">root@cerra:~$</span>
                                {typedText}
                            </div>
                        </div>

                        {/* Options (Only show on last step) */}
                        {dialogueStep === t.greetings.length - 1 && (
                            <div className="mt-6 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <button 
                                    onClick={() => handleChoice('yes')}
                                    className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white rounded font-bold uppercase text-xs tracking-wider shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    <Zap size={14} /> {t.btnYes}
                                </button>
                                <button 
                                    onClick={() => handleChoice('no')}
                                    className="w-full py-2 bg-transparent hover:bg-white/5 text-slate-500 hover:text-white rounded font-medium text-xs transition-colors border border-transparent hover:border-white/10"
                                >
                                    {t.btnNo}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Decorative Footer */}
                    <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-cyan-500 to-brand-600 animate-[shimmer_2s_infinite]"></div>
                </div>
            )}
            
            <style>{`
                .typing-cursor::after {
                    content: '▋';
                    animation: blink 1s step-start infinite;
                    color: #22d3ee;
                    margin-left: 2px;
                }
                @keyframes blink { 50% { opacity: 0; } }
            `}</style>
        </div>
    );
};
