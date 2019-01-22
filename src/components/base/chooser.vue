<template>
<!-- 单选组件 -->
    <div class="chooser-component">
        <ul>
            <li v-for="(item, index) in choosers" :class="{'active': nowIndex === index}" :title="item.label" @click="chosenChooser(index)">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    // 父组件 传给 子组件 的 数据 ：默认值
    props:{
        choosers: {
            type: Array,
            default:[
                {
                    label: '默认值 1',
                    value: 0
                },
                {
                    label: '默认值 2',
                    value: 1
                },
                                {
                    label: '默认值 2',
                    value: 2
                }
            ]
        }
    },
    data () {
        return {
            nowIndex: 0 
        }
    },
    methods: {
        chosenChooser (index) {
            this.nowIndex = index
            // console.log(this.nowIndex)
            // console.log(index)
            this.$emit('on-change', this.choosers[index])
        }
    }
}
</script>

<style scoped>
.chooser-component li{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0px 15px;
    margin-right: 10px;
    border: 1px solid rgb(182, 182, 182);
    border-radius: 3px;
    cursor: pointer;
}
.chooser-component li.active{
    color: #fff;
    background-color: #79cd92;
    border: 1px solid #79cd92;
}

</style>
