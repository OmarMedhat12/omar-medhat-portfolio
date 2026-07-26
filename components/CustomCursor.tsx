"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useSpring(1, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], [data-cursor='hover']"
      );
      setHovering(Boolean(interactive));
      scale.set(interactive ? 2.4 : 1);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      style={{
        x,
        y,
        scale,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div
        className={`h-2.5 w-2.5 rounded-full bg-paper transition-opacity duration-200 ${
          hovering ? "opacity-100" : "opacity-80"
        }`}
      />
    </motion.div>
  );
}
