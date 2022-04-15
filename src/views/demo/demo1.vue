<template>
    <div>
        测试demo1页面
        <a-button>按钮</a-button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="less" scoped>

</style>