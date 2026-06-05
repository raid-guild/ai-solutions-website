import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const phases = [
  {
    title: "Identify",
    copy: "Map the digital demons, size the opportunity, and choose the highest-leverage front.",
  },
  {
    title: "Deploy",
    copy: "Embed mercenary builders to wire agents, interfaces, memory, and integrations into real workflows.",
  },
  {
    title: "Operate",
    copy: "Measure performance, tune the system, and keep improving the capability as the business shifts.",
  },
];

const stack = [
  "Operators",
  "Agents",
  "Context",
  "Integrations",
  "Evals",
  "Comms",
];

const transformations = [
  {
    title: "Lead Intelligence",
    before: "Manual qualification and weak signals.",
    after: "Agents enrich, score, and route high-signal opportunities.",
  },
  {
    title: "Internal Knowledge",
    before: "Fragmented docs and tribal answers.",
    after: "Context-aware agents answer, act, and update knowledge loops.",
  },
  {
    title: "Client Onboarding",
    before: "Repeated inputs and manual handoffs.",
    after: "Agent-assisted flows coordinate the work across systems.",
  },
];

const OperatingModelSection = () => (
  <section id="model" className="relative scroll-mt-20 py-32 overflow-hidden">
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.04]"
      viewBox="0 0 800 420"
      aria-hidden="true"
    >
      <motion.line
        x1="80"
        y1="70"
        x2="720"
        y2="350"
        stroke="hsl(160 63% 50%)"
        strokeWidth="1"
        strokeDasharray="8 14"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.line
        x1="130"
        y1="340"
        x2="690"
        y2="90"
        stroke="hsl(347 100% 61%)"
        strokeWidth="1"
        strokeDasharray="6 16"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.35 }}
      />
    </svg>

    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <AnimatedSection>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Operating Model
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Software was the deliverable.{" "}
            <span className="text-primary text-glow-teal">
              Now deployed capability is.
            </span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            AI does not create impact by sitting in a tool stack. It needs a
            team close enough to understand the work, connect the systems, and
            keep improving the workflow in production.
          </p>
          <p className="font-heading text-xl font-semibold leading-relaxed">
            There is a gap between AI capability and business acceleration.{" "}
            <span className="text-accent text-glow-violet">
              We deploy into that gap.
            </span>
          </p>
        </AnimatedSection>

        <div className="space-y-5">
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.title} delay={i * 0.08}>
              <motion.div
                className="rounded-sm border border-border bg-card/50 p-6 backdrop-blur-sm"
                whileHover={{
                  x: 4,
                  borderColor: "hsl(160 63% 50% / 0.35)",
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-primary/30 bg-primary/10 font-mono text-xs text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl font-semibold">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {phase.copy}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <AnimatedSection delay={0.2}>
          <div className="rounded-sm border border-border bg-card/35 p-7">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Deployment Stack
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {stack.map((layer, i) => (
                <motion.div
                  key={layer}
                  className="rounded-sm border border-border bg-background/50 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  {layer}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="rounded-sm border border-border bg-card/35 p-7">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              What This Unlocks
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {transformations.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground/55">
                    {item.before}
                  </p>
                  <p className="border-l border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground">
                    {item.after}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default OperatingModelSection;
