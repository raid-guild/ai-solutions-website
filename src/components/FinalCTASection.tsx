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

    <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Bring us a business bottleneck.{" "}
          <span className="text-primary text-glow-teal">We&apos;ll deploy the team to unlock it.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-lg text-muted-foreground mb-12">
          From AI ambition to operated capability inside your organization.
        </p>
      </AnimatedSection>

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
