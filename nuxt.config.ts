// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    devtools: { enabled: true },
    build: { transpile: ["vuetify"] },
    css: ["vuetify/styles", "@/assets/main.scss"],
    nitro: {
        imports: {
            dirs: ["types/*.ts"],
        },
    },
    // sourcemap: { server: false, client: false },
    modules: [
        "@pinia/nuxt",
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
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use './assets/settings.scss' as *;`,
                },
            },
        },
    },
    googleFonts: {
        families: {
            Quicksand: [300, 400, 500, 600, 700, 800, 900],
        },
        download: true,
        useStylesheet: true,
    },
    experimental: {
        inlineSSRStyles: false,
    },
});
