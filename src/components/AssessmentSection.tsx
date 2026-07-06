import {
  AlertTriangle,
  BarChart3,
  Building2,
  CheckCircle2,
  Gauge,
  Goal,
  Layers3,
  Repeat2,
  Workflow,
  Zap,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const assessmentOutcomes = [
  {
    title: "AI & Operational Readiness Score",
    icon: Gauge,
  },
  {
    title: "Top 3 operational bottlenecks",
    icon: Workflow,
  },
  {
    title: "Top 3 AI opportunities",
    icon: Goal,
  },
  {
    title: "Biggest risk to successful AI adoption",
    icon: AlertTriangle,
  },
  {
    title: "Recommended next engagement, if any",
    icon: CheckCircle2,
  },
];

const idealOrganizations = [
  {
    title: "Growing teams",
    detail: "20-500 employees",
    icon: Building2,
  },
  {
    title: "Multiple SaaS systems",
    detail: "Work spread across tools",
    icon: Layers3,
  },
  {
    title: "Manual reporting",
    detail: "Repetitive operational work",
    icon: BarChart3,
  },
  {
    title: "AI experiments",
    detail: "Activity without meaningful leverage",
    icon: Zap,
  },
  {
    title: "Leadership alignment",
    detail: "Measurable operational leverage",
    icon: Repeat2,
  },
];

const AssessmentSection = () => (
  <section className="relative overflow-hidden py-24">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <AnimatedSection className="mx-auto mb-14 max-w-4xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Free 30-Minute Assessment
        </p>
        <h2 className="mb-6 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Most organizations don&apos;t need more AI. They need a stronger{" "}
          <span className="text-primary text-glow-teal">
            operational foundation.
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We help you identify the systems, workflows, and governance that make
          AI actually useful before you invest in another tool or disconnected
          pilot.
        </p>
      </AnimatedSection>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <AnimatedSection>
          <div className="h-full border border-primary/35 bg-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                What You&apos;ll Leave With
              </p>
              <h3 className="font-heading text-2xl font-semibold">
                Clear next steps, not a sales pitch.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {assessmentOutcomes.map((outcome) => {
                const Icon = outcome.icon;

                return (
                  <div
                    key={outcome.title}
                    className="flex min-h-24 gap-4 border border-border bg-background/50 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/25 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                      {outcome.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="h-full border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Who This Is For
              </p>
              <h3 className="font-heading text-2xl font-semibold">
                Teams ready to turn AI interest into operational leverage.
              </h3>
            </div>

            <div className="space-y-3">
              {idealOrganizations.map((organization) => {
                const Icon = organization.icon;

                return (
                  <div
                    key={organization.title}
                    className="flex items-start gap-4 border-b border-border/70 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-accent/30 bg-accent/10">
                      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold">
                        {organization.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {organization.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default AssessmentSection;
