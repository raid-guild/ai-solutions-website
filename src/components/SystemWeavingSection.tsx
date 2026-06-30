import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Map",
    copy: "We trace how work, data, decisions, and handoffs actually move through the business.",
    points: ["System inventory", "Workflow mapping", "Context gaps"],
  },
  {
    title: "Layer",
    copy: "We build the operating layer agents need: shared context, scoped access, and usable interfaces.",
    points: ["Business data model", "Permissioning", "Knowledge layer"],
  },
  {
    title: "Enable",
    copy: "We help employees use the foundation to build practical workflows, reclaim time, and keep compounding the gains.",
    points: ["Agent workflows", "Team training", "Builder habits"],
  },
];

const SystemWeavingSection = () => (
  <section className="relative py-32">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">What We Build</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Your AI Operating Layer</h2>
        <p className="text-muted-foreground text-lg">
          The shared context, access, workflows, and training that help employees become agent-enabled operators.
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Connecting thread line */}
        <div className="hidden lg:block absolute top-1/2 left-[16.67%] right-[16.67%] h-px">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.15}>
              <motion.div
                className="relative p-8 rounded-sm border border-border bg-card/50 backdrop-blur-sm group"
                whileHover={{ borderColor: "hsl(160 63% 50% / 0.4)", y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Node dot */}
                <div className="w-3 h-3 rounded-full bg-primary/60 mb-6 group-hover:bg-primary transition-colors group-hover:shadow-[0_0_12px_hsl(160_63%_50%/0.4)]" />
                <h3 className="font-heading text-2xl font-semibold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pillar.copy}</p>
                <div className="space-y-2">
                  {pillar.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      <span className="font-mono text-xs text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default SystemWeavingSection;
