"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AIAdoptionTrapSection from "@/components/AIAdoptionTrapSection";
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
    <AIAdoptionTrapSection />
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
          Forward-Deployed AI Builders · RaidGuild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Shared context, governed access, and practical agent workflows for
          teams becoming AI-ready.
        </span>
      </div>
    </footer>
  </div>
);

export default Index;
