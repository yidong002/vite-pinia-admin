<template>
    <div class="head-item">
        <div class="use-info">
            <span>{{mainStore.userInfo.name || 'liss'}} </span> &nbsp;
            <UserOutlined /> 
        </div>
        <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-sub-menu>
                <template #icon>
                    <setting-outlined />
                </template>
                <template #title>操作</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">退出</a-menu-item>
                    <a-menu-item key="setting:2">修改密码</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        UserOutlined,
        SettingOutlined 
    } from '@ant-design/icons-vue'
    import { Menu } from 'ant-design-vue';
    import { useMainStore } from '@/pinia/main'

    const mainStore = useMainStore()




</script>

<style lang="less" scoped>
.head-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    background: #fff;
    padding: 0;
    margin: 0;
}

</style>