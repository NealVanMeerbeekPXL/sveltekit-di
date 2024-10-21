import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import globalconfig from "../../eslint.config.mjs";

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...globalconfig,
    ...svelte.configs["flat/recommended"],
    {
        files: ["**/*.svelte"],
        languageOptions: {
            parserOptions: {
                parser: ts.parser,
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        rules: {
            // Add this rule to silence errors related to reactive declarations
            "svelte/no-reactive-literals": "off",
            "no-undef": "off", // Optional: This prevents '$' variables from being marked as undefined
        },
    },
    {
        ignores: [
            "**/build/",
            "**/.svelte-kit/",
            "**/dist/",
            "**/generated/",
        ],
    },
];
