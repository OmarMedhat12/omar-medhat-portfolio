"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduced(prefersReduced);

    if (sessionStorage.getItem("om-loader-shown")) {
      return;
    }

    setVisible(true);
    const duration = prefersReduced ? 400 : 1400;
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("om-loader-shown", "1");
    }, duration);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.2 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <p className="font-display text-3xl tracking-tight text-paper sm:text-4xl">
            Omar Medhat
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
