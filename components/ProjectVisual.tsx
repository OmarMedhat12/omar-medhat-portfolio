"use client";

interface ProjectVisualProps {
  projectId: string;
  accent: string;
  accentSecondary: string;
  className?: string;
}

export default function ProjectVisual({
  projectId,
  accent,
  accentSecondary,
  className = "",
}: ProjectVisualProps) {
  if (projectId === "dar-senosi") {
    return (
      <svg
        viewBox="0 0 800 520"
        className={className}
        role="img"
        aria-label="Generative mashrabiya lattice inspired by Dar Senosi"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ds-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c1612" />
            <stop offset="55%" stopColor="#2a2118" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
          </linearGradient>
          <pattern
            id="ds-lattice"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M24 0 L48 24 L24 48 L0 24 Z"
              fill="none"
              stroke={accentSecondary}
              strokeOpacity="0.35"
              strokeWidth="1"
            />
            <circle
              cx="24"
              cy="24"
              r="3"
              fill={accent}
              fillOpacity="0.55"
            />
          </pattern>
        </defs>
        <rect width="800" height="520" fill="url(#ds-bg)" />
        <rect width="800" height="520" fill="url(#ds-lattice)" />
        <rect
          x="120"
          y="70"
          width="560"
          height="380"
          fill="none"
          stroke={accentSecondary}
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        <rect
          x="160"
          y="110"
          width="480"
          height="300"
          fill="none"
          stroke={accent}
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <path
          d="M400 140 L520 260 L400 380 L280 260 Z"
          fill={accent}
          fillOpacity="0.18"
          stroke={accentSecondary}
          strokeWidth="1.5"
        />
        <circle
          cx="400"
          cy="260"
          r="36"
          fill="none"
          stroke={accentSecondary}
          strokeWidth="1.5"
        />
        <text
          x="400"
          y="460"
          textAnchor="middle"
          fill="#fdfaf2"
          fillOpacity="0.55"
          fontFamily="Georgia, serif"
          fontSize="14"
          letterSpacing="4"
        >
          ARCHITECTURAL HERITAGE
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 800 520"
      className={className}
      role="img"
      aria-label="Generative multi-brand geometry inspired by RHB Hospitality"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="rhb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14110f" />
          <stop offset="100%" stopColor="#1b1917" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#rhb-bg)" />
      <rect x="0" y="0" width="800" height="8" fill={accent} />
      <rect
        x="64"
        y="72"
        width="200"
        height="280"
        fill={accent}
        fillOpacity="0.9"
      />
      <rect
        x="300"
        y="120"
        width="200"
        height="280"
        fill={accentSecondary}
        fillOpacity="0.85"
      />
      <rect
        x="536"
        y="88"
        width="200"
        height="280"
        fill="#9c95f4"
        fillOpacity="0.75"
      />
      <path
        d="M64 400 H736"
        stroke="#f4f3e9"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          cx={120 + i * 140}
          cy="440"
          r="4"
          fill="#f4f3e9"
          fillOpacity="0.35"
        />
      ))}
      <text
        x="64"
        y="56"
        fill="#f4f3e9"
        fillOpacity="0.5"
        fontFamily="system-ui, sans-serif"
        fontSize="12"
        letterSpacing="3"
      >
        PARENT · BAB ALSALAM · BAHI
      </text>
      <text
        x="64"
        y="490"
        fill="#f4f3e9"
        fillOpacity="0.4"
        fontFamily="system-ui, sans-serif"
        fontSize="12"
        letterSpacing="2"
      >
        LTR / RTL · 375 · 768 · 1440
      </text>
    </svg>
  );
}
