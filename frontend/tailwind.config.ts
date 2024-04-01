import type { Config } from 'tailwindcss'
import * as colors from 'tailwindcss/colors'

// contrast values ensure proper text contrast if used with the same key on bg.
// EX: <div className='bg-primary-800 text-primary-contrast-800'></div>
const primary = {
    ...colors.blue,
    contrast: {
        '50': '#000000',
        '100': '#000000',
        '200': '#000000',
        '300': '#000000',
        '400': '#000000',
        '500': '#000000',
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
        '600': '#000000',
        '700': '#FFFFFF',
        '800': '#FFFFFF',
        '900': '#FFFFFF',
        '950': '#FFFFFF',
    },
}

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: primary,
                secondary: secondary,
            },
            spacing: {
                DEFAULT: '1.25rem',
            },
        },
    },
    plugins: [],
} satisfies Config
