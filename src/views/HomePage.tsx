"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TheShiftSection from "@/components/TheShiftSection";
import SystemWeavingSection from "@/components/SystemWeavingSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import EmbeddedSection from "@/components/EmbeddedSection";
import SystemStackSection from "@/components/SystemStackSection";
import EngagementSection from "@/components/EngagementSection";
import RaidGuildSection from "@/components/RaidGuildSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => (
  <div className="noise-bg relative">
    <Navbar />
    <HeroSection />
    <TheShiftSection />
    <SystemWeavingSection />
    <BeforeAfterSection />
    <EmbeddedSection />
    <SystemStackSection />
    <EngagementSection />
    <RaidGuildSection />
    <FinalCTASection />

    {/* Footer */}
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm text-muted-foreground">
          Forward Deployed Agency · Raid Guild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Embedded teams. Agentic systems. Operated outcomes.
        </span>
      </div>
    </footer>
  </div>
);

export default Index;
