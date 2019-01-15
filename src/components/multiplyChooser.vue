<template>
<!-- 多选 -->
    <div class="multiply-chooser-component">
        <ul>
            <li v-for="(item, index) in multiplyChoosers" :class="{'active': checkActive(index)}" :title="item.label" @click="toggleMultiplyChooser(index)">{{item.label}}</li>
        </ul>
        
    </div>
</template>

<script>
// 引入js工具库：lodash
import _ from 'lodash'
export default {
    props:{
        multiplyChoosers: {
            type: Array,
            default:[
                {
                    label: '默认值 1',
                    value: 0
                },
                {
                    label: '默认值 2',
                    value: 0
                },
                                {
                    label: '默认值 2',
                    value: 0
                }
            ]
        }
    },
    data () {
        return {
            // 当前：数组：可多选
            nowIndexes: [0]
        }
    },
    methods: {
        // 切换 修改  nowIndex[]的值
        toggleMultiplyChooser (index) {
            // 当我们 当前 点击选择的这个index，在我们选中的index[]中，我们就把它剔除掉。不再的话 push进去。
            if (this.nowIndexes.indexOf(index) === -1) {
                // =-1:表示当前选中的index 不在 nowIndex的[]中，就将它push进去
                this.nowIndexes.push(index)
            } else {
                // 如果再nowIndex[]中：在数组中找到它，将它删除
                this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
                    return idx !== index
                })
            }
            this.$emit('onChangeMultiplyChooser', this.nowIndexes)
        },
        // active
        checkActive (index) {
            return this.nowIndexes.indexOf(index) !== -1
        }
    }
}
</script>

<style scoped>
.multiply-chooser-component li{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0px 15px;
    margin-right: 10px;
    border: 1px solid rgb(182, 182, 182);
    border-radius: 3px;
    cursor: pointer;
}
.multiply-chooser-component li.active{
    color: #fff;
    background-color: #79cd92;
    border: 1px solid #79cd92;
}

</style>
