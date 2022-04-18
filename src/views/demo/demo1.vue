<template>
    <!-- <div>
        <span class="demo">测试demo1页面</span>
        <a-button>按钮</a-button>
    </div> -->
    <div class="do-grid">
        <div><p>1</p></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
        <div><p>4</p></div>
        <div><p>5</p></div>
        <div><p>6</p></div>
        <div><p>7</p></div>
        <div><p>8</p></div>
        <div><p>9</p></div>
    </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'

export default {
    setup () {
        const state = reactive({})
        const count = ref('1')
        count.value = '2'
        console.log(count.value, 'count')
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="less" scoped>
.demo {
    color: @primaryColor;
}
.do-grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    // grid-template-columns: repeat(3, 33.33%);
    // grid-template-rows: repeat(3, 33.33%);
    // grid-template-columns: repeat(auto-fill, 100px);
    // grid-template-columns: 1fr 2fr;
    // grid-template-rows: 2fr 1fr 1fr 1fr minmax(100px, 2fr);
    // grid-row-gap: 20px;
    // grid-column-gap: 20px;
    // grid-auto-flow: row;
    // place-items: center;
    // place-content: stretch  center;
    grid-auto-columns: 50px; 

    div {
        border: 1px solid grey;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>