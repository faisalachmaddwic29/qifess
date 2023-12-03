// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: { enabled: true },
    // typescript: { shim: false },
    build: { transpile: ["vuetify"] },
    css: ["vuetify/styles", "@/assets/main.scss"],
    // sourcemap: { server: false, client: false },
    modules: [
        "@nuxtjs/google-fonts",
        "nuxt-icon",
        async (options: any, nuxt: any) => {
            nuxt.hooks.hook("vite:extendConfig", (config: any) => {
                config.plugins?.push(
                    vuetify({
                        autoImport: true,
                        styles: {
                            configFile: "assets/settings.scss",
                        },
                    })
                );
            });
        },
    ],
    vite: {
        ssr: {
            noExternal: ["vuetify"], // add the vuetify vite plugin
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    googleFonts: {
        families: {
            Quicksand: [200, 300, 400, 500, 600, 700, 800, 900],
        },
        download: true,
        useStylesheet: true,
    },
});
