import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroParticleField from "./HeroParticleField";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-[92svh] items-center overflow-hidden bg-background pt-16 md:min-h-screen"
  >
    <Image
      src="/images/abstract-system-graph-hero.png"
      alt=""
      aria-hidden="true"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center opacity-30"
    />
    <HeroParticleField />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-background/5" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/60" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,hsl(var(--accent)/0.12)_0%,transparent_32%,hsl(var(--background)/0.08)_100%)]" />

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-14 md:py-20">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-accent md:mb-6 md:text-xs"
        >
          AI Bootstrap for Small Businesses
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 font-heading text-5xl font-bold leading-[0.92] tracking-normal md:text-6xl lg:text-7xl"
        >
          Give your team
          <span className="block text-primary text-glow-violet">
            AI superpowers.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:mb-8 md:text-xl"
        >
          AI can make your team feel like it has a computer expert on call.
          RaidGuild helps small businesses make that real with simple
          workflows, hands-on guidance, and practical AI habits for everyday
          screen work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8 space-y-3 md:mb-10"
        >
          {[
            "Learn what AI can actually do in your business",
            "Practice on real admin and screen-heavy work",
            "Leave with workflows your team understands",
          ].map((point) => (
            <div key={point} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                {point}
              </span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <div className="space-y-3">
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="px-8"
                asChild
              >
                <Link href="/contact">Talk to a Builder</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/40 px-8 text-accent hover:bg-accent/10"
                asChild
              >
                <Link href="/offerings">See How It Works</Link>
              </Button>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Built for owners and teams who want practical AI help without
              turning adoption into a big technical project.
            </p>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Decorative threads */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </section>
);

export default HeroSection;
