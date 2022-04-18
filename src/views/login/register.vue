/*
 * @Author: xuwei
 * @Date: 2022-04-15 17:49:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-04-15 18:01:08
 * @Description: 注册
*/

<template>
    <div class="register-container">
        <a-form 
        :model="registRef" 
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
            <a-form-item label="确认密码" name="Apassword">
                <a-input v-model:value="loginForm.Apassword" placeholder="请再次输入密码" type="password"></a-input>
            </a-form-item>
            <a-form-item label="">
                <a-button type="primary" @click="comfirm">确认</a-button>
                <a-button @click="cancel">取消</a-button>
            </a-form-item>
        </a-form>    
    </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
export default {
    setup () {
        const state = reactive({
            registForm: {
                username: '',
                password: '',
                APassword: '',
            }
        })
        const router = useRouter()
        const registRef = ref()
        const rules = {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
            ],
            APassword: [
                { required: true, message: '请输入确认密码', trigger: 'blur' },
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' },
                { validator: (rule, value, callback) => {
                    if (value === state.registForm.password) {
                        callback()
                    } else {
                        callback(new Error('两次密码输入不一致'))
                    }
                }, trigger: 'blur' }
            ]
        }
        // 注册
        const comfirm = () => {
            this.$refs.registRef.validate(valid => {
                if (valid) {
                    message.success('注册成功')
                    router.go(-1)
                } else {
                    message.warning('请检查输入')
                }
            })
        }
        // 取消
        const cancel = () => {
            this.$refs.registRef.resetFields()
            router.go(-1)
        }
        return {
            ...toRefs(state),
            rules,
            registRef,
            comfirm,
            cancel

        }
    }
}
</script>

<style lang="less" scoped>

</style>