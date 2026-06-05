import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const anchorLinks = [
  { href: "/#projects", label: "Projects", className: "hidden md:inline" },
  { href: "/#media", label: "Media", className: "hidden lg:inline" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onOfferingsPage = pathname === "/offerings";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-accent"
        >
          <Image
            src="/images/Logomark.svg"
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span>Raid Guild AI</span>
        </Link>
        <div className="flex items-center gap-3">
          {anchorLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${link.className} font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/offerings"
            className={`hidden font-mono text-xs uppercase tracking-[0.18em] transition-colors sm:inline ${
              onOfferingsPage
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Offerings
          </Link>
          <Link
            href="https://www.raidguild.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Web3 Solutions
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </Link>
          <Button
            size="sm"
            className="rounded-sm font-heading text-xs tracking-wider uppercase"
            asChild
          >
            <Link href="/contact">Deploy the Agency</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
