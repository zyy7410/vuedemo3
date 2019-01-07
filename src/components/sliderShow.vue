<template>
    <div class="slide-show"  @mouseover="clearInv" @mouseout="runInv"> 
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>  
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>   
            </a>
        </div>
        <h2>{{ slides[nowIndex].title }}</h2>
        <div class="slide-float">
            <ul class="slide-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item, index) in slides" @click="goto(index)">
                <a :class="{active: index === nowIndex}">{{ index+1 }}</a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>

        </div>
        
    </div>
</template>


<script>
export default {
    // 接收父组件的数据
    props: {
        slides: {
            type: Array,
            default:[]
        },
        invTime: {
            type: Number,
            default:1000
        }
    },
    data () {
        return {
            // 维护：当前在第几张 的 index，对幻灯片进行切换
            nowIndex: 0,
            isShow: true
        }
    },
    // 计算属性
    computed: {
        prevIndex () {
            if (this.nowIndex === 0) {
                return this.slides.length - 1
            } else {
                return this.nowIndex - 1
            }
        },
        nextIndex () {
            if (this.nowIndex === this.slides.length - 1) {
                return 0
            } else {
                return this.nowIndex + 1
            }
        }
    },
    // 方法
    methods: {
        // 到第几页 // 编写一个方法用来重置 nowIndex
        // 这是一个方法，把这个方法绑定到 页码的 按钮上，
        goto (index) {
            this.isShow = false
            setTimeout(() =>{
                this.isShow = true
                this.nowIndex = index
                // console.log(this.nowIndex)
                this.$emit('onchange', index)
            }, 10)
        },
        // 自动切换
        runInv () {
            this.invId = setInterval(() => {
                // console.log(123)
                this.goto(this.nextIndex)
            }, this.invTime)
        },
        // 清除 自动切换
        clearInv () {
            clearInterval(this.invId)
        }
    },
    // 挂载好 之后
    mounted () {
        this.runInv()
    }
}
</script>

<style scoped>
/* 动画过渡效果 */
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}


.active{
    color: #78cb95;
    border-bottom: 1px solid #78cb95;
}
/* banner */
.slide-show{
    position: relative;
    height: 506px;
    margin-bottom: 20px;
    /* background-color: green; */
     overflow: hidden;
}

.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}

.slide-show h2{
    color:  rgba(255,255,255,0.7);
    position: absolute;
    bottom: 5px;
    margin: 8px 20px;
    z-index: 1;
}

.slide-float{
    background-color: rgba(0,0,0,0.5);
    color:  rgba(255,255,255,0.7);
    width: 100%;
    position: absolute;
    bottom: 5px;

    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
}
.slide-show .slide-pages{
    float: right;
    margin-right: 20px;
}
.slide-show .slide-pages li{
    float: left;
    margin: 8px 7px;
    cursor: pointer;
}
.slide-show .slide-pages li a{
    margin: 8px 10px;
}

</style>
