const plugin = require("tailwindcss/plugin")
const { fontFamily } = require("tailwindcss/defaultTheme")

/**
 * @type {import('tailwindcss').Config}
 **/
module.exports = {
  presets: [require("./tailwind.blog.preset.js")],
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",

    // TODO: remove
    // "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),

    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]')
      addVariant("radix-side-bottom", '&[data-side="bottom"]')
    }),

    // TODO: remove
    // require("@headlessui/tailwindcss"),
    // require("@downwindcss/easings"),
    // require("flowbite/plugin"),
    // require("flowbite-typography"),
  ],
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
        sans: ["var(--font-sans)", ...fontFamily.sans],

        // display: ["var(--font-sf)", "system-ui", "sans-serif"],
        // default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      // borderRadius: {
      //   lg: `var(--radius)`,
      //   md: `calc(var(--radius) - 2px)`,
      //   sm: "calc(var(--radius) - 4px)",
      // },
      animationDuration: {
        "2.2s": "2.2s",
      },
      transitionDuration: {
        220: "220ms",
      },
      animation: {
        // Accordion
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // AnimatedButton
        "bg-wave": "bg-wave 2.2s ease-in-out infinite",

        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",

        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Accordion
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },

        // AnimatedButton
        "bg-wave": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },

        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
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
      },
      cursor: {
        "dark-pen":
          "url(/static/cursors/pen-cursor-dark-36x36.png) 0 28, crosshair",
        "light-pen":
          "url(/static/cursors/pen-cursor-light-36x36.png) 0 28, crosshair",
      },
    },
  },
}
