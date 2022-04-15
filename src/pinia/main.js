import { defineStore } from 'pinia'
import { loginApi } from '../apis/index'
import { message } from 'ant-design-vue';

export const useMainStore = defineStore('main',{
    state: () => {
        return {
            userInfo: {
                name: 'lisi',
            },
            includeList: [],
            menuList: []
        }
    },
    actions: {
        LOGIN_UP (params) {
            setTimeout( () => {
                message.success('登录成功')
                this.userInfo = params
            }, 2000)
        }
    },
    getters: {},
})