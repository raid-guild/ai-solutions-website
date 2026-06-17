import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "Map the workflow",
    copy: "Pick the work that keeps stealing time and trace the people, tools, data, and handoffs behind it.",
  },
  {
    title: "Find the stuck points",
    copy: "Separate real automation opportunities from places that still need human judgment.",
  },
  {
    title: "Design the first system",
    copy: "Define the agent, automation, knowledge base, or operating loop worth shipping first.",
  },
  {
    title: "Ship a working path",
    copy: "Build the useful version: connected to your stack, documented, and ready for review.",
  },
  {
    title: "Operate and improve",
    copy: "Add checkpoints, evaluations, ownership, and support so the system keeps earning trust.",
  },
];

const AuditProcessSection = () => (
  <section id="audit-process" className="relative scroll-mt-20 py-28">
    <div className="absolute right-0 top-12 h-px w-1/3 bg-gradient-to-l from-primary/50 to-transparent" />
    <div className="mx-auto max-w-7xl px-6">
      <AnimatedSection className="mb-14 max-w-3xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          How the audit works
        </p>
        <h2 className="mb-5 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          A clear path from bottleneck to operated system.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          The AI Ops Audit is a short working engagement. We map one priority
          workflow, show where AI belongs, and leave you with the first system
          plan your team can actually use.
        </p>
      </AnimatedSection>

      <div className="grid gap-4 lg:grid-cols-5">
        {steps.map((step, index) => (
          <AnimatedSection key={step.title} delay={index * 0.06}>
            <div className="h-full rounded-sm border border-border bg-card/50 p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Step {index + 1}
                </span>
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default AuditProcessSection;
