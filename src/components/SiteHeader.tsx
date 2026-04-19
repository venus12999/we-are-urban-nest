import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/urbannest-logo.jpeg";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Urban Nest logo"
            className="h-10 w-10 object-contain"
            width={40}
            height={40}
          />
          <span className="font-display text-xl font-semibold tracking-tight">
            Urban<span className="italic text-muted-foreground"> nest</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Activities", href: "/activities" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group relative text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Visit us
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
