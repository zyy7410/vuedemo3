<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据统计</h2>
            <p>流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
                流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析
            </p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品类型：</div>
                <div class="sales-board-line-right">
                    <v-chooser :choosers="productTypes"></v-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">适用地区：</div>
                <div class="sales-board-line-right">
                    <v-selection :selections="cityes"></v-selection>
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
import VChooser from '../../components/chooser'
import VSelection from '../../components/selection'
export default {
    components: {
        VChooser, VSelection
    },
    data () {
        return {
            // 父组件 传给 子组件 的 数据
            productTypes: [
                {
                    label: '红色版',
                    value: 0
                },
                {
                    label: '绿色版',
                    value: 1
                },
                                {
                    label: '紫色版',
                    value: 2
                }
            ],
            cityes: [
                {
                    label: '北京',
                    value: 0
                },
                {
                    label: '上海',
                    value: 1
                },
                {
                    label: '广州',
                    value: 2
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>

