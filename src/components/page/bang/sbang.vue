<template>
        <div class="sbang-page">
          <Wheader></Wheader>

            <div class="search-box">
                <div class="sbang typetab">
                    <div class="typetab-top">
                        <div class="sbang typetab-searchbox">
                            <div class="sbang typetab-searchbox-left">
                                    <div class="typetab-searchlogo">
                                        <img src="../../../../static/img/Shape 2.png" alt="">
                                    </div>
                                <input type="text" placeholder="搜创业/项目/优选" v-model="description">
                            </div>
                            <div class="sbang typetab-searchbox-right" @click="searchread">
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
                        <span>{{description}}</span>
                        共检索到
                        <span> {{total}}</span>
                        条结果
                    </div>
                    <div class="typetab-botom">
                        <router-link :to="{path:'sread'}">
                            <span>阅读</span>
                        </router-link>
                        <span class="active">创业Bang！</span>
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

                   <!-- 创业帮 -->
                <div class="index-inner-bang">
                    <div class="index-inner-banglist">
                        <template v-for="(item,index) in listdata">
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
                    :page-size="12"
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
                    cur_page: 1,
                    pages: 0,
                    total:"",
                    jumppage:"",
                    listdata:"",
                    resultdata:"",
                    description:"",
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

            },
            created() {
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                if(this.user){
                    this.nlogin = false
                    this.login = true
                }
                this.getlistdata()
                this.getfenye()
            },
            methods: {
                getlistdata(){
                    this.$get('business/list?per-page=12').then((res) => {
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
                searchread(){
                    this.getresultdata()
                    this.resultshow = true
                },
                getresultdata(){
                    this.$get('business/list',{
                        description:this.description
                    }).then((res) => {
                            console.log(res)
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
                handleCurrentChange(val) {
                    this.loading = true
                    this.$get('business/list?per-page=12', {
                        page: val,
                        description:this.description
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
                    this.$get('business/list?per-page=12', {
                        page: this.jumppage,
                        description:this.description
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
                gobangitem(item,index){
                    this.$router.push({path: '/bangitem', query: {id:item.id}});
                },
                opendialog(){
                    this.dialogFormVisible = true
                },
            }
        }
    </script>
    <style>

    </style>
