import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Presentation, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    name: "Queen Raida",
    label: "Internal Agent",
    href: "https://github.com/raid-guild/Queen-Raida",
    icon: Bot,
    image: "/assets/queen-raida.png",
    imageAlt: "Queen Raida character art",
    imageClassName: "object-cover object-top",
    copy: "RaidGuild's internal AI agent with a context lake, intent understanding, and external communication lines for Discord, X, and content creation.",
    points: ["Context lake", "Intent understanding", "Discord, X, and content ops"],
  },
  {
    name: "Refactory",
    label: "Superprism Collaboration",
    href: "https://refactory.superprism.io/",
    icon: Sparkles,
    image: "/assets/refactory-preview.png",
    imageAlt: "Refactory Superprism interface preview",
    imageClassName: "object-cover object-left-top",
    copy: "A Codex-first community automation and agentic solutions tool built in collaboration with the Superprism ecosystem.",
    points: ["Codex-first workflows", "Community automation", "Agentic solution patterns"],
  },
  {
    name: "The Portal",
    label: "Agent-First Surface",
    href: "https://portal.raidguild.org/",
    icon: Presentation,
    image: "/assets/portal-preview.png",
    imageAlt: "RaidGuild Portal member home preview",
    imageClassName: "object-cover object-left-top",
    copy: "An agent-first presentation and collaboration surface for turning context into shared strategy, demos, and client-ready narratives.",
    points: ["Agent-led presentations", "Collaborative context", "Client-ready surfaces"],
  },
];

const AIProjectsSection = () => (
  <section id="projects" className="relative scroll-mt-20 py-32">
    <div className="max-w-7xl mx-auto px-6">
      <AnimatedSection className="mb-16 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4">
          AI Projects
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          We deploy what we build in the guild.
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Our agency work is grounded in internal tools, field experiments, and
          collaborations already shaping how RaidGuild coordinates, communicates,
          and presents work with agents.
        </p>
      </AnimatedSection>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;

          return (
            <AnimatedSection key={project.name} delay={i * 0.12}>
              <motion.div
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card/55 backdrop-blur-sm"
                whileHover={{
                  y: -4,
                  borderColor:
                    i === 1
                      ? "hsl(347 100% 61% / 0.35)"
                      : "hsl(160 63% 50% / 0.35)",
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="relative aspect-[16/10] border-b border-border bg-background/70"
                  initial={{ opacity: 0, scale: 1.04 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={`${project.imageClassName} opacity-85 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100`}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-sm border border-primary/25 bg-background/80 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                </motion.div>

                <div className="flex flex-1 flex-col p-7">
                  <motion.div
                    className="mb-5 flex items-start justify-between gap-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.08 }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {project.label}
                    </span>
                  </motion.div>

                  <motion.h3
                    className="font-heading text-2xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: 0.14 + i * 0.08 }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    className="mb-6 text-sm leading-relaxed text-muted-foreground"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                  >
                    {project.copy}
                  </motion.p>

                  <div className="mb-8 space-y-2">
                    {project.points.map((point, pointIndex) => (
                      <motion.div
                        key={point}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.35,
                          delay: 0.26 + i * 0.08 + pointIndex * 0.04,
                        }}
                      >
                        <div className="h-1 w-1 rounded-full bg-primary/60" />
                        <span className="font-mono text-xs text-muted-foreground">
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary transition-colors hover:text-accent"
                  >
                    Explore Project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default AIProjectsSection;
