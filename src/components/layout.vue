<template>
    <div>      
        <div class="app-header">
            <div class="app-head-inner">
                <router-link :to="{path: '/'}">
                    <img src="../assets/logo.png">
                </router-link>  
                <div class="head-nav">
                    <ul class="nav-list">
                        <!-- 登陆了以后 才 显示 ：用户姓名 -->
                        <li>{{ username }}</li>
                        <li v-if="username !== ''" class="nav-pile">|</li>
                        <li v-if="username !== ''" @click="quit">退出</li>
                        <!-- username === '空' 的时候 再显示登陆/注册 -->
                        <li v-if="username === ''" @click="logClick">登陆</li>
                        <li v-if="username === ''" class="nav-pile">|</li>
                        <li v-if="username === ''" @click="regClick">注册</li>
                        <li class="nav-pile">|</li>
                        <li @click="aboutClick">关于</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="app-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="app-footer">
            <p>@ 2018 - 12 - 27 这是一个 使用Vue.js 构建的 电商平台项目。</p>
        </div>


        <!-- 在 父组件中的子组件上 监听 自定义事件 -->
        <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
            <!-- 登陆/注册 内容： 是一个复杂的表单，抽成 独立组件 -->
            <!-- 插槽 -->
            <log-form @has-log="onSuccessLog"></log-form>
        </my-dialog>

        <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
            <!-- 登陆/注册 内容： 是一个复杂的表单，抽成 独立组件 -->
            <reg-form></reg-form>
        </my-dialog>

        <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
            <p>这是一个 使用Vue.js 构建的 电商平台项目。</p>
        </my-dialog>

    </div>
</template>

<script>
import Dialog from './dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  components: {
      MyDialog: Dialog,
      LogForm,
      RegForm
  },
  data () {
      return {
          isShowLogDialog: false,
          isShowRegDialog: false,
          isShowAboutDialog: false,
          username: ''
      }
  },
  methods: {
      logClick () {
          this.isShowLogDialog = true
      },
      regClick () {
          this.isShowRegDialog = true
      },
      aboutClick () {
          this.isShowAboutDialog = true
      },
      //  自定义事件：改变 数据的值
      closeDialog (attr) {
          this[attr] = false
      },
      //  自定义事件：登陆成功，从子组件获取 数据 作为参数 传递给父组件
      onSuccessLog (data) {
          console.log(data)
          this.closeDialog('isShowLogDialog')
          this.username = data.username
      },
      //   退出 按钮
      quit () {
          console.log('退出')
          this.username = ''
      }
  }
}
</script>

<style>
/* 通用样式  */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
} 
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
} 



/* layout */
html{
    background-color: #f1f2f4;
}
*{
    margin: 0px;
    padding: 0px;
}
.clear{
    clear: both;
}

.nav-list li{
    list-style-type: none;
}



.app-header{
    width: 100%;
    height: 70px;
    background-color:#353535;
}
.app-header .app-head-inner{
    width: 1170px;
    height: 70px;
    margin: 0 auto;
    background-color:#353535;
}
.app-header .app-head-inner img{
    margin-top:17px;
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.app-header .app-head-inner .head-nav{
    color: #909090;
    float: right;
    margin-top:20px;
    margin-right: -5px;
    cursor: pointer;
}
.app-header .app-head-inner .head-nav li{
    font-size:14px;
    float: left;
    padding:5px;
}



.app-footer{
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color:rgb(218, 218, 218);
}
.app-footer p{
    color: grey;
    width: 100%;
    text-align: center;
}




</style>
