<template>
    <div class="side-container">
        <a-layout style="background: #fff; height: 100%">
        <a-layout-sider width="200" style="background: #000">
          <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            style="height: 100%"
            theme="dark"
            @click="toPages"
          >
            <a-sub-menu key="sub1" @titleClick="toPages({key:'demo1'})">
              <template #title>
                <span>
                  <user-outlined />
                  subnav 1
                </span>
              </template>
              <a-menu-item key="demo1">demo1</a-menu-item>
              <!-- <SideItem/> -->
            </a-sub-menu>
            
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view v-slot="{ Component }">
            <keep-alive :include="includeList">
                <Component :is="Component"/>
            </keep-alive>
           </router-view>
        </a-layout-content>
      </a-layout>
    </div>
</template>

<script setup>

import { Layout, Menu } from 'ant-design-vue';
import { ref } from 'vue'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { useMainStore } from '@/pinia/main'
import SideItem from './SideItem.vue'
import { useRouter } from 'vue-router'

const mainStore = useMainStore()
const router = useRouter()

const openKeys = ref(['1'])
const selectedKeys = ref(['2'])
const includeList = [...mainStore.includeList]


const toPages = (path) => {
    console.log(path, 'path')
    router.push(`/${path.key}`)
}

</script>

<style lang="less" scoped>
.side-container {
    height: 100%;
}
</style>