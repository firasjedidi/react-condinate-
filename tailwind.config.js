module.exports = {
    mode: "jit",
    purge: [
        "./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#0079FF',
            'silver': '#F4F8FA',
            'bubble-gum': '#ff77e9',
            'bermuda': '#1B31A8',
            'in': '#E9EEF2'
        },
        screens: {
            mobile: "640px",
            tablet: "960px",
            desktop: "1280px"
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem"
            }
        },
        variants: {
            extend: {}
        },
        plugins: []
    }
}
