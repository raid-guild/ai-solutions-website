"use client";

import { useState } from "react";
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

const MercenaryAvatar = ({ mercenary }: { mercenary: Mercenary }) => {
  const link = mercenary.link || "https://x.com/RaidGuild";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-primary/15 bg-card transition-colors hover:border-primary/50"
        >
          <Image
            src={mercenary.imagePath}
            alt={mercenary.name}
            fill
            className="object-cover"
            sizes="72px"
          />
        </Link>
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
};

const ROW_COUNT = 3;
const MIN_SEGMENT_ITEMS = 56;

function buildSeamlessTrack(items: Mercenary[]): Mercenary[] {
  if (items.length === 0) return [];

  const segment: Mercenary[] = [];
  while (segment.length < MIN_SEGMENT_ITEMS) {
    for (const item of items) {
      segment.push(item);
      if (segment.length >= MIN_SEGMENT_ITEMS) break;
    }
  }

  return [...segment, ...segment];
}

function buildMarqueeRows(): Mercenary[][] {
  return Array.from({ length: ROW_COUNT }, (_, rowIndex) => {
    const offset =
      rowIndex * Math.ceil(mercenaries.length / ROW_COUNT);
    const rotated = [
      ...mercenaries.slice(offset % mercenaries.length),
      ...mercenaries.slice(0, offset % mercenaries.length),
    ];

    return buildSeamlessTrack(rotated);
  });
}

const MercenaryMarqueeRow = ({
  track,
  direction,
  rowIndex,
}: {
  track: Mercenary[];
  direction: "left" | "right";
  rowIndex: number;
}) => (
  <div className="overflow-hidden">
    <div
      className={`flex w-max gap-3 group-hover:[animation-play-state:paused] ${
        direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
      } motion-reduce:animate-none`}
      style={{ animationDuration: direction === "left" ? "45s" : "50s" }}
    >
      {track.map((mercenary, index) => (
        <MercenaryAvatar
          key={`row-${rowIndex}-${mercenary.name}-${index}`}
          mercenary={mercenary}
        />
      ))}
    </div>
  </div>
);

const MercenaryMarquee = () => {
  const [rows] = useState(buildMarqueeRows);
  const rowDirections: Array<"left" | "right"> = ["left", "right", "left"];

  return (
    <div className="group relative isolate w-full space-y-3 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[min(20vw,12rem)] bg-gradient-to-r from-background from-10% via-background/80 via-55% to-transparent sm:w-36 md:w-48"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[min(20vw,12rem)] bg-gradient-to-l from-background from-10% via-background/80 via-55% to-transparent sm:w-36 md:w-48"
        aria-hidden="true"
      />

      {rows.map((track, rowIndex) => (
        <MercenaryMarqueeRow
          key={rowIndex}
          rowIndex={rowIndex}
          track={track}
          direction={rowDirections[rowIndex]}
        />
      ))}
    </div>
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

      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full">
            <MercenaryMarquee />
          </div>
          <p className="max-w-xl px-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
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
