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
          Giving everyone AI tools is easy.{" "}
          <span className="text-primary text-glow-teal">Making the company AI-ready is the hard part.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Most teams start with individual experiments: prompts, copied data, private workflows, and quick automations that help one person at a time. That is useful, but it does not become organizational leverage until the business has shared context, clear access rules, and workflows designed for humans and agents together.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="text-sm text-muted-foreground mb-6 font-mono uppercase tracking-wider">Most teams:</p>
        <div className="space-y-4 mb-10">
          {[
            "Have people testing AI, but no shared operating model",
            "Keep business context scattered across tools, docs, inboxes, and spreadsheets",
            "Need safe ways for agents to read, reason, act, and hand work back to people",
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
          The companies that win are not just AI users.{" "}
          <span className="text-accent text-glow-violet">They become agent-ready organizations.</span>
        </p>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default TheShiftSection;
