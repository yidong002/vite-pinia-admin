/*
 * @Author: mikey.zhaopeng 
 * @Date: 2022-04-15 11:30:03 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-04-15 18:02:30
 * @Description: 登录页面
 */
<template>
    <div class="login-container">
        <a-form 
        :model="loginForm" 
        ref="loginRef"
        :style="{width: '400px'}"
        :label-col="{span: 3, offset: 2}" 
        :wrapper-col="{ span: 20 }"
        :rules="rules"
        :hideRequiredMark="true"
        layout="horizontal">
            <a-form-item label="用户名" name="username">
                <a-input v-model:value="loginForm.username" placeholder="请输入用户名"></a-input>
            </a-form-item>
            <a-form-item label="密码" name="password">
                <a-input v-model:value="loginForm.password" placeholder="请输入密码" type="password"></a-input>
            </a-form-item>
            <a-form-item label="">
                <a-button type="primary" @click="login">登录</a-button>
                <a-button @click="register">注册</a-button>
            </a-form-item>
        </a-form>        
    </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import { useMainStore } from '@/pinia/main';
import { useRouter } from 'vue-router';

const state = reactive({
    loginForm: {
        username: '',
        password: '',
    }
})
const router = useRouter();
// pinia 状态管理器
const mainStore = useMainStore()
const loginRef = ref()
// 表单验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
    ]
}

// 登录
const login = () => {
    // 触发校验
    loginRef.value.validate()
    .then( async () => {
        await mainStore.LOGIN_UP({
            name: state.loginForm.username,
            password: state.loginForm.password
        })
        router.push('/home')
    })
}
// 注册
const register = () => {
    router.push('/register')
}

const { loginForm } = toRefs(state)
</script>

<style lang="less" scoped>
.login-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}
</style>