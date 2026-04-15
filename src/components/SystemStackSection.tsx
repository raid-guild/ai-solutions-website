import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const layers = [
  { name: "Interfaces", desc: "Where humans interact with systems" },
  { name: "Agents", desc: "Decision + execution layer" },
  { name: "Context", desc: "Knowledge, memory, and data" },
  { name: "Integrations", desc: "APIs and internal systems" },
  { name: "Evaluation", desc: "Monitoring, metrics, and improvement loops" },
];

const SystemStackSection = () => (
  <section className="relative py-32">
    <div className="max-w-3xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">Architecture</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">The Fabric We Weave</h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical connecting thread */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-accent/30 to-primary/40"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ originY: 0 }}
        />

        <div className="space-y-4">
          {layers.map((layer, i) => (
            <AnimatedSection key={layer.name} delay={i * 0.1}>
              <motion.div
                className="relative p-6 rounded-sm border border-border bg-card/50 backdrop-blur-sm flex items-center justify-between group cursor-default"
                whileHover={{ borderColor: i < 2 ? "hsl(160 63% 50% / 0.4)" : "hsl(263 76% 66% / 0.3)", x: 4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulse dot */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${i < 2 ? "bg-primary" : i < 4 ? "bg-accent/60" : "bg-primary/60"}`}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                  />
                  <h3 className="font-heading font-semibold text-lg">{layer.name}</h3>
                </div>
                <span className="text-sm text-muted-foreground font-mono hidden sm:block">{layer.desc}</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default SystemStackSection;
