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

console.log('hello world', import.meta.env.VITE_APP_TITLE)