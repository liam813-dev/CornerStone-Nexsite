// ESLint Flat Config for Next.js + TypeScript + Prettier
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
// Import Next config safely; some versions expect legacy config.
let next;
try {
  // eslint-config-next exports a flat config in v15+
  next = (await import("eslint-config-next")).default;
} catch {
  next = [];
}
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/dist/**", "**/out/**"]
  },
  js.configs.recommended,
  // TypeScript rules (flat config helper not provided by plugin; compose manually)
  {
    languageOptions: {
      parser: tsparser,
      parserOptions: { project: false, ecmaFeatures: { jsx: true } }
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      // Use non-type-checked rules for speed and to avoid TS project setup
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.stylistic.rules
    }
  },
  ...(Array.isArray(next) ? next : [next]).filter(Boolean),
  {
    plugins: { react: reactPlugin, "react-hooks": reactHooks },
    settings: { react: { version: "detect" } },
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  },
  prettier
];
