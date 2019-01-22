<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据预测</h2>
            <p>流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
            </p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">购买数量：</div>
                <div class="sales-board-line-right">
                    <v-counter :minNumber="minCount" :maxNumber="maxCount"></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">媒介：</div>
                <div class="sales-board-line-right">
                    <multiply-chooser :multiplyChoosers="medium"></multiply-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">有效时间：</div>
                <div class="sales-board-line-right">一年</div>
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
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析析
            </p>
            
        </div>
    </div>
</template>

<script>
import VCounter from '../../components/base/counter'
import multiplyChooser from '../../components/base/multiplyChooser'
export default {
    components: {
        VCounter, multiplyChooser
    },
    data () {
        return {
            // 父组件 传给 子组件 的 数据
            minCount: 0,
            maxCount: 200,
            medium: [
                {
                    label: '纸质报告',
                    value: 0
                },
                {
                    label: 'PDF',
                    value: 1
                },
                {
                    label: '页面报告',
                    value: 2
                },
                {
                    label: '邮件',
                    value: 3
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>

