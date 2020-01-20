<template>
    <div class="saudio-page">
        <Wheader></Wheader>
        <div class="search-box">
            <div class="saudio typetab">
                <div class="typetab-top">
                    <div class="saudio typetab-searchbox">
                        <div class="saudio typetab-searchbox-left">
                                <div class="typetab-searchlogo">
                                    <img src="../../../../static/img/Shape 2.png" alt="">
                                </div>
                            <input type="text" placeholder="搜创业/项目/优选" v-model="title">
                        </div>
                        <div class="saudio typetab-searchbox-right" @click="searchread">
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
                    <router-link :to="{path:'sread'}">
                        <span>阅读</span>
                    </router-link>
                    <router-link :to="{path:'sbang'}">
                        <span>创业Bang！</span>
                    </router-link>
                    <!-- <router-link :to="{path:'sselect'}">
                        <span>优选</span>
                    </router-link> -->
                    <router-link :to="{path:'saudio'}">
                        <span class="active">电台</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="index-inner" v-if="datashow">
            <!-- 电台 -->
            <div class="index-inner-audiolist">
                <template v-for="(item,index) in listdata">
                    <div class="index-inner-audioitem" @click="handeldetail(item,index)">
                            <div class="index-inner-audioitemtop">
                                <img :src="item.preview_image" alt="" class="audio-topbg">
                                <div class="index-inner-audioitemtophead">
                                    <img src="../../../../static/img/音乐 2@2x(1).png" alt="" class="audio-toplogo">
                                    <span class="audio-toptime">{{item.radio_time}}</span>
                                </div>
                                <img src="../../../../static/img/编组 17@2x(10).png" alt="" class="audio-topplay">
                            </div>
                            <div class="index-inner-audioitembottom">
                                <div class="audio-title">{{item.title}}</div>
                                <div class="audio-tips">
                                    <ul>
                                        <li class="audio-time">
                                            {{item.create_time}}
                                        </li>
                                        <li class="audio-like">
                                            <span>{{item.like}}</span>
                                            喜欢 ·
                                            <span>{{item.comment_num}}</span>
                                            评论
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </template>
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
                    articledata:"",
                    typedata:"",
                    cur_page: 1,
                    pages: 0,
                    total:"",
                    currentPage:"",
                    jumppage:"",
                    currentPage:"",
                    listdata:"",
                    holder:"",
                    searchdata:"",
                    resultshow:false,
                    datashow:true,
                    nodatashow:false,
                }
            },
            components:{
                Footer ,
                Wheader

            },
            mounted() {
                this.getfenye()
            },
            computed: {

            },
            created() {
                // this.user = JSON.parse(localStorage.getItem('info'))
                // this.user = localStorage.getItem('info')
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                if(this.user){
                    this.nlogin = false
                    this.login = true
                }
                this.getlistdata( )

            },
            methods: {
                getlistdata(){
                    this.$get('radios?sort=-id&page=1&per-page=12&sort=-id').then((res) => {
                        if(res.code === 1){
                            this.listdata = res.info.items
                            this.pages = res.info._meta.pageCount;
                            this.total = res.info._meta.totalCount
                            this.currentPage = res.info._meta.currentPage
                            console.log(this.currentPage)

                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                searchread(){
                    this.getsearchdata()
                    this.resultshow = true
                    // if(this.listdata.length == 0){
                    //     this.nodatashow = true
                    // }
                },
                getsearchdata(){
                    this.$get('radios?sort=-id&page=1&per-page=6&title='+this.title,).then((res) => {
                        if(res.code === 1){
                            this.listdata = res.info.items
                            this.pages = res.info._meta.pageCount
                            this.total = res.info._meta.totalCount
                            this.currentPage = res.info._meta.currentPage
                            if(this.listdata.length == 0){
                                this.nodatashow = true
                                this.datashow = false
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
                    this.$get('radios?sort=-id&page=1&per-page=12&sort=-id', {
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
                    // this.loading = true
                    // var val = this.jumppage
                    // this.handleCurrentChange(val)
                    // this.pages = res.info._meta.pageCount;
                    this.$get('radios?sort=-id&page=1&per-page=12&sort=-id', {
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
                gotypelist(item,index){
                    this.$router.push({path: '/readlist', query: {id:item.at_id,name:item.at_name}});
                },
                goreaditem(item,index){
                    this.$router.push({path: '/readitem', query: {id:item.id}});
                },
                gosearch(){
                    this.$router.push({path: '/saudio'});
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
                    this.$router.push({path: '/audiodetail', query: {id:item.id,radio_url:item.radio_url}});
                },
                opendialog(){
                    this.dialogFormVisible = true
                },
            }
        }
    </script>

    <style>

    </style>
