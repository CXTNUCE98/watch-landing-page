import type { UserConfig } from "unocss";
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export const unoConfig: UserConfig = {
  theme: {
    colors: {
      gold: {
        50: "#FFF9E6",
        100: "#FFF0BF",
        200: "#FFE699",
        300: "#FFD966",
        400: "#FFCC33",
        500: "#D4AF37",
        600: "#B8860B",
        700: "#996515",
        800: "#7A4B0A",
        900: "#5C3A0A",
      },
      primary: {
        DEFAULT: "#1A1A1A",
        light: "#2D2D2D",
        dark: "#0A0A0A",
      },
      accent: {
        DEFAULT: "#D4AF37",
        light: "#FFD700",
        dark: "#B8860B",
      },
      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
        950: "#020617",
      },
    },
    boxShadow: {
      gold: "0 4px 20px 0 rgba(212, 175, 55, 0.3)",
      "gold-lg": "0 10px 40px 0 rgba(212, 175, 55, 0.4)",
    },
  },
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    [
      "btn-primary",
      "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-primary px-8 py-3 rounded-none font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-gold hover:scale-[1.02] active:scale-[0.98] flex-center gap-2",
    ],
    [
      "btn-secondary",
      "border-2 border-gold-500 text-gold-500 px-8 py-3 rounded-none font-semibold tracking-wider uppercase hover:bg-gold-500 hover:text-primary transition-all duration-300 flex-center gap-2",
    ],
    [
      "btn-ghost",
      "text-white px-8 py-3 font-semibold tracking-wider uppercase hover:text-gold-400 transition-colors flex-center gap-2",
    ],
    [
      "luxury-card",
      "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden group hover:border-gold-500 transition-all duration-500",
    ],
    [
      "section-title",
      "text-4xl md:text-6xl font-bold tracking-tight",
    ],
    [
      "glass-effect",
      "backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10",
    ],
    ["text-gradient-gold", "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent"],
  ],
  presets: [
    presetTypography(),
    presetAttributify(),
    presetIcons({
      warn: true,
      collections: {
        ep: () =>
          import("@iconify-json/ep/icons.json").then((i) => i.default as any),
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then(
            (i) => i.default as any
          ),
      },
    }),
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Inter",
          weights: ["300", "400", "500", "600", "700"],
        },
        heading: {
          name: "Playfair Display",
          weights: ["400", "500", "600", "700", "800", "900"],
        },
        elegant: {
          name: "Cormorant Garamond",
          weights: ["300", "400", "500", "600", "700"],
        },
      },
    }),
  ],
  safelist: [
    "animate-fade-in-up",
    "animate-fade-in-down",
    "animate-scale-in",
    "animate-slide-in-left",
    "animate-slide-in-right",
    "animate-float",
    "animate-shimmer",
    "animate-parallax-slow",
    "animate-glow",
  ],
  rules: [
    ["break-word", { "word-break": "break-word" }],
    ["text-shadow-sm", { "text-shadow": "0 1px 2px rgba(0,0,0,0.1)" }],
    ["text-shadow", { "text-shadow": "0 2px 4px rgba(0,0,0,0.2)" }],
    ["text-shadow-lg", { "text-shadow": "0 4px 8px rgba(0,0,0,0.3)" }],
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  preflights: [
    {
      getCSS: () => `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes parallaxSlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out both; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out both; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out both; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out both; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out both; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        .animate-parallax-slow { animation: parallaxSlow 8s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-rotate-360 { animation: rotate360 20s linear infinite; }
        .animate-hero-zoom { animation: heroZoom 1.5s ease-out both; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #D4AF37 #1A1A1A;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #1A1A1A;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 4px;
        }
      `,
    },
  ],
};

export default defineConfig(unoConfig);
