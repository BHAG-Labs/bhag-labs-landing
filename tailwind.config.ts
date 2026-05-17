import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
        subheading: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          warm: "hsl(var(--terracotta-warm))",
        },
        ochre: {
          DEFAULT: "hsl(var(--ochre))",
        },
        forest: {
          DEFAULT: "hsl(var(--forest))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
        },
        "dusty-rose": {
          DEFAULT: "hsl(var(--dusty-rose))",
        },
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          soft: "hsl(var(--charcoal-soft))",
        },
        cream: {
          DEFAULT: "hsl(var(--cream))",
          soft: "hsl(var(--cream-soft))",
          dark: "hsl(var(--cream-dark))",
          darker: "hsl(var(--cream-darker))",
        },
        product: {
          neev: "hsl(var(--product-neev))",
          hissa: "hsl(var(--product-hissa))",
          pitchwala: "hsl(var(--product-pitchwala))",
          yantra: "hsl(var(--product-yantra))",
          bazaar: "hsl(var(--product-bazaar))",
          runway: "hsl(var(--product-runway))",
        },
      },
      letterSpacing: {
        eyebrow: "0.22em",
        button: "0.08em",
      },
      transitionTimingFunction: {
        enter: "cubic-bezier(0.16, 1, 0.3, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
