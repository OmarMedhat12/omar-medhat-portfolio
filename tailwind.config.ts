import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0e0d0c",
          soft: "#1a1816",
          mute: "#2a2623",
        },
        paper: {
          DEFAULT: "#f3efe8",
          dim: "#c9c2b6",
          faint: "#8a847a",
        },
        petrol: {
          DEFAULT: "#3d6b75",
          bright: "#5a8f9a",
          deep: "#2a4f57",
        },
        ember: {
          DEFAULT: "#c45c3a",
          soft: "#d4785a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
