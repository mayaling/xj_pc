<template>
        <div class="sread-page">
            <!-- <div class="sread sheader">
                <div class="sread sheader-inner">
                    <div class="sread sheader-top">
                        <div class="sread sheader-left">
                            <div class="sread sheader-logo">
                                <img src="../../../../static/img/编组 2(2).png" alt="">
                            </div>
                            <div class="sread sheader-menu">
                                <ul>
                                    <router-link :to="{path:'index'}">
                                        <li>
                                            首页
                                        </li>
                                    </router-link>
                                    <li>优选</li>
                                    <router-link :to="{path:'read'}">
                                        <li>
                                            阅读
                                        </li>
                                    </router-link>
                                    <router-link :to="{path:'bang'}">
                                        <li style="margin-top:6px;">
                                            <img src="../../../../static/img/创业Bang！ 3.png" alt="">
                                        </li>
                                    </router-link>
                                    <router-link :to="{path:'app'}">
                                        <li>犀金APP</li>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                        <div class="sread sheader-menuline">
                            <img src="../../../../static/img/矩形 2(1).png" alt="">
                        </div>
                        <div class="sread sheader-right">
                            <div class="sread sheader-searchbox">
                                <div class="sheader-searchlogo">
                                    <img src="../../../../static/img/Shape 2.png" alt="">
                                </div>
                                <div class="sheader-searchinput">
                                    <input type="text" placeholder="搜创业/项目/优选">
                                </div>
                            </div>
                            <div class="index-header-loginbox">
                                <ul v-if="nologin">
                                    <li>注册</li>
                                    <li style="margin-top:10px;">
                                        <img src="../../../../static/img/矩形备份 4.png" alt="">
                                    </li>
                                </ul>
                                <el-dropdown class="user-name" trigger="click" @command="handleCommand" v-if="login">
                                    <p class="el-dropdown-link">
                                        <span class="touxiangbox">
                                            <img :src="user.avatar_image" alt="">
                                        </span>
                                        <span>
                                            {{user.nick_name}}
                                        </span>
                                    </p>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item  command="user">个人中心</el-dropdown-item>
                                        <el-dropdown-item  command="loginout">注销</el-dropdown-item>
                                    </el-dropdown-menu>
                                    </el-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <Wheader></Wheader>

            <div class="search-box">
                <div class="sread typetab">
                    <div class="typetab-top">
                        <div class="sread typetab-searchbox">
                            <div class="sread typetab-searchbox-left">
                                    <div class="typetab-searchlogo">
                                        <img src="../../../../static/img/Shape 2.png" alt="">
                                    </div>
                                <input type="text" placeholder="搜创业/项目/优选" v-model="title">
                            </div>
                            <div class="sread typetab-searchbox-right" @click="searchread">
                                <img src="../../../../static/img/编组 2 (1).png" alt="">
                            </div>
                        </div>
                        <div class="typetab-pubbtn" @click="opendialog">
                            <img src="../../../../static/img/编组 5 (1).png" alt="">
                        </div>
                        <el-dialog :visible.sync="dialogFormVisible" width=534px top=30vh :lock-scroll="false" :close-on-click-modal="false" @close='closeDialog' class="download-dialog">
                            <div class="dialogbox">
                                <div class="download-title">
                                    犀金APP全新升级
                                </div>
                                <div class="download-desc">
                                    扫描二维码下载APP，随时随地把握赚钱机会！
                                </div>
                                <div class="download-code">
                                    <img src="../../../../static/img/编组 12.png" alt="">
                                </div>
                            </div>

                        </el-dialog>
                    </div>
                    <div class="typetab-tips" v-if="resultshow">
                        <span>{{title}}</span>
                        共检索到
                        <span> {{total}}</span>
                        条结果
                    </div>
                    <div class="typetab-botom">
                        <span class="active">阅读</span>
                        <router-link :to="{path:'sbang'}">
                            <span>创业Bang！</span>
                        </router-link>
                        <!-- <router-link :to="{path:'sselect'}">
                            <span>优选</span>
                        </router-link> -->
                        <router-link :to="{path:'saudio'}">
                            <span>电台</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="index-inner" v-if="datashow">

                  <!-- 规划 -->
                <div class="index-inner-planning">
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                            <div class="index-inner-planningleft">
                                <template v-for="(item,index) in listdata">
                                    <div class="inner-planingleft-card">
                                        <div class="planingleft-cardimg"  @click="goreaditem(item,index)">
                                            <!-- <img src="../../../../static/img/矩形备份 11.png" alt=""> -->
                                            <img :src="item.img_url" alt="">
                                            <div class="planingleft-cardtypeimg">
                                                <!-- 职业规划 -->
                                                {{item.type_name}}
                                            </div>
                                        </div>
                                        <div class="inner-planingleft-cardcontent">
                                            <div class="planingleft-cardcontent-title">
                                                <!-- 如何开一家汽修保养店 -->
                                                {{item.title}}
                                            </div>
                                            <div class="planingleft-cardcontent-content" v-html="item.preview_content">
                                                <!-- {{item.preview_content}} -->
                                                <!-- 巨大的市场前景势必迎来下一轮的投资高潮，面对蜂拥而至的跨国汽车服务巨头，大势所趋，必有宏图，汽车有多少汽修行业前景就有多广。而于观望情绪渐浓的本土... -->
                                            </div>
                                            <div class="planingleft-cardcontent-footer">
                                                <div class="planingleft-cardcontent-footerleft">
                                                    <div class="planingleft-cardcontent-footerimg">
                                                        <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                        <img :src="item.avatar_image" alt="">
                                                    </div>
                                                    <div class="planingleft-cardcontent-footeruser">
                                                        <p class="planingleft-cardcontent-footername">
                                                            {{item.author}}
                                                        </p>
                                                        <p class="planingleft-cardcontent-footertime">
                                                            {{item.create_time}}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="planingleft-cardcontent-footerright">
                                                    <div class="planingleft-cardcontent-footertips">
                                                        <span>
                                                            <span class="planingleft-cardcontent-footertipsnum">
                                                                {{item.like_num}}
                                                            </span>
                                                            喜欢
                                                        </span>
                                                        <span>•</span>
                                                        <span>
                                                            <span class="planingleft-cardcontent-footertipsnum">
                                                                {{item.comment_num}}
                                                            </span>
                                                            评论
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div>

                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                            <!-- <div class="index-inner-planningright">
                                <div class="index-inner-planningrighttitlebox">
                                    <div class="index-inner-planningrighttitle">
                                        <span> 优选产品</span>
                                        <span>
                                            <img src="../../../../static/img/编组 9.png" alt="">
                                        </span>
                                    </div>
                                    <div class="index-inner-planningrightchange">
                                        换一批
                                    </div>
                                </div>
                                <div class="inner-planningright-productlist">
                                    <div class="inner-planningright-productitem">
                                        <img src="../../../../static/img/Mask 2.png" alt="">
                                        <p>爱分期</p>
                                    </div>
                                    <div class="inner-planningright-productitem">
                                        <img src="../../../../static/img/Mask 2.png" alt="">
                                        <p>爱分期</p>
                                    </div>
                                    <div class="inner-planningright-productitem">
                                        <img src="../../../../static/img/Mask 2.png" alt="">
                                        <p>爱分期</p>
                                    </div>
                                    <div class="inner-planningright-productitem">
                                        <img src="../../../../static/img/Mask 2.png" alt="">
                                        <p>爱分期</p>
                                    </div>
                                    <div class="inner-planningright-productitem">
                                        <img src="../../../../static/img/Mask 2.png" alt="">
                                        <p>爱分期</p>
                                    </div>
                                    <div class="inner-planningright-productitem">
                                        <img src="../../../../static/img/Mask 2.png" alt="">
                                        <p>爱分期</p>
                                    </div>
                                </div>
                            </div> -->
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
                                                <div class="index-inner-bannerrightapple">
                                                    <img src="../../../../static/img/编组 28.png" alt="">
                                                </div>
                                            </el-col>
                                            <el-col :span="12">
                                                <div class="index-inner-bannerrightandroid">
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
                                <!-- <div class="index-inner-bannerrighttitle">
                                    <span>犀金APP现已开放下载</span>
                                    <span><img src="../../../../static/img/编组 3.png" alt=""></span>
                                </div> -->
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <!-- 分页 -->
                <div class="pagination">
                    <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="16"
                    layout="prev, pager, next"
                    :total="total"
                    style="float: left">
                    </el-pagination>
                    <div style="float: left">
                    <span style="color:rgba(0,125,250,1);">
                        {{currentPage}}
                    </span>
                    <span>
                        /{{pages}}
                    </span>
                    </div>
                    <div class="jump">
                        跳转至
                        <el-input v-model="jumppage"></el-input>
                        页
                    </div>
                    <div>
                        <el-button @click="jump">GO!</el-button>
                    </div>
                </div>
            </div>
            <div class="index-inner" style="text-align: center;min-height: 400px;margin-top:20px;" v-if="nodatashow">
                <p style="margin-top:200px;">暂无数据</p>
            </div>
            <Footer></Footer>
        </div>
    </template>

    <script>

        import Swiper from 'swiper';
        import 'swiper/dist/css/swiper.min.css';
        import Footer from '../../common/footer.vue'
        import Wheader from '../../common/wheader.vue'

        export default {
            data() {
                return {
                    dialogFormVisible:false,
                    nlogin:true,
                    login:false,
                    listdata:"",
                    title:"",
                    cur_page: 1,
                    pages: 0,
                    total:"",
                    jumppage:"",
                    resultshow:false,
                    datashow:true,
                    nodatashow:false,
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
              this.getfenye()
            },
            created() {
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                if(this.user){
                    this.nlogin = false
                    this.login = true
                }
                this.getguihuadata()
            },
            methods: {
                getlistdata(){
                    this.$get('articles?sort=-id&page=1&per-page=6&title='+this.title,).then((res) => {
                        if(res.code === 1){
                            this.listdata = res.info.items
                            this.pages = res.info._meta.pageCount
                            this.total = res.info._meta.totalCount
                            this.currentPage = res.info._meta.currentPage
                            if(this.listdata.length == 0){
                                this.nodatashow = true
                                this.datashow = false
                            }else{
                                this.nodatashow = false
                                this.datashow = true
                            }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                searchread(){
                    this.getlistdata()
                    this.resultshow = true

                },
                getguihuadata(){
                    this.$get('articles?sort=-id&page=1&per-page=6').then((res) => {
                            console.log(res)
                            if(res.code === 1){
                                this.listdata = res.info.items
                                this.pages = res.info._meta.pageCount
                                this.total = res.info._meta.totalCount
                                this.currentPage = res.info._meta.currentPage
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                    }).catch(() => {this.loading = false})
                },
                handleCurrentChange(val) {
                    this.loading = true
                    this.$get('articles?sort=-id&per-page=6&title='+this.title, {
                        page: val,
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.listdata = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.info._meta.pageCount;
                            this.currentPage = res.info._meta.currentPage
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                jump(){
                    console.log(this.jumppage)
                    this.$get('articles?sort=-id&per-page=6&title='+this.title, {
                        page: this.jumppage,
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.listdata = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.info._meta.pageCount;
                            this.cur_page = res.info._meta.currentPage
                            this.currentPage = res.info._meta.currentPage
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                getfenye(){
                    $(document).ready(function(){
                        $(".btn-prev").html("<   上一页")
                        $(".btn-next").html("下一页   >")
                    });
                },
                opendialog(){
                    this.dialogFormVisible = true
                },
                goreaditem(item,index){
                    this.$router.push({path: '/readitem', query: {id:item.id}});
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
                }
            }
        }
    </script>
    <style scoped>
    </style>
