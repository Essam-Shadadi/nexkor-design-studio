module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended", "prettier"],
  plugins: ["@typescript-eslint", "tailwindcss"],
  rules: {
    "tailwindcss/no-custom-classname": "off",
  },
};
