import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const examples = [
  {
    title: "Lead Intelligence",
    before: "Manual qualification. Limited signals. Missed opportunities.",
    after: "Agents process and enrich 100x more leads—delivering high-signal prospects to your team.",
  },
  {
    title: "Contract Intake",
    before: "Slow reviews. Fragmented documents. Bottlenecks.",
    after: "Automated intake, parsing, and routing—contracts move instantly with human checkpoints.",
  },
  {
    title: "Client Onboarding",
    before: "Manual steps. Repeated inputs. Delays.",
    after: "Seamless onboarding flows with agents coordinating across systems.",
  },
  {
    title: "Internal Knowledge",
    before: "Search-based. Fragmented. Tribal.",
    after: "Agents that answer, act, and update knowledge continuously.",
  },
];

const BeforeAfterSection = () => (
  <section className="relative py-32">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">Transformations</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">What This Looks Like</h2>
      </AnimatedSection>

      <div className="space-y-8">
        {examples.map((ex, i) => (
          <AnimatedSection key={ex.title} delay={i * 0.1}>
            <div className="grid md:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border">
              {/* Before */}
              <div className="p-8 bg-card/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">Before</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-muted-foreground/60 mb-3">{ex.title}</h3>
                <p className="text-sm text-muted-foreground/50 leading-relaxed">{ex.before}</p>
              </div>

              {/* After */}
              <motion.div
                className="p-8 bg-card/80 border-l border-border relative"
                whileHover={{ backgroundColor: "hsl(160 63% 50% / 0.05)" }}
              >
                <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">After</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3">{ex.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ex.after}</p>
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default BeforeAfterSection;
