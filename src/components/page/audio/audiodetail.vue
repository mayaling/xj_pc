<template>
        <div class="audiodetail-page">
            <div class="audiodetail header">
                <div class="audiodetail header-inner">
                    <div class="audiodetail header-top">
                        <div class="audiodetail header-left">
                            <div class="audiodetail header-logo">
                                <router-link :to="{path:'index'}">
                                    <img src="../../../../static/img/编组 20.png" alt="">
                                </router-link>
                            </div>
                            <div class="audiodetail header-menu">
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
                                    <!-- <router-link :to="{path:'select'}">
                                        <li>
                                            优选
                                        </li>
                                    </router-link> -->
                                </ul>
                            </div>
                        </div>
                        <div class="audiodetail header-menuline">
                            <img src="../../../../static/img/hline.png" alt="">
                        </div>
                        <div class="readlist header-right">
                            <div class="readlist header-searchbox" @click="gosearch">
                                <div class="header-searchlogo">
                                    <img src="../../../../static/img/Shape 2(1).png" alt="">
                                </div>
                                <!-- <div class="header-searchinput">
                                    <input type="text" placeholder="搜创业/项目/优选">
                                </div> -->
                                <!-- <img src="../../../../static/img/Shape 2(1).png" alt=""> -->
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
                                        <!-- <img :src="user.avatar_image" alt="">
                                        {{user.nick_name}}  -->
                                        <!-- <i class="el-icon-caret-bottom"></i> -->
                                    </p>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item  command="user">个人中心</el-dropdown-item>
                                        <!-- <el-dropdown-item  command="bang">我的Bang！</el-dropdown-item> -->
                                        <el-dropdown-item  command="loginout">注销</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="audiodetail header-bottom">
                        <div class="radiobg">
                            <img src="../../../../static/img/编组 23.png" alt="" :class="music.isPlay?audiocd:audiocdl">
                            <div class="radioimgbox">
                                <img :src="listdata.preview_image" alt="" class="radioimg">
                                <img src="../../../../static/img/音乐 2@2x(1).png" alt="" class="audio-toplogo">
                                <!-- <span class="audio-toptime">{{radio_time}}</span> -->
                                <span class="audio-toptime">{{formatTime(music.maxTime)}}</span>
                                <img :src="music.isPlay?end:start" alt=""
                                @click="play"
                                id="play"
                                slot="reference"
                                class="radiobtn">
                            </div>
                        </div>
                        <div>
                            <audio ref="music" loop>
                                <source :src="radio" type="audio/mpeg">
                            </audio>
                        </div>

                    </div>
                    <div class="audioline">
                        <span> {{formatTime(music.currentTime)}}</span>
                        <el-slider
                        @change="changeTime"
                        :format-tooltip="formatTime"
                        :show-tooltip="false"
                        :max="music.maxTime"
                        v-model="music.currentTime"
                        style="width: 75%;"
                        ></el-slider>
                        <span> {{formatTime(music.maxTime)}}</span>
                        <!-- <el-row :gutter="20" class="radiorow" style="z-index:9999;">
                            <el-col :span="6" style="padding: 12px 5px 0px 10px;color:#ffffff;font-size: 13px">
                                {{formatTime(music.currentTime)}}/{{formatTime(music.maxTime)}}
                            </el-col>
                            <el-col :span="18">
                                <el-slider
                                @change="changeTime"
                                :format-tooltip="formatTime"
                                :show-tooltip="false"
                                :max="music.maxTime"
                                v-model="music.currentTime"
                                style="width: 80%;"></el-slider>
                            </el-col>
                        </el-row> -->
                    </div>
                </div>

            </div>
            <div class="audiodetail-box">
                <div class="audiodetail-title">
                    开个店 | 开一家赚钱的咖啡店，你必须知道这7件事
                </div>
                <div class="audiodetail-desc">
                    他们热爱消费，他们既大方又小气
                </div>
                <div class="audiodetail-depart">
                    节目参与者
                </div>
                <div class="audiodetail-departimgbox">
                    <template v-for="(item,index) in listdata.participants">
                        <div class="audiodetail-departimgitem">
                            <div class="audiodetail-departimg">
                                <img :src="item.avatar_image" alt="">
                            </div>
                            <div class="audiodetail-departimgname">
                                {{item.nick_name}}
                            </div>
                        </div>
                    </template>

                </div>
                <div class="ql-container ql-snow">
                    <div class="ql-editor" v-html="listdata.content"></div>
                </div>
            </div>
            <div class="audiodetai-index">
                <div class="index-inner">
                    <div class="index-inner-readlist">
                        <template v-for="(item,index) in listdata.read_recommend">
                            <div class="index-inner-readitem">
                                <div class="index-inner-readitemimg" @click="goreaditem(item,index)">
                                    <!-- <img src="../../../../static/img/read.png" alt=""> -->
                                    <img :src="item.images" alt="">
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
                                            <span>{{total1}}</span>
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
            </div>

            <Footer></Footer>
        </div>
    </template>
    <script>

        import Swiper from 'swiper';
        import 'swiper/dist/css/swiper.min.css';
        import Footer from '../../common/footer.vue'
        import start from '../../../../static/img/编组 17.png'
        import end from '../../../../static/img/stop.png'
        import VueQuillEditor from 'vue-quill-editor'
        import 'quill/dist/quill.core.css'
        import 'quill/dist/quill.snow.css'
        import 'quill/dist/quill.bubble.css'
        export default {
            data() {
                return {
                    newcommentdata:"",
                    hotcommentdata:"",
                    nlogin:true,
                    login:false,
                    articledata:"",
                    typedata:"",
                    cur_page1: 1,
                    pages1: 0,
                    total1:"",
                    cur_page2: 1,
                    pages2: 0,
                    total2:"",
                    user:"",
                    jumppage1:"",
                    jumppage2:"",
                    listdata:"",
                    radioimgbox:"radioimgbox",
                    radioimgboxl:"radioimgboxl",
                    audiocd:"audiocd",
                    audiocdl:"audiocdl",
                    radio_id:"",
                    activeName: "new",
                    music:{
                        isPlay:false,
                        currentTime:0,
                        maxTime:0,
                        volume:100
                    },
                    radio_time:"",
                    radio:"",
                    start:start,
                    end:end,
                }
            },
            components:{
                Footer
            },
            mounted() {
                this.getfenye()
                this.$nextTick(()=>{
                    // this.tap = !this.tap
                    setInterval(this.listenMusic,1000)
                })
            },
            created() {
                this.radio_id = this.$route.query.id
                this.radio = this.$route.query.radio_url
                this.getlistdata()
                this.getnewcommentdata()
                this.gethotcommentdata()
                console.log(this.radio_id)
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
                getlistdata(){
                    this.$get('radios/'+this.radio_id+'?expand=content,label,recommend,read_recommend',{
					// id:this.id
                    }).then((res) => {
                            console.log(res)
                            if(res.code === 1){
                                console.log(res)
                                this.listdata = res.info.items[0]
                                this.radio_time = this.listdata.radio_time
                                if(listdata.recommend != ""){
                                    this.tuijianshow = true
                                }
                                console.log(this.listdata)
                            }else{
                                this.$message.error(res.msg);
                            }
                            this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getnewcommentdata(item,index){
                    this.$get('radio-comments?type=new&pid=0&page=1&per-page=2',{
                        radio_id:this.radio_id
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
                    this.$get('radio-comments?type=hot&pid=0&page=1&per-page=2',{
                        radio_id:this.radio_id
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
                listenMusic(){
                    if(!this.$refs.music){
                        return
                    }
                    if(this.$refs.music.readyState){
                        this.music.maxTime = this.$refs.music.duration
                    }
                    this.music.isPlay=!this.$refs.music.paused
                    this.music.currentTime = this.$refs.music.currentTime
                },
                play(){
                    if(this.$refs.music.paused){
                        this.$refs.music.play()
                    }else{
                        this.$refs.music.pause()
                    }
                    this.music.isPlay=!this.$refs.music.paused
                    this.$nextTick(()=>{
                        document.getElementById('play').blur()
                    })
                },
                changeTime(time){
                    this.$refs.music.currentTime = time
                },
                changeVolume(v){
                    this.music.volume += v
                    if(this.music.volume>100){
                    this.music.volume = 100
                    }
                    if(this.music.volume<0){
                    this.music.volume = 0
                    }
                    this.$refs.music.volume = this.music.volume/100
                },
                formatTime(time){
                    let it = parseInt(time)
                    let m = parseInt(it/60)
                    let s = parseInt(it%60)
                    return (m<10?"0":"")+parseInt(it/60)+":"+(s<10?"0":"")+parseInt(it%60)
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
                handeldetail(item,index){
                    console.log(item)
                    this.$router.push({path: '/audiodetaildetail', query: {id:item.id}});
                },
                getfenye(){
                    $(document).ready(function(){
                        $(".btn-prev").html("<   上一页")
                        $(".btn-next").html("下一页   >")
                    });
                },
                replyfather(item,index){
                    // console.log(item)
                    if(this.user){
                        this.$prompt('请输入回复内容', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                        }).then(({ value }) => {
                            this.$post('radio-comments',{
                                id:this.radio_id,
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
                            this.$post('radio-comments',{
                                id:this.radio_id,
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
                handleCurrentChange1(val) {
                    this.loading = true
                    this.$get('radio-comments?type=new&pid=0&page=1&per-page=2', {
                        page: val,
                        radio_id:this.radio_id
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
                    this.$get('radio-comments?type=new&pid=0&page=1&per-page=2', {
                        page: this.jumppage1,
                        radio_id:this.radio_id
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
                    this.$get('radio-comments?type=hot&pid=0&page=1&per-page=2', {
                        page: val,
                        radio_id:this.radio_id
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
                    this.$get('radio-comments?type=hot&pid=0&page=1&per-page=2', {
                        page: this.jumppage2,
                        radio_id:this.radio_id
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
            }
        }
    </script>

    <style>

    </style>
