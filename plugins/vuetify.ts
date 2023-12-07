import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myTheme = {
    dark: false,
    colors: {
        // background: "#FFFFFF",
        // surface: "#FFFFFF",
        primary: "#204176",
        "primary-dark-1": "#1D3253",
        "primary-light-1": "#3f6ad8",
        "border-primary": "#0088ca",
        content: "#f1f4f6",
        "text-label": "#666666",
        // "primary-darken-1": "#3700B3",
        // secondary: "#03DAC6",
        // "secondary-darken-1": "#018786",
        error: "#DD1818",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
    },
};

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: false,
        components: {
            directives,
            components,
        },
        defaults: {
            VTextField: {
                variant: "outlined",
                color: "primary",
            },
        },
        theme: {
            defaultTheme: "myTheme",
            themes: {
                myTheme,
            },
        },
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                mdi,
            },
        },
        // icons: {
        //     defaultSet: "custom",
        //     sets: {
        //         custom,
        //     },
        //     aliases,
        // },
    });
    nuxtApp.vueApp.use(vuetify);
});
