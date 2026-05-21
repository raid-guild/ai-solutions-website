import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Identify",
    copy: "We find the operational fronts where a deployed AI team can create immediate leverage.",
    points: ["Process mapping", "Opportunity sizing", "Deployment plan"],
  },
  {
    title: "Deploy",
    copy: "We embed engineers and operators with your team to ship production workflows inside your business.",
    points: ["System integration", "Agent buildout", "Human + agent interfaces"],
  },
  {
    title: "Operate",
    copy: "We stay close to the work, measuring performance and improving the system as the business changes.",
    points: ["Monitoring + evals", "KPI tracking", "Iteration loops"],
  },
];

const SystemWeavingSection = () => (
  <section className="relative py-32">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection className="text-center mb-20">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Forward Deployed Agency</h2>
        <p className="text-muted-foreground text-lg">
          Strategic audit. Embedded build team. Operated outcomes.
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
