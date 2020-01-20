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
                                    <h5>犀金用户信息发布免责提示</h5>

                                    <!-- <div style="margin-top: 30px;">
                                            欢迎来到犀金APP，请仔细阅读以下协议内容。
                                            当你（用户）在犀金注册成功，无论是使用犀金的各项服务，还是在犀金上发布任何内容，均意味着你已了解并完全接受本协议的各项内容，以及犀金对使用协议所作出的任何修改。
                                            如果您对本协议的任何条款表示异议，您可以选择不使用犀金。
                                    </div> -->

                                    <p>1、接受条款</p>
                                    <p>1.1</p>
                                    犀金的运营者与其相关关联公司（以下简称“犀金”），将根据本使用协议的条款及后续的补正和修改内容，为你提供基于犀金网（包括犀金web端、iOS/Android相关客户端、移动网页端等）的互联网服务。<br>
                                    本协议的条款可由犀金随时修改，修改后的使用协议在网站上公布的同时即生效并替代原有的协议。<br>
                                    你在犀金注册账号后，即成为犀金用户（以下简称“用户”/“你”），并受到本协议的约束。<br>


                                    <p> 1.2</p>
                                    用户应遵守本协议的各项条款，合法合理地使用犀金提供的服务。否则，犀金有权依据本协议中断或停止为你提供相应服务。同时，犀金保留在任何时间段收回用户账号的权利。
                                    <p>1.3</p>
                                    用户直接或通过各类方式间接使用犀金服务（如RSS源、站外引用、第三方平台发布）数据的行为，均将被视作已无条件接受本协议全部内容，否则请立即停止使用犀金提供的全部服务。
                                    <p>2、免责说明</p>
                                    <p>2.1</p>
                                    犀金为大家提供用户间信息交流是希望能给大家创造更多认识新朋友和创业的机会。但同时，我们也郑重提醒参与交流的犀金用户，在决定参与活动前，应充分了解交流发布者及活动内容的相关信息，做到心中有数；并在参与活动中提高自我保护意识并加强风险防范意识。犀金坚决抵制那些利用犀金功能企图实施违法、犯罪行为的组织和/或个人。

                                    <p>2.2</p>
                                    利用犀金，以骗财骗色等为目的，实施违法、犯罪行为的，一经发现或被举报，将被永久封禁犀金账号。视情节轻重，犀金将配合举报人向公安机关提供违法、犯罪人的相关备案信息，并配合抓捕等。
                                    严禁使用含有（或部分含有）其它网站、公司、机构、团体的中英文名称和（或）域名作为用户名注册犀金用户。

                                    <p>2.3</p>


                                    因犀金出行属于用户个人自愿的行为，因此在出行中发生的任何风险、意外，均需用户自行承担。在此，犀金强烈建议参与犀金活动的用户在线下见面、网络转账、参与网友组织的线下活动前调查清楚相关活动及组织者的身份背景，充分保障自身的合法权益。



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
