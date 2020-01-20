<template>
    <div class="audio-page">
        <div class="audio header">
            <div class="audio header-inner">
                <Header></Header>
                <div class="head header-bottom">
                    <img src="../../../../static/img/radioname.png" alt="">
                    <p>RADIO</p>
                </div>
            </div>

        </div>
        <div class="index-inner">

             <!-- 电台 -->
             <div class="index-inner-audio">
                <!-- <div class="index-inner-audiolist">
                    <div class="index-inner-audioitem">
                        <div class="index-inner-audioitemtop">
                            <img src="../../../../static/img/750_750备份 86.png" alt="" class="audio-topbg">
                            <div class="index-inner-audioitemtophead">
                                <img src="../../../../static/img/音乐 2@2x(1).png" alt="" class="audio-toplogo">
                                <span class="audio-toptime">213123</span>
                            </div>
                           <img src="../../../../static/img/编组 17@2x(10).png" alt="" class="audio-topplay">
                        </div>
                        <div class="index-inner-audioitembottom">
                            <div class="audio-title">想要募集三位愿意一起加入我的团队的小伙伴</div>
                            <div class="audio-tips">
                                <ul>
                                    <li class="audio-time">
                                        2018-7-8
                                    </li>
                                    <li class="audio-like">
                                        <span>12</span>
                                          喜欢 ·
                                          <span>98</span>
                                          评论
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> -->
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
            }
        },
        components:{
            Footer,
            Header
        },
        mounted() {
            this.getfenye()
        },
        computed: {
            holder() {
                return 4 - (this.list.length % 4);
            },
        },
        created() {
            this.getlistdata( )
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
                this.$router.push({path: '/audiodetail', query: {id:item.id,radio_url:item.radio_url}});
            }
        }
    }
</script>

<style>

</style>
