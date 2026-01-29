"use client";

import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import { FC, useEffect, useState } from "react";

/* ---------------- Types ---------------- */

type NavLink = {
  href: string;
  label: string;
};

/* ---------------- Data ---------------- */

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#internships", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

/* ---------------- Component ---------------- */

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          HC<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm md:text-lg text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
