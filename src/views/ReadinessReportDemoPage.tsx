"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Database,
  FileText,
  Gauge,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  XCircle,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ReadinessLevel = {
  score: number;
  title: string;
  bullets: string[];
};

type CategoryScore = {
  name: string;
  score: number;
  measure: string;
  icon: typeof Target;
};

const overallScore = 2.8;
const overallLevel = "Emerging";

const categoryScores: CategoryScore[] = [
  {
    name: "Strategy",
    score: 3.5,
    measure: "Is there a clear business objective for AI, or is it driven by hype?",
    icon: Target,
  },
  {
    name: "Process Maturity",
    score: 2.4,
    measure: "Are workflows documented, repeatable, and owned?",
    icon: Workflow,
  },
  {
    name: "Data Foundation",
    score: 2.2,
    measure: "Is business data accessible, trustworthy, and connected across systems?",
    icon: Database,
  },
  {
    name: "Knowledge Management",
    score: 2,
    measure: "Can employees and AI easily find the information they need?",
    icon: Brain,
  },
  {
    name: "Systems Integration",
    score: 2.6,
    measure: "Do core business tools exchange information reliably?",
    icon: Network,
  },
  {
    name: "Automation Readiness",
    score: 3.4,
    measure: "Are repeatable processes with measurable ROI good automation candidates?",
    icon: GitBranch,
  },
  {
    name: "AI Adoption",
    score: 3.1,
    measure: "How effectively is the team already using AI tools in day-to-day work?",
    icon: Bot,
  },
  {
    name: "Governance & Security",
    score: 2.2,
    measure: "Are there policies around AI usage, permissions, access, and compliance?",
    icon: LockKeyhole,
  },
];

const readinessLevels: ReadinessLevel[] = [
  {
    score: 1,
    title: "Exploring",
    bullets: [
      "Individual and ad hoc AI experiments",
      "Mostly manual processes",
      "Scattered knowledge and fragmented data",
    ],
  },
  {
    score: 2,
    title: "Emerging",
    bullets: [
      "Some AI usage and initial automations",
      "Known bottlenecks",
      "Limited systematic improvement",
    ],
  },
  {
    score: 3,
    title: "Operational",
    bullets: [
      "Core workflows are documented",
      "Key systems are integrated",
      "Leadership has clear AI priorities",
    ],
  },
  {
    score: 4,
    title: "Scaled",
    bullets: [
      "AI is embedded in daily operations",
      "Automations deliver measurable value",
      "Shared context supports many use cases",
    ],
  },
  {
    score: 5,
    title: "Autonomous",
    bullets: [
      "Agents execute bounded workflows",
      "Operational data stays synchronized",
      "AI is governed and observable",
    ],
  },
];

const strengths = [
  "Strong executive sponsorship",
  "Modern SaaS stack",
  "High automation potential",
];

const constraints = [
  "Fragmented customer data",
  "No shared operational knowledge",
  "Limited process documentation",
];

const opportunities = [
  "Build an operational context layer.",
  "Automate customer onboarding.",
  "Deploy an internal knowledge copilot.",
];

const getReadinessLabel = (score: number) => {
  if (score < 1.75) return "Exploring";
  if (score < 3) return "Emerging";
  if (score < 3.75) return "Operational";
  if (score < 4.5) return "Scaled";
  return "Autonomous";
};

const getScoreTone = (score: number) => {
  if (score < 2.5) return "text-accent";
  if (score < 3.25) return "text-primary";
  return "text-foreground";
};

const ScoreRail = ({ score }: { score: number }) => {
  const filledSegments = Math.floor(score);
  const partialSegment = score - filledSegments;

  return (
    <div className="grid grid-cols-5 gap-1.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => {
        const segmentFill =
          index < filledSegments ? 100 : index === filledSegments ? partialSegment * 100 : 0;

        return (
          <div
            key={index}
            className="h-2 overflow-hidden border border-border bg-background/80"
          >
            <div
              className="h-full bg-primary"
              style={{ width: `${segmentFill}%` }}
            />
          </div>
        );
      })}
    </div>
  );
};

const ScoreGauge = ({ score }: { score: number }) => {
  const circumference = 2 * Math.PI * 44;
  const progress = (score / 5) * circumference;

  return (
    <div className="relative flex aspect-square w-full max-w-64 items-center justify-center">
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="44"
          stroke="hsl(var(--border))"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="44"
          stroke="hsl(var(--primary))"
          strokeDasharray={`${progress} ${circumference - progress}`}
          strokeLinecap="square"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          fill="none"
          r="31"
          stroke="hsl(var(--accent) / 0.28)"
          strokeDasharray="2 6"
          strokeWidth="1"
        />
      </svg>
      <div className="text-center">
        <p className="font-heading text-5xl font-bold leading-none text-primary text-glow-teal md:text-6xl">
          {score.toFixed(1)}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          out of 5
        </p>
      </div>
    </div>
  );
};

const ReadinessReportDemoPage = () => (
  <div className="noise-bg relative min-h-screen overflow-hidden">
    <main className="relative z-10">
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <motion.path
              animate={{ strokeDashoffset: [0, -24] }}
              d="M5 72 C21 40, 34 76, 52 41 S75 25, 96 49"
              fill="none"
              stroke="hsl(160 63% 50%)"
              strokeDasharray="2 4"
              strokeWidth="0.28"
              transition={{ duration: 9, ease: "linear", repeat: Infinity }}
            />
            <motion.path
              animate={{ strokeDashoffset: [0, 18] }}
              d="M3 86 C24 66, 43 64, 58 49 S80 21, 98 31"
              fill="none"
              stroke="hsl(347 100% 61%)"
              strokeDasharray="1 5"
              strokeWidth="0.22"
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-10 flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-8 w-8"
                  height={32}
                  src="/images/Logomark.svg"
                  width={32}
                />
                <span className="font-heading text-sm text-muted-foreground">
                  RaidGuild AI
                </span>
              </div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Demo Assessment
              </p>
              <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                AI & Operational{" "}
                <span className="text-primary text-glow-teal">
                  Readiness Report
                </span>
              </h1>
            </div>

            <div className="grid gap-3 font-mono text-xs text-muted-foreground sm:grid-cols-3 md:text-right">
              <div>
                <p className="uppercase tracking-[0.18em] text-foreground">
                  Client
                </p>
                <p className="mt-1">DemoCo Operations</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.18em] text-foreground">
                  Scope
                </p>
                <p className="mt-1">Assessment Summary</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.18em] text-foreground">
                  Date
                </p>
                <p className="mt-1">July 2026</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <AnimatedSection>
              <div className="flex h-full flex-col items-center justify-center border border-primary/40 bg-card/50 p-8 backdrop-blur-sm">
                <ScoreGauge score={overallScore} />
                <div className="mt-8 w-full max-w-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Overall Readiness
                    </span>
                    <span className="border border-primary/35 bg-primary/10 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      {overallLevel}
                    </span>
                  </div>
                  <ScoreRail score={overallScore} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="h-full border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8">
                <div className="mb-8 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/30 bg-primary/10">
                    <Gauge className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      Score Interpretation
                    </p>
                    <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
                      Operational bottlenecks are understood, but foundation
                      work is needed before larger AI systems will produce
                      reliable leverage.
                    </h2>
                  </div>
                </div>

                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                  The goal is not false precision. This score creates a shared
                  vocabulary for discussing operational maturity, readiness
                  gaps, and the practical sequence of work required before
                  automations or agents can compound safely.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Strength", value: "Executive pull", icon: Sparkles },
                    { label: "Constraint", value: "Fragmented context", icon: XCircle },
                    { label: "Next move", value: "Readiness workshop", icon: ArrowRight },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="border border-border bg-background/50 p-4"
                        key={item.label}
                      >
                        <Icon
                          aria-hidden="true"
                          className={cn(
                            "mb-4 h-5 w-5",
                            item.label === "Constraint"
                              ? "text-accent"
                              : "text-primary",
                          )}
                        />
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-2 font-heading text-sm font-semibold">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Category Scorecard
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Eight dimensions of operational AI readiness
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              A simple 1-5 scale keeps the conversation actionable while
              showing where stronger operating foundations will unlock AI value.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categoryScores.map((category, index) => {
              const Icon = category.icon;

              return (
                <AnimatedSection delay={index * 0.04} key={category.name}>
                  <motion.article
                    className="h-full border border-border bg-card/50 p-5 backdrop-blur-sm"
                    transition={{ duration: 0.25 }}
                    whileHover={{
                      borderColor: "hsl(160 63% 50% / 0.5)",
                      y: -3,
                    }}
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center border border-primary/25 bg-background/70">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="text-right">
                        <p
                          className={cn(
                            "font-heading text-2xl font-semibold",
                            getScoreTone(category.score),
                          )}
                        >
                          {category.score.toFixed(1)}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          / 5
                        </p>
                      </div>
                    </div>

                    <h3 className="mb-3 font-heading text-lg font-semibold">
                      {category.name}
                    </h3>
                    <p className="mb-5 min-h-20 text-sm leading-relaxed text-muted-foreground">
                      {category.measure}
                    </p>

                    <ScoreRail score={category.score} />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      {getReadinessLabel(category.score)}
                    </p>
                  </motion.article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Readiness Levels
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              The scale is a conversation tool
            </h2>
          </AnimatedSection>

          <div className="grid gap-3 lg:grid-cols-5">
            {readinessLevels.map((level) => {
              const active = level.title === overallLevel;

              return (
                <AnimatedSection delay={level.score * 0.04} key={level.title}>
                  <div
                    className={cn(
                      "h-full border bg-card/50 p-5 backdrop-blur-sm",
                      active ? "border-primary/60" : "border-border",
                    )}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center border font-mono text-xs",
                          active
                            ? "border-primary/50 bg-primary/10 text-primary"
                            : "border-border bg-background/50 text-muted-foreground",
                        )}
                      >
                        {level.score}
                      </div>
                      {active ? (
                        <span className="border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mb-4 font-heading text-lg font-semibold">
                      {level.title}
                    </h3>
                    <ul className="space-y-2">
                      {level.bullets.map((bullet) => (
                        <li
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                          key={bullet}
                        >
                          <span
                            className={cn(
                              "mt-2 h-1 w-1 shrink-0",
                              active ? "bg-primary" : "bg-muted-foreground/40",
                            )}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <AnimatedSection>
              <div className="h-full border border-primary/35 bg-card/50 p-6 backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="font-heading text-xl font-semibold">
                    Strengths
                  </h2>
                </div>
                <ul className="space-y-4">
                  {strengths.map((strength) => (
                    <li className="flex gap-3 text-sm text-muted-foreground" key={strength}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="h-full border border-accent/35 bg-card/50 p-6 backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h2 className="font-heading text-xl font-semibold">
                    Constraints
                  </h2>
                </div>
                <ul className="space-y-4">
                  {constraints.map((constraint) => (
                    <li className="flex gap-3 text-sm text-muted-foreground" key={constraint}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span>{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <div className="h-full border border-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="font-heading text-xl font-semibold">
                    Top Opportunities
                  </h2>
                </div>
                <ol className="space-y-4">
                  {opportunities.map((opportunity, index) => (
                    <li className="flex gap-3 text-sm text-muted-foreground" key={opportunity}>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 font-mono text-[10px] text-primary">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{opportunity}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative pt-14 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden border border-primary/40 bg-card/60 p-8 backdrop-blur-sm md:p-10">
              <div
                className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="mb-6 flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      Recommended Next Step
                    </p>
                    <h2 className="font-heading text-3xl font-bold">
                      AI Readiness Workshop
                    </h2>
                  </div>
                  <FileText className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>

                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  A collaborative session to prioritize opportunities, define an
                  implementation roadmap, and identify the foundational work
                  needed before investing in larger automation or agent
                  initiatives.
                </p>

                <div className="mt-8">
                  <Button
                    asChild
                    className="rounded-sm px-8 font-heading text-sm uppercase tracking-wider"
                    size="lg"
                  >
                    <Link href="/contact">
                      Book Your Readiness Assessment
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  </div>
);

export default ReadinessReportDemoPage;
