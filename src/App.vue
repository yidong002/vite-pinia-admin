<script setup>
import { toRef, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/pinia/main'

const mainStore = useMainStore()

const route = useRoute()
const state = reactive({
  includeList: [],
})

// 缓存白名单
watch(() => route, (newVal, oldVal) => {
  newVal.meta.keepAlive && 
  state.includeList.includes(newVal.name) 
  && mainStore.includeList.push(newVal.name) 

  state.includeList = [...mainStore.includeList]

}, { deep: true })

const { includeList } = toRef(state)
</script>

<template>
<router-view/>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <Component :is="Component"/>
    </keep-alive>
  </router-view> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: grey;

}
</style>
