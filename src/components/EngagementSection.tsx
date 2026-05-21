import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const models = [
  { title: "Opportunity Audit", desc: "Identify where a deployed AI team can create leverage in 2-4 weeks." },
  { title: "Agency Deployment", desc: "Embed engineers and operators to build production-ready agent workflows." },
  { title: "Operating Partnership", desc: "Ongoing monitoring, evaluation, and optimization against business KPIs." },
  { title: "Embedded Team", desc: "Dedicated forward deployed talent working inside your organization." },
];

const EngagementSection = () => (
  <section className="relative py-32">
    <div className="max-w-5xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">Engagement</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How to Begin</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-4">
        {models.map((model, i) => (
          <AnimatedSection key={model.title} delay={i * 0.1}>
            <motion.div
              className="p-8 rounded-sm border border-border bg-card/50 backdrop-blur-sm h-full group"
              whileHover={{ borderColor: "hsl(160 63% 50% / 0.3)", y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary/40 mb-4 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(160_63%_50%/0.3)] transition-all" />
              <h3 className="font-heading text-xl font-semibold mb-3">{model.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="text-center mt-12">
        <Button size="lg" variant="outline" className="rounded-sm font-heading tracking-wider uppercase text-sm border-primary/30 text-primary hover:bg-primary/10">
          Start with an Opportunity Audit
        </Button>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default EngagementSection;
