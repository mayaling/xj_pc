<template>
        <div class="mine-page">
            <!-- <div class="mine sheader">
                <div class="mine sheader-inner">
                    <div class="mine sheader-top">
                        <div class="mine sheader-left">
                            <div class="mine sheader-logo">
                                <img src="../../../../static/img/编组 2(2).png" alt="">
                            </div>
                            <div class="mine sheader-menu">
                                <ul>
                                    <li>首页</li>
                                    <li>优选</li>
                                    <li>阅读</li>
                                    <li>
                                        <img src="../../../../static/img/创业Bang！ 3.png" alt="">
                                    </li>
                                    <li>犀金APP</li>
                                </ul>
                            </div>
                        </div>
                        <div class="mine sheader-menuline">
                            <img src="../../../../static/img/矩形 2(1).png" alt="">
                        </div>
                        <div class="mine sheader-right">
                            <div class="mine sheader-searchbox">
                                <div class="sheader-searchlogo">
                                    <img src="../../../../static/img/Shape 2.png" alt="">
                                </div>
                                <div class="sheader-searchinput">
                                    <input type="text" placeholder="搜创业/项目/优选">
                                </div>
                            </div>
                            <div class="mine sheader-loginbox">
                                <ul>
                                    <li>注册</li>
                                    <li style="margin-top:10px;">
                                        <img src="../../../../static/img/矩形备份 4.png" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <Wheader></Wheader>
            <div class="index-inner">
                <div class="mine-aboutbox">
                    <div class="mine-aboutboxleft">
                        <div class="mine-aboutboxleft-logo">
                            <img :src="userdata.avatar_image" alt="">
                        </div>
                        <div class="mine-aboutboxleft-msg">
                            <p>
                                {{userdata.nick_name}}
                            </p>
                            <p>
                                {{userdata.register_time}}
                            </p>
                        </div>
                    </div>
                    <div class="mine-aboutboxright">
                        <div class="mine-aboutboxright-concerned">
                            <p>已关注</p>
                            <p>{{userdata.focus_num}}</p>
                        </div>
                        <div class="mine-aboutboxright-concerned">
                            <p>被关注</p>
                            <p>
                                {{userdata.focused_num}}
                            </p>
                        </div>
                        <div class="mine-aboutboxright-settings">
                            <p class="homepage-aboutboxright-bang" @click="collectuser" v-if="disfocus">
                                <img src="../../../../static/img/bangback.png" alt="">
                                <span >关注这位犀客</span>
                            </p>
                            <p class="homepage-aboutboxright-bang" v-if="focus" @click="collectuser">
                                <img src="../../../../static/img/focused.png" alt="">
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 收藏 -->
                <div class="index-inner-read">
                    <div class="index-inner-readtitle">
                        <span>Ta的收藏</span>
                        <span>
                            <img src="../../../../static/img/编组 8 (1).png" alt="">
                        </span>
                    </div>
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
                </div>
                <!-- 订阅 -->
                <div class="mine-book">
                    <div class="typetitle">
                        Ta的订阅
                    </div>
                    <div class="mine-book-box">
                        <div class="book-item" v-for="(item,index) in bookdata">
                            <div class="book-item-logo" @click="goreadlist(item,index)">
                                <img :src="item.image" alt="">
                            </div>
                            <p class="book-username">
                                {{item.at_name}}
                            </p>
                            <p class="book-disbookbtn" v-if="item.is_focus" @click="handelbook(item,index)">
                                <span>取消订阅</span>
                            </p>
                            <p class="book-disbookbtn" v-if="!item.is_focus" @click="handelbook(item,index)">
                                <span>订阅</span>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 创业帮 -->
                <div class="index-inner-bang">
                    <div class="index-inner-bangtitle">
                        <span>Ta发布的创业Bang！</span>
                    </div>
                    <div class="index-inner-banglist">
                        <template v-for="(item,index) in bangdata">
                            <div class="bang-item" @click="gobangitem(item,index)">
                                <div class="bang-item-top">
                                    <!-- <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg"> -->
                                    <img :src="item.background_image" alt="" class="bgimg">
    
                                    <!-- <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg"> -->
                                    <img :src="item.type_logo" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img :src="item.avatar_image" alt="">
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
                <div style="min-height: 40px;"></div>
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
                    id:"",
                    userdata:"",
                    collectdata:"",
                    bookdata:"",
                    bangdata:"",
                    focus:"",
                    disfocus:"",
                    // disfocus:false,
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
                this.getuserdata()
                this.getcollectdata()
                this.getbookdata()
                this.getbangdata()
            },
            methods: {
                getuserdata(){
                    this.$get('my-center/get-focus-info?id='+this.id).then((res) => {
                        if(res.code === 1){
                          this.userdata = res.info
                          if(this.userdata.focus===1){
                              this.disfocus = false
                              this.focus = true
                          }else{
                              this.disfocus = true
                              this.focus = false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getcollectdata(){
                    this.$get('article-collects?per-page=4&user_id='+this.id).then((res) => {
                        if(res.code === 1){
                        //   console.log(res.info.items)
                          this.collectdata = res.info.items
                          console.log( this.collectdata)
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getbookdata(){
                    this.$get('article-type/list?id='+this.id).then((res) => {
                        if(res.code === 1){
                          console.log(res)
                          this.bookdata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getbangdata(){
                    this.$get('businesses?page=1&per-page=8&u_id='+this.id).then((res) => {
                        if(res.code === 1){
                          console.log(res)
                          this.bangdata = res.info.items
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                editbook(item,index){
                    console.log(item)
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
                collectuser(){
                    this.$post('my-center/focus',{
                        id:this.userdata.id
                    }).then((res) => {
                        if(res.code === 1){
                          this.$message('操作成功');
                          this.getuserdata()
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                gobangitem(item,index){
                    this.$router.push({path: '/bangitem', query: {id:item.id}});
                },
                goreaditem(item,index){
                    this.$router.push({path: '/readitem', query: {id:item.id}});
                },
                // 订阅他人的订阅
                handelbook(item,index){
                    this.$post('article-type-subscription/toggle',{
                        article_type_id:item.at_id
                    }).then((res) => {
                        if(res.code === 1){
                          this.$message('切换成功');
                          this.getbookdata()
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                // 去个人中心
                goreadlist(item,index){
                    this.$router.push({path: '/readlist', query: {id:item.at_id,name:item.at_name}});
                }
            }
        }
    </script>
    <style>

    </style>