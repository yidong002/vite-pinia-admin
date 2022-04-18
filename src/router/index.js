import { createRouter, createWebHistory } from 'vue-router'

// 引入路由配置
const Layout = () => import('@/layout/index.vue')
const Login = () => import('@/views/login/index.vue')
const Register = () => import('@/views/login/register.vue')
const page403 = () => import('../views/errorPages/403.vue')
const Demo1 = () => import('@/views/demo/demo1.vue')

// 功能页面路由表单
const pageRoutes = [
    {
        path: '/demo1',
        name: 'demo1',
        component: Demo1,
    }
]

// 路由表单
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/403',
        name: '403',
        component: page403,
    },
    {
        path: '/home',
        name: 'home',
        component: Layout,
        children: [...pageRoutes]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: [...routes]
})

export default router