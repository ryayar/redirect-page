// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/eslint',
        '@primevue/nuxt-module',
    ],
    css: ['@/assets/styles/global.css',],
    app: {
        head: {
            meta: [
                {name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}
            ],
            script: [
                {
                    src: 'https://telegram.org/js/telegram-web-app.js',
                    defer: true,
                    tagPosition: 'bodyClose',
                },
            ],
            titleTemplate: 'Бот наблюдатель за подписчиками',
        }
    },
    primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura
            }
        }
    },
})