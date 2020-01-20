
<template>
    <div class="money-page">
        <!-- <div class="index-header">
            <div class="index-header-logo">
                <img src="../../../../static/img/编组 2(2).png" alt="">
            </div>
            <div class="index-header-menu">
                <ul>
                    <li>首页</li>
                    <li>优选</li>
                    <router-link :to="{path:'read'}">
                        <li>
                            阅读
                        </li>
                    </router-link>
                    <li style="margin-top:6px;">
                        <img src="../../../../static/img/创业Bang！ 3.png" alt="">
                    </li>
                    <li>犀金APP</li>
                </ul>
            </div>
            <div class="index-header-menuline">
                <img src="../../../../static/img/矩形 2(1).png" alt="">
            </div>
            <div class="index-header-search">
                <div class="index-header-searchlogo">
                    <img src="../../../../static/img/Shape 2.png" alt="">
                </div>
                <div class="index-header-searchbox">
                    <input type="text" placeholder="搜创业/项目/优选">
                </div>
            </div>
            <div class="index-header-loginbox">
                <ul>
                    <li>注册</li>
                    <li style="margin-top:10px;">
                        <img src="../../../../static/img/矩形备份 4.png" alt="">
                    </li>
                </ul>
            </div>
        </div> -->
        <Wheader></Wheader>
        <div class="index-inner">
            <div class="index-inner-banner">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <div class="index-inner-bannerleft" style="background: #ffffff;height: 100%;">
                            <div class="money-inner">
                                <h5>犀金赚钱圈上线</h5>
                                <div>
                                    <img src="../../../../static/img/矩形备份 9.png" alt="">
                                </div>
                                <div>
                                    <img src="../../../../static/img/矩形备份 54.png" alt="">
                                </div>
                                <div>
                                    <img src="../../../../static/img/矩形备份 55.png" alt="">
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                        <div class="about-shangwu">
                            <h5>商务合作</h5>
                            <img src="../../../../static/img/矩形 2 (2).png" alt="">
                            <div class="about-shangwuinner">
                                <p>leon.shen@jk98.cn</p>
                                <p>(谢绝诱导/弹窗类广告)</p>
                            </div>
                        </div>
                        <div class="index-inner-bannerright">

                                <el-row :gutter="20">
                                    <el-col :span="16">
                                        <div class="index-inner-bannerrighttitle">
                                            犀金APP现已开放下载
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="index-inner-bannerrightimg">
                                            <img src="../../../../static/img/编组 3.png" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="index-inner-bannerrigthdownload">
                                    <img src="../../../../static/img/编组 6.png" alt="">
                                </div>
                                <div class="index-bannerrigthdowntype">
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <div class="index-inner-bannerrightapple" @click="goandriod" style="cursor: pointer;">
                                                <img src="../../../../static/img/编组 28.png" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="index-inner-bannerrightandroid" @click="goios" style="cursor: pointer;">
                                                <img src="../../../../static/img/编组 30.png" alt="">
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                                <div class="inndex-bannerrigtlogintypebox">
                                    <el-row :gutter="20">
                                        <el-col :span="6" style="padding-top: 5px;">
                                            <img src="../../../../static/img/直线.png" alt="" style="width: 100%;">
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="inndex-bannerrigtlogintype">
                                                <!-- <img src="../../../../static/img/编组 35.png" alt="">
                                                <img src="../../../../static/img/编组 39.png" alt="">
                                                <img src="../../../../static/img/编组 41.png" alt=""> -->
                                                <div @mouseenter="enter()" @mouseleave="leave()">
                                                    <img src="../../../../static/img/编组 35.png" alt="" v-if="wx">
                                                    <img src="../../../../static/img/编组 38.png" alt="" v-if="wxshow">
                                                </div>

                                                <div  @mouseenter="enter1()" @mouseleave="leave1()">
                                                    <img src="../../../../static/img/编组 39.png" alt="" v-if="wb">
                                                    <img src="../../../../static/img/编组 44.png" alt="" v-if="wbshow">
                                                </div>

                                                <div  @mouseenter="enter2()" @mouseleave="leave2()">
                                                    <img src="../../../../static/img/编组 41.png" alt="" v-if="xj">
                                                    <img src="../../../../static/img/编组 51.png" alt="" v-if="xjshow">
                                                </div>
                                                <img src="../../../../static/img/编组 43备份 2.png" alt="" class="focusapp" v-if="codeshow">
                                                <img src="../../../../static/img/编组 43.png" alt="" class="donwnloadapp" v-if="code1show">
                                            </div>
                                        </el-col>
                                        <el-col :span="6" style="padding-top: 5px;">
                                            <img src="../../../../static/img/直线备份.png" alt="" style="width: 100%;padding-top: 5px;">
                                        </el-col>
                                    </el-row>
                                </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div style="min-height: 50px;"></div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import Wheader from '../../common/wheader.vue'
    import Footer from '../../common/footer.vue'
    export default {
        data() {
            return {
                wx:true,
                wb:true,
                xj:true,
                wxshow:false,
                wbshow:false,
                xjshow:false,
                codeshow:false
            }
        },
        components:{
            Footer ,
            Wheader
        },
        mounted() {
            this.$nextTick(function() {
                this.initSwiper();
            });
        },
        created() {

        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper(".swiper-container",{
                    direction:"horizontal",/*横向滑动*/
                    loop:true,
                    autoplay:true,//等同于以下设置
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,

                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
　　　　        });
            },
            enter(){
                this.wxshow = true
                this.wx = false
                this.codeshow = true
            },
            leave(){
                this.wxshow = false
                this.wx = true
                this.codeshow = false
            },
            enter1(){
                this.wbshow = true
                this.wb = false
                // this.codeshow = true
            },
            leave1(){
                this.wbshow = false
                this.wb = true
                // this.codeshow = false
            },
            enter2(){
                this.xjshow = true
                this.xj = false
                this.code1show = true
            },
            leave2(){
                this.xjshow = false
                this.xj = true
                this.code1show = false
            },
            goandriod(){
                window.location.href = "https://apps.apple.com/cn/app/%E7%8A%80%E9%87%91/id1472961547"
            },
            goios(){
                window.location.href = "https://sj.qq.com/myapp/detail.htm?apkName=com.xiyi.rhinobillion"
            },
        }
    }
</script>
<style>
</style>
