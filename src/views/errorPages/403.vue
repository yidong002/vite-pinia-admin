/*
 * @Author: mikey.zhaopeng 
 * @Date: 2022-04-18 09:28:29 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-04-18 10:01:42
 * @Description: 没有访问权限
*/
<template>
    <div>
        <h1>403 页面</h1>
        <el-button type="primary" @click="back">返回</el-button>
    </div>
</template>

<script setup>
import router from '@/router'

const back = () => {
    router.push({
        name: 'home'
    })
}
console.log(router, '路由')
</script>

<style lang="less" scoped>

</style>