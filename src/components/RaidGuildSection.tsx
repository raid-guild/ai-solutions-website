import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const RaidGuildSection = () => (
  <section id="origins" className="relative scroll-mt-20 py-32 overflow-hidden">
    {/* Sigil background */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      viewBox="0 0 400 400"
    >
      <polygon
        points="200,40 360,150 310,340 90,340 40,150"
        fill="none"
        stroke="hsl(263 76% 66%)"
        strokeWidth="1"
      />
      <polygon
        points="200,80 320,165 285,310 115,310 80,165"
        fill="none"
        stroke="hsl(160 63% 50%)"
        strokeWidth="0.5"
      />
      <circle
        cx="200"
        cy="200"
        r="80"
        fill="none"
        stroke="hsl(263 76% 66%)"
        strokeWidth="0.5"
      />
    </svg>

    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <AnimatedSection>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
          Origins
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          RaidGuild&apos;s builder culture, applied to{" "}
          <span className="text-accent text-glow-violet">AI operations.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
          RaidGuild is a decentralized collective of senior builders who turn
          ambiguous systems into practical software. The web3 guild still builds
          decentralized products; this front applies the same builder culture to
          AI operating layers, employee enablement, and agent-ready teams.
        </p>
        <p className="text-lg text-foreground font-heading font-semibold mb-12">
          Same guild instincts. New operational frontier.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            "Senior builders who transfer capability",
            "Battle-tested coordination across messy systems",
            "Native to agents, automation, and team enablement",
          ].map((point, i) => (
            <motion.div
              key={point}
              className="p-6 rounded-sm border border-border bg-card/30"
              whileHover={{ borderColor: "hsl(263 76% 66% / 0.4)" }}
            >
              <div className="w-2 h-2 rounded-full bg-accent/60 mb-4 mx-auto" />
              <p className="text-sm text-muted-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
  </section>
);

export default RaidGuildSection;
