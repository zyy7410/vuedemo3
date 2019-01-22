<template>
<!-- 数字组件 -->
    <div class="counter-component">
        <div class="counter-btn" @click="minus"> - </div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="fixNumber" placeholder="11">
        </div>
        <div class="counter-btn" @click="add"> + </div>
        <div>{{number}}</div>
    </div>
</template>

<script>
export default {
    // 通过属性方式 传递进来的
     // 父组件 传给 子组件 的 数据 ：默认值
    props: {
        // 限制：最小值
        minNumber: {
            type: Number,
            default: 2
        },
        // 限制：最大值
        maxNumber: {
            type: Number,
            default: 100
        }                                           
    },
    data () {
        return {
            // 用户输入值
            number: this.minNumber
        }
    },
    // watch监听 : 监听 number属性: 设置 number()函数：在 number 每次变得时候，都去执行函数里的代码
    watch: {
        number () {
            // 发布给外层的 自定义事件
            this.$emit('on-change', this.number)
        }
    },
    methods: {
        // 减
        minus () {
            if (this.number <= this.minNumber) {
                return
            }
            this.number --
            // this.$emit('onChangeCounterMinus', this.number)
        },
        // 加
        add () {
            if (this.number >= this.maxNumber) {
                return
            }
            this.number ++
        },
        // 手动输入：数字
        fixNumber () {
            // 用户输入值
            let fix
            if (typeof this.number === 'string') {
                fix = Number(this.number.replace(/\D/g, ''))
            } else {
                fix = this.number
            }
            if (fix > this.maxNumber || fix < this.minNumber) {
                fix = this.minNumber
            }
            this.number = fix
        }
    }
}
</script>

<style scoped>
.counter-component{
    background-color: aquamarine;
}
.counter-btn{
    /* color: rgb(182, 182, 182); */
    margin-right: -1px;
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(182, 182, 182);
    text-align: center;
    background-color: rgb(235, 235, 235);
    cursor: pointer;

    /* 取消 双击选中 */
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
}
.counter-btn:hover{
    color: #fff;
    background-color: #79cd92;
    border: 1px solid #79cd92;
}
.counter-show input{
    margin-right: -2px;
    float: left;
    width: 50px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(182, 182, 182);
    text-align: center;
    /* background-color: greenyellow; */
    
    outline: none; /* 取消input 蓝框 */
}
</style>
