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
                    <div class="btn" @click="ShowPayDialog" >立即购买</div>
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

        <!-- 弹窗/对话框 -->
        <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog" >
            <table class="buy-dialog-table">
                <tr>
                    <th>购买数量</th>
                    <th>产品类型</th>
                    <th>有效时间</th>
                    <th>产品版本</th>
                    <th>总价</th>
                </tr>
                <tr>
                    <td>{{ buyNum }}</td>
                    <td>{{ buyType.label }}</td>
                    <td>{{ period.label }}</td>
                    <td>
                        <span v-for="item in versions">{{ item.label }}  </span>
                    </td>
                    <td>{{ price }}</td>
                </tr>
            </table>
            <h3 class="buy-dialog-title">请选择银行</h3>
            <!-- 选择银行 组件 -->
            <bank-chooser @on-change="onChangeBanks"></bank-chooser>
            <div class="btn buy-dialog-btn" @click="confirmBuy">确认购买</div>
            <!-- 点击： 是先创建一个 订单 ，然后把跳转到 银行页面 交给后端去处理：交给后端 去新开一个窗口。。这里面 我们只需要发动一个 回到 order 这样一个请求-->
        </my-dialog >

        <!-- 新的 弹窗 -->
        <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
            支付失败！
        </my-dialog>
        <!-- 新的 弹窗 -->
        <check-order :is-show-check-dialog="isShowCheckDialog" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>

    </div>
</template>

<script>
import _ from 'lodash'
// 发请求
import axios from 'axios'
// 模拟后端 返回数据
import '../../mock/mock.js'

// 弹框 组件
import Dialog from '../../components/base/dialog'
// 银行 组件
import BankChooser from '../../components/bankChooser'
// 订单 组件
import CheckOrder from '../../components/checkOrder'
// 组件：
import VCounter from '../../components/base/counter'
import VSelection from '../../components/base/selection'
import VChooser from '../../components/base/chooser'
import multiplyChooser from '../../components/base/multiplyChooser'
export default {
    components: {
        VSelection, VChooser, multiplyChooser, VCounter, 
        MyDialog: Dialog, BankChooser, CheckOrder
    },
    data () {
        return {
            orderId: 0,
            // 新弹窗：失败。
            isShowErrDialog: false,
            // 新弹窗：确认订单。
            isShowCheckDialog: false,
            // 弹窗/对话框：付款。 切换：显示/隐藏
            isShowPayDialog: false,
            // 价格
            price: 0,

            // 向后端发送一个请求(价格), 记录下，需要传过去的一些数据：
            buyNum : 0,
            buyType : {},
            versions : [],   // 版本
            period : {},     // 有效期
            bankId: null,

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
        },
        // 弹窗/对话框 切换：显示
        ShowPayDialog () {
            this.isShowPayDialog = true
        },
        // 弹窗/对话框 切换：隐藏
        hidePayDialog () {
            this.isShowPayDialog = false
        },
        hideErrDialog () {
            this.isShowErrDialog = false
        },
        hideCheckOrder () {
            this.isShowCheckDialog = false
        },
        // 子组件 点击时 父组件 监听事件： 获取点击的id
        onChangeBanks (bankObj) {
            // 赋值
            this.bankId = bankObj.id
            console.log(this.bankId)
        },
        // 点击 确认购买 btn时，把页面的 数据 记录 带进来
        confirmBuy () {
            let buyVersionsArray = _.map(this.versions, (item) => {
                return item.value
            })
            let reqParams = {
                buyNum: this.buyNum,
                buyType: this.buyType.value,
                period: this.period.value,
                versions: buyVersionsArray.join(','),
                bankId: this.bankId
            }
            // 发送 ajax 请求,
            axios.get('api/createOrder', reqParams)
            .then((res) => {
                // console.log(res)
                this.orderId = res.data.orderId
                console.log(this.orderId)

                this.isShowCheckDialog = true
                this.isShowPayDialog = false

            }, (err) => {
                this.isShowBuyDialog = false,
                this.isShowErrDialog = true
            })
        }
    },
    // 挂载后：组件 都 渲染 完了
    mounted () {
        this.buyNum = 1
        this.buyType = this.productTypes[0]
        this.period = this.periodList[0]
        this.versions = [this.productVersions[0]]

        this.getPrice()
    }
}
</script>

<style scoped>
.buy-dialog-table{
    width: 100%;
    margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0px;
}
.buy-dialog-table th{
    background-color: #79cd92;
    color: #fff;
    border: 1px solid #79cd92;
}
.buy-dialog-title{
    font-size: 16px;
    font-weight: bold;
}
.buy-dialog-btn{
    margin-top: 20px;
}
.btn{
    display: inline-block;
    padding: 8px 10px;
    background-color: #79cd92;
    color: #fff;
    cursor: pointer;
}
</style>

