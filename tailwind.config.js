/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                kilo: {
                    black: '#0e0e0e',
                    accent: '#e2ff6f', // Pale yellow-green
                    accentHover: '#d4f55a',
                    slate: '#1a1a1a',
                    border: '#2a2a2a',
                    textMuted: '#9a9a9a',
                },
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'accent-glow': '0 0 20px rgba(226, 255, 111, 0.4)',
                'accent-glow-intense': '0 0 40px rgba(226, 255, 111, 0.6)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}
