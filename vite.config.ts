import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// import { viteMockServe } from 'vite-plugin-mock'
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';


//     // proxy: {
//     //   '/api': {
//     //     target:,
//     //     changeOrigin: true,
//     //     rewrite: (path) => path.replace(/^\/api/, '')
//     //   }
//     // }


export default defineConfig(({ mode }) => {
  // mode模式字符串，process.cwd()项目 根目录
  // 返回值 import.meta.env
  const env = loadEnv(mode, process.cwd());
  return {
    //base: 'mxg',
    // 开发环境有效（生产环境无效），参考：https://cn.vitejs.dev/config/server-options.html
    server: {
      port: 8081, // 端口号
      open: true, //启动项目自动打开浏览器访问
      host: '0.0.0.0', // 开放给所有ip访问此项目
      proxy: {
        // 匹配以`/dev-api`开头的请求，交给代理服务器转发到目标接口
        //'/dev-api': {
        [env.VITE_APP_BASE_API]: {  // key是变量要加中括号[]
          // 代理后的目标地址
          //target: 'https://mock.mengxuegu.com/mock/64fa8039e70b8004a69ea036/mxg-vue3-elementplus',
          target: env.VITE_APP_SERVICE_URL,
          // /dev-api/test 去除/dev-api，变成/test 最终变成https://mock.mengxuegu.com/mock/64fa8039e70b8004a69ea036/mxg-vue3-elementplus/test
          //rewrite: (path) => path.replace(/^\/dev-api/, ''),
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}/`), ''),
          // 开启代理
          changeOrigin: true,
        }
      }
    },
    plugins: [
      vue(),
      WindiCSS(),
      vueSetupExtend(), // 使用 <script setup name="xx"> 上name作为缓存组件名
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
  }
});