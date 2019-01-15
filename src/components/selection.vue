<template>
<!-- 下拉选择 -->
    <div class="selection-component">
        <div class="selection-show" @click="toggleDrop">
            <span>{{ selections[nowIndex].label }}</span>
            <div class="arrow">
                <span></span>
            </div>
        </div>
        <div class="selection-list" v-if="isDrop">
            <ul>
                <li v-for="(item, index) in selections" @click="chosenSelection(index)">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        selections: {
            type: Array,
            default: [
                {
                    label: '默认值 1',
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
            // 当前选中的项
            nowIndex: 0,
            // 列表 是否 显示|隐藏
            isDrop: false
        }
    },
    methods: {
        toggleDrop () {
            this.isDrop = !this.isDrop
        },
        // 切换 修改 显示的 选项值
        chosenSelection (index) {
            // 获取 点击的index，修改显示值
            this.nowIndex = index
            this.isDrop = false
            // 当我们切换的时候，向外部父组件 发送一个自定义事件：
            // 通信：子组件 出发一个自定义事件，将子组建内 改变的数据，传给父组件，通知父组件，数据被修改了
            this.$emit('onChangeSelection', this.nowIndex)
            // console.log(this.nowIndex)
        }
    }
}
</script>

<style scoped>
/* 显示 */
.selection-show{
    width: 102px;
    height: 30px;
    padding-left: 8px;
    border: 1px solid rgb(182, 182, 182);
    position:relative; 
    /* background-color: blueviolet; */
}
.arrow{
    width: 30px;
    height: 30px;
    position:absolute;
    top: 0px;
    right: 0px;
    border: 1px solid rgb(182, 182, 182);
    /* background-color: red; */
    margin-top: -1px;
    margin-right: -1px;
    cursor: pointer;
}
.arrow span{
    display: block;
    width: 0;
    height: 0;
    border-width: 9px 7px 0;
    border-style: solid;
    border-color :rgb(182, 182, 182) transparent transparent;/*黄 透明 透明 */
    position:absolute;
    top: 12px;
    right: 6px;
    /* background-color: aquamarine; */
}

/* 列表 */
.selection-list{
    /* display: none; */
    width: 110px;
    border: 1px solid rgb(182, 182, 182);
    position:relative; 
    background-color: rgb(236, 236, 236);
    margin-top: -1px;
}
.selection-list li{
    cursor: pointer;
    padding-left: 8px;
}
.selection-list li:hover{
    background-color: #fff;
}



/* 组件
 数据 ：本地数据：写死的 | 从外部传进来的数据：动态数据
  获取 外部数据
  渲染 外部数据

 获取：从外部（父）传入内部（子）：子：使用 props 接收，并设置配置，默认类型 和 默认值
                             父：:属性 = '属性值'
                                属性值：数据

 渲染：当前 选中的数据 渲染在 显示位置：
    变量：记录一下 当前index
 */
</style>
