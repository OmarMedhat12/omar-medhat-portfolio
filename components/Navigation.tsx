"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-paper/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-paper transition-colors hover:text-petrol-bright"
          data-cursor="hover"
        >
          Omar Medhat
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-paper-dim transition-colors hover:text-paper"
                data-cursor="hover"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          data-cursor="hover"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-paper transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-paper transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <motion.div
        className="md:hidden overflow-hidden border-t border-paper/10 bg-ink"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 font-display text-2xl text-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
