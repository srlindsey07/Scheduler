import type { Config } from 'tailwindcss'
import * as colors from 'tailwindcss/colors'

// contrast values ensure proper text contrast if used with the same key on bg.
// EX: <div className='bg-primary-800 text-primary-contrast-800'></div>
const primary = {
    ...colors.blue,
    DEFAULT: colors.blue[700],
    contrast: {
        '50': '#000000',
        '100': '#000000',
        '200': '#000000',
        '300': '#000000',
        '400': '#000000',
        '500': '#FFFFFF',
        DEFAULT: '#FFFFFF',
        '600': '#FFFFFF',
        '700': '#FFFFFF',
        '800': '#FFFFFF',
        '900': '#FFFFFF',
        '950': '#FFFFFF',
    },
}

const secondary = {
    ...colors.lime,
    DEFAULT: colors.lime[500],
    contrast: {
        '50': '#000000',
        '100': '#000000',
        '200': '#000000',
        '300': '#000000',
        '400': '#000000',
        '500': '#000000',
        DEFAULT: '#000000',
        '600': '#000000',
        '700': '#FFFFFF',
        '800': '#FFFFFF',
        '900': '#FFFFFF',
        '950': '#FFFFFF',
    },
}

const smoke = {
    '100': 'rgba(0,0,0,0.1)',
    '200': 'rgba(0,0,0,0.2)',
    '300': 'rgba(0,0,0,0.3)',
    '400': 'rgba(0,0,0,0.4)',
    '500': 'rgba(0,0,0,0.5)',
    '600': 'rgba(0,0,0,0.6)',
    '700': 'rgba(0,0,0,0.7)',
    '800': 'rgba(0,0,0,0.8)',
    '900': 'rgba(0,0,0,0.9)',
}

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [
        {
            pattern: /grid-cols-./,
        },
        {
            pattern: /grid-rows-./,
        },
        {
            pattern: /col-start-./,
        },
        {
            pattern: /row-start-./,
        },
        {
            pattern: /^row-start-(1[0-6]|[2-9])$/,
        },
        {
            pattern: /row-end-./,
        },
        {
            pattern: /row-span-./,
        },
        {
            pattern: /^row-span-(1[0-6]|[2-9])$/,
        },
        {
            pattern: /max-h-./,
        },
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'show 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'fade-out': 'hide 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
            },
            keyframes: {
                show: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(min(100px, 5vh))',
                    },
                    '100%': { opacity: '1', transform: 'translateY(0%)' },
                },
                hide: {
                    '0%': { opacity: '1', transform: 'translateY(0%)' },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(min(100px, 5vh))',
                    },
                },
            },
            colors: {
                primary: primary,
                secondary: secondary,
                smoke: smoke,
            },
            spacing: {
                DEFAULT: '1.25rem' /* *-5, 20px */,
                '12.5': '3.125rem',
                '13': '3.25rem',
            },
            // Extend the use of row-span-* from 12 to 288
            gridRow: Object.fromEntries(
                Array(276)
                    .fill(null)
                    .map((_, i) => {
                        const span = i + 12 // 12 is currently the max that tailwind supports on row-span-*
                        return [`span-${span}`, `span  ${span} / span ${span}`]
                    }),
            ),
            gridRowStart: Object.fromEntries(
                Array(276)
                    .fill(null)
                    .map((_, i) => {
                        const row = i + 12 // 12 is currently the max that tailwind supports on row-span-*
                        return [row.toString(), row.toString()]
                    }),
            ),
        },
    },
    plugins: [],
} satisfies Config
