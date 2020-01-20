<template>
        <div class="about-page">
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
                                <div class="about-inner">
                                    <h5>关于我们</h5>
                                    <p>
                                        犀金系列产品包含犀金官网及犀金APP。我们是以职场交流，创业互动为核心的学习、交流、分享平台，集媒体、培训、社群为一体，全方位服务职场人士和创业合伙人们的职场、创业平台。犀金文库提供了大量创业风向信息和职场心得体会，犀金云职场电台为你提供高伴随的职场、创业、生活原创内容，在轻松愉快的气氛里一起探讨事业。对于行业内或者就业方向不明确的职场萌新更可以在犀金创业Bang中发布你的需求，面基大佬或与你志同道合的小伙伴。犀金赚钱圈，把相同领域的小伙伴拉进同一个圈子，有需求，万能的圈友人一定会帮到你。我们为各个领域的职场人推荐其他行业的工作体验内容，让你明确职场功能，协助转岗转业。如果你是一个想要打破当前职场规则有振翅之心的人，不妨加入我们的职场、创业社区，晒出你的计划，寻找身边与你志同道合的人。
                                    </p>
                                    <!-- <p>犀金App是以职场交流，创业互动为核心的学习、交流、分享平台，集媒体、培训、社群为一体，全方位服务职场人士和创业合伙人们。对于行业内或者就业方向不明确的职场萌新更可以积极向行业大佬提问取经。
                                        我们为各个领域的职场人推荐其他行业的工作体验内容，让你明确职场功能，协助转岗转业。如果你是一个想要打破当前职场规则有振翅之心的人，不妨加入我们的创业社区，晒出你的创业计划，发现周边与你志同道合的人。
                                    <p>
                                        站点目前开设有阅读、创业Bang、优选3大板块。
                                    </p>
                                    <p>
                                        阅读：云集线上创业和职场好文，针对你在工作和职场之中遇到方方面面的问题与你畅聊。在阅读中把握商机和最新风向。

                                    </p>
                                    <p>
                                        创业Bang：这里是一个轻量级的创业互动社区。从招人到寻找投资，创业过程中的各种需求在此汇集。在这里，星星点点的创业之火等着你来传递。
                                    </p>
                                    <p>
                                        犀金更有移动端应用。各大应用市场搜索“犀金”即可下载犀金APP。
                                    </p>
                                    <p>
                                        未来，我们还将设置犀金电台，随身聆听，助力创业。</p>
                                    </p> -->
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
