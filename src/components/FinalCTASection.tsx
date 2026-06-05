import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const pseudoRandom = (seed: number) => {
  const value = (seed * 9301 + 49297) % 233280;
  return value / 233280;
};

// Generate a fully connected mesh of nodes for the background
const meshNodes = Array.from({ length: 12 }, (_, i) => ({
  x: 10 + (i % 4) * 28 + pseudoRandom(i + 1) * 10,
  y: 15 + Math.floor(i / 4) * 30 + pseudoRandom(i + 13) * 10,
}));

const models = [
  {
    title: "Opportunity Audit",
    desc: "Identify where a deployed AI team can create leverage in 2-4 weeks.",
  },
  {
    title: "Agency Deployment",
    desc: "Embed engineers and operators to build production-ready agent workflows.",
  },
  {
    title: "Operating Partnership",
    desc: "Ongoing monitoring, evaluation, and optimization against business KPIs.",
  },
  {
    title: "Embedded Team",
    desc: "Dedicated forward deployed talent working inside your organization.",
  },
];

const FinalCTASection = () => (
  <section className="relative py-32 overflow-hidden">
    {/* Woven mesh background */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="none">
      {meshNodes.map((node, i) =>
        meshNodes.slice(i + 1).map((other, j) => {
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist > 40) return null;
          return (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={other.x}
              y2={other.y}
              stroke="hsl(160 63% 50%)"
              strokeWidth="0.2"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 3 + pseudoRandom(i * 17 + j) * 2,
                repeat: Infinity,
                delay: pseudoRandom(i * 31 + j) * 2,
              }}
            />
          );
        })
      )}
    </svg>

    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <AnimatedSection className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">
          Engagement
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Bring us a business bottleneck.{" "}
          <span className="text-primary text-glow-teal">We&apos;ll deploy the team to unlock it.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mx-auto max-w-3xl text-center text-lg text-muted-foreground mb-12">
          From AI ambition to operated capability inside your organization.
        </p>
      </AnimatedSection>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((model, i) => (
          <AnimatedSection key={model.title} delay={0.08 + i * 0.08}>
            <motion.div
              className="h-full rounded-sm border border-border bg-card/50 p-6 backdrop-blur-sm"
              whileHover={{
                borderColor: "hsl(160 63% 50% / 0.35)",
                y: -3,
              }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-4 h-2 w-2 rounded-full bg-primary/50" />
              <h3 className="font-heading text-lg font-semibold mb-3">
                {model.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {model.desc}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.2}>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-sm font-heading tracking-wider uppercase text-sm px-10"
            asChild
          >
            <Link href="/contact">Deploy the Agency</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-sm font-heading tracking-wider uppercase text-sm px-10 border-accent/40 text-accent hover:bg-accent/10"
            asChild
          >
            <Link href="/offerings">Start the Audit</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTASection;
