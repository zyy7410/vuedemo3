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
                    <v-counter :minNumber="minCount" :maxNumber="maxCount" @onChangeCounterMinus="onChangeCounterMinusType" @onChangeCounterAdd="onChangeCounterAddType" ></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品类型：</div>
                <div class="sales-board-line-right">
                    <v-selection :selections="productTypes" @onChangeSelection="onChangeSelectionType"></v-selection>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">有效时间：</div>
                <div class="sales-board-line-right">
                    <v-chooser :choosers="validTime" @onChangeChooser="onChangeChooserType"></v-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品版本：</div>
                <div class="sales-board-line-right">
                    <multiply-chooser :multiplyChoosers="productVersions" @onChangeMultiplyChooser="onChangeMultiplyChooserType"></multiply-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">总价：</div>
                <div class="sales-board-line-right">500元</div>
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
            validTime: [
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
        onChangeChooserType () {
            //  console.log(nowIndex)
            console.log('1111', '单选')
        },
        // 监听：子组件 事件 ：子组件中 数据改变
        onChangeSelectionType () {
            console.log('2222', '下拉选择')
        },
        onChangeMultiplyChooserType () {
            console.log('3333', '多选')
        },
        onChangeCounterMinusType () {
            console.log('4444', '-')
        },
        onChangeCounterAddType () {
            console.log('5555', '+')
        }
    }
}
</script>

<style scoped>

</style>

