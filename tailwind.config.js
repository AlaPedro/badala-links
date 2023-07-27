/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gradientColors: {
                "gradient-radial-light":
                    "bg-gradient-to-tr from-pink-300 via-transparent to-pink-300",
                "gradient-radial-dark":
                    "bg-gradient-to-tr from-pink-900 via-black to-pink-900",
            },
            colors: {
                rose: "#ffb8ca",
                rosedark: "#ff6088",
            },
        },
    },
    plugins: [],
}
