<template>
<!-- 验证 模块 -->
<!-- 我们点击 确认购买，告诉这个模块 一个 orderId。 这个模块 首先有一个，显示； 点击以后 这个模块自己去 发送 一个 验证，就是 qur orderId 这样一个请求，发布后，自己再根据这个结果 去显示新弹窗 -->
    <div class="check-order-component">
       <my-dialog :is-show="isShowCheckDialog" @on-close="checkStatus" >
            请检查您的支付状态！
            <div class="btn" @click="checkStatus">支付成功</div>
            <div class="btn" @click="checkStatus">支付失败</div>
        </my-dialog>
        <my-dialog :is-show="isShowSuccessDialog">
            购买成功！
        </my-dialog>
        <my-dialog :is-show="isShowFailDialog">
            购买失败！
        </my-dialog>
    </div>
</template>

<script>
// 发请求
import axios from 'axios'
// 模拟后端 返回数据
import '../mock/mock.js'

// 弹框 组件
import Dialog from './base/dialog'

export default {
    components: {
        MyDialog: Dialog
    },
    props: {
        isShowCheckDialog: {
            type: Boolean,
            default: false
        },
        orderId: {
            type: [String, Number]
        }
    },
    data () {
        return {
            isShowSuccessDialog: false,
            isShowFailDialog: false
        }
    },
    methods: {
        // 弹窗/对话框 切换：隐藏
        checkStatus () {
            // 发送 ajax 请求,
            axios.get('api/checkOrder', {
                orderId: this.orderId
            })
            .then((res) => {
                this.isShowSuccessDialog = true
                this.$emit('on-close-check-dialog')
            }, (err) => {
                this.isShowFailDialog = true
                this.$emit('on-close-check-dialog')
            })
        }
    }
}
</script>

<style scoped>
.check-order-component .btn{
    display: inline-block;
    padding: 8px 20px;
    color: #fff;
    background-color: #79cd92;
    cursor: pointer;
}
</style>
