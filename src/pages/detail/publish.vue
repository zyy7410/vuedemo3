<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>广告发放</h2>
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
                <div class="sales-board-line-left">行业：</div>
                <div class="sales-board-line-right">
                    <v-selection :selections="business"></v-selection>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品版本：</div>
                <div class="sales-board-line-right">
                    <multiply-chooser :multiplyChoosers="productVersions"></multiply-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">有效时间：</div>
                <div class="sales-board-line-right">半年</div>
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
            

            <table class="sales-board-table">
                <tbody>
                    <tr class="ui-table-row">
                        <td class="col-first">
                            <div class="intro-pic">
                                <label>安全安保</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>办公文教</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>彩票</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>车辆物流</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>成人用品</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>出版传媒</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>电脑硬件</label>
                            </div>
                        </td>
                    </tr>
                    <tr class="ui-table-row">
                        <td class="col-first">
                            <div class="intro-pic">
                                <label>电子电工</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>房地产建筑装修</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>分类平台</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>服装鞋帽</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>箱包饰品</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>化工原料制品</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>机械设备</label>
                            </div>
                        </td>
                    </tr>
                    <tr class="ui-table-row">
                        <td class="col-first">
                            <div class="intro-pic">
                                <label>家庭日用品</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>家用电器</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>教育培训</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>节能环保</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>金融服务</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>礼品</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>旅游住宿</label>
                            </div>
                        </td>
                    </tr>
                    <tr class="ui-table-row">
                        <td class="col-first">
                            <div class="intro-pic">
                                <label>美容化妆</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>母婴护理</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>农林牧渔</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>软件</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>商务服务</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>生活服务</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>食品保健品</label>
                            </div>
                        </td>
                    </tr>
                    <tr class="ui-table-row">
                        <td class="col-first">
                            <div class="intro-pic">
                                <label>手机数码</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>通讯服务设备</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>网络服务</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>医疗服务</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>游戏</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>运动休闲娱乐</label>
                            </div>
                        </td>
                        <td>
                            <div class="intro-pic">
                                <label>招商加盟</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
import VCounter from '../../components/base/counter'
import VSelection from '../../components/base/selection'
import multiplyChooser from '../../components/base/multiplyChooser'
export default {
    components: {
        VCounter, VSelection, multiplyChooser
    },
    data () {
        return {
            // 父组件 传给 子组件 的 数据
            minCount: 0,
            maxCount: 200,
            business: [
                {
                    label: '出版业',
                    value: 0
                },
                {
                    label: '媒体',
                    value: 1
                },
                {
                    label: '金融',
                    value: 2
                },
                {
                    label: '互联网',
                    value: 3
                },
                {
                    label: '游戏',
                    value: 4
                }
            ],
            productVersions: [
                {
                    label: '初级版',
                    value: 0
                },
                {
                    label: '中级版',
                    value: 1
                },
                {
                    label: '高级版',
                    value: 2
                },
                {
                    label: '专家版',
                    value: 3
                }
            ]

        }
    }
}
</script>

<style scoped>

</style>

