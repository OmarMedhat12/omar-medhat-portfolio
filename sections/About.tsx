"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "I'm Omar Medhat — a freelance full-stack developer and UX designer based between craft and production. I take on engagements where the visual system and the shipping surface are the same responsibility: brand design that has to hold up in Liquid, Figma files that have to survive bilingual reality, and handoffs that developers can actually build from.",
  "My approach shows up in the work. Dar Senosi demanded editorial restraint and custom commerce logic on Shopify — a gallery destination with a dual checkout/reservation flow, not a theme skin. RHB Hospitality demanded systems thinking — one parent brand, three sub-brands, true LTR/RTL parity across breakpoints, and scripted precision so sitewide changes don't become eighty manual edits. Pattern: design the architecture first, then execute with tools that scale.",
  "Day to day I work across Figma (and plugin scripting), Shopify Liquid/CSS/JS, React/Next.js, and design-system documentation. Current focus: high-trust brand experiences for commerce and hospitality — especially projects that need bilingual Arabic/English craft and a single owner from concept through launch.",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/15 to-transparent" />

      <div className="mx-auto grid max-w-content gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-petrol-bright">
            About
          </p>
          <h2 className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Design systems that ship.
          </h2>
          <ul className="mt-10 space-y-3 text-sm text-paper-faint">
            <li className="flex gap-3">
              <span className="text-petrol-bright" aria-hidden>
                —
              </span>
              Shopify theme architecture & dual-commerce flows
            </li>
            <li className="flex gap-3">
              <span className="text-petrol-bright" aria-hidden>
                —
              </span>
              Multi-brand UI systems & bilingual RTL design
            </li>
            <li className="flex gap-3">
              <span className="text-petrol-bright" aria-hidden>
                —
              </span>
              Figma libraries, Dev Mode handoff, plugin automation
            </li>
          </ul>
        </motion.div>

        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className="text-[15px] leading-relaxed text-paper-dim sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
