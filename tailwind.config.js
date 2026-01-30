/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            colors: {
                'brutalist-black': '#000',
                'brutalist-white': '#fff',
                'neon-green': '#cf0',
                'neon-blue': '#00f0ff',
                'neon-purple': '#bd00ff',
                'hot-pink': '#ff007a',
            },

            boxShadow: {
                brutalist: '4px 4px 0 var(--brutalist-black)'
            },

            fontFamily: {
                'space-grotesk': ['var(--font-space-grotesk)'],
                'jetbrains-mono': ['var(--font-jetbrains-mono)'],
                'courier-prime': ['var(--font-courier-prime)'],
                'caveat': ['var(--font-caveat)'],
            },

            animation: {
                'marquee': 'marquee 20s linear infinite',
                'vinyl-spin': 'vinyl-spin 4s linear infinite',
                'soundwave': 'soundwave 1s ease-in-out infinite',
                'blink': 'blink 1s step-end infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },

                'vinyl-spin': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },

                soundwave: {
                    '0%, 100%': { height: '4px' },
                    '50%': { height: '16px' },
                },

                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
        },
    },
    
    plugins: [],
};
