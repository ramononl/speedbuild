module.exports = {
  theme: {
    fontFamily: {
      sans: ["Noto\\ Sans", "system-ui", "BlinkMacSystemFont", "-apple-system", "Segoe UI", "sans-serif"],
      serif: ["Constantia", "Lucida Bright", "Lucidabright", "Lucida Serif", "Lucida", "serif"],
      mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [require("tailwindcss-transitions")()]
};
