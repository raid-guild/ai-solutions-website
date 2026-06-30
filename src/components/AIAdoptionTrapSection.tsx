import { Cable, KeyRound, Layers3, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const adoptionStages = [
  {
    title: "Sanctioned Tools",
    label: "Tool Access",
    copy: "ChatGPT seats, copilots, approved apps, and policy docs. Helpful for individual productivity, but weak as a company-wide operating model.",
    icon: KeyRound,
  },
  {
    title: "Personal Workflows",
    label: "Deep Shadow AI",
    copy: "Employees copy data into private prompts, use their own tools, and create workflows leadership cannot see, govern, or improve.",
    icon: UsersRound,
  },
  {
    title: "Central AI Requests",
    label: "Service Queue",
    copy: "A new AI group starts taking requests across departments. Governance improves, but useful workflows can get trapped behind another internal queue.",
    icon: Cable,
  },
  {
    title: "AI Operating Layer",
    label: "Agent-Ready",
    copy: "Shared context, role-based access, API/MCP interfaces, reporting, and reusable patterns let employees safely build leverage on top of leverage.",
    icon: Layers3,
  },
];

const AIAdoptionTrapSection = () => (
  <section className="relative overflow-hidden py-28">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M5 72 C20 58, 28 36, 44 47 S67 76, 94 25"
          fill="none"
          stroke="hsl(160 63% 50%)"
          strokeDasharray="1.5 3"
          strokeWidth="0.25"
        />
        <path
          d="M8 28 C26 44, 38 18, 55 32 S77 61, 96 45"
          fill="none"
          stroke="hsl(347 100% 61%)"
          strokeDasharray="1 4"
          strokeWidth="0.2"
        />
      </svg>
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <AnimatedSection>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The Executive AI Trap
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Don&apos;t turn AI into{" "}
            <span className="text-primary text-glow-teal">
              another IT queue.
            </span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            COOs and CTOs are under pressure to formalize AI adoption. The
            obvious move is a central AI function that gives departments
            solutions on request. That creates ownership, but it can also
            recreate the old IT bottleneck.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Shadow AI is what happens when useful AI workflows grow outside the
            company&apos;s operating model: copied data, private prompts,
            undocumented automations, unclear permissions, and decisions the
            business cannot reliably measure or govern.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            The better path is distributed enablement: a lightweight operating
            layer that gives every team safe context, access, and patterns for
            building. Employees use AI to free time, use that time to build
            better workflows, then use those workflows to create even more
            capacity.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-2">
          {adoptionStages.map((stage, index) => {
            const Icon = stage.icon;
            const isTarget = index === adoptionStages.length - 1;

            return (
              <AnimatedSection key={stage.title} delay={index * 0.08}>
                <motion.article
                  className={`h-full border bg-card/50 p-6 backdrop-blur-sm ${
                    isTarget ? "border-primary/45" : "border-border"
                  }`}
                  whileHover={{
                    borderColor: isTarget
                      ? "hsl(160 63% 50% / 0.7)"
                      : "hsl(347 100% 61% / 0.35)",
                    y: -3,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-primary/25 bg-background/70">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {stage.label}
                    </span>
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-semibold">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stage.copy}
                  </p>
                </motion.article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default AIAdoptionTrapSection;
