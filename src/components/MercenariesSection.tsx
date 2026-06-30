"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bot, BrainCircuit, RadioTower, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mercenaries, type Mercenary } from "@/lib/data/members";

const mercenaryGuilds = [
  {
    title: "Agent Architects",
    copy: "Design agents, memory, evaluations, and tool use around how your organization actually works.",
    icon: BrainCircuit,
  },
  {
    title: "Workflow Weavers",
    copy: "Connect documents, CRMs, inboxes, APIs, and internal systems into shared operating context.",
    icon: Workflow,
  },
  {
    title: "Comms Operators",
    copy: "Shape the communication paths where people, agents, customers, and internal teams coordinate.",
    icon: RadioTower,
  },
  {
    title: "Automation Raiders",
    copy: "Ship pragmatic systems that remove drag, surface signal, and compound after the foundation is in place.",
    icon: Bot,
  },
];

function shuffleArray(array: Mercenary[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const MercenaryGrid = () => {
  const [shuffledMercenaries, setShuffledMercenaries] = useState<Mercenary[]>(
    [],
  );

  useEffect(() => {
    setShuffledMercenaries(shuffleArray(mercenaries).slice(0, 24));
  }, []);

  return (
    <motion.div
      className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      }}
    >
      {shuffledMercenaries.map((mercenary) => {
        const link = mercenary.link || "https://x.com/RaidGuild";

        return (
          <Tooltip key={mercenary.name}>
            <TooltipTrigger asChild>
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 8 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-[72px] w-[72px] overflow-hidden rounded-sm border-2 border-primary/15 bg-card transition-colors hover:border-primary/50"
                >
                  <Image
                    src={mercenary.imagePath}
                    alt={mercenary.name}
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top" className="border-border bg-card p-3">
              <div className="text-center">
                <p className="font-heading text-sm font-semibold leading-none">
                  {mercenary.name}
                </p>
                <p className="mt-1 text-xs leading-none text-muted-foreground">
                  {mercenary.title}
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </motion.div>
  );
};

const MercenariesSection = () => (
  <section id="mercenaries" className="relative scroll-mt-20 py-32 overflow-hidden">
    <div className="absolute left-0 top-12 h-px w-1/3 bg-gradient-to-r from-accent/50 to-transparent" />
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection className="mx-auto mb-12 max-w-4xl text-center">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
          Builder Network
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Forward-deployed AI builders for{" "}
          <span className="text-accent text-glow-violet">
            agent-ready operations.
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="flex flex-col items-center gap-6">
          <MercenaryGrid />
          <p className="max-w-xl text-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Battle-tested RaidGuild talent. Click to explore the roster.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mercenaryGuilds.map((guild, i) => {
          const Icon = guild.icon;

          return (
            <AnimatedSection key={guild.title} delay={i * 0.08}>
              <motion.div
                className="h-full rounded-sm border border-border bg-card/50 p-6 backdrop-blur-sm"
                whileHover={{
                  borderColor: "hsl(347 100% 61% / 0.35)",
                  y: -3,
                }}
                transition={{ duration: 0.25 }}
              >
                <Icon className="mb-5 h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold mb-3">
                  {guild.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {guild.copy}
                </p>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>

    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default MercenariesSection;
