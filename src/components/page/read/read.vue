4/10<template>
    <div class="read-page">
        <div class="read header">
            <div class="read header-inner">
                <Header></Header>

                <div class="head header-bottom">
                    <img src="../../../../static/img/阅读 2.png" alt="">
                    <p>READING</p>
                </div>
            </div>

        </div>
        <div class="index-inner">
            <div class="read-banner">
                <template v-for="(item,index) in typedata">
                    <div @click="gotypelist(item,index)">
                        <img :src="item.image" alt="">
                    </div>
                </template>
            </div>
             <!-- 阅读 -->
             <div class="index-inner-read">
                <div class="index-inner-readtitle">
                    <span>全部文章</span>
                    <span>
                        从职场到创业
                    </span>
                </div>
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
                                            <img src="../../../../static/img/Combined Shape 2.png" alt="">
                                        </span>
                                        <span>{{item.like_num}}</span>
                                        <span>
                                            <img src="../../../../static/img/Oval 2.png" alt="">
                                        </span>
                                        <span>{{item.comment_num}}</span>
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
    import Footer from '../../common/footer.vue';
    import Header from '../../common/menuheader.vue'

    export default {
        data() {
            return {
                nlogin:true,
                login:false,
                articledata:"",
                typedata:"",
                cur_page: 1,
                pages: 0,
                total:"",
                currentPage:"",
                jumppage:"",
                currentPage:"",
                smallshow:true,
                bigshow:false
            }
        },
        components:{
            Footer,
            Header
        },
        mounted() {
            this.getfenye()
        },
        created() {
            this.getarticledata()
            this.gettypedata()
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
            // 文章专题
            gettypedata(){
                this.$get('article-types?per-page=4&page=1&type=pc').then((res) => {
                        if(res.code === 1){
                            this.typedata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                }).catch(() => {this.loading = false})
            },
            // 文章列表
            getarticledata(){
                this.$get('articles?sort=-id&page=1&per-page=16').then((res) => {
                    if(res.code === 1){
                        this.articledata = res.info.items
                        this.pages = res.info._meta.pageCount;
                        this.total = res.info._meta.totalCount
                        this.currentPage = res.info._meta.currentPage
                        console.log(this.articledata)
                        for(var i=0;i<this.articledata.length;i++){
                            this.articledata[i].bigshow = false
                            this.articledata[i].smallshow = true
                            console.log(this.articledata[i])
                        }
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            // 分页
            handleCurrentChange(val) {
                this.loading = true
                this.$get('articles?sort=-id&per-page=16', {
                    page: val,
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
                // this.loading = true
                // var val = this.jumppage
                // this.handleCurrentChange(val)
                // this.pages = res.info._meta.pageCount;
                this.$get('articles?sort=-id&per-page=16', {
                    page: this.jumppage,
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
            getfenye(){
                $(document).ready(function(){
                    $(".btn-prev").html("<   上一页")
                    $(".btn-next").html("下一页   >")
                });
            },
            gotypelist(item,index){
                this.$router.push({path: '/readlist', query: {id:item.at_id,name:item.at_name}});
            },
            goreaditem(item,index){
                this.$router.push({path: '/readitem', query: {id:item.id}});
            },
            gosearch(){
                this.$router.push({path: '/sread'});
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
            enter(item,index){

            },
            leave(item,index){

            },
        }
    }
</script>

<style>

</style>
