import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10151A",
          soft: "#141B22",
        },
        surface: {
          DEFAULT: "#171E26",
          high: "#1F2733",
        },
        line: "#29323D",
        signal: {
          DEFAULT: "#F2A63A",
          dim: "#C98A2E",
          soft: "rgba(242, 166, 58, 0.14)",
        },
        pulse: {
          DEFAULT: "#5EE6B0",
          soft: "rgba(94, 230, 176, 0.14)",
        },
        ivory: {
          DEFAULT: "#EDEFEF",
          muted: "#8B94A0",
          faint: "#5B6472",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 2.6vw, 2.1rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        prose: "38rem",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.05)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        rise: "rise 0.6s cubic-bezier(0.16,1,0.3,1) both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
