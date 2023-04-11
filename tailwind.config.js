/** @type {import('tailwindcss').Config} */
module.export = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            fontSize: {
                sm: [
                    '14px',
                    {
                        lineHeight: '20px',
                        letterSpacing: '-0.01em',
                    }
                ],
                base: [
                    '16px',
                    {
                        lineHeight: '22.4px',
                        letterSpacing: '-0.01em'
                    }
                ],
            }
        },
    },
}