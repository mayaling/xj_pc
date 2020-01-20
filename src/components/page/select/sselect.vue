<template>
        <div class="sselect-page">
          <Wheader></Wheader>
           
            <div class="search-box">
                <div class="sselect typetab">
                        <div class="typetab-top">
                            <div class="sselect typetab-searchbox">
                                <div class="sselect typetab-searchbox-left">
                                        <div class="typetab-searchlogo">
                                            <img src="../../../../static/img/Shape 2.png" alt="">
                                        </div>
                                    <input type="text" placeholder="搜创业/项目/优选" v-model="title">
                                </div>
                                <div class="sselect typetab-searchbox-right" @click="searchread">
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
                        <div class="typetab-tips">
                            <span>游戏</span>
                            共检索到 
                            <span> 90</span>
                            条结果
                        </div>
                        <div class="typetab-botom">
                            <router-link :to="{path:'sread'}">
                                <span>阅读</span>
                            </router-link>
                            <router-link :to="{path:'sbang'}">
                                <span>创业Bang！</span>
                            </router-link>
                            <span class="active">优选</span>
                            <router-link :to="{path:'saudio'}">
                                <span>电台</span>
                            </router-link>
                        </div>
                </div>
            </div>
            <div class="index-inner">
             
                <div class="selectlist">
                    <template v-for="(item,index) in selectdata">
                        <div class="select-item">
                            <div class="selectitem">
                                <div>
                                    <div class="selectitem-top">
                                        <div class="selectitem-toplogo">
                                            <img :src="item.image" alt="">
                                            <!-- <img src="../../../../static/img/Mask 2.png" alt="" > -->
                                        </div>
                                        <p class="selectitem-toptitle">{{item.name}}</p>
                                        <div class="selectitem-topdescbox">
                                            <p class="selectitem-topslogan">{{item.slogan}}</p>
                                            <p>（仅限21~41周岁客户）</p>
                                        </div>
                                        
                                        <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                                    </div>
                                    <div class="selectitem-bottom">
                                        <div class="selectitem-bottomduration">
                                            <p>额度范围(元)</p>
                                            <span>{{item.apply_duration}}</span>
                                        </div>
                                        <div class="selectitem-bottomradio">
                                            <p>日利率(%)</p>
                                            <span>{{item.rate}}</span>
                                        </div>
                                        <div class="selectitem-bottomtime">
                                            <p>放款速度</p>
                                            <span>{{item.lending_time}}<span>天</span></span>
                                        </div>
                                    </div>
                                    <div class="selectitem-applybtn">
                                        立即申请 
                                    </div>
                                </div>
                            </div>
                            <div class="selectitem1">
                                <div>
                                    <div class="selectitem-top">
                                        <img :src="item.qrcode_url" alt="" class="selectitem1-img">
                                        <!-- <img src="../../../../static/img/编组 12.png" alt="" class="selectitem1-img"> -->
                                        <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                                    </div>
                                    <div class="selectitem-bottom">
                                        <div class="selectitem-bottomduration">
                                            <p>额度范围(元)</p>
                                            <span>{{item.apply_duration}}</span>
                                        </div>
                                        <div class="selectitem-bottomradio">
                                            <p>日利率(%)</p>
                                            <span>{{item.rate}}</span>
                                        </div>
                                        <div class="selectitem-bottomtime">
                                            <p>放款速度</p>
                                            <span>{{item.lending_time}}<span>天</span></span>
                                        </div>
                                    </div>
                                    <div class="selectitem1-applybtn1">
                                        手机扫码立即申请 
                                    </div>
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
                    <div><el-button @click="jump">GO!</el-button></div>
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

        export default {
            data() {
                return {
                    dialogFormVisible:false,
                    nlogin:true,
                    login:false,
                    selectdata:"",
                    typedata:"",
                    cur_page: 1,
                    pages: 0,
                    total:"",
                    currentPage:"",
                    jumppage:"",
                    currentPage:"",
                    url:"http://47.103.61.179:8011/",
                    // url:"http://api-backend.loan.xykj1.com/",

                    title:"",
                }
            },
            components:{
                Footer ,
                Wheader

            },
            mounted() {
              this.getfenye()
            },
            created() {
                this.getselectdata()
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                if(this.user){
                    this.nlogin = false
                    this.login = true
                }
            },
            methods: {
                searchread(){
                    this.getlistdata()
                },
                getselectdata(){
                    axios.get(this.url+'products?page=1&per-page=12').then((res) => {
                        if(res.data.code === 1){
                            console.log(res)
                            this.selectdata = res.data.info.items
                            console.log(this.selectdata)
                            this.$nextTick(function() {
                                this.rotatediv()
                            });
                            // this.articledata = res.info.items
                            this.pages = res.data.info._meta.pageCount;
                            this.total = res.data.info._meta.totalCount
                            this.currentPage = res.data.info._meta.currentPage
                            // console.log(this.currentPage)
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                }, 
                // 分页
                handleCurrentChange(val) {
                    this.loading = true
                    axios.get(this.url+'products?per-page=12', {
                        params:{
                            page: val,
                        }
                    }).then((res) => {
                        console.log(res)
                        if (res.data.code === 1) {
                            this.selectdata = JSON.parse(JSON.stringify(res.data.info.items))
                            // this.selectdata = res.data.info.items
                            this.pages = res.data.info._meta.pageCount;
                            this.total = res.data.info._meta.totalCount
                            this.currentPage = res.data.info._meta.currentPage
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
                    axios.get(this.url+'products?per-page=12', {
                        params:{
                            page: this.jumppage,
                        }
                    }).then((res) => {
                        console.log(res)
                        if (res.data.code === 1) {
                            this.selectdata = JSON.parse(JSON.stringify(res.data.info.items))
                            console.log(this.selectdata)
                            // this.articledata = JSON.parse(JSON.stringify(res.info.items))
                            this.pages = res.data.info._meta.pageCount;
                            this.cur_page = res.data.info._meta.currentPage
                            this.currentPage = res.data.info._meta.currentPage
                            this.total = res.data.info._meta.totalCount
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
                    this.$router.push({path: '/selectlist', query: {id:item.at_id,name:item.at_name}});
                },
                goselectitem(item,index){
                    this.$router.push({path: '/selectitem', query: {id:item.id}});
                },
                gosearch(){
                    this.$router.push({path: '/sselect'});
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
                rotatediv(){
                    $(".select-item").hover(function(){
                        $(this).find(".selectitem").children().removeClass();
                        $(this).find(".selectitem1").children().removeClass();
                        $(this).find(".selectitem").children().addClass("test");
                        $(this).find(".selectitem1").children().addClass('test2');
                    },function(){
                        $(this).find(".selectitem").children().removeClass();
                        $(this).find(".selectitem1").children().removeClass();
                        $(this).find(".selectitem").children().addClass("test2");
                        $(this).find(".selectitem1").children().addClass('test');
                    });
                },
                opendialog(){
                    this.dialogFormVisible = true
                },
                
              
            }
        }
    </script>
    <style>

    </style>