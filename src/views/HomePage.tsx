"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MercenariesSection from "@/components/MercenariesSection";
import AIProjectsSection from "@/components/AIProjectsSection";
import MediaSection from "@/components/MediaSection";
import RaidGuildSection from "@/components/RaidGuildSection";
import FinalCTASection from "@/components/FinalCTASection";
import type { MediaPost } from "@/lib/portal-posts";

const Index = ({ mediaPosts }: { mediaPosts: MediaPost[] }) => (
  <div className="noise-bg relative">
    <Navbar />
    <HeroSection />
    <MercenariesSection />
    <AIProjectsSection />
    <MediaSection posts={mediaPosts} />
    <RaidGuildSection />
    <FinalCTASection />

    {/* Footer */}
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm text-muted-foreground">
          Forward Deployed AI Mercenaries · Raid Guild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Digital demons slain with context, agents, and operated outcomes.
        </span>
      </div>
    </footer>
  </div>
);

export default Index;
