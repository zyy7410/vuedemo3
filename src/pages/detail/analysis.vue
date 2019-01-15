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
                    <v-chooser :choosers="productTypes" @onChangeChooser="onChangeChooserType"></v-chooser>
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
                    <multiply-chooser :multiplyChoosers="productTypes" @onChangeMultiplyChooser="onChangeMultiplyChooserType"></multiply-chooser>
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
import VSelection from '../../components/selection'
import VChooser from '../../components/chooser'
import multiplyChooser from '../../components/multiplyChooser'
export default {
    components: {
        VSelection, VChooser, multiplyChooser
    },
    data () {
        return {
            productTypes:[
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
            ]
        }
    },
    methods: {
        // 监听：子组件 事件 ：子组件中 数据改变
        onChangeChooserType () {
            //  console.log(nowIndex)
            console.log('111111111', '单选')
        },
        // 监听：子组件 事件 ：子组件中 数据改变
        onChangeSelectionType () {
            console.log('2222222', '下拉选择')
        },
        onChangeMultiplyChooserType () {
            console.log('33333', '多选')
        }
    }
}
</script>

<style scoped>


</style>

