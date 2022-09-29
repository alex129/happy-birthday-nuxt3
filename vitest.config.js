import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    root: '.',
    esbuild: {
        tsconfigRaw: '{}',
    },
    test: {
        environment: 'jsdom',
        deps: {
            inline: [/@nuxt\/test-utils-edge/],
        },
    },
    plugins: [
        vue()
    ]
})
