import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/* ------------------------------------------------------------
   Cerrana — Animated Hero (particle field + live tickers)
   Drop-in replacement for the HERO SECTION in pages/Home.tsx.
   Tailwind classes follow the repo config (brand-*, dark-*, font-display).
   Scoped keyframes are injected inline so no tailwind.config change is needed.
   ------------------------------------------------------------ */

const TICKS: [string, string][] = [
  ['🟢', 'New lead · Miami, FL — replied in 12s'],
  ['📅', 'Demo booked · Houston, TX'],
  ['💬', 'Qualified · "necesito cotización hoy"'],
  ['🟢', 'New lead · Los Angeles, CA — replied in 8s'],
  ['✅', 'Appointment confirmed via SMS'],
  ['💬', 'Qualified · roofing — high intent'],
  ['📅', 'Demo booked · Orlando, FL'],
  ['🟢', 'New lead · Dallas, TX — replied in 15s'],
];

const FEED: { side: 'in' | 'ai'; text: string }[] = [
  { side: 'in', text: '¡Hola! Vi su anuncio de remodelación 👀' },
  { side: 'ai', text: '¡Con gusto! ¿Es residencial o comercial?' },
  { side: 'in', text: 'Residencial, una casa.' },
  { side: 'ai', text: 'Perfecto. Tengo espacio el jueves a las 2pm para una cotización gratis. ¿Te sirve?' },
  { side: 'in', text: '¡Sí, agéndame! ✅' },
  { side: 'ai', text: 'Listo, confirmado por SMS. ¡Nos vemos! 🎉' },
  { side: 'in', text: 'Hi, do you do commercial too?' },
  { side: 'ai', text: 'We do! Want me to book a 20-min call?' },
];

const INTEGRATIONS = ['WhatsApp', 'Instagram', 'Messenger', 'HubSpot', 'GoHighLevel', 'Calendly', 'Stripe'];
const SLOGANS = ['RESPONDE EN SEGUNDOS', 'CALIFICA AUTOMÁTICO', 'AGENDA SOLO', 'BILINGÜE 24/7'];

const ParticleCanvas: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, raf = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = canvas.width = Math.max(800, r.width);
      H = canvas.height = Math.max(600, r.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const N = 75;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.8,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(124,58,237,${0.16 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = 'rgba(167,139,250,0.8)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
};

export const HeroAnimated: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[760px] bg-dark-950 overflow-hidden">
      {/* Scoped keyframes */}
      <style>{`
        @keyframes cerrana-mqL { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes cerrana-mqR { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        @keyframes cerrana-vscroll { from{transform:translateY(0)} to{transform:translateY(-50%)} }
        @keyframes cerrana-blink { 0%,100%{opacity:1} 50%{opacity:.25} }
      `}</style>

      <ParticleCanvas />
      <div className="absolute w-[700px] h-[480px] left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(124,58,237,0.24),transparent_70%)] blur-[50px] pointer-events-none" />
      <div className="absolute w-[560px] h-[560px] left-1/2 -top-[200px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(124,58,237,0.32),transparent_65%)] blur-[80px] pointer-events-none" />

      {/* Top live-activity ticker */}
      <div className="relative z-10 border-b border-white/5 bg-dark-900/50 backdrop-blur-sm overflow-hidden py-2.5">
        <div className="flex gap-7 w-max" style={{ animation: 'cerrana-mqL 32s linear infinite' }}>
          {[0, 1].map((dup) => (
            <span key={dup} className="flex gap-7">
              {TICKS.map(([icon, txt], i) => (
                <span key={i} className="flex items-center gap-2 text-[13px] text-slate-400 whitespace-nowrap">
                  <span className="text-[11px]">{icon}</span><span>{txt}</span>
                  <span className="text-[#3b3554] ml-3.5">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-[5] px-16 pt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center max-w-[1180px] mx-auto">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-300 text-xs font-bold border border-brand-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_#7c3aed]" style={{ animation: 'cerrana-blink 1.6s infinite' }} />
            CERRANA OS · ONLINE
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-[56px] leading-[1.07] text-white mb-6 drop-shadow-[0_0_30px_rgba(124,58,237,0.35)]">
            Turn Every Ad Click<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">Into a Booked Call</span>
          </h1>
          <p className="text-lg text-slate-400 font-light leading-relaxed max-w-[480px] mb-8">
            The autonomous sales system that captures, qualifies, and closes leads from your paid campaigns — instantly, 24/7, in Spanish &amp; English.
          </p>
          <div className="flex gap-3.5">
            <button onClick={() => navigate('/contact')} className="font-display font-semibold uppercase tracking-wide text-sm px-7 py-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_30px_rgba(124,58,237,0.55)] transition-all hover:scale-105">
              Book a Demo
            </button>
            <button onClick={() => navigate('/pricing')} className="font-semibold text-sm px-7 py-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all">
              See Pricing
            </button>
          </div>
        </div>

        {/* Vertical auto-scrolling live conversation feed */}
        <div className="relative h-[380px] rounded-2xl border border-white/10 bg-dark-900/70 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 z-[3] flex items-center gap-2.5 px-4 py-3 border-b border-white/5 bg-dark-900/90">
            <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: 'cerrana-blink 1.6s infinite' }} />
            <span className="font-display text-[11px] font-bold tracking-[1.5px] text-white">LIVE · INCOMING LEADS</span>
          </div>
          <div
            className="absolute top-[46px] bottom-0 inset-x-0 overflow-hidden"
            style={{ WebkitMaskImage: 'linear-gradient(transparent,#000 14%,#000 86%,transparent)', maskImage: 'linear-gradient(transparent,#000 14%,#000 86%,transparent)' }}
          >
            <div className="flex flex-col gap-2.5 p-4" style={{ animation: 'cerrana-vscroll 22s linear infinite' }}>
              {[0, 1].map((dup) =>
                FEED.map((m, i) => (
                  <div key={`${dup}-${i}`} className={`flex ${m.side === 'ai' ? 'justify-start' : 'justify-end'}`}>
                    <span
                      className={`max-w-[82%] px-3 py-2.5 text-[13px] leading-snug border ${
                        m.side === 'ai'
                          ? 'rounded-[13px_13px_13px_3px] bg-white/[0.08] text-slate-200 border-white/5'
                          : 'rounded-[13px_13px_3px_13px] bg-brand-600/85 text-white border-brand-500/40'
                      }`}
                    >
                      {m.text}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dual marquee band */}
      <div className="relative z-[5] mt-10">
        <div className="overflow-hidden py-3.5 border-y border-white/5">
          <div className="flex gap-[46px] w-max" style={{ animation: 'cerrana-mqL 26s linear infinite' }}>
            {[0, 1].map((dup) =>
              INTEGRATIONS.map((name, i) => (
                <span key={`${dup}-${i}`} className="font-display text-slate-500 text-lg font-semibold">{name}</span>
              ))
            )}
          </div>
        </div>
        <div className="overflow-hidden py-3.5 border-b border-white/5">
          <div className="flex gap-10 w-max" style={{ animation: 'cerrana-mqR 30s linear infinite' }}>
            {[0, 1].map((dup) =>
              SLOGANS.map((s, i) => (
                <React.Fragment key={`${dup}-${i}`}>
                  <span className="font-display text-[#3b3554] text-[15px] font-semibold tracking-wide">{s}</span>
                  <span className="text-brand-500">◆</span>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;
