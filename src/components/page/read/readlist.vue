4/10<template>
        <div class="readlist-page">
            <div class="readlist header">
                <div class="readlist header-inner">
                    <Header></Header>

                    <div class="readlist header-bottom">
                        <!-- <img src="../../../../static/img/阅读 2@2x.png" alt=""> -->
                        <p class="readlist header-bottom-title">{{name}}</p>
                        <!-- <p>READING</p> -->
                        <div class="readlist header-bottom-settings">
                            <span>共{{bookdata.subscription_num}}篇好文</span>
                            <img src="../../../../static/img/编组 10.png" alt="" v-if="nobook" @click="handelbook">
                            <img src="../../../../static/img/编组 71.png" alt="" v-if="book" @click="handelbook">
                        </div>
                    </div>
                </div>

            </div>
            <div class="index-inner">
                 <!-- 阅读 -->
                 <div class="index-inner-read">
                        <!-- <div class="index-inner-readtitle">
                            <span>阅读</span>
                            <span>
                                <img src="../../../../static/img/编组 8 (1).png" alt="">
                            </span>
                        </div> -->
                        <div class="index-inner-readlist">
                            <template v-for="(item,index) in articledata">
                                <div class="index-inner-readitem">
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
                                                    {{item.create_time}}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="readitem-footerright">
                                            <div class="readitem-footertips">
                                                <span>
                                                    <img src="../../../../static/img/Combined Shape 2.png" alt="" >
                                                </span>
                                                <span>13</span>
                                                <span>
                                                    <img src="../../../../static/img/Oval 2.png" alt="" >
                                                </span>
                                                <span>65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                 <!-- <div class="index-inner-readlist">
                    <div class="index-inner-readlist">
                        <div class="index-inner-readitem">
                            <div class="index-inner-readitemimg">
                                <img src="../../../../static/img/read.png" alt="">
                            </div>
                            <div class="index-inner-readitemcontent">
                                <p class="index-inner-readitemcontent-title">
                                    聪明的投资者 第1章 投资与投机
                                </p>
                                <p class="index-inner-readitemcontent-inner">
                                    在你买进一只股票之前，要对该公司及及其基础作者其基础者…
                                </p>
                            </div>
                            <div class="readitem-footer">
                                <div class="readitem-footerleft">
                                    <div class="planingleft-cardcontent-footerimg">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <div class="readitem-footeruser">
                                        <p class="readitem-footername">阿昌</p>
                                        <p class="readitem-footertime">2018-7-8</p>
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
                        <div class="index-inner-readitem">
                            <div class="index-inner-readitemimg">
                                <img src="../../../../static/img/read.png" alt="">
                            </div>
                            <div class="index-inner-readitemcontent">
                                <p class="index-inner-readitemcontent-title">
                                    聪明的投资者 第1章 投资与投机
                                </p>
                                <p class="index-inner-readitemcontent-inner">
                                    在你买进一只股票之前，要对该公司及及其基础作者其基础者…
                                </p>
                            </div>
                            <div class="readitem-footer">
                                <div class="readitem-footerleft">
                                    <div class="planingleft-cardcontent-footerimg">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <div class="readitem-footeruser">
                                        <p class="readitem-footername">阿昌</p>
                                        <p class="readitem-footertime">2018-7-8</p>
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
                        <div class="index-inner-readitem">
                            <div class="index-inner-readitemimg">
                                <img src="../../../../static/img/read.png" alt="">
                            </div>
                            <div class="index-inner-readitemcontent">
                                <p class="index-inner-readitemcontent-title">
                                    聪明的投资者 第1章 投资与投机
                                </p>
                                <p class="index-inner-readitemcontent-inner">
                                    在你买进一只股票之前，要对该公司及及其基础作者其基础者…
                                </p>
                            </div>
                            <div class="readitem-footer">
                                <div class="readitem-footerleft">
                                    <div class="planingleft-cardcontent-footerimg">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <div class="readitem-footeruser">
                                        <p class="readitem-footername">阿昌</p>
                                        <p class="readitem-footertime">2018-7-8</p>
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
                        <div class="index-inner-readitem">
                            <div class="index-inner-readitemimg">
                                <img src="../../../../static/img/read.png" alt="">
                            </div>
                            <div class="index-inner-readitemcontent">
                                <p class="index-inner-readitemcontent-title">
                                    聪明的投资者 第1章 投资与投机
                                </p>
                                <p class="index-inner-readitemcontent-inner">
                                    在你买进一只股票之前，要对该公司及及其基础作者其基础者…
                                </p>
                            </div>
                            <div class="readitem-footer">
                                <div class="readitem-footerleft">
                                    <div class="planingleft-cardcontent-footerimg">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <div class="readitem-footeruser">
                                        <p class="readitem-footername">阿昌</p>
                                        <p class="readitem-footertime">2018-7-8</p>
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
                        <div class="index-inner-readitem">
                            <div class="index-inner-readitemimg">
                                <img src="../../../../static/img/read.png" alt="">
                            </div>
                            <div class="index-inner-readitemcontent">
                                <p class="index-inner-readitemcontent-title">
                                    聪明的投资者 第1章 投资与投机
                                </p>
                                <p class="index-inner-readitemcontent-inner">
                                    在你买进一只股票之前，要对该公司及及其基础作者其基础者…
                                </p>
                            </div>
                            <div class="readitem-footer">
                                <div class="readitem-footerleft">
                                    <div class="planingleft-cardcontent-footerimg">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <div class="readitem-footeruser">
                                        <p class="readitem-footername">阿昌</p>
                                        <p class="readitem-footertime">2018-7-8</p>
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
                    </div>
                </div> -->
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
                    id:"",
                    user:"",
                    nlogin:true,
                    login:false,
                    name:"",
                    articledata:"",
                    bookdata:"",
                    cur_page: 1,
                    pages: 0,
                    total:"",
                    jumppage:"",
                    nobook:true,
                    book:false,
                }
            },
            components:{
                Footer,
                Header

            },
            mounted() {
                this.getlistdata()
                this.getfenye()
                this.getbookdata()
            },
            created() {
                this.id = this.$route.query.id
                this.name = this.$route.query.name
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
            },
            methods: {
                getbookdata(){
                    this.$get('article-types/'+this.id).then((res) => {
                        if(res.code === 1){
                            this.bookdata = res.info.items[0]
                            if(res.info.items[0].is_sub== 1){
                                this.book = true
                                this.nobook = false
                            }else{
                                this.book = false
                                this.nobook = true
                            }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getlistdata(){
                    this.$get('articles?type=12&per-page=16',{
                        type:this.id
                    }).then((res) => {
                        if(res.code === 1){
                            this.articledata = res.info.items
                            this.pages = res.info._meta.pageCount
                            this.total = res.info._meta.totalCount
                            this.currentPage = res.info._meta.currentPage
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getfenye(){
                    $(document).ready(function(){
                        $(".btn-prev").html("<   上一页")
                        $(".btn-next").html("下一页   >")
                    });
                },
                handleCurrentChange(val) {
                    this.loading = true
                    this.$get('articles?type=12&per-page=16', {
                        page: val,
                        type:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.articledata = JSON.parse(JSON.stringify(res.info.items))
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
                    this.$get('articles?type=12&per-page=16', {
                        page: this.jumppage,
                        type:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.articledata = JSON.parse(JSON.stringify(res.info.items))
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
                goreaditem(item,index){
                    this.$router.push({path: '/readitem', query: {id:item.id}});
                },
                gosearch(){
                    this.$router.push({path: '/sread'});
                },
                handelbook(){
                    this.$post('article-type-subscription/toggle',{
                        article_type_id:this.id
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            if(res.info.is_sub == 1){
                                this.book = true
                                this.nobook = false
                            }else{
                                this.book = false
                                this.nobook = true
                            }
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
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
