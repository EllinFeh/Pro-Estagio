const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graymain: "#EFEFEF",
        background: "var(--background)",
        foreground: "var(--foreground)",
        verdemain:"#76CE34",
        preto:"#1E1E1E",
        verdeoff:"#568831",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
