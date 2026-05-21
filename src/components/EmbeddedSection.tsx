import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const phases = ["Embed", "Map", "Build", "Operate", "Optimize"];

const EmbeddedSection = () => (
  <section className="relative py-32">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left copy */}
      <div>
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">How We Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-6">
            We don't hand you software.{" "}
            <span className="text-primary text-glow-teal">We deploy a team.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We place a small, senior agency team inside your organization to redesign workflows, build agentic systems, and unblock execution where the business feels friction. We work with operators, leaders, and technical teams so the new capability becomes part of how work gets done.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="space-y-3 mb-8">
            {["Forward-deployed engineers", "Operator-led implementation", "Tight feedback loops"].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground font-mono">{point}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="font-heading font-semibold text-lg">
            We stay until the capability <span className="text-accent text-glow-violet">runs inside the business.</span>
          </p>
        </AnimatedSection>
      </div>

      {/* Right - Timeline */}
      <AnimatedSection delay={0.2}>
        <div className="relative">
          {/* Horizontal thread */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-px bg-primary/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ originX: 0 }}
          />

          <div className="flex justify-between relative">
            {phases.map((phase, i) => (
              <motion.div
                key={phase}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="w-8 h-8 rounded-sm border border-primary/40 bg-card flex items-center justify-center relative z-10 hover:border-primary hover:glow-teal transition-all">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{phase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default EmbeddedSection;
