"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers3, Waypoints } from "lucide-react";
import Navbar from "@/components/Navbar";
import AIBootstrapSection from "@/components/AIBootstrapSection";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const pathSteps = [
  "30-minute readiness conversation",
  "Half-day working session",
  "30-day practice loop with weekly check-ins",
  "Handoff guide and next-step roadmap",
];

const installOutputs = [
  "The tools your team already uses reviewed and organized",
  "A few practical AI habits taught through real examples",
  "Starter prompts and repeatable workflow patterns created",
  "2-3 useful workflow opportunities selected with your team",
];

const deeperFoundation = [
  "More of your docs, tools, and examples connected",
  "Clearer review steps for sensitive work",
  "A repeatable rhythm for improving workflows over time",
];

const Offerings = () => (
  <div className="noise-bg relative min-h-screen overflow-hidden">
    <Navbar />

    <main className="relative z-10">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M8 74 C28 28, 49 76, 69 35 S91 39, 96 18"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="0.35"
              strokeDasharray="2 3"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M4 88 C24 62, 42 62, 59 48 S77 27, 97 43"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.25"
              strokeDasharray="1 4"
              animate={{ strokeDashoffset: [0, 16] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent"
            >
              AI Bootstrap Program
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 max-w-4xl font-heading text-5xl font-bold leading-[0.92] md:text-6xl lg:text-7xl"
            >
              A hands-on AI bootstrap for owner-led{" "}
              <span className="text-primary text-glow-violet">
                businesses and teams.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="max-w-2xl text-xl leading-relaxed text-muted-foreground"
            >
              Learn where AI fits, practice on real screen-heavy work, and
              leave with simple workflows your team can own and improve.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="border border-border bg-card/55 p-6 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <Waypoints className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold">
                Program Path
              </h2>
            </div>
            <div className="space-y-5">
              {pathSteps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center border border-primary/45 bg-primary/10 font-mono text-xs text-primary">
                      {index + 1}
                    </div>
                    {index < pathSteps.length - 1 && (
                      <div className="h-8 w-px bg-gradient-to-b from-primary/45 to-border" />
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

      <AIBootstrapSection />

      <section className="relative py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          <AnimatedSection>
            <div className="h-full border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Half-Day Working Session
                </p>
              </div>
              <h2 className="mb-5 font-heading text-4xl font-bold leading-tight">
                Enough time to learn by doing, not just talk about AI.
              </h2>
              <div className="space-y-3">
                {installOutputs.map((item) => (
                  <div key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="h-full border border-primary/35 bg-card/50 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  Keep Building
                </p>
              </div>
              <h2 className="mb-5 font-heading text-4xl font-bold leading-tight">
                If the bootstrap reveals more useful places for AI, we keep going.
              </h2>
              <div className="space-y-3">
                {deeperFoundation.map((item) => (
                  <div key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-accent">
              Start Small
            </p>
            <h2 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl">
              Start with a conversation. Leave with a clear next step.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We will talk through where AI already shows up, what your team
              wants to make easier, and whether the 30-day bootstrap is the
              right fit.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Talk to a Builder
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
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
          AI Bootstrap for Owner-Led Businesses · RaidGuild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          AI bootstrap, workflow enablement, and operational handoff.
        </span>
      </div>
    </footer>
  </div>
);

export default Offerings;
