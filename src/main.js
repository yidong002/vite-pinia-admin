import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import lazyPlugin from 'vue3-lazy'

const app = createApp(App)
// pinia 注册
app.use(createPinia())

// lazyPlugin 注册
// app.use(lazyPlugin, {
//     loading: './assets/loading.svg',
//     error: './assets/error.svg'
// })

app.mount('#app')

console.log('hello world', import.meta.env.MODE, '当前环境')
console.log('hello world', import.meta.env.VITE_APP_TITLE, '当前环境90909')
console.log('hello world', import.meta.env.PROD, '判断当前是否是生产环境')
console.log('hello world', import.meta.env.DEV, '判断当前是否是开发环境')
console.log(import.meta.env.VITE_API_URL, '当前环境的baseUrl')