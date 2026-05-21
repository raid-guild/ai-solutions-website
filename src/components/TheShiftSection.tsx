import AnimatedSection from "./AnimatedSection";

const TheShiftSection = () => (
  <section className="relative py-32 overflow-hidden">
    {/* Faint broken threads background */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 400">
      <line x1="100" y1="50" x2="300" y2="150" stroke="hsl(160 63% 50%)" strokeWidth="1" strokeDasharray="8 12" />
      <line x1="500" y1="80" x2="700" y2="200" stroke="hsl(263 76% 66%)" strokeWidth="1" strokeDasharray="8 12" />
      <line x1="200" y1="300" x2="400" y2="350" stroke="hsl(160 63% 50%)" strokeWidth="1" strokeDasharray="4 16" />
      <line x1="600" y1="280" x2="750" y2="100" stroke="hsl(263 76% 66%)" strokeWidth="1" strokeDasharray="6 14" />
    </svg>

    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Software was the deliverable.{" "}
          <span className="text-primary text-glow-teal">Now deployed capability is.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          AI does not create business impact by sitting in a tool stack. It needs a team close enough to understand the work, redesign the flow, connect the systems, and keep improving it in production.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="text-sm text-muted-foreground mb-6 font-mono uppercase tracking-wider">Most teams:</p>
        <div className="space-y-4 mb-10">
          {[
            "Know AI matters, but not where to deploy it first",
            "Need speed across fragmented systems and teams",
            "Lack the dedicated capacity to operate new workflows reliably",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0" />
              <span className="text-muted-foreground/70">{point}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="text-xl font-heading font-semibold leading-relaxed">
          There is a gap between AI capability and real business acceleration.{" "}
          <span className="text-accent text-glow-violet">We deploy into that gap.</span>
        </p>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default TheShiftSection;
