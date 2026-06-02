import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onOfferingsPage = location.pathname === "/offerings";

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
        <Link to="/" className="font-heading font-semibold text-lg tracking-tight text-accent">
          Raid Guild
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/offerings"
            className={`hidden font-mono text-xs uppercase tracking-[0.18em] transition-colors sm:inline ${
              onOfferingsPage
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Offerings
          </Link>
          <Button
            size="sm"
            className="rounded-sm font-heading text-xs tracking-wider uppercase"
          >
            Deploy the Agency
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
