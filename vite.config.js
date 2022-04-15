import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression  from 'vite-plugin-compression' // gzip 压缩代码
import postcssImport from 'postcss-import'
import cssnano from 'cssnano'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';



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
    postcss: {
      plugins: [
        postcssImport,
        cssnano
      ]
    },
    // css 预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/index.less";'
      }
    }
  },
  build: {
    assetsDir: './static',
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: true,  //打包时删除console
        drop_debugger: true, //打包时删除 debugger
        pure_funcs: ['console.log'],
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
          // vue: ['vue', 'vue-router', 'vuex'],
          // vant: ['vant'],
          // echarts: ['echarts'],
          // echarts: ['echarts'],
        },
      },
    },
    brotliSize: false,
  },
  plugins: [
    vue(),
    viteCompression(),
    visualizer(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
})
