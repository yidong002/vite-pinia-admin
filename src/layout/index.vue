<template>
    <a-layout>
        <HeardItem class="heard-item"/>
        <a-layout-content>
        <SideItem class="side-item"/>
        </a-layout-content>
    </a-layout>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import { Layout, Menu, Breadcrumb } from 'ant-design-vue';
import HeardItem from './HeardItem.vue'
import SideItem from './SideItem.vue'
import BreadCrumb from './BreadCrumb.vue'

</script>

<style lang="less" scoped>
.ant-layout-content {
    height: calc(100vh - 64px);
    padding: 0;
    margin-top: 2px;
}
</style>