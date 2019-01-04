<template>
    <div class="index-wrap">      
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品1</h2>
                <template  v-for="product in productList">
                    <h3>{{ product.title }}</h3>
                    <ul>
                        <li v-for="item in product.list" :key="item.name">
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="!product.last" class="hr"></div>
                </template>
            </div>   

            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                    <ul>
                        <li v-for="item in newsList" :key="item.title">
                            <a :href="item.url">{{ item.title }}</a>
                        </li>
                    </ul>
            </div>   
        </div>

        <div class="index-right">
            <slider-show :slides="slides" :invTime="sliderTime" @onchange="onchangeEvent"></slider-show>

            <div class="index-board-list">
                <div v-for="item in boardList" :key="item.id"
                     class="index-board-item" 
                     :class="'index-board-' + item.id">

                    <div class="index-board-item-inner">
                        <h2>{{item.title}}</h2>
                        <p>{{item.description}}</p>
                        <div class="index-board-button">
                            <a href="">立即购买</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
// 子组件
import sliderShow from '../components/sliderShow'
// 发请求
import axios from 'axios'
// 模拟后端 返回数据
import '../mock/mock.js'

export default {
  // 子组件
  components: {
      sliderShow
  },
  methods:{
      onchangeEvent(){
          console.log('onchangeEvent run!~~')
      }
  },
  // 挂载后
  mounted () {
    // 发送ajax请求, 请求新闻列表
    axios.get('api/getNewsList')
    .then((res) => {
      console.log(res)
      this.newsList = res.data.list
    })
    .catch((error) => {
      console.log(error)
    })

    axios.get('api/getBoardList')
    .then((res) => {
        console.log(res)
        this.boardList = res.data
    })
    .catch((error) => {
        console.log(error)
    })

    axios.get('api/getProductList')
    .then((res) => {
        console.log(res)
        this.productList = res.data
    })
    .catch((error) => {
        console.log(error)
    })

    // axios.get('api/getSlides')
    // .then((res) => {
    //     console.log(res)
    //     this.slides = res.data
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

  },
  data () {
      return {
        sliderTime: 2000,
        boardList: null,
        newsList: [],
        productList: null,
        // slides: null
        //编写 组件里的一套数据，进行渲染
        slides: [
            {
                src: require('../assets/slideShow/pic1.jpg'),
                title: 'title-111',
                href:'detail/analysis'
            },
            {
                src: require('../assets/slideShow/pic2.jpg'),
                title: 'title-222',
                href:'detail/count'
            },
            {
                src: require('../assets/slideShow/pic3.jpg'),
                title: 'title-333',
                href:'http://starcraft.com'
            },
            {
                src: require('../assets/slideShow/pic4.jpg'),
                title: 'title-444',
                href:'detail/forecast'
            }
        ],
        // productList: {
        //     pc: {
        //         title: 'PC产品',
        //         list: [
        //             {
        //                 name: '数据统计',
        //                 url:'http://starcraft.com'
        //             },
        //             {
        //                 name: '数据预测',
        //                 url:'http://warcraft.com'
        //             },
        //             {
        //                 name: '流量分析',
        //                 url:'http://overwatch.com',
        //                 hot: true
        //             },
        //             {
        //                 name: '广告发布',
        //                 url:'http://hearstone.com'
        //             }
        //         ]
        //     },
        //     app: {
        //         title: '应用类',
        //         last: true,
        //         list: [
        //             {
        //                 name: '91助手',
        //                 url:'http://weixin.com'
        //             },
        //             {
        //                 name: '产品助手',
        //                 url:'http://twitter.com'
        //             },
        //             {
        //                 name: '智能地图',
        //                 url:'http://maps.com',
        //                 hot: true
        //             },
        //             {
        //                 name: '团队语音',
        //                 url:'http://phone.com'
        //             }
        //         ]
        //     }
        // },
        // newsList: [
        //     {
        //         title: '数据统计',
        //         url:'http://starcraft.com'
        //     },
        //     {
        //         title: '数据预测',
        //         url:'http://warcraft.com'
        //     },
        //     {
        //         title: '流量分析',
        //         url:'http://overwatch.com',
        //         hot: true
        //     },
        //     {
        //         title: '广告发布',
        //         url:'http://hearstone.com'
        //     }
        // ],
        // boardList: [
        //     {
        //         title: '开放产品',
        //         description: '开放产品是一款开放产品',
        //         saleout: false,
        //         id: 'earth'
        //     },
        //     {
        //         title: '品牌营销',
        //         description: '品牌营销帮助你的产品更好的找到定位',
        //         saleout: false,
        //         id: 'car'
        //     },
        //     {
        //         title: '使命必达',
        //         description: '使命必达快速迭代永远保持最前端的速度',
        //         saleout: true,
        //         id: 'loud'
        //     },
        //     {
        //         title: '勇攀高峰',
        //         description: '勇攀高峰，到达事业的顶峰',
        //         saleout: false,
        //         id: 'mouten'
        //     }
        // ]

      }
  }
}
</script>

<style scoped>
.hr{
    border-bottom: 2px solid #f2f2f4;
}
.hot-tag{
    font-size: 8px;
    color: #fff;
    background-color: red;
    padding: 1px 2px;
}

.index-wrap{
    width: 1170px;
    margin: 30px auto;
}
/* 左边 */
.index-wrap .index-left{
    float: left;
    width: 250px;
}
/* 左边--全部产品 */
.index-wrap .index-left .index-left-block{
    margin-bottom: 10px;
    background-color: #fff;
}
.index-wrap .index-left .index-left-block h2{
    height: 30px;
    line-height: 30px;
    background-color: #7aca97;
    color: #fff;
    padding-left: 15px;
}

.index-wrap .index-left .index-left-block h3{
    font-size: 13px;
    font-weight: bold;
    padding: 15px 0px 10px 15px;
}
.index-wrap .index-left .index-left-block ul{
    color: gray;
    font-size: 12px;
    cursor: pointer;
    padding-bottom: 10px;
}
.index-wrap .index-left .index-left-block ul li{
    padding-left: 20px;
    line-height: 20px;
}
.index-wrap .index-left .index-left-block ul li:hover{
    color: #fff;
    background-color:rgb(165, 164, 164);
}

/* 左边--最新消息 */
.lastest-news{
    height: 567px;
}
.lastest-news ul{
    padding-top: 20px;
}

/* 右边 */
.index-wrap .index-right{
    float: right;
    width: 900px;
}

/* 右边-- 下面 列表 */
.index-wrap .index-right .index-board-list{
    width: 920px;
    overflow: hidden;
}
.index-wrap .index-right .index-board-list .index-board-item{
    margin-bottom: 20px;
    background-color: #fff;
    width: 440px;
    height: 160px;
    float: left;
    margin-right: 20px;
    box-sizing: border-box;
}

.index-wrap .index-right .index-board-list .index-board-item .index-board-item-inner h2{
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0px;
}
.index-wrap .index-right .index-board-list .index-board-item .index-board-item-inner p{
    margin-bottom: 20px;
}
.index-wrap .index-right .index-board-list .index-board-item .index-board-item-inner .index-board-button{
    display: inline-block;
    background-color: #79cd92;
    padding: 10px 20px;
    color:#fff;
    cursor: pointer;
}

/* 图片 */
.index-board-item-inner {
  min-height: 125px;
  padding-left: 125px;
  margin-left: 20px
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-mouten .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}

</style>
