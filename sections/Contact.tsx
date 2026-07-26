"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 pb-8 pt-24 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <motion.div
          className="relative overflow-hidden border border-paper/10 bg-ink-soft px-6 py-14 sm:px-12 sm:py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(61,107,117,0.45), transparent 70%)",
            }}
          />

          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-petrol-bright">
            Contact
          </p>
          <h2 className="max-w-xl font-display text-3xl tracking-tight text-paper sm:text-5xl">
            Have a brand that needs to hold up in production?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-paper-dim sm:text-base">
            Open to select freelance engagements — Shopify builds, multi-brand
            design systems, and bilingual product experiences.
          </p>

          <p className="mt-8 font-display text-xl text-paper">Omar Medhat</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="mailto:omarmedhat0812@gmail.com"
              className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-petrol-bright hover:text-paper"
              data-cursor="hover"
            >
              <Mail size={16} aria-hidden />
              omarmedhat0812@gmail.com
            </a>
            <a
              href="tel:+201064345783"
              className="inline-flex items-center gap-2 border border-paper/20 px-5 py-3 text-sm text-paper transition-colors hover:border-petrol-bright hover:text-petrol-bright"
              data-cursor="hover"
            >
              <Phone size={16} aria-hidden />
              +20 106 434 5783
            </a>
            <a
              href="https://www.linkedin.com/in/omarmedhatmohiyeldin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-paper"
              data-cursor="hover"
            >
              <Linkedin size={16} aria-hidden />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <footer className="flex flex-col gap-3 py-10 text-xs text-paper-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Omar Medhat. All rights reserved.</p>
          <p className="tracking-wide">Cairo · Remote</p>
        </footer>
      </div>
    </section>
  );
}
