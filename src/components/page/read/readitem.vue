<template>
        <div class="readitem-page">
          <Wheader></Wheader>
            <div class="index-inner">
                <!-- banner部分轮播和下载通道 -->
                <div class="index-inner-banner">
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                            <div class="index-inner-bannerleft">
                                <div class="topimg">
                                    <img :src="detaidata.preview_image" alt="">
                                </div>
                                <div  class="article-title">
                                    <p v-html="detaidata.title"></p>
                                </div>
                                <div class="article-desc">
                                    <p>{{detaidata.desc}}</p>
                                </div>
                                <div class="article-authorbox">
                                    <img :src="detaidata.avatar_image" alt="">
                                    <p class="article-author">{{detaidata.author}}</p>
                                    <p class="article-beforetime">{{detaidata.before_time}}</p>
                                </div>
                                <div class="ql-container ql-snow">
                                    <div class="ql-editor" v-html="detaidata.content"></div>
                                </div>
                                <!-- 标签 -->
                                <div class="readitem-article-tabs">
                                    <template  v-for="item in detaidata.label">
                                        <div>
                                            <span>{{item.name}}</span>
                                        </div>
                                    </template>
                                </div>
                                <!-- 点赞评论 -->
                                <div class="readitem-article-up">
                                    <div class="readitem-article-upleft">
                                        <div v-if="dislike" @click="addlike">
                                            <img src="../../../../static/img/up.png" alt="" >
                                            <span>{{detaidata.like_num}}</span>
                                        </div>
                                        <div class="readitem-article-upleftfocus" v-if="like" @click="adddislike">
                                            <img src="../../../../static/img/Combined Shape 12.png" alt="">
                                            <span>{{detaidata.like_num}}</span>
                                        </div>
                                        <div v-if="disfocus" @click="addfocus">
                                            <img src="../../../../static/img/Star 2.png" alt="">
                                            <span>{{detaidata.collect_num}}</span>
                                        </div>
                                        <div class="readitem-article-upleftfocus" v-if="focus" @click="adddisfocus">
                                            <img src="../../../../static/img/Star 21.png" alt="">
                                            <span>{{detaidata.collect_num}}</span>
                                        </div>
                                    </div>
                                    <div class="readitem-article-upright" @click="openshare" >
                                        <img src="../../../../static/img/编组 15备份 3.png" alt="">
                                        <div class="sharebox" v-if="shareboxshow">
                                            <div class="sharebox-left">
                                                <img src="../../../../static/img/编组 12.png" alt="">
                                            </div>
                                            <div class="sharebox-right">
                                                <div class="sharebox-title"  v-html="detaidata.title">
                                                    <!-- 当1.9亿90后成为消费支柱，你却没有搞懂他们 -->
                                                </div>
                                                <!-- <p v-html="detaidata.title"></p> -->
                                                <div class="sharebox-bottom">
                                                    <div class="sharebox-copybox">
                                                        <p>
                                                            {{shareurl}}
                                                            <!-- http://47.103.61.179:8084/?{{id}} -->
                                                            <!-- http://47.103.61.179:8039/#/readitem?id={{id}} -->
                                                        </p>
                                                    </div>
                                                    <p class="sharebox-copybtn" v-clipboard:copy="shareurl" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 评论面板区域 -->
                                <div class="readitem-commentbox">
                                    <div class="readitem-commenttitle">
                                        评论区
                                    </div>
                                    <div class="readitem-commentinputbox">
                                        <input type="text" placeholder="犀客，请登陆后再发表评论哦~" class="readitem-commentinput" v-model="comment">
                                        <!-- <div class="readitem-commentlogin">
                                            <span>登陆/注册</span>
                                        </div> -->
                                        <div class="readitem-commentlogin" @click="addcomment()">
                                            <span>评论</span>
                                        </div>
                                    </div>
                                    <div class="readitem-commentlistbox">
                                        <div class="readitem-commentlistboxtop">
                                            <template>
                                                <p class="readitem-commentotalnum">共
                                                    <span>{{detaidata.comment_num}}</span>
                                                    条评论</p>
                                                <el-tabs v-model="activeName" @tab-click="handleClick">
                                                    <el-tab-pane label="最新" name="new">
                                                        <template v-for="(item,index) in newcommentdata">
                                                            <div class="readitem-commentlistbox">
                                                                <!-- <template v-for="(item,index) in newcommentdata"> -->
                                                                    <div class="readitem-commentlist">
                                                                        <div class="readitem-commentlisttop">
                                                                            <div class="readitem-commentlisttop-left">
                                                                                <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                                                <img :src="item.avatar_image" alt="">
                                                                            </div>
                                                                            <div class="readitem-commentlisttop-right">
                                                                                <div class="readitem-commentlisttop-righttop">
                                                                                    <span class="readitem-commentlisttop-title">
                                                                                        {{item.nick_name}}
                                                                                    </span>
                                                                                    <span class="readitem-commentlisttop-beforetime">
                                                                                        {{item.time_before}}
                                                                                    </span>
                                                                                </div>
                                                                                <div class="readitem-commentlisttop-rightbottom">
                                                                                    {{item.content}}
                                                                                    <p @click="replyfather(item,index)">
                                                                                        回复
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <template v-for="(item,index) in item.child">
                                                                        <div class="readitem-commentlist-item">
                                                                            <div class="readitem-commentlist">
                                                                                <div class="readitem-commentlisttop">
                                                                                    <div class="readitem-commentlisttop-left">
                                                                                        <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                                                        <img :src="item.avatar_image" alt="">
                                                                                    </div>
                                                                                    <div class="readitem-commentlisttop-right">
                                                                                        <div class="readitem-commentlisttop-righttop">
                                                                                            <span class="readitem-commentlisttop-title">
                                                                                                {{item.nick_name}}
                                                                                                <!-- 高晓灵 -->
                                                                                            </span>
                                                                                            <span class="readitem-commentlisttop-arrow"></span>
                                                                                            <span class="readitem-commentlisttop-title">
                                                                                                {{item.replied_nick_name}}
                                                                                            </span>
                                                                                            <span class="readitem-commentlisttop-beforetime">
                                                                                                {{item.time_before}}
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="readitem-commentlisttop-rightbottom">
                                                                                            {{item.content}}
                                                                                            <p @click="replychild(item,index)">
                                                                                                回复
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </template>
                                                                <!-- </template>   -->
                                                            </div>
                                                        </template>
                                                        <!-- 分页 -->
                                                        <div class="pagination">
                                                            <el-pagination
                                                                background
                                                                @size-change="handleSizeChange1"
                                                                @current-change="handleCurrentChange1"
                                                                :current-page.sync="currentPage1"
                                                                :page-size="2"
                                                                layout="prev, pager, next"
                                                                :total="total1"
                                                                style="float: left">
                                                            </el-pagination>
                                                            <div style="float: left">
                                                                <span style="color:rgba(0,125,250,1);">
                                                                    {{currentPage1}}
                                                                </span>
                                                                <span>
                                                                    /{{pages1}}
                                                                </span>
                                                            </div>
                                                            <div class="jump">
                                                                    跳转至
                                                                    <el-input v-model="jumppage1"></el-input>
                                                                    页
                                                            </div>
                                                            <div>
                                                                    <el-button @click="jump1">GO!</el-button>
                                                            </div>
                                                        </div>
                                                    </el-tab-pane>
                                                    <el-tab-pane label="最热" name="hot">
                                                        <template v-for="(item,index) in hotcommentdata">
                                                            <div class="readitem-commentlistbox">
                                                                <!-- <template v-for="(item,index) in newcommentdata"> -->
                                                                    <div class="readitem-commentlist">
                                                                        <div class="readitem-commentlisttop">
                                                                            <div class="readitem-commentlisttop-left">
                                                                                <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                                                <img :src="item.avatar_image" alt="">
                                                                            </div>
                                                                            <div class="readitem-commentlisttop-right">
                                                                                <div class="readitem-commentlisttop-righttop">
                                                                                    <span class="readitem-commentlisttop-title">
                                                                                        {{item.nick_name}}
                                                                                    </span>
                                                                                    <span class="readitem-commentlisttop-beforetime">
                                                                                        {{item.time_before}}
                                                                                    </span>
                                                                                </div>
                                                                                <div class="readitem-commentlisttop-rightbottom">
                                                                                    {{item.content}}
                                                                                    <p @click="replyfather(item,index)">
                                                                                        回复
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <template v-for="(item,index) in item.child">
                                                                        <div class="readitem-commentlist-item">
                                                                            <div class="readitem-commentlist">
                                                                                <div class="readitem-commentlisttop">
                                                                                    <div class="readitem-commentlisttop-left">
                                                                                        <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                                                        <img :src="item.avatar_image" alt="">
                                                                                    </div>
                                                                                    <div class="readitem-commentlisttop-right">
                                                                                        <div class="readitem-commentlisttop-righttop">
                                                                                            <span class="readitem-commentlisttop-title">
                                                                                                {{item.nick_name}}
                                                                                                <!-- 高晓灵 -->
                                                                                            </span>
                                                                                            <span class="readitem-commentlisttop-arrow"></span>
                                                                                            <span class="readitem-commentlisttop-title">
                                                                                                {{item.replied_nick_name}}
                                                                                            </span>
                                                                                            <span class="readitem-commentlisttop-beforetime">
                                                                                                {{item.time_before}}
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="readitem-commentlisttop-rightbottom">
                                                                                            {{item.content}}
                                                                                            <p @click="replychild(item,index)">
                                                                                                回复
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </template>
                                                                <!-- </template>   -->
                                                            </div>
                                                        </template>
                                                        <!-- 分页 -->
                                                        <div class="pagination">
                                                            <el-pagination
                                                                background
                                                                @size-change="handleSizeChange2"
                                                                @current-change="handleCurrentChange2"
                                                                :current-page.sync="currentPage2"
                                                                :page-size="2"
                                                                layout="prev, pager, next"
                                                                :total="total2"
                                                                style="float: left">
                                                            </el-pagination>
                                                            <div style="float: left">
                                                                <span style="color:rgba(0,125,250,1);">
                                                                    {{currentPage2}}
                                                                </span>
                                                                <span>
                                                                    /{{pages2}}
                                                                </span>
                                                            </div>
                                                            <div class="jump2">
                                                                跳转至
                                                                <el-input v-model="jumppage2"></el-input>
                                                                页
                                                            </div>
                                                            <div>
                                                                    <el-button @click="jump2">GO!</el-button>
                                                            </div>
                                                        </div>
                                                    </el-tab-pane>
                                                </el-tabs>
                                            </template>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                            <div class="index-banner-hotarticlelist">
                                <div class="index-banner-hotarticletitle">
                                    <p>本周热点</p>
                                    <img src="../../../../static/img/矩形 2 (2).png" alt="">
                                </div>
                                <template v-for="(item,index) in hotdata">
                                    <div class="inner-planingleft-card">
                                        <div class="planingleft-cardimg" @click="goreaditem(item,index)">
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
                                            </div>
                                            <div class="planingleft-cardcontent-footer">
                                                <div class="planingleft-cardcontent-footerright">
                                                    <div class="planingleft-cardcontent-footertips">
                                                        <span>
                                                            <span class="planingleft-cardcontent-footertipsnum">
                                                                <!-- {{item.like_num}} -->
                                                                11
                                                            </span>
                                                            喜欢
                                                        </span>
                                                        <span>•</span>
                                                        <span>
                                                            <span class="planingleft-cardcontent-footertipsnum">
                                                                <!-- {{item.comment_num}} -->
                                                                12
                                                            </span>
                                                            评论
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template v-for="(item,index) in hottitledata">
                                    <div class="inner-planingleft-card" @click="goreaditem(item,index)">
                                        <div class="inner-planingleft-cardcontent">
                                            <div class="planingleft-cardcontent-title">
                                                <!-- 如何开一家汽修保养店 -->
                                                {{item.title}}
                                            </div>
                                            <div class="planingleft-cardcontent-footer">
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

                <!-- 关注区域 -->
                <!-- <div class="focusbox">
                    <div class="focuslist">
                        <div class="focus-item">

                        </div>
                    </div>
                </div> -->


                <div style="min-height: 50px;"></div>
            </div>
            <div class="tuijianbox">
                 <!-- 阅读 -->
                 <div class="index-inner-read" style="margin:0 auto;">
                        <div class="index-inner-readtitle">
                            <span>推荐阅读</span>
                        </div>
                        <div class="index-inner-readlist">
                            <template v-for="(item,index) in articledata">
                                <div class="index-inner-readitem" >
                                    <div class="index-inner-readitemimg" @click="goreaditem(item,index)">
                                        <!-- <img src="../../../../static/img/read.png" alt=""> -->
                                        <img :src="item.img_url" alt="">
                                    </div>
                                    <div class="index-inner-readitemcontent">
                                        <p class="index-inner-readitemcontent-title">
                                            <!-- 聪明的投资者 第1章 投资与投机 -->
                                            {{item.title}}
                                        </p>
                                        <p class="index-inner-readitemcontent-inner" v-html="item.preview_content">
                                            <!-- 在你买进一只股票之前，要对该公司及及其基础作者其基础者… -->
                                        </p>
                                    </div>
                                    <div class="readitem-footer">
                                        <div class="readitem-footerleft">
                                            <div class="planingleft-cardcontent-footerimg">
                                                <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                <img :src="item.avatar_image" alt="">
                                            </div>
                                            <div class="readitem-footeruser">
                                                <p class="readitem-footername">
                                                    {{item.author}}
                                                </p>
                                                <p class="readitem-footertime">
                                                    <!-- {{item.create_time}} -->
                                                </p>
                                            </div>
                                        </div>
                                        <div class="readitem-footerright">
                                            <div class="readitem-footertips">
                                                <span>
                                                    <img src="../../../../static/img/Combined Shape 2.png" alt="">
                                                </span>
                                                <span>13</span>
                                                <span>
                                                    <img src="../../../../static/img/Oval 2.png" alt="">
                                                </span>
                                                <span>65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </template>

    <script>
        import Swiper from 'swiper';
        import 'swiper/dist/css/swiper.min.css';
        import Footer from '../../common/footer.vue'
        import Wheader from '../../common/wheader.vue'
        import VueQuillEditor from 'vue-quill-editor'
        import 'quill/dist/quill.core.css'
        import 'quill/dist/quill.snow.css'
        import 'quill/dist/quill.bubble.css'
        import VueClipboard from 'vue-clipboard2'

        Vue.use(VueClipboard)
        Vue.use(VueQuillEditor)
        export default {
            data() {
                return {
                    dislike:true,
                    like:false,
                    disfocus:true,
                    focus:false,
                    shareboxshow:false,
                    cur_page1: 1,
                    pages1: 0,
                    total1:"",
                    cur_page2: 1,
                    pages2: 0,
                    total2:"",
                    user:"",
                    jumppage1:"",
                    jumppage2:"",
                    guihuadata:"",
                    articledata:"",
                    bangdata:"",
                    detaidata:"",
                    hotdata:"",
                    hottitledata:"",
                    newcommentdata:"",
                    hotcommentdata:"",
                    totalcomment:"",
                    id:"",
                    activeName: "new",
                    comment:"",
                    shareurl:"",
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
                Footer,
                Wheader
            },
            mounted() {
                this.getfenye()
            },
            created() {
                // this.user = JSON.parse(localStorage.getItem('info'))
                // this.user = localStorage.getItem('info')
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                this.id = this.$route.query.id
                // this.shareurl =" http://47.103.61.179:8084/?"+this.id
                this.shareurl = "http://47.103.61.179:8039/#/readitem?id="+this.id
                this.getarticledata()
                this.getdetaildata()
                this.gethotdata()
                this.gethottitledata()
                this.getnewcommentdata()
                this.gethotcommentdata()
            },
            methods: {
                getarticledata(){
                    this.$get('articles?sort=-id&page=1&per-page=4&lpop=5').then((res) => {
                        if(res.code === 1){
                            this.articledata = res.info.items
                            console.log(this.articledata)
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getdetaildata(){
                    this.$get('articles?id='+this.id+'&expand=content,comment,label,recommend').then((res) => {
                        if(res.code === 1){
                            this.detaidata = res.info.items[0]

                            if(!this.detaidata.collect){
                                this.focus = false
                                this.disfocus = true
                            }else{
                                this.focus = true
                                this.disfocus = false
                            }

                            if(!this.detaidata.like){
                                this.like = false
                                this.dislike = true
                            }else{
                                this.like = true
                                this.dislike = false
                            }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                gethotdata(){
                    this.$get('articles?sort=-id&page=1&per-page=1').then((res) => {
                        console.log(res)
                        if(res.code === 1){
                            this.hotdata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                gethottitledata(){
                    this.$get('articles?sort=-id&page=1&per-page=4').then((res) => {
                        console.log(res)
                        if(res.code === 1){
                            this.hottitledata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                goreaditem(item,index){
                    this.$router.push({path: '/blank', query: {id:item.id}});
                },
                getnewcommentdata(item,index){
                    this.$get('comments?article_id=58&pid=0&per-page=2&page=1&sort=-id',{
                        article_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if(res.code === 1){
                            this.newcommentdata = res.info.items
                            this.total1 = res.info._meta.totalCount
                            this.pages1 = res.info._meta.pageCount;
                            this.cur_page1 = res.info._meta.currentPage
                            this.currentPage1 = res.info._meta.currentPage
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                gethotcommentdata(){
                    this.$get('comments?article_id=58&pid=0&per-page=2&page=1&sort=-child_count',{
                        article_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if(res.code === 1){
                            this.hotcommentdata = res.info.items
                            this.total2 = res.info._meta.totalCount
                            this.pages2 = res.info._meta.pageCount;
                            this.cur_page2 = res.info._meta.currentPage
                            this.currentPage2 = res.info._meta.currentPage
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                replyfather(item,index){
                    // console.log(item)
                    if(this.user){
                        this.$prompt('请输入回复内容', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                        }).then(({ value }) => {
                            this.$post('comments',{
                                id:this.id,
                                pid:item.id,
                                content:value
                            }).then((res) => {
                                console.log(res)
                                if(res.code === 1){
                                    this.$message({
                                        message: '回复成功',
                                        type: 'success'
                                    });
                                    this.getnewcommentdata()
                                    this.gethotcommentdata()
                                }else{
                                    this.$message.error(res.msg);
                                }
                                this.loading = false
                            }).catch(() => {this.loading = false})
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消输入'
                            });
                        });
                    }else{
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                        });
                    }

                },
                replychild(item,index){
                    console.log(item)
                    if(this.user){
                        this.$prompt('请输入回复语内容', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                        }).then(({ value }) => {
                            this.$post('comments',{
                                id:this.id,
                                pid:item.id,
                                content:value
                            }).then((res) => {
                                console.log(res)
                                if(res.code === 1){
                                    this.$message({
                                        message: '回复成功',
                                        type: 'success'
                                    });
                                    this.getnewcommentdata()
                                    this.gethotcommentdata()
                                }else{
                                    this.$message.error(res.msg);
                                }
                                this.loading = false
                            }).catch(() => {this.loading = false})
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消输入'
                            });
                        });
                    }else{
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                        });
                    }
                },
                addcomment(){
                    if(this.user){
                        if(!this.comment){
                            this.$message({
                                message: '评论内容不能为空',
                                type: 'error'
                            });
                        }else{
                            this.$post('comments',{
                                id:this.id,
                                pid:0,
                                content:this.comment
                            }).then((res) => {
                                console.log(res)
                                if(res.code === 1){
                                    this.$message({
                                        message: '评论成功',
                                        type: 'success'
                                    });
                                    this.getnewcommentdata()
                                    this.gethotcommentdata()
                                    this.comment = ''
                                }else{
                                    this.$message.error(res.message);
                                }
                                this.loading = false
                            }).catch(() => {this.loading = false})
                        }
                    }else{
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                        });
                    }
                },
                   // 分页
                handleCurrentChange1(val) {
                    this.loading = true
                    this.$get('comments?article_id=58&pid=0&per-page=2&page=1&sort=-id', {
                        page: val,
                        article_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.newcommentdata = JSON.parse(JSON.stringify(res.info.items))
                            this.total1 = res.info._meta.totalCount
                            this.pages1 = res.info._meta.pageCount;
                            this.cur_page1 = res.info._meta.currentPage
                            this.currentPage1 = res.info._meta.currentPage
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                jump1(){
                    this.$get('comments?article_id=58&pid=0&per-page=2&page=1&sort=-id', {
                        page: this.jumppage1,
                        article_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.newcommentdata = JSON.parse(JSON.stringify(res.info.items))
                            this.total1 = res.info._meta.totalCount
                            this.pages1 = res.info._meta.pageCount;
                            this.cur_page1 = res.info._meta.currentPage
                            this.currentPage1 = res.info._meta.currentPage
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                handleCurrentChange2(val) {
                    this.loading = true
                    this.$get('comments?article_id=58&pid=0&per-page=2&page=1&sort=-child_count', {
                        page: val,
                        article_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.hotcommentdata = JSON.parse(JSON.stringify(res.info.items))
                            this.total2 = res.info._meta.totalCount
                            this.pages2 = res.info._meta.pageCount;
                            this.cur_page2 = res.info._meta.currentPage
                            this.currentPage2 = res.info._meta.currentPage
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                jump2(){
                    this.$get('comments?article_id=58&pid=0&per-page=2&page=1&sort=-child_count', {
                        page: this.jumppage2,
                        article_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.hotcommentdata = JSON.parse(JSON.stringify(res.info.items))
                            this.total2 = res.info._meta.totalCount
                            this.pages2 = res.info._meta.pageCount;
                            this.cur_page2 = res.info._meta.currentPage
                            this.currentPage2 = res.info._meta.currentPage
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
                openshare(){
                    this.shareboxshow = true
                },
                onCopy(e) {
                    this.$message({
                        message:"复制链接成功",
                        type: 'success'
                    });
                },
                onError(e) {
                    console.log(e);
                },
                copy(){
                    var clipboard = new Clipboard('.tag-read')
                    clipboard.on('success', e => {
                      console.log('复制成功')
                      // 释放内存
                      clipboard.destroy()
                    })
                    clipboard.on('error', e => {
                      // 不支持复制
                      console.log('该浏览器不支持自动复制')
                      // 释放内存
                      clipboard.destroy()
                    })
                },
                addlike(){
                    if(this.user){
                        this.$put('articles/'+this.id+'?type=1',{
                        }).then((res) => {
                            if(res.code === 1){
                            this.$message('点赞成功');
                            this.getdetaildata()
                            this.dislike = false
                            this.like = true
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                        }).catch(() => {this.loading = false})
                    }else{
                        this.$message.error("请先登录");
                        setTimeout(()=>{
                            this.$router.push('/login');
                        },200)
                    }

                },
                adddislike(){
                    if(this.user){
                        this.$put('articles/'+this.id+'?type=1',{
                        }).then((res) => {
                            if(res.code === 1){
                            this.$message('取消点赞成功');
                            this.getdetaildata()
                            this.dislike = true
                            this.like = false
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                        }).catch(() => {this.loading = false})
                    }else{
                        this.$message.error("请先登录");
                        setTimeout(()=>{
                            this.$router.push('/login');
                        },200)
                    }

                },
                addfocus(){
                    if(this.user){
                        this.$put('articles/'+this.id+'?type=2',{
                            id:this.id
                        }).then((res) => {
                            if(res.code === 1){
                            this.$message('收藏成功');
                            this.getdetaildata()
                            this.disfocus = false
                            this.focus = true
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                        }).catch(() => {this.loading = false})
                    }else{
                        this.$message.error("请先登录");
                        setTimeout(()=>{
                            this.$router.push('/login');
                        },200)
                    }
                },
                adddisfocus(){
                    if(this.user){
                        this.$put('articles/'+this.id+'?type=2',{
                        }).then((res) => {
                            if(res.code === 1){
                            this.$message('取消收藏');
                            this.getdetaildata()
                            this.disfocus = true
                            this.focus = false
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                        }).catch(() => {this.loading = false})

                    }else{
                        this.$message.error("请先登录");
                        setTimeout(()=>{
                            this.$router.push('/login');
                        },200)
                    }

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
    <style>
    </style>
