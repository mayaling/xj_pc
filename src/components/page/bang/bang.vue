<template>
    <div class="bang-page">
        <div class="bang header">
            <div class="bang header-inner">
                <!-- <div class="bang header-top">
                    <div class="bang header-left">
                        <div class="bang header-logo">
                            <router-link :to="{path:'index'}">
                                <img src="../../../../static/img/编组 20.png" alt="">
                            </router-link>
                        </div>
                        <div class="bang header-menu">
                            <ul>
                                <router-link :to="{path:'index'}">
                                    <li>
                                        首页
                                    </li>
                                </router-link>

                                <router-link :to="{path:'audio'}">
                                    <li>
                                        电台
                                    </li>
                                </router-link>
                                <router-link :to="{path:'read'}">
                                    <li>
                                        阅读
                                    </li>
                                </router-link>
                                <router-link :to="{path:'bang'}">
                                    <li>
                                        <img src="../../../../static/img/rbang1.png" alt="" class="bangimg">
                                    </li>
                                </router-link>
                                <router-link :to="{path:'app'}">
                                    <li>犀金APP</li>
                                </router-link>
                            </ul>
                        </div>
                    </div>
                    <div class="bang header-menuline">
                        <img src="../../../../static/img/hline.png" alt="">
                    </div>
                    <div class="readlist header-right">
                        <div class="readlist header-searchbox" @click="gosearch">
                            <div class="header-searchlogo">
                                <img src="../../../../static/img/Shape 2(1).png" alt="">
                            </div>
                        </div>
                        <div class="readlist header-loginbox">
                            <ul v-if="nlogin">
                                <li>注册</li>
                                <router-link :to="{path:'login'}">
                                    <li style="margin-top:10px;">
                                        <img src="../../../../static/img/hlogin.png" alt="">
                                    </li>
                                </router-link>

                            </ul>
                            <el-dropdown class="user-name" trigger="hover" @command="handleCommand" v-if="login">
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
                </div> -->
                <Header></Header>
                <div class="bang header-bottom">
                    <img src="../../../../static/img/编组 14.png" alt="">
                </div>
            </div>

        </div>
        <div class="index-inner">
            <!-- 轮播图 -->
            <div class="bang inner-banner">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <div class="bang inner-bannerleft">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <template v-for="(item,index) in bangbannerdata">
                                        <div class="swiper-slide">
                                            <img :src="item.img_url" alt="">
                                            <!-- <img src="../../../../static/img/矩形备份 16.png" alt=""> -->
                                        </div>
                                    </template>
                                </div>
                                <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                                <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                                　<div class="swiper-pagination"></div>

                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="padding-left:10px;padding-right: 0;;">
                        <div class="bang inner-bannerright">
                            <div class="bang inner-bannerrighttitle">
                                <img src="../../../../static/img/什么是创业Bang！ 2.png" alt="">
                            </div>
                            <div class="bang inner-bannerrightcontent">
                                <p>这里是创业的集散地</p>
                                <p>与其放弃一个商机</p>
                                <p>不如在这里发布你的需求</p>
                                <p>寻找与你志同道合的小伙伴</p>
                            </div>
                           <div class="bang inner-bannerrightpub">
                                <span @click="opendialog">发布创业bang!</span>
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
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="bang-screen-box">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <div class="bang-screen-boxleft">
                            <div class="bang-scrern-typeitem">
                                <div class="bang-scrern-typeitemtitle">
                                    Bang类型
                                </div>
                                <div class="bang-screen-choosetip">
                                    <template>
                                        <el-radio-group v-model="bangtype"  @change="search">
                                            <el-radio-button label="" >不限</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="bangtype" v-for="(item,index) in bangtypedata"  @change="search">
                                            <el-radio-button :label="item.id" >{{item.name}}</el-radio-button>
                                        </el-radio-group>
                                    </template>
                                </div>
                            </div>
                            <div class="bang-scrern-typeitem">
                                <div class="bang-scrern-typeitemtitle">
                                    征集截止时间
                                </div>
                                <div class="bang-screen-choosetip">
                                    <template>
                                            <!-- <el-radio-group v-model="endtime"  @change="search" v-for="item in monthdata">
                                                <el-radio-button label="item">{{item}}</el-radio-button>
                                            </el-radio-group> -->
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button label=" ">不限</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                        <el-radio-button :label="year" :disabled="true">{{year}}年</el-radio-button>
                                        </el-radio-group>
                                        <template v-for="(item,index) in dataArr" v-if="index<7">
                                            <el-radio-group v-model="endtime"  @change="search">
                                                <el-radio-button :label="item" >{{item.slice(6)}}月</el-radio-button>
                                            </el-radio-group>
                                        </template>
                                        <template v-for="(item,index) in dataArr" v-if="index>6">
                                            <el-radio-group v-model="endtime"  @change="search">
                                                <el-radio-button :label="item" >更远日期</el-radio-button>
                                            </el-radio-group>
                                        </template>
                                        <!-- <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month)%12">{{month}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month)%12+1">{{(month)%12+1}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month+1)%12+1" >{{(month+1)%12+1}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month+2)%12+1" >{{(month+2)%12+1}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month+3)%12+1" >{{(month+3)%12+1}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month+4)%12+1" >{{(month+4)%12+1}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime"  @change="search">
                                            <el-radio-button :label="(month+5)%12+1" >{{(month+5)%12+1}}月</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="endtime" @change="search">
                                            <el-radio-button :label="(month+6)%12+1" >更远日期</el-radio-button>
                                        </el-radio-group> -->
                                        <!-- <el-radio-group v-model="endtime" @click="handelsearch">
                                            <el-radio-button label="不限" ></el-radio-button>
                                            <el-radio-button :label="year" :disabled="true">{{year}}年</el-radio-button>
                                            <el-radio-button :label="month">{{month}}月</el-radio-button>
                                            <el-radio-button :label="month+1">{{(month)%12+1}}月</el-radio-button>
                                            <el-radio-button :label="month+2" >{{(month+1)%12+1}}月</el-radio-button>
                                            <el-radio-button :label="month+3" >{{(month+2)%12+1}}月</el-radio-button>
                                            <el-radio-button :label="month+4" >{{(month+3)%12+1}}月</el-radio-button>
                                            <el-radio-button :label="month+5" >{{(month+4)%12+1}}月</el-radio-button>
                                            <el-radio-button :label="month+6" >{{(month+5)%12+1}}月</el-radio-button>
                                            <el-radio-button :label="更远" >更远日期</el-radio-button>
                                        </el-radio-group> -->
                                        <!-- <el-radio-button :label="year" :disabled="true">{{year}}年</el-radio-button>
                                        <el-radio-button :label="month">{{month}}月</el-radio-button>
                                        <el-radio-button :label="month">{{(month)%12+1}}月</el-radio-button>
                                        <el-radio-button :label="month+1" >{{(month+1)%12+1}}月</el-radio-button>
                                        <el-radio-button :label="month+2" >{{(month+2)%12+1}}月</el-radio-button>
                                        <el-radio-button :label="month+3" >{{(month+3)%12+1}}月</el-radio-button>
                                        <el-radio-button :label="month+4" >{{(month+4)%12+1}}月</el-radio-button>
                                        <el-radio-button :label="month+5" >{{(month+5)%12+1}}月</el-radio-button>
                                        <el-radio-button :label="month+6" >{{(month+6)%12+1}}月</el-radio-button> -->
                                    </template>
                                </div>
                            </div>
                            <div class="bang-scrern-typeitem">
                                <div class="bang-scrern-typeitemtitle">
                                    创业地点
                                </div>
                                <div class="bang-screen-choosetip">
                                    <template>
                                        <el-radio-group v-model="citytype" @change="search">
                                            <el-radio-button label="" >不限</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="citytype" v-for="(item,index) in hotcitydata" @change="search">
                                            <el-radio-button :label="item.id" >{{item.name}}</el-radio-button>
                                        </el-radio-group>
                                        <el-radio-group v-model="citytype" @change="search">
                                            <el-radio-button label="other">更多地点</el-radio-button>
                                        </el-radio-group>
                                    </template>
                                    <div class="bang-screen-searchbox" v-if="searchboxshow">
                                        <div class="bang-screen-searchlogo">
                                            <img src="../../../../static/img/Shape 2.png" alt="">
                                        </div>
                                        <div class="bang-screen-searchinput">
                                            <template>
                                                <el-select
                                                    v-model="citytype"
                                                    filterable
                                                    remote
                                                    reserve-keyword
                                                    placeholder="搜索地点"
                                                    :remote-method="remoteMethod"
                                                    :loading="loading" @change="search">
                                                    <el-option v-for="item in citydata" :key="item.id" :label="item.name" :value="item.id">
                                                    </el-option>
                                                </el-select>
                                            </template>
                                            <!-- <input type="text" placeholder="搜索地点"> -->
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="padding-left:17px;padding-right: 0;;">
                        <div class="bang-screen-boxright">
                            <img src="../../../../static/img/编组 61.png" alt="">
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 创业帮 -->
            <div class="index-inner-bang">
                <div class="index-inner-banglist">
                    <template v-for="(item,index) in bangdata">
                        <div class="bang-item">
                            <div class="bang-item-top" @click="gobangitem(item,index)">
                                <!-- <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg"> -->
                                <img :src="item.background_image" alt="" class="bgimg">

                                <!-- <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg"> -->
                                <img :src="item.index_logo" alt="" class="typeimg">
                                <div class="bang-item-avatar">
                                    <img :src="item.avatar_image" alt="">
                                    <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                </div>
                                <p class="bang-item-title">
                                    {{item.city_name}}·
                                    {{item.area}}
                                </p>
                            </div>
                            <div class="bang-item-bottom">
                                <div class="bang-item-content">
                                    {{item.description}}
                                    <!-- 想要募集三位愿意一起加入我的团队的小伙伴 -->
                                </div>
                                <div class="bang-item-footer">
                                    <div class="bang-item-footerleft">
                                        <span>
                                            <span style="color: #999999">截止至</span>
                                            <!-- 2018-7-8 -->
                                            {{item.end_time}}
                                        </span>
                                    </div>
                                    <div class="bang-item-footerright">
                                        {{item.interested_nums}}人感兴趣
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
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
        <Footer></Footer>
    </div>
</template>
<script>

    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import Footer from '../../common/footer.vue'
    import Header from '../../common/menuheader.vue'

    export default {
        data() {
            return {
                dialogFormVisible:false,
                nlogin:true,
                login:false,
                bangbannerdata:"",
                bangdata:"",
                cur_page: 1,
                pages: 0,
                total:"",
                cityname:[],
                currentPage:"",
                jumppage:"",
                bangtype:"",
                citytype:"",
                endtime:" ",
                year:"",
                month:"",
                hotcitydata:"",
                bangtypedata:"",
                citydata:"",
                searchboxshow:false,
                cname:"",
                monthdata:[],
                newarray:[],
                dataArr:[],
                // bangtypedata:[
                //     {
                //         "id": 1,
                //         "name": "不限",
                //     },
                //     {
                //         "id": 2,
                //         "name": "求贤令",
                //     }, {
                //         "id": 3,
                //         "name": "求资金",
                //     },
                //     {
                //         "id": 4,
                //         "name": "求方案",
                //     },{
                //         "id": 5,
                //         "name": "约个饭",
                //     },{
                //         "id": 6,
                //         "name": "其他活动",
                // }],
                value: ''
            }
        },
        components:{
            Footer,
            Header

        },
        mounted() {
        },
        created() {
            this.getbangbanner()
            this.getbangdata()
            this.getdate()
            this.gethotcitydata()
            this.getbangtype()
            this.getfenye()
            this.getyeararray()
            console.log(this.month)
            // this.getmonth()
            // for(var i=0;i<)
            // this.user = JSON.parse(localStorage.getItem('info'))
            // this.user = localStorage.getItem('info')
            if(localStorage.getItem('info')){
                this.user = JSON.parse(localStorage.getItem('info'))
            }

            if(this.user){
                this.nlogin = false
                this.login = true
            }else{
                this.nlogin = true
                this.login = false
            }
            // this.getcitydata()
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
                mySwiper.navigation.$nextEl.addClass('hide');
                mySwiper.navigation.$prevEl.addClass('hide');
                //鼠标移出隐藏按钮，移入显示按钮
                mySwiper.el.onmouseover=function(){
                    mySwiper.navigation.$nextEl.removeClass('hide');
                    mySwiper.navigation.$prevEl.removeClass('hide');
                }
                mySwiper.el.onmouseout=function(){
                    mySwiper.navigation.$nextEl.addClass('hide');
                    mySwiper.navigation.$prevEl.addClass('hide');
                }
            },
            opendialog(){
                this.dialogFormVisible = true
            },
            // 创业类型

            getbangtype(){
                this.$get('business-types').then((res) => {
                    if(res.code === 1){
                        this.bangtypedata = res.info.items
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            getbangbanner(){
                this.$get('business-banners?sort=-id').then((res) => {
                    if(res.code === 1){
                        this.bangbannerdata = res.info.items
                        this.$nextTick(function() {
                            this.initSwiper();
                        });
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            getbangdata(){
                this.$get('business/list?page=1&per-page=16').then((res) => {
                    if(res.code === 1){
                        this.bangdata = res.info.items
                        this.pages = res.info._meta.pageCount
                        this.total = res.info._meta.totalCount
                        this.currentPage = res.info._meta.currentPage
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            // 搜索
            search(){
                this.getdate()
                console.log(this.value)
                if(this.citytype==="other"){
                    this.searchboxshow = true
                    this.citytype = ""
                }else{
                    this.searchboxshow = false
                    // return;
                }
                console.log(this.endtime)
                // console.log(this.month)
                // if(this.endtime < this.month){
                //     this.year = this.year +1
                // }
                console.log(this.year)
                this.$get('business/list?page=1&per-page=16',{
                    t_id:this.bangtype,
                    // end_time:this.year+'-'+this.endtime,

                    // end_time:this.end_time?this.year+'-'+this.endtime:"",
                    end_time:this.endtime?this.endtime:" ",
                    // end_time:(this.endtime>this.month)?this.year +1+'-'+this.endtime:this.year+'-'+this.endtime,
                    // c_id:this.query?this.value:this.citytype,
                    c_id:this.citytype,

                }).then((res) => {
                    if(res.code === 1){
                        this.bangdata = res.info.items
                        this.pages = res.info._meta.pageCount
                        this.total = res.info._meta.totalCount
                        this.currentPage = res.info._meta.currentPage

                        // this.year  = ''
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            // 分页
            handleCurrentChange(val) {
                this.loading = true
                this.$get('business/list?per-page=16', {
                    page: val,
                }).then((res) => {
                    console.log(res)
                    if (res.code === 1) {
                        this.bangdata = JSON.parse(JSON.stringify(res.info.items))
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
                this.$get('business/list?per-page=16', {
                    page: this.jumppage,
                }).then((res) => {
                    console.log(res)
                    if (res.code === 1) {
                        this.bangdata = JSON.parse(JSON.stringify(res.info.items))
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
            // 获取当前时间
            getdate() {
               var nowDate = new Date();
                let date = {
                    year: nowDate.getFullYear(),
                    month: nowDate.getMonth() + 1,
                }
                console.log(date);
                this.year = date.year
                this.month = date.month
            },
            getmonth(){
                this.month  = parseInt(this.month) % 12;
                 for(var i = 0;i<6;i++){
                    if (this.month+i > 12) {
                        this.month = this.month -12
                    }
                    this.monthdata.push(parseInt(this.month)+i)
                }

                this.monthdata.unshift("不限",this.year)
                // this.getyeararray()
                console.log(this.monthdata)
            },
            // getyeararray(){
            //     var dataArr = [];
            //     var data = new Date();
            //     var year = data.getFullYear();
            //     data.setMonth(data.getMonth() + 1, 1); //获取到当前月份,设置月份
            //     for (var i = 0; i < 7; i++) {
            //         data.setMonth(data.getMonth() - 1); //每次循环一次 月份值减1
            //         var m = data.getMonth() + 1;
            //         if (m == 13) {
            //             //到12月后,前推一年
            //             y++;
            //             m = 1; //再从1月往前推
            //         }

            //         m = m < 10 ? "0" + m : m;
            //         dataArr.push(data.getFullYear() + "-" + m);
            //     }
            //     console.log(dataArr);
            // },
            getyeararray() {
                var dataArr = [];
                var newarray = []
                var data = new Date();
                var year = data.getFullYear();
                data.setMonth(data.getMonth() - 1, 1); //获取到当前月份,设置月份
                for (var i = 0; i < 8; i++) {
                    data.setMonth(data.getMonth() + 1); //每次循环一次 月份值减1
                    var m = data.getMonth() + 1;
                    m = m < 10 ? "0" + m : m;
                    dataArr.push(data.getFullYear() + "-" + m);
                }
                this.dataArr = dataArr
                console.log(dataArr);
                for(var i in dataArr){
                    console.log(dataArr[i].slice(6))
                    // this.newarray.push(dataArr[i].slice(6))
                    // this.newarray.monthvalue==dataArr
                    // dataArr[i].slice(6)
                    // console.log(dataArr);
                }
                console.log(this.newarray)
                return dataArr;
            },
            // function complementFutureDate(numMonth) {
            //     var complDate = [];
            //     var curDate = new Date();
            //     var y = curDate.getFullYear();
            //     var m = curDate.getMonth() + 1;
            //     //第一次装入当前月(格式yyyy-mm)
            //     complDate[0] = y + "-" + (m.toString().length == 1 ? "0" + m : m);
            //     m++;
            //     //第一次已经装入,numMonth少计算一次
            //     for (var i = 1; i < numMonth; i++, m++) {
            //         if (m == 13) {
            //             //到12月后,前推一年
            //             y++;
            //             m = 1; //再从1月往前推
            //         }
            //         complDate[i] = y + "-" + (m.toString().length == 1 ? "0" + m : m);
            //     }
            //     return complDate;
            //     console.log(complDate)
            // },
            // 热门城市数据
            gethotcitydata(){
                this.$get('city/popular-list').then((res) => {
                    if(res.code === 1){
                        this.hotcitydata = res.info.items
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            // 城市远程搜索
            getcitydata(){
                console.log(this.cityname)
                this.$get('cities?name='+this.cityname).then((res) => {
                    if(res.code === 1){
                        this.citydata = res.info.items
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            // 远程搜索
            remoteMethod(query) {
                // console.log(query)
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.$get('cities?name='+query).then((res) => {
                            if(res.code === 1){
                                this.citydata = res.info.items
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                        }).catch(() => {this.loading = false})
                        // this.getcitydata()
                        // this.options = this.list.filter(item => {
                        // return item.label.toLowerCase()
                        //     .indexOf(query.toLowerCase()) > -1;
                        // });
                    }, 200);
                } else {
                    this.citydata = [];
                }
            },
            gobangitem(item,index){
                this.$router.push({path: '/bangitem', query: {id:item.id}});
            },
            gosearch(){
                this.$router.push({path: '/sbang'});
            },
            getfenye(){
                $(document).ready(function(){
                    $(".btn-prev").html("<   上一页")
                    $(".btn-next").html("下一页   >")
                });
            },
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                localStorage.setItem('info','');
                    localStorage.setItem('tooken','');
                    this.$router.push('/login');
                } else if(command == 'user'){
                    this.$router.push('/mine');
                } else if(command == 'editpsw'){
                    this.$router.push('/editpsw')
                }
            },

        }
    }
</script>

<style>
</style>
