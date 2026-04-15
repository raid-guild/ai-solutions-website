import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const nodes = [
  { label: "CRM", x: 60, y: 25, delay: 0.3 },
  { label: "Docs", x: 85, y: 55, delay: 0.5 },
  { label: "Inbox", x: 40, y: 70, delay: 0.7 },
  { label: "Agent", x: 65, y: 50, delay: 0.4 },
  { label: "API", x: 30, y: 35, delay: 0.6 },
  { label: "Data", x: 80, y: 30, delay: 0.8 },
  { label: "Slack", x: 50, y: 15, delay: 0.5 },
  { label: "ERP", x: 20, y: 55, delay: 0.9 },
];

const connections = [
  [0, 3],
  [1, 3],
  [2, 3],
  [4, 3],
  [5, 0],
  [6, 0],
  [7, 2],
  [4, 7],
  [5, 1],
  [6, 4],
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16">
    <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Left copy */}
      <div className="z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6"
        >
          System Weavers Division
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          We turn your operations into{" "}
          <span className="text-primary text-glow-teal">
            agent-driven systems.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
        >
          Designing, deploying, and operating AI-powered workflows inside your
          business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3 mb-10"
        >
          {[
            "Embedded with your team",
            "Built on your systems",
            "Continuously optimized",
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
          <Button
            size="lg"
            className="rounded-sm font-heading tracking-wider uppercase text-sm px-8"
          >
            Request a Raid
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-sm font-heading tracking-wider uppercase text-sm px-8 border-primary/30 text-primary hover:bg-primary/10"
          >
            Start a Workflow Audit
          </Button>
        </motion.div>
      </div>

      {/* Right - Node diagram */}
      <div className="relative h-[400px] lg:h-[500px] hidden lg:block">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {connections.map(([from, to], i) => (
            <motion.line
              key={i}
              x1={`${nodes[from].x}`}
              y1={`${nodes[from].y}`}
              x2={`${nodes[to].x}`}
              y2={`${nodes[to].y}`}
              stroke="hsl(160 63% 50%)"
              strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 1.2 }}
            />
          ))}
        </svg>
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="absolute flex flex-col items-center"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, duration: 0.5, type: "spring" }}
          >
            <motion.div
              className={`w-10 h-10 rounded-sm border flex items-center justify-center ${
                node.label === "Agent"
                  ? "border-primary/60 bg-primary/10 glow-teal"
                  : "border-border bg-card"
              }`}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="font-mono text-[8px] text-muted-foreground">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Decorative threads */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </section>
);

export default HeroSection;
