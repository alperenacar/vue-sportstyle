const plugin = require('tailwindcss/plugin');
module.exports = {

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        extend: {
            screens: {
                '3xs': { 'max': '320px' },
                '2xs': { 'max': '375px' },
                'xs': { 'max': '425px' },
            },
            fontFamily: {
                roboto: ['Roboto'],
            },
            backgroundImage: {
                'abonelik': "url('../img/abonelik.jpg')",
                'yuruyus': "url('../img/yuruyus.png')",
                'h-yuruyus': "url('../img/yuruyus_hover.png')",
                'salon': "url('../img/spor_salon.png')",
                'h-salon': "url('../img/spor_salon_hover.png')",
                'crenkli': "url('../img/cok_renkli.png')",
                'h-crenkli': "url('../img/cok_renkli_hover.png')",
                'zrenkli': "url('../img/zit_renkli.png')",
                'h-zrenkli': "url('../img/zit_renkli_hover.png')",
                'trenkli': "url('../img/tek_renkli.png')",
                'h-trenkli': "url('../img/tek_renkli_hover.png')",
                'krenkli': "url('../img/koyu_renkli.png')",
                'h-krenkli': "url('../img/koyu_renkli_hover.png')",
                'arenkli': "url('../img/acik_renkli.png')",
                'h-arenkli': "url('../img/acik_renkli_hover.png')",
                'isinsan': "url('../img/isinsan.png')",
                'h-isinsan': "url('../img/isinsan_hover.png')",
                'doga': "url('../img/doga.png')",
                'h-doga': "url('../img/doga_hover.png')",
                'spor': "url('../img/spor.png')",
                'h-spor': "url('../img/spor_hover.png')",
                'basket': "url('../img/basketbol.png')",
                'h-basket': "url('../img/basketbol_hover.png')",
                'futbol': "url('../img/futbol.png')",
                'h-futbol': "url('../img/futbol_hover.png')",
                'tenis': "url('../img/tenis.png')",
                'h-tenis': "url('../img/tenis_hover.png')",
                'fitnes': "url('../img/fitness.png')",
                'h-fitnes': "url('../img/fitness_hover.png')",
                'kosu': "url('../img/kosu.png')",
                'h-kosu': "url('../img/kosu_hover.png')",
                'plates': "url('../img/plates.png')",
                'h-plates': "url('../img/plates_hover.png')",
                'tn-nav': "url('../img/tn-nav.jpg')",
                'tn-nav-mbl': "url('../img/tt-nav-mbl.png')",
                'cc-nav': "url('../img/cc-nav.jpg')",
                'cc-nav-mbl': "url('../img/cc-nav-mbl.png')",
                'tt-urn-card': "url('../img/tt-urunKart.png')",
                'cc-urn-card': "url('../img/cc-urunKarti.png')",
                'tt-indirim': "url('../img/tt-indirim.png')",
                'fb-indirim': "url('../img/fb-indirim.png')",
                'fb-urn-card': "url('../img/fb-urunKarti.png')",
                'fb-nav': "url('../img/fb-nav.png')",
                'fb-nav-mbl': "url('../img/fb-nav-mbl.png')",
                'bb-urn-card': "url('../img/bb-urunKarti.png')",
                'bb-nav': "url('../img/bb-nav.png')",
                'bb-nav-mbl': "url('../img/bb-nav-mbl.png')",
            },
            fontSize: {
                "s-6": '0.375rem', //6px
                "s-7": '0.438rem', //7px
                "s-8": '0.5rem', //8px
                "s-9": '0.563rem', //9px
                "s-10": '0.625rem', //10px
                "s-11": '0.688rem', //11px
                "s-12": '0.75rem', //12px
                "s-13": '0.813rem', //13rem
                "s-14": '0.875rem', //14px
                "s-16": '1rem', //16px
                "s-18": '1.125rem', //18px
                "s-19": '1.1875rem', //19px
                "s-20": '1.25rem', //20px
                "s-22": '1.375rem', //22px
                "s-24": '1.5rem', //24px
                "s-28": '1.75rem', //28px
                "s-36": '2.25rem', //36px  
                "s-48": '3rem', //48
                "s-64": '4rem', //64
            },
            zIndex: {
                9999: "9999",
            },
            colors: {
                'indrm-red': '#e72525',
                'old-prc-gray': '#a8a8a8',
                'c-58': '#585858',
                'c-aa': '#aaaaaa',
                'c-97': "#979797",
                'c-mtabs': "#495057",
                "alertw-c": "#856404",
                "alertg-c": "#0c5460",
                "cc-fiyat": "#d0b692",
                "fb-card": "#493c10",
            },
        },
        gridTemplateRows: {
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
        },
        backgroundColor: (theme) => ({
            ...theme("colors"),
            "main-gray": "#f8f8f8",
            "btn-green": "#67c542",
            "second-gray": "#ededed",
            "rgreen": "#169f8d",
            "rred": "#ff4949",
            "rgray": "#989898",
            "igreen": "#59d76d",
            "bg-e0": "#e0e0e0",
            "bg-f4": "#f4f4f4",
            "bg-f6": "#f6f6f6",
            "alertw-b": "#fff3cd",
            "alertg-b": "#d1ecf1",
            "bg-b9": "#b9b9b9",
            "bg-grn": "#68c543",
            "indirim-bg": "#28a745",
        }),
        borderColor: (theme) => ({
            ...theme("colors"),
            "brd-f8": "#f8f8f8",
            "brd-de": "#dedede",
            "brd-b9": "#b9b9b9",
            "brd-aa": "#aaaaaa",
            "brd-grn": "#68c543",
            "alertg-brd": "#bee5eb",
        }),

    },
    variants: {
        extend: {
            backgroundColor: ['label-checked'],
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        plugin(({ addVariant, e }) => {
            addVariant('label-checked', ({ modifySelectors, separator }) => {
                modifySelectors(
                    ({ className }) => {
                        const eClassName = e(`label-checked${separator}${className}`); // escape class
                        const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
                        return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
                    }
                )
            })
        }),
        function({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "640px",
                    },
                    "@screen md": {
                        maxWidth: "768px",
                    },
                    "@screen lg": {
                        maxWidth: "1024px",
                    },
                    "@screen xl": {
                        maxWidth: "1440px",
                    },
                    "@screen 2xl": {
                        maxWidth: "1920px",
                    },
                },
            });
        },
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('tw-elements/dist/plugin')
    ],
}