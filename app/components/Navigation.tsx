"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/contact" },
];

const SECTION_IDS = ["home", "about", "services", "team"];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/services") setActiveSection("services");
      else if (pathname === "/tournaments") setActiveSection("tournaments");
      else if (pathname === "/contact") setActiveSection("contact");
      else setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const navH = 64;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navH + 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "/#services" && pathname !== "/") {
      return;
    }
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return activeSection === href.slice(2);
    }
    return activeSection === href.slice(1);
  };

  const linkClass = (href: string) =>
    `text-base font-semibold transition-colors duration-200 no-underline pb-1 border-b-2 ${
      isActive(href)
        ? "text-accent-purple border-accent-purple"
        : "text-white border-transparent hover:text-accent-purple"
    }`;

  const mobileLinkClass = (href: string) =>
    `text-lg font-semibold transition-colors no-underline ${
      isActive(href) ? "text-accent-purple" : "text-white hover:text-accent-purple"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto pl-0 pr-5 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center no-underline"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Sri Chess Academy"
            width={160}
            height={80}
            className="h-12 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent-purple hover:bg-accent-dark text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 no-underline"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="flex flex-col items-center gap-5 py-10 px-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={mobileLinkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-accent-purple hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-all no-underline"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
