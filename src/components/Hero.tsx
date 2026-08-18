import { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Sparkles, Cloud, ShieldCheck, Cpu, Smartphone, Network, BrainCircuit, type LucideIcon } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(60, Math.floor((w * h) / 18000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(26,110,200,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      // nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.fillStyle = 'rgba(26,110,200,0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-blueDark/90" />
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-bg opacity-40" />
      {/* Particle canvas */}
      <canvas ref={canvasRef} id="hero-canvas" className="w-full h-full" />
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container-wide relative z-10 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-white">
          

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Construisons ensemble votre <span className="orange-gradient-text">avenir numérique</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Broadway Technologies accompagne PME, grandes entreprises et institutions publiques dans leur transformation digitale, du cloud à l'intelligence artificielle.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="services" className="btn-orange">
              Découvrir nos services <ArrowRight size={18} />
            </a>
            <a href="contact" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white hover:text-brand-dark transition-all duration-300 hover:-translate-y-0.5">
              Nous contacter <Mail size={18} />
            </a>
          </div>

          {/* Mini stats */}
          
        </div>

        {/* Right illustration */}
        <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-[520px]">
      {/* Central circuit ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-brand-blue/30 circuit-ring-anim" />
          {/* Middle ring */}
          <div className="absolute inset-8 rounded-full border border-brand-orange/30 circuit-ring-anim" style={{ animationDelay: '1s' }} />
          {/* Inner ring */}
          <div className="absolute inset-16 rounded-full border border-brand-blue/40 circuit-ring-anim" style={{ animationDelay: '2s' }} />
          {/* Core */}
          {/* Orbiting nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const radius = 160;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const icons = ['Cloud', 'ShieldCheck', 'Cpu', 'Smartphone', 'Network', 'BrainCircuit'];
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg animate-float"
                style={{ transform: `translate(${x}px, ${y}px)`, animationDelay: `${i * 0.5}s` }}
              >
                <ServiceGlyph name={icons[i]} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ServiceGlyph({ name }: { name: string }) {
  const glyphs: Record<string, LucideIcon> = {
    Cloud, ShieldCheck, Cpu, Smartphone, Network, BrainCircuit,
  };
  const Icon = glyphs[name] ?? Cpu;
  return <Icon size={24} className="text-brand-orange" />;
}
