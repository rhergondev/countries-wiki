import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./src/components/**/*.{html,js,tsx}",
    "./src/contexts/**/*.{html,js,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "16px"],
      lg: ["18px", "26px"],
      xl: ["24px", "26px"],
    },
    extend: {
      width: { "68": "16.5rem", "120": "30rem" },
      height: { "84": "21rem" },
      gap: { "18": "75px" },
      minWidth: { "68": "16.5rem" },
      colors: {
        "dm-dark-blue": "hsl(209, 23%, 22%)",
        "dm-very-dark-blue": "hsl(207, 26%, 17%)",
        "lm-very-dark-blue": "hsl(200, 15%, 8%)",
        "lm-dark-gray": "hsl(0, 0%, 52%)",
        "lm-light-gray": "hsl(0, 0%, 98%)",
      },
      screens: {
        sm: "350px",
      },
      backgroundImage: {
        "down-arrow": "url(/img/icons/down-arrow.png)",
      },
      backgroundSize: {
        "12": "12px",
      },
      backgroundPosition: {
        "right-6": " right 1.5rem center",
      },
    },
  },
  plugins: [],
} satisfies Config;
