<template>
    <div>
        <div class="dialog-wrap" v-if="isShow">
            <div class="dialog-cover" @click="closeMyself"></div>
            <div class="dialog-content">
                <!-- 当点击子组件 中的 一个按钮，出发一个点击事件 -->
                <p class="dialog-close" @click="closeMyself">x</p>
                <!-- 插槽 -->
                <slot>父组件 没有内容 默认显示该值</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 整个组件都是通过 isShow 控制 显示/隐藏
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {

        }
    },
    methods: {
        // 点击事件中 触发一个自定义事件
        closeMyself () {
            this.$emit('on-close')
        }
    }
}
</script>

<style scoped>
.dialog-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
}
.dialog-cover{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}
.dialog-content{
    position: fixed;
    width: 50%;
    max-height: 50%;
    overflow: auto;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #464068;
    line-height: 1.6;
    z-index: 101;
}
.dialog-close{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    font-size: 18px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    /* background-color: black;
    color: #fff; */
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
