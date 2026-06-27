import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import type { MediaPost } from "@/lib/portal-posts";

const MediaSection = ({ posts }: { posts: MediaPost[] }) => (
  <section id="media" className="relative scroll-mt-20 py-32">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <AnimatedSection className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Media
          </p>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            Featured AI Solutions dispatches.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Field notes, public briefs, and essays from the RaidGuild Portal.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Link
            href="https://portal.raidguild.org/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary transition-colors hover:text-accent"
          >
            More Posts
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>

      {posts.length === 0 ? (
        <AnimatedSection>
          <div className="rounded-sm border border-border bg-card/40 px-6 py-12 text-center">
            <Newspaper className="mx-auto mb-4 h-8 w-8 text-primary/60" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              No AI Solutions posts are available right now.
            </p>
          </div>
        </AnimatedSection>
      ) : (
        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.1}>
              <motion.article
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card/55 backdrop-blur-sm"
                whileHover={{
                  y: -4,
                  borderColor: "hsl(var(--primary) / 0.35)",
                }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] border-b border-border bg-background/70"
                >
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      fill
                      className="object-cover opacity-85 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Newspaper className="h-10 w-10 text-primary/60" aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                </Link>

                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {post.publishedLabel}
                  </p>
                  <h3 className="mb-4 font-heading text-2xl font-semibold">
                    <Link
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <Link
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary transition-colors hover:text-accent"
                  >
                    Read Post
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default MediaSection;
