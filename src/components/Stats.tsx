import { STATS } from '@/data/content';
import { useCounter } from '@/hooks/useScrollAnimation';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCounter(value);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center animate-on-scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
        {count}
        <span className="text-brand-orange">{suffix}</span>
      </div>
      <div className="text-white/70 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-blue/10 circuit-ring-anim" />

      <div className="container-wide relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
