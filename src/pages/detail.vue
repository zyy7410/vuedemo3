<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product-board">
                <img :src="productIcon" >
                <ul>
                    <router-link v-for="item in products" :to="{ path: item.path }" 
                                 class="item" :key="item.path" 
                                 tag="li" active-class="active" >{{item.name}}</router-link>
                </ul>
            </div>
        </div>

        <div class="detail-right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            products: [
                {
                    name: '数据统计',
                    path: 'count',
                    icon: require('../assets/images/1.png'),
                    active: false
                },
                {
                    name: '数据预测',
                    path: 'forecast',
                    active: false
                },
                {
                    name: '流量分析',
                    path: 'analysis',
                    active: false
                },
                {
                    name: '广告发布',
                    path: 'publish',
                    active: false
                }
            ],
            // 映射
            imgMap: {
                '/detail/count': require("../assets/images/1.png"),
                '/detail/forecast': require("../assets/images/2.png"),
                '/detail/analysis': require("../assets/images/3.png"),
                '/detail/publish': require("../assets/images/4.png")
            }
        }
    },
    // 计算属性
    computed: {
        productIcon () {
            // console.log(this.$route.path)
            // console.log(this.imgMap[this.$route.path])
            return this.imgMap[this.$route.path]
        }
    }
}
</script>

<style>
.detail-wrap{
    width: 1170px;
    margin: 30px auto;
}

/* 左边：通用  页面样式 */
.detail-left{
    float: left;
    width: 250px;
    background-color: #fff;
    padding-bottom: 12px;
}
.detail-left .product-board img{
    width: 100px;
    height: 100px;
    margin: 20px 75px;
}
.detail-left .product-board ul .item{
    height: 30px;
    line-height: 30px;
    color: gray;
    padding-left: 20px;
    cursor: pointer;
}
.detail-left .product-board ul .item:hover{
    color: #fff;
    background-color: #79cd92;
}
.detail-left .product-board ul .item.active{
    color: #fff;
    background-color: #79cd92;
}

.detail-right{
    float: right;
    width: 900px;
}



/* 右边：子路由 页面样式 */
.sales-board{
    margin-bottom: 20px;
}

.sales-board-intro{
    padding: 20px;
    background-color: #fff;
}
.sales-board-intro h2{
    font-size: 23px;
    margin-bottom: 25px;
}
.sales-board-intro p{
    line-height: 1.5em;
    color: rgb(126, 125, 125);
}


.sales-board-form{
    padding: 0px 20px;
    background-color: #fff;
    padding-bottom: 45px;
}
.sales-board-line{
    padding: 10px 0px;
}
.sales-board-line .sales-board-line-left{
    float: left;
    width: 100px;
    height: 55px;
    line-height: 30px;
    /* background-color: red; */
}
.sales-board-line .sales-board-line-right{
    float: left;
    width: 760px;
    height: 55px;
    line-height: 30px;
    /* background-color: green; */
}
.sales-board-line .sales-board-line-right .btn{
    display: inline-block;
    color: #fff;
    background-color: #79cd92;
    padding: 2px 16px;
    cursor: pointer;
    margin-top: 10px;
}


.sales-board-des{
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
}
.sales-board-des h2{
    font-size: 23px;
    margin-bottom: 15px;
}
.sales-board-des p{
    line-height: 1.5em;
    color: rgb(126, 125, 125);
    margin-bottom: 25px;
}
.sales-board-des h3{
    font-size: 23px;
    margin-bottom: 15px;
}
.sales-board-des ul{
    margin-bottom: 25px;
}
.sales-board-des ul li{
    color: rgb(126, 125, 125);
    line-height: 1.5em;
}




/* 右侧 下部 表格样式 */
.sales-board-table{

}
.ui-table-row{

    width: 900px;
}
.col-first{
    width: 160px;
}
.intro-pic{
    /* background-color: aquamarine; */
    border: 1px solid rgb(226, 226, 226);
    margin-left: -1px;
    margin-top: -1px;
    padding: 12px 20px;
}
.intro-pic:hover{
    color: #fff;
    background-color: #79cd92;
    cursor: pointer;
}


</style>
