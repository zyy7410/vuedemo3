<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
            </p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">购买数量：</div>
                <div class="sales-board-line-right">                
                                                                                                     <!-- $event:子组件 传出来的 东西 -->
                    <v-counter :minNumber="minCount" :maxNumber="maxCount" @on-change="onParamChange('buyNum', $event)" ></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品类型：</div>
                <div class="sales-board-line-right">
                    <v-selection :selections="productTypes" @on-change="onParamChange('buyType', $event)" ></v-selection>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">有效时间：</div>
                <div class="sales-board-line-right">
                    <v-chooser :choosers="periodList" @on-change="onParamChange('period', $event)" ></v-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品版本：</div>
                <div class="sales-board-line-right">
                    <multiply-chooser :multiplyChoosers="productVersions" @on-change="onParamChange('versions', $event)" ></multiply-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">总价：</div>
                <div class="sales-board-line-right">{{ price }} 元</div>
            </div>

            <div class="sales-board-line">
                <div class="sales-board-line-left">&nbsp;</div>
                <div class="sales-board-line-right">
                    <div class="btn">立即购买</div>
                </div>
            </div>

            <div class="clear"></div>
        </div>

        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
            </p>
            <h3>用户行为指标</h3>
            <ul>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
            </ul>
            <h3>用户行为指标</h3>
            <ul>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
                <li>用户行为指标用户行为指标</li>
            </ul>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
// 发请求
import axios from 'axios'
// 模拟后端 返回数据
import '../../mock/mock.js'

import VCounter from '../../components/counter'
import VSelection from '../../components/selection'
import VChooser from '../../components/chooser'
import multiplyChooser from '../../components/multiplyChooser'
export default {
    components: {
        VSelection, VChooser, multiplyChooser, VCounter
    },
    data () {
        return {
            price: 0,

            // 向后端发送一个请求(价格), 记录下，需要传过去的一些数据：
            buyNum : 0,
            buyType : {},
            versions : [],   // 版本
            period : {},     // 有效期

            // 父组件 传给 子组件 的 数据
            minCount: 1,
            maxCount: 200,
            productTypes: [
                {
                    label: '入门版',
                    value: 0
                },
                {
                    label: '中级版',
                    value: 1
                },
                {
                    label: '高级版',
                    value: 2
                }
            ],
            periodList: [
                {
                    label: '半年',
                    value: 0
                },
                {
                    label: '一年',
                    value: 1
                },
                {
                    label: '三年',
                    value: 2
                }
            ],
            productVersions: [
                {
                    label: '客户版',
                    value: 0
                },
                {
                    label: '代理商版',
                    value: 1
                },
                {
                    label: '专家版',
                    value: 2
                }
            ]
        }
    },
    methods: {
        // 监听：子组件 事件 ：子组件中 数据改变
        // 所有组件，都有一个 @on-change 自定义事件，向外发数据，现在我们想所有组件 共享一个方法 onParamChange()，就必须要告诉 onParamChange() ，我们当前 是哪个组件修改了。。。因为组件个数多，所以 传参数 区分：某个组件 对应 某个值
        onParamChange (attr, val) {
            // 当前的 attr 给它赋 = 所需要的值 val
            this[attr] = val
            // console.log(this[attr] = val)
            console.log(attr, this[attr])
            this.getPrice()
        },
        // 发送 ajax 请求：
        getPrice () {
            let buyVersionsArray = _.map(this.versions, (item) => {
                return item.value
            })
            let reqParams = {
                buyNum: this.buyNum,
                buyType: this.buyType.value,
                period: this.period.value,
                versions: buyVersionsArray.join(',')
            }
            // 发送 ajax 请求,
            axios.get('api/getPrice', reqParams)
            .then((res) => {
                // console.log(res)
                this.price = res.data.amount
                console.log(this.price)
                // let data = JSON.parse(res.data)
                // console.log(data.amount)
            })
        }
    },
    // 挂载后：组件 都 渲染 完了
    mounted () {
        this.buyNum = 0
        this.buyType = this.productTypes[0]
        this.period = this.periodList[0]
        this.versions = [this.productVersions[0]]

        this.getPrice()
    }
}
</script>

<style scoped>

</style>

