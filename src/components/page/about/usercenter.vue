<template>
        <div class="usercenter-page">
            <wheader></wheader>
            <div class="index-inner">
                <template>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="收藏" name="first">
                            <div class="index-inner-readlist">
                                <template v-for="(item,index) in collectdata">
                                    <div class="index-inner-readitem">
                                        <div class="index-inner-readitemimg" @click="goreaditem(item,index)">
                                            <!-- <img src="../../../../static/img/read.png" alt=""> -->
                                            <img :src="item.preview_image" alt="">
                                        </div>
                                        <div class="index-inner-readitemcontent">
                                            <p class="index-inner-readitemcontent-title">
                                                <!-- 聪明的投资者 第1章 投资与投机 -->
                                                {{item.title}}
                                            </p>
                                            <p class="index-inner-readitemcontent-inner" v-html="item.desc">
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
                                                        {{item.article_time}}
                                                        <!-- {{item.create_time}} -->
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="readitem-footerright">
                                                <div class="readitem-footertips">
                                                    <span>
                                                        <img src="../../../../static/img/Combined Shape 2.png" alt="">
                                                    </span>
                                                    <span>
                                                        {{item.like_num}}
                                                    </span>
                                                    <span>
                                                        <img src="../../../../static/img/Oval 2.png" alt="">
                                                    </span>
                                                    <span>
                                                        {{item.comment_num}}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="pagination">
                                <el-pagination
                                background
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page.sync="currentPage1"
                                :page-size="8"
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
                                <div class="jump1">
                                    跳转至
                                    <el-input v-model="jumppage1"></el-input>
                                    页
                                </div>
                                <div>
                                    <el-button @click="jump1">GO!</el-button>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="订阅" name="second">
                            <div class="mine-book-box">
                                <div class="book-item" v-for="(item,index) in bookdata">
                                    <div class="book-item-logo" @click="goreadlist(item,index)">
                                        <img :src="item.image" alt="">
                                    </div>
                                    <p class="book-username">
                                        {{item.at_name}}
                                    </p>
                                    <p class="book-disbookbtn" @click="disbook(item,index)">
                                        <span>取消订阅</span>
                                    </p>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="创业Bang" name="third">
                            <div class="index-inner-banglist">
                                <template v-for="(item,index) in bangdata">
                                    <div class="bang-item" @click="gobangitem(item,index)">
                                        <div class="bang-item-top">
                                            <!-- <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg"> -->
                                            <img :src="item.background_image" alt="" class="bgimg">
            
                                            <!-- <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg"> -->
                                            <img :src="item.type_logo" alt="" class="typeimg">
                                            <div class="bang-item-avatar">
                                                <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
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
                        </el-tab-pane>
                        <el-tab-pane label="关注" name="fourth">
                            <div class="mine-book-box">
                                <div class="book-item" v-for="(item,index) in focusdata">
                                    <div class="book-item-logo" @click="goreadlist(item,index)">
                                        <img :src="item.avatar_image" alt="">
                                    </div>
                                    <p class="book-username">
                                        {{item.nick_name}}
                                    </p>
                                    <p class="book-disbookbtn" @click="disfocus(item,index)">
                                        <span>取消关注</span>
                                    </p>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="粉丝" name="fifth">
                            <div class="mine-book-box">
                                <div class="book-item" v-for="(item,index) in fansdata">
                                    <div class="book-item-logo" @click="goreadlist(item,index)">
                                        <img :src="item.avatar_image" alt="">
                                    </div>
                                    <p class="book-username">
                                        {{item.nick_name}}
                                    </p>
                                    <p class="book-disbookbtn" v-if="Number(item.is_focus)" @click="disfans(item,index)">
                                        <span>取消关注</span>
                                    </p>
                                    <p class="book-disbookbtn" v-if="!Number(item.is_focus)" @click="disfans(item,index)">
                                        <span>关注</span>
                                    </p>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </template>
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
                    guihuadata:"",
                    articledata:"",
                    bangdata:"",
                    nlogin:true,
                    login:false,
                    username:"",
                    user:"",
                    activeName: 'second',
                    id:"",
                    collectdata:"",
                    pages1: 0,
                    total1:"",
                    currentPage1:"",
                    jumppage1:"",
                    currentPage1:"",
                    bookdata:"",
                    bangdata:"",
                    focusdata:"",
                    fansdata:"",
                    // disfocus:"",
                    focus:"",
                }
            },
            components:{
                Footer,
                Wheader
            },
            mounted() {
              
            },
            created() {
                this.id = this.$route.query.id
                this.getfenye()
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                if(this.user){
                    this.nlogin = false
                    this.login = true
                }
                this.getcollectdata()
                this.getbookdata()
               this.getbangdata()
               this.getfocusdata()
               this.getfansdata()
            },
            methods: {
                getbangdata(){
                    this.$get('businesses?page=1&per-page=8&u_id='+this.id).then((res) => {
                        if(res.code === 1){
                          console.log(res)
                          this.bangdata = res.info.items
                          if(this.bangdata.length==0){
                              this.bangshow =false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                gosearch(){
                    this.$router.push({path: '/sread'});
                },
                 // 用户名下拉菜单选择事件
                handleCommand(command) {
                    if(command == 'loginout'){
                    localStorage.setItem('info','');
                        localStorage.setItem('token','');
                        this.$router.push('/login');
                    } else if(command == 'user'){
                        this.$router.push('/mine');
                    } else if(command == 'editpsw'){
                        this.$router.push('/editpsw')
                    }
                },
                goreaditem(item,index){
                    this.$router.push({path: '/readitem', query: {id:item.id}});
                },
                gobangitem(item,index){
                    this.$router.push({path: '/bangitem', query: {id:item.id}});
                },
                goread(){
                    this.$router.push({path: '/read'});
                },
                gobang(){
                    this.$router.push({path: '/bang'});
                },
                getfenye(){
                    $(document).ready(function(){
                        $(".btn-prev").html("<   上一页")
                        $(".btn-next").html("下一页   >")
                    });
                },
                getcollectdata(){
                    this.$get('article-collects?per-page=8&user_id='+this.id).then((res) => {
                        if(res.code === 1){
                        //   console.log(res.info.items)
                          this.collectdata = res.info.items
                          this.pages1 = res.info._meta.pageCount;
                          this.total1 = res.info._meta.totalCount
                          this.currentPage1 = res.info._meta.currentPage
                          if(this.collectdata.length==0){
                              this.collectshow =false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getfocusdata(){
                    this.$get('focu/fan-focus?type=1&page=1&per-page=50&id='+this.id).then((res) => {
                        if(res.code === 1){
                          this.focusdata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getfansdata(){
                    this.$get('focu/fan-focus?type=2&page=1&per-page=50&id='+this.id).then((res) => {
                        if(res.code === 1){
                          this.fansdata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                // 分页
                handleCurrentChange1(val) {
                    this.loading = true
                    this.$get('article-collects?per-page=8&user_id='+this.id, {
                        page: val,
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.collectdata = JSON.parse(JSON.stringify(res.info.items))
                            this.pages1 = res.info._meta.pageCount;
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
                    console.log(this.jumppage)
                    // this.loading = true
                    // var val = this.jumppage
                    // this.handleCurrentChange(val)
                    // this.pages = res.info._meta.pageCount;
                    this.$get('article-collects?per-page=8&user_id='+this.id, {
                        page: this.jumppage1,
                    }).then((res) => {
                        console.log(res)
                        if (res.code === 1) {
                            this.collectdata = JSON.parse(JSON.stringify(res.info.items))
                            this.pages1 = res.info._meta.pageCount;
                            // this.cur_page1 = res.info._meta.currentPage
                            this.currentPage1 = res.info._meta.currentPage
                        } else {
                            this.$message.error('数据加载失败');
                        }
                        this.loading = false
                    }).catch(() => {
                        this.loading = false
                    })
                },
                getbookdata(){
                    this.$get('article-type/list?id='+this.id).then((res) => {
                        if(res.code === 1){
                          console.log(res)
                          this.bookdata = res.info.items
                          if(this.bookdata.length==0){
                              this.bookshow =false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                disbook(item,index){
                    this.$post('article-type-subscription/toggle',{
                        article_type_id:item.at_id
                    }).then((res) => {
                        if(res.code === 1){
                          this.$message('取消订阅成功');
                          this.getbookdata()
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                disfocus(item,index){
                    this.$post('my-center/focus',{
                        id:item.user_id
                    }).then((res) => {
                        if(res.code === 1){
                          this.$message('操作成功');
                          this.getfocusdata()
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                disfans(item,index){
                    this.$post('my-center/focus',{
                        id:item.user_id
                    }).then((res) => {
                        if(res.code === 1){
                          this.$message('操作成功');
                          this.getfansdata()
                          this.getfocusdata()
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                }
            }
        }
    </script>
    <style>
      
    </style>