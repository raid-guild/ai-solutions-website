"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CircleDot, Layers, Waypoints } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

type Offering = {
  tier: string;
  title: string;
  outcome: string;
  summary: string;
  includes: string[];
  bestFor?: string;
  examples?: string[];
};

const offerings: Offering[] = [
  {
    tier: "Workshop",
    title: "AI Readiness Workshop",
    outcome:
      "You get a clear map of where AI is already showing up, where business context is fragmented, and what foundation should be built first.",
    summary:
      "A focused entry point for teams using AI in pockets, but missing a shared operating model for tools, data, access, and workflows.",
    includes: [
      "Current AI usage review",
      "System and workflow inventory",
      "Context and data readiness map",
      "Risk and access review",
      "Prioritized foundation roadmap",
    ],
    examples: [
      "Team AI habits",
      "Tool sprawl",
      "Copy-paste work",
      "Data handoffs",
      "Knowledge gaps",
      "Automation candidates",
    ],
    bestFor:
      "COOs, CTOs, and operators who know AI matters, but need a practical path for employees to use it correctly without guessing or buying more tools.",
  },
  {
    tier: "Foundation Build",
    title: "AI Operating Layer",
    outcome:
      "You get the shared context, access rules, and system interfaces that make reporting, automation, and agents reliable.",
    summary:
      "A foundational build for organizations ready to turn scattered systems and one-off AI use into reusable operational infrastructure.",
    includes: [
      "Canonical business data model",
      "Scoped roles and permissioning",
      "Searchable knowledge layer",
      "Operational event stream",
      "Automation-ready interfaces",
    ],
    examples: [
      "CRM + inbox context",
      "Customer records",
      "Internal knowledge",
      "Reporting inputs",
      "Approval paths",
      "Agent tool access",
    ],
    bestFor:
      "Teams that want AI to become a repeatable business capability instead of a collection of disconnected experiments.",
  },
  {
    tier: "Flywheel Kickstart",
    title: "Agent Workflow Enablement",
    outcome:
      "Your employees build the first practical automations, copilots, and human-agent workflows with expert support beside them.",
    summary:
      "A hands-on enablement engagement that turns the foundation into daily leverage while giving internal operators the confidence and patterns to keep creating.",
    includes: [
      "Coached workflow design",
      "Reusable agent patterns",
      "Tool and API integration guidance",
      "Human review checkpoints",
      "Employee-led launch support",
    ],
    examples: [
      "Sales follow-up",
      "Support triage",
      "Internal reporting",
      "Client onboarding",
      "Content operations",
      "Ops handoffs",
    ],
    bestFor:
      "Teams that want to kickstart the flywheel: use AI, free time, build better workflows, and create more capacity to keep improving.",
  },
  {
    tier: "Full Program",
    title: "Operating Partnership",
    outcome:
      "You get a forward-deployed partner to keep the AI operating layer governed, measured, adopted, and improving while your internal builders level up.",
    summary:
      "A continued partnership for organizations moving from first foundation and workflows into a durable culture of employee-led AI improvement.",
    includes: [
      "Governance and observability",
      "Workflow monitoring",
      "Evaluation and quality checks",
      "Team workshops and enablement",
      "Roadmap and iteration planning",
    ],
    bestFor:
      "Teams that want a durable implementation partner while internal operators learn to build, measure, and improve with AI safely.",
  },
];

const pathSteps = [
  "Map current AI use",
  "Build the operating layer",
  "Launch agent-ready workflows",
  "Train employees to keep compounding gains",
];

const Offerings = () => (
  <div className="noise-bg relative min-h-screen overflow-hidden">
    <Navbar />

    <main className="relative z-10">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.07]">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M8 74 C28 28, 49 76, 69 35 S91 39, 96 18"
              fill="none"
              stroke="hsl(160 63% 50%)"
              strokeWidth="0.35"
              strokeDasharray="2 3"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M4 88 C24 62, 43 64, 58 48 S78 25, 97 41"
              fill="none"
              stroke="hsl(347 100% 61%)"
              strokeWidth="0.25"
              strokeDasharray="1 4"
              animate={{ strokeDashoffset: [0, 16] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary"
            >
              AI Operating Layer Packages
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
            >
              Move from scattered AI use to{" "}
              <span className="text-primary text-glow-teal">
                agent-ready operations.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              The goal is not an AI department that builds everything for
              everyone. Our packages help you create the shared context,
              governed access, practical workflows, and employee capability that
              let every team build safely.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="border border-border bg-card/50 p-6 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <Waypoints className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="font-heading text-lg font-semibold">
                Foundation Path
              </h2>
            </div>
            <div className="space-y-5">
              {pathSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center border border-primary/40 bg-primary/10 font-mono text-[11px] text-primary">
                      {index + 1}
                    </div>
                    {index < pathSteps.length - 1 && (
                      <div className="h-8 w-px bg-gradient-to-b from-primary/40 to-border" />
                    )}
                  </div>
                  <p className="pt-1 font-mono text-sm text-muted-foreground">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Service Tracks
              </p>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Start with the foundation, then build the workflows
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Every track is designed to produce reusable business capability:
              mapped context, connected systems, usable agent workflows, and
              employees who understand how to improve them.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 lg:grid-cols-2">
            {offerings.map((offering, index) => (
              <AnimatedSection key={offering.title} delay={index * 0.06}>
                <motion.article
                  className={`h-full border bg-card/50 p-6 backdrop-blur-sm transition-colors ${
                    index === 0 ? "border-primary/40" : "border-border"
                  }`}
                  whileHover={{
                    borderColor:
                      index === 0
                        ? "hsl(160 63% 50% / 0.65)"
                        : "hsl(347 100% 61% / 0.35)",
                    y: -3,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <CircleDot
                          className="h-4 w-4 text-primary"
                          aria-hidden="true"
                        />
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                          {offering.tier}
                        </p>
                      </div>
                      <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
                        {offering.title}
                      </p>
                    </div>
                  </div>

                  <h3 className="mb-4 max-w-4xl font-heading text-2xl font-semibold leading-tight md:text-3xl">
                    {offering.outcome}
                  </h3>

                  <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {offering.summary}
                  </p>

                  <div className="grid gap-6 md:grid-cols-[1fr_0.85fr]">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Layers
                          className="h-4 w-4 text-accent"
                          aria-hidden="true"
                        />
                        <h4 className="font-heading text-sm font-semibold uppercase tracking-wider">
                          Includes
                        </h4>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {offering.includes.map((item) => (
                          <div
                            key={item}
                            className="flex gap-2 text-sm text-muted-foreground"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      {offering.bestFor && (
                        <div>
                          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                            Best For
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {offering.bestFor}
                          </p>
                        </div>
                      )}

                      {offering.examples && (
                        <div>
                          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                            Example Workflows
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {offering.examples.map((example) => (
                              <span
                                key={example}
                                className="border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Schedule Consultation
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Tell us where AI is already creeping into the business, where work
              is still copy-paste, or where agents could help if they had the
              right context.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-sm px-8 font-heading text-sm uppercase tracking-wider"
                asChild
              >
                <Link href="https://ai.raidguild.org/contact">
                  Book an AI Readiness Workshop
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>

    <footer className="relative z-10 border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="flex items-center gap-2 font-heading text-sm text-muted-foreground">
          <Image
            src="/images/Logomark.svg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          Forward-Deployed AI Builders · RaidGuild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Shared context, governed access, practical agents.
        </span>
      </div>
    </footer>
  </div>
);

export default Offerings;
