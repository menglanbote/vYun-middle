import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  //开发服务器选项，参考：https://cn.vitejs.dev/config/server-options.html#server-host
  server: {
    port: 8081,
    open: true,
  },
  plugins: [
    vue(),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/index.less";`
      }
    }
  }
})
