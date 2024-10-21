import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import themes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,svelte,js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [
        daisyui,
        typography,
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...themes["[data-theme=light]"],
                    "primary": "#3661ff",
                    "primary-content": "#fff",

                    "secondary": "#99ff78",
                    "secondary-content": "#333",

                    "accent": "#ff3041",
                    "accent-content": "#fff",

                    "base-100": "#ffffff",
                    "base-200": "#f8f8f8",
                    "base-300": "#e7e7e7",

                    "neutral": "#232323",
                    "neutral-focus": "#ccc",
                    "neutral-content": "#ddd",

                    "info": "#06b6d4",
                    "success": "#10b981",
                    "warning": "#fb923c",
                    "error": "#dc2626",

                    "--rounded-box": "5px",
                    "--rounded-btn": "5px",
                    "--rounded-badge": "5px",
                },
            },
        ],
    },
};

