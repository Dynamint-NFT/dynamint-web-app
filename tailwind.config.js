const purgeEnabled = process.env.NODE_ENV === "production";

console.log(`\n TailwindCS ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-dark": "#1B025F",
        "pink-light": "#F257F2",
        "pink-dark": "#F038F0",
        "indigo-dark": "#10003B",
        "green-light": "#20FF93",
      },
      fontFamily: {
        body: ["Roboto"],
        title: ["Monoton"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};