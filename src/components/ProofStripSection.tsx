import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const proofPoints = [
  {
    metric: "Live guild ops",
    label: "Memory, CRM, publishing, and workflow agents used inside RaidGuild.",
  },
  {
    metric: "Shipped surfaces",
    label: "Queen Raida, Refactory, and Portal give buyers proof they can inspect.",
  },
  {
    metric: "Human checkpoints",
    label: "Agents move work forward with review paths, evaluations, and operator support.",
  },
];

const ProofStripSection = () => (
  <section className="relative border-y border-border bg-card/35 py-10">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_2fr] lg:items-center">
      <AnimatedSection>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Proof before pitch
        </p>
        <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
          Built from live RaidGuild operations, not workshop slides.
        </h2>
      </AnimatedSection>

      <div className="grid gap-4 md:grid-cols-3">
        {proofPoints.map((point, index) => (
          <AnimatedSection key={point.metric} delay={index * 0.06}>
            <div className="h-full rounded-sm border border-border bg-background/55 p-5">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
                <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold">
                {point.metric}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.label}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProofStripSection;
