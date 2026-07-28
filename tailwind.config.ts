import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#071B3B",
          navy: "#102B5A",
          coral: "#FF4D4D",
          light: "#F8FAFC",
          slate: "#0F172A",
          cardDark: "#0B2246",
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-clash)", "sans-serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 27, 59, 0.12)',
        'glow-coral': '0 0 35px -5px rgba(255, 77, 77, 0.4)',
        'glow-navy': '0 0 40px -5px rgba(16, 43, 90, 0.5)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
