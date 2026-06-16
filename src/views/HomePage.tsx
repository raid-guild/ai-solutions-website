"use client";

import Image from "next/image";
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
        <span className="flex items-center gap-2 font-heading text-sm text-muted-foreground">
          <Image
            src="/images/Logomark.svg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          Forward Deployed AI Operators · RaidGuild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Context, agents, and operated workflows for teams with coordination
          debt.
        </span>
      </div>
    </footer>
  </div>
);

export default Index;
