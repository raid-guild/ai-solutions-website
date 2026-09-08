"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BootstrapFitSection from "@/components/BootstrapFitSection";
import AIBootstrapSection from "@/components/AIBootstrapSection";

const Index = () => (
  <div className="noise-bg relative">
    <Navbar />
    <HeroSection />
    <BootstrapFitSection />
    <AIBootstrapSection />

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
          AI Bootstrap for Owner-Led Businesses · RaidGuild
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          Hands-on guidance, simple workflows, and practical AI habits.
        </span>
      </div>
    </footer>
  </div>
);

export default Index;
