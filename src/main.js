import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router  from '@/router'
import lazyPlugin from 'vue3-lazy'
import '@/style/index.less'
import { registerComponent } from '@/utils/registerUI'

const app = createApp(App)
// 路由注册
app.use(router)
// pinia 注册
app.use(createPinia())
// 注册antd组件
registerComponent(app)

// lazyPlugin 注册
// app.use(lazyPlugin, {
//     loading: './assets/loading.svg',
//     error: './assets/error.svg'
// })

app.mount('#app')

console.log(import.meta.env.MODE, '当前环境')
console.log(import.meta.env.VITE_APP_TITLE, '当前环境90909')
console.log(import.meta.env.PROD, '判断当前是否是生产环境')
console.log(import.meta.env.DEV, '判断当前是否是开发环境')
console.log(import.meta.env.VITE_BASE_API, '当前环境的baseUrl')