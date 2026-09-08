import Link from "next/link";
import { CalendarCheck, FileText, Gauge, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const bootstrapSteps = [
  {
    title: "Readiness Conversation",
    duration: "30 minutes",
    copy: "We talk through where AI is already showing up, what feels confusing, and which parts of the business are good places to start.",
    outputs: ["Simple next step", "Workflow shortlist", "Fit check"],
    icon: Gauge,
  },
  {
    title: "Working Session",
    duration: "Half-day",
    copy: "We sit with your team, pick real work, show practical AI patterns, and set up the first workflows together.",
    outputs: ["Tool setup", "Starter prompts", "Review habits"],
    icon: Wrench,
  },
  {
    title: "Practice Loop",
    duration: "4 weekly check-ins",
    copy: "Your team uses AI in real work, brings back what happened, and improves the workflows with support from RaidGuild builders.",
    outputs: ["Weekly improvements", "Team confidence", "Next workflow picks"],
    icon: CalendarCheck,
  },
  {
    title: "Handoff Guide",
    duration: "End of month",
    copy: "You get plain-language notes on what your team learned, what is working, and how to keep building from there.",
    outputs: ["Handoff notes", "Usage tips", "Next-step roadmap"],
    icon: FileText,
  },
];

type AIBootstrapSectionProps = {
  compact?: boolean;
};

const AIBootstrapSection = ({ compact = false }: AIBootstrapSectionProps) => (
  <section className={`relative overflow-hidden ${compact ? "py-24" : "py-32"}`}>
    <div
      className="absolute inset-0 opacity-65"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(circle at 78% 12%, hsl(var(--accent) / 0.12) 0, transparent 24%), radial-gradient(circle at 24% 52%, hsl(var(--primary) / 0.11) 0, transparent 18%), radial-gradient(circle at 72% 92%, hsl(var(--accent) / 0.08) 0, transparent 28%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-25"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(var(--primary) / 0.22) 0 1px, transparent 1.5px)",
        backgroundSize: "52px 52px",
      }}
    />
    <div
      className="absolute inset-0 opacity-20"
      aria-hidden="true"
      style={{
        background:
          "repeating-radial-gradient(circle at 76% 16%, transparent 0 76px, hsl(var(--accent) / 0.13) 77px 78px, transparent 79px 152px), repeating-radial-gradient(circle at 24% 58%, transparent 0 96px, hsl(var(--primary) / 0.1) 97px 98px, transparent 99px 192px)",
      }}
    />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <AnimatedSection className="mb-12 max-w-3xl">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
          The Bootstrap
        </p>
        <h2 className="mb-5 font-heading text-4xl font-bold leading-[0.95] md:text-5xl">
          A simple 30-day path to build{" "}
          <span className="text-primary text-glow-violet">
            real AI confidence.
          </span>
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Learn the basics, apply them to real work, and leave with useful
          workflows your team can understand, use, and improve.
        </p>
      </AnimatedSection>

      <div className="grid gap-4 lg:grid-cols-4">
        {bootstrapSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <AnimatedSection key={step.title} delay={index * 0.07}>
              <motion.article
                className="flex h-full flex-col border border-border bg-card/55 p-6 backdrop-blur-sm"
                whileHover={{
                  borderColor: "hsl(var(--accent) / 0.55)",
                  y: -3,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-accent/35 bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold leading-tight">
                  {step.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
                <div className="mt-auto space-y-2">
                  {step.outputs.map((output) => (
                    <div
                      key={output}
                      className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {output}
                    </div>
                  ))}
                </div>
              </motion.article>
            </AnimatedSection>
          );
        })}
      </div>

      {!compact ? (
        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-col gap-5 border border-primary/30 bg-card/45 p-6 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="mb-2 font-heading text-2xl font-bold">
                Need a deeper foundation?
              </h3>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Once the first workflows are useful, we can help your team add
                better context, connect more tools, and keep improving how AI
                shows up across the business.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Talk to a Builder</Link>
            </Button>
          </div>
        </AnimatedSection>
      ) : null}
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default AIBootstrapSection;
