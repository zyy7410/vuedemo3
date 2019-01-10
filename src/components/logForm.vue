<template>
    <div>
        <div class="log-form-wrap">
            <div class="log-form-line">
                <span>用户名：</span>
                <!-- v-model:双向绑定数据 -->
                <input v-model="usernameModel" type="text" placeholder="请输入用户名">
                <!-- 验证功能： 有 vue-validate插件，这里原生写法-->
                <span class="error">{{ userErrors.errorText }}</span>
            </div>

            <div class="log-form-line">
                <span>密码：</span>
                <input v-model="passwordModel" type="text" placeholder="请输入密码">
                <!-- 验证功能： -->
                <span class="error">{{ passwordErrors.errorText }}</span>
            </div>

            <div class="btn">
                <a class="buttin" @click="onLogin">登陆</a>
            </div>
            <p class="error-p">{{ errorText }}</p>
        </div>
    </div>
</template>

<script>
// 发请求
import axios from 'axios'
// 模拟后端 返回数据
import '../mock/mock.js'

export default {
    data () {
        return {
            usernameModel: '',
            passwordModel: '',
            errorText: ''
        }
    },
    // 计算属性：关联值的变化
    computed: {
        userErrors () {
            let errorText, status
            // 每当 usernameModel 改变，都会去 验证 一下
            if (!/@/g.test(this.usernameModel)) {
                status = false
                errorText = '请输入包含 @ 的用户名'
            }
            else {
                status = true
                errorText = ''
            }
            // 刷新后，错误信息 不显示，不符合规范 再显示。第一次非空
            // 定义flag：是否是第一次进入 userErrors 计算中，(userFlag 没有的时候)
            if (!this.userFlag) {
                errorText = ''
                // 第一次进来以后，设置为true，以后就再也进不来了 userFlag 一直有了
                this.userFlag = true
            }

            return {
                status,
                errorText
            }
        },
        passwordErrors () {
            let errorText, status
            // 每当 passwordModel 改变，都会去 验证 一下
            if (!/^\w{1,6}$/g.test(this.passwordModel)) {
                status = false
                errorText = '密码必须是1-6位'
            }
            else {
                status = true
                errorText = ''
            }

            if (!this.passwordFlag) {
                errorText = ''
                this.passwordFlag = true
            }

            return {
                status,
                errorText
            }
        }
    },
    methods: {
        // 点击 登陆 按钮 事件：
        onLogin () {
            // 验证：错误信息的 状态 status = true，表示用户输入的符合规范，才能提交表单 登陆
            if (!this.userErrors.status || !this.passwordErrors.status ) {
                this.errorText = '部分选项未通过'
            } else {
                this.errorText = ''
                // console.log('登陆成功')

                // 模拟 登陆：ajax
                axios.get('api/login')
                .then((res) => {
                    console.log(res.data)
                    // 成功回调以后 触发 自定义事件：把子组件的(数据)，传递给父组件使用，子组件的(数据)作为事件的参数，传给父组件
                    this.$emit('has-log', res.data)
                }, (error) => {
                    console.log(error)
                })

                
            }
            // console.log( this.usernameModel, this.passwordModel)
        }
    }

}
</script>

<style scoped>
.log-form-line{
    margin-bottom: 20px;
}
.log-form-line span{
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    color: rgb(42, 42, 43);
}
.log-form-line input{
    width: 300px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
}
.log-form-line .error{
    color: red;
    padding-left: 15px;
    width: 170px;
}
.error-p{
    color: red;
    padding-left: 75px;
    margin-top: 18px;
    width: 200px;
}
.btn a{
    display: inline-block;
    width: 70px;
    height: 32px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background-color: #7aca97;
    margin-left: 75px;
    cursor: pointer;
}
</style>