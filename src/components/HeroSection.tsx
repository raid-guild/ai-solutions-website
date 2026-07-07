import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      className="object-cover object-center"
    />
    <video
      aria-hidden="true"
      autoPlay
      loop
      muted
      playsInline
      poster="/images/abstract-system-graph-hero.png"
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
    >
      <source src="/videos/BGRGAI.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-background/1" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,transparent_0%,hsl(var(--background)/0.03)_45%,hsl(var(--background)/0.01)_100%)]" />

    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-14 md:py-20">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary md:mb-6 md:text-xs"
        >
          Forward-Deployed AI Builders
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading text-[1.8rem] md:text-[2.4rem] lg:text-[3rem] font-bold leading-[1.1] tracking-tight mb-6"
        >
          Your team is already using AI.{" "}
          <span className="text-primary text-glow-teal">
            Now make it operational.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-7 max-w-lg text-base leading-relaxed text-muted-foreground md:mb-8 md:text-lg"
        >
          RaidGuild helps teams turn scattered prompts, private
          automations, and disconnected tools into governed AI workflows
          employees can actually use.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8 space-y-3 md:mb-10"
        >
          {[
            "Connect docs, tools, data, approvals, and workflows",
            "Add scoped access, human review, and agent-ready interfaces",
            "Train employees to build safe automations that compound",
          ].map((point) => (
            <div key={point} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground font-mono">
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
                className="rounded-sm font-heading tracking-wider uppercase text-sm px-8"
                asChild
              >
                <Link href="/contact">Book Your Readiness Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-sm font-heading tracking-wider uppercase text-sm px-8 border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/offerings">View the packages</Link>
              </Button>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Free 30-Minute AI & Operational Readiness Assessment. Determine
              what is holding you back and where the highest-leverage
              opportunities exist.
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
