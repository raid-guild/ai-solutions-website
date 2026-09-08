import { CheckCircle2, ClipboardList, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const signals = [
  {
    title: "Start with work everyone recognizes",
    copy: "Email, follow-up, research, scheduling, reports, updates, and the little computer tasks that quietly eat the week.",
    icon: Sparkles,
  },
  {
    title: "Learn by doing, not by watching demos",
    copy: "Your team practices on real work, sees what AI is good at, and learns where human judgment still belongs.",
    icon: ClipboardList,
  },
  {
    title: "Build agency inside the business",
    copy: "The goal is not dependency on consultants. It is a team that can spot opportunities, improve workflows, and use AI with confidence.",
    icon: ShieldCheck,
  },
];

const installs = [
  "A plain-language AI readiness map",
  "A shortlist of useful workflow opportunities",
  "Starter prompts and reusable workflow patterns",
  "Simple rules for review and good judgment",
  "Handoff notes your team can keep using",
];

const BootstrapFitSection = () => (
  <section className="relative overflow-hidden py-24">
    <div
      className="absolute inset-0 opacity-70"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(circle at 18% 18%, hsl(var(--accent) / 0.12) 0, transparent 24%), radial-gradient(circle at 82% 42%, hsl(var(--primary) / 0.1) 0, transparent 20%), radial-gradient(circle at 55% 86%, hsl(var(--accent) / 0.08) 0, transparent 26%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-35"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, hsl(var(--accent) / 0.22) 0 1px, transparent 1.5px)",
        backgroundSize: "44px 44px",
      }}
    />
    <div
      className="absolute inset-0 opacity-20"
      aria-hidden="true"
      style={{
        background:
          "repeating-radial-gradient(circle at 18% 22%, transparent 0 76px, hsl(var(--accent) / 0.13) 77px 78px, transparent 79px 152px), repeating-radial-gradient(circle at 82% 46%, transparent 0 96px, hsl(var(--primary) / 0.1) 97px 98px, transparent 99px 192px)",
      }}
    />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-start">
      <AnimatedSection>
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
          Start Small
        </p>
        <h2 className="mb-5 max-w-3xl font-heading text-4xl font-bold leading-[0.95] md:text-5xl">
          Learn AI by using it on{" "}
          <span className="text-primary text-glow-violet">
            real work.
          </span>
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          You do not need a big AI strategy to begin. We help your team learn
          the basics, apply AI to familiar work, and leave with a few simple
          workflows they can actually own.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <motion.div
          className="border border-primary/30 bg-card/55 p-6 backdrop-blur-sm"
          whileHover={{ borderColor: "hsl(var(--accent) / 0.55)" }}
          transition={{ duration: 0.25 }}
        >
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            What You Leave With
          </p>
          <div className="space-y-3">
            {installs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      <div className="grid gap-4 lg:col-span-2 lg:grid-cols-3">
        {signals.map((signal, index) => {
          const Icon = signal.icon;

          return (
            <AnimatedSection key={signal.title} delay={index * 0.07}>
              <motion.article
                className="h-full border border-border bg-card/45 p-6 backdrop-blur-sm"
                whileHover={{
                  borderColor: "hsl(var(--accent) / 0.5)",
                  y: -3,
                }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-accent/35 bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold leading-tight">
                  {signal.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {signal.copy}
                </p>
              </motion.article>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default BootstrapFitSection;
