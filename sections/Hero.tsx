"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 70% 35%, rgba(61,107,117,0.22), transparent 60%), radial-gradient(ellipse 45% 40% at 15% 70%, rgba(196,92,58,0.1), transparent 55%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-24 hidden h-[420px] w-[420px] opacity-40 lg:block"
      >
        <svg viewBox="0 0 420 420" className="h-full w-full">
          <circle
            cx="210"
            cy="210"
            r="180"
            fill="none"
            stroke="#3d6b75"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <circle
            cx="210"
            cy="210"
            r="120"
            fill="none"
            stroke="#c45c3a"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          <path
            d="M210 30 L360 210 L210 390 L60 210 Z"
            fill="none"
            stroke="#f3efe8"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">
        <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-petrol-bright">
          Freelance · Design & Engineering
        </p>

        <h1 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-paper">
          Omar Medhat
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg">
          I design and ship brand systems that carry weight — from dual-commerce
          Shopify storefronts to multi-brand hospitality platforms built for
          English and Arabic alike. When the brief asks for gallery-grade
          editorial and production-ready handoff, I own both.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-petrol-bright hover:text-paper"
            data-cursor="hover"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="text-sm text-paper-dim underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper hover:decoration-petrol-bright"
            data-cursor="hover"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-paper-faint sm:flex"
        data-cursor="hover"
        aria-label="Scroll to work"
      >
        <ArrowDown size={14} className="animate-bounce" aria-hidden />
        Scroll
      </a>
    </section>
  );
}
