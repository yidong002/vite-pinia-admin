import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression  from 'vite-plugin-compression' // gzip 压缩代码
import postcssImport from 'postcss-import'
import cssnano from 'cssnano'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    postcss: {},
    // css 预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/index.less";'
      }
    }
  },
  build: {

  },
  plugins: [
    vue(),
    viteCompression(),
    visualizer(),
    postcssImport,
    cssnano
  ]
})
