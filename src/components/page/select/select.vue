<template>
    <div class="select-page">
        <div class="select header">
            <div class="select header-inner">
                <div class="select header-top">
                    <div class="select header-left">
                        <div class="select header-logo">
                            <router-link :to="{path:'index'}">
                                <img src="../../../../static/img/编组 20.png" alt="">
                            </router-link>
                        </div>
                        <div class="select header-menu">
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
                    <div class="select header-menuline">
                        <img src="../../../../static/img/hline.png" alt="">
                    </div>
                    <div class="select header-right">
                        <div class="select header-searchbox" @click="gosearch">
                            <div class="header-searchlogo">
                                <img src="../../../../static/img/Shape 2(1).png" alt="">
                            </div>
                            <div class="header-searchinput" style="color: #ffffff;"> 
                                <input type="text" placeholder="搜创业/项目/优选" style="color: #ffffff;">
                            </div>
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
                            <el-dropdown class="user-name" trigger="click" @command="handleCommand" v-if="login">
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
                <div class="head header-bottom">
                    <img src="../../../../static/img/优选 2.png" alt="">
                    <p>BEST SELECT</p>
                </div>
            </div>
            
        </div>
        <div class="index-inner">
            <div class="select-banner">
                <template v-for="(item,index) in typedata">
                    <div @click="gotypelist(item,index)">
                        <img :src="item.image" alt="">
                    </div>
                </template>
            </div>
            <div class="typetitle">
                尖货优选
                <span>极速放款 限时闪贷</span>
            </div>
            <!-- <div class="selectlist">
                <div class="selectitem">
                    <div class="correct">
                        <div class="selectitem-top">
                            <div class="selectitem-toplogo">
                                <img src="../../../../static/img/Mask 2.png" alt="" >
                            </div>
                            <p class="selectitem-toptitle">借东风</p>
                            <span>注册就下款，无视黑户</span>
                            <span>（仅限21~41周岁客户）</span>
                            <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                        </div>
                        <div class="selectitem-bottom">
                            <div class="selectitem-bottomduration">
                                <p>额度范围(元)</p>
                                <span>3000～8000</span>
                            </div>
                            <div class="selectitem-bottomradio">
                                <p>日利率(%)</p>
                                <span>0.07%</span>
                            </div>
                            <div class="selectitem-bottomtime">
                                <p>放款速度</p>
                                <span>1小时</span>
                            </div>
                            
                        </div>
                        <div class="selectitem-applybtn">
                            立即申请 
                        </div>
                    </div>
                </div>
                <div class="selectitem">
                    <div class="opposite">
                        <div class="selectitem-top">
                            <img src="../../../../static/img/编组 43.png" alt="">
                            <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                        </div>
                        <div class="selectitem-bottom">
                            <div class="selectitem-bottomduration">
                                <p>额度范围(元)</p>
                                <span>3000～8000</span>
                            </div>
                            <div class="selectitem-bottomradio">
                                <p>日利率(%)</p>
                                <span>0.07%</span>
                            </div>
                            <div class="selectitem-bottomtime">
                                <p>放款速度</p>
                                <span>1小时</span>
                            </div>
                            
                        </div>
                        <div class="selectitem-applybtn1">
                            手机扫码立即申请 
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="selectlist">
                <div class="selectitem">
                    <div class="selectitem-top">
                        <img src="../../../../static/img/编组 43.png" alt="">
                        <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                    </div>
                    <div class="selectitem-bottom">
                        <div class="selectitem-bottomduration">
                            <p>额度范围(元)</p>
                            <span>3000～8000</span>
                        </div>
                        <div class="selectitem-bottomradio">
                            <p>日利率(%)</p>
                            <span>0.07%</span>
                        </div>
                        <div class="selectitem-bottomtime">
                            <p>放款速度</p>
                            <span>1小时</span>
                        </div>
                        
                    </div>
                    <div class="selectitem-applybtn1">
                        手机扫码立即申请 
                    </div>
                </div>
            </div> -->

            <!-- <div class="selectlist">
                <div class="selectitem">
                    <div class="correct">
                        <div class="selectitem-top">
                            <div class="selectitem-toplogo">
                                <img src="../../../../static/img/Mask 2.png" alt="" >
                            </div>
                            <p class="selectitem-toptitle">借东风</p>
                            <span>注册就下款，无视黑户</span>
                            <span>（仅限21~41周岁客户）</span>
                            <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                        </div>
                        <div class="selectitem-bottom">
                            <div class="selectitem-bottomduration">
                                <p>额度范围(元)</p>
                                <span>3000～8000</span>
                            </div>
                            <div class="selectitem-bottomradio">
                                <p>日利率(%)</p>
                                <span>0.07%</span>
                            </div>
                            <div class="selectitem-bottomtime">
                                <p>放款速度</p>
                                <span>1小时</span>
                            </div>
                            
                        </div>
                        <div class="selectitem-applybtn">
                            立即申请 
                        </div>
                    </div>
                </div>
                <div class="selectitem">
                    <div class="opposite">
                        <div class="selectitem-top">
                            <img src="../../../../static/img/编组 43.png" alt="">
                            <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                        </div>
                        <div class="selectitem-bottom">
                            <div class="selectitem-bottomduration">
                                <p>额度范围(元)</p>
                                <span>3000～8000</span>
                            </div>
                            <div class="selectitem-bottomradio">
                                <p>日利率(%)</p>
                                <span>0.07%</span>
                            </div>
                            <div class="selectitem-bottomtime">
                                <p>放款速度</p>
                                <span>1小时</span>
                            </div>
                            
                        </div>
                        <div class="selectitem-applybtn1">
                            手机扫码立即申请 
                        </div>
                    </div>
                </div>
            </div> -->
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
                                    <!-- <img src="../../../../static/img/编组 12.png" alt="" class="selectitem1-img"> -->
                                    <img :src="item.qrcode_url" alt="" class="selectitem1-img">
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
                <!-- <div class="select-item">
                    <div class="selectitem">
                        <div>
                            <div class="selectitem-top">
                                <div class="selectitem-toplogo">
                                    <img src="../../../../static/img/Mask 2.png" alt="" >
                                </div>
                                <p class="selectitem-toptitle">借东风</p>
                                <div class="selectitem-topdescbox">
                                    <p class="selectitem-topslogan">注册就下款，无视黑户</p>
                                    <p>（仅限21~41周岁客户）</p>
                                </div>
                                <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                            </div>
                            <div class="selectitem-bottom">
                                <div class="selectitem-bottomduration">
                                    <p>额度范围(元)</p>
                                    <span>3000～8000</span>
                                </div>
                                <div class="selectitem-bottomradio">
                                    <p>日利率(%)</p>
                                    <span>0.07%</span>
                                </div>
                                <div class="selectitem-bottomtime">
                                    <p>放款速度</p>
                                    <span>1小时</span>
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
                                <img src="../../../../static/img/编组 43.png" alt="">
                                <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                            </div>
                            <div class="selectitem-bottom">
                                <div class="selectitem-bottomduration">
                                    <p>额度范围(元)</p>
                                    <span>3000～8000</span>
                                </div>
                                <div class="selectitem-bottomradio">
                                    <p>日利率(%)</p>
                                    <span>0.07%</span>
                                </div>
                                <div class="selectitem-bottomtime">
                                    <p>放款速度</p>
                                    <span>1小时</span>
                                </div>
                                
                            </div>
                            <div class="selectitem1-applybtn1">
                                手机扫码立即申请 
                            </div>
                        </div>
                    </div>
                </div> -->
                   <!-- <div class="select-item">
                        <div class="selectitem1">
                                <div class="selectitem-top">
                                    <img src="../../../../static/img/编组 43.png" alt="">
                                    <img src="../../../../static/img/直线 2.png" alt="" class="selectitem-topline">
                                </div>
                                <div class="selectitem-bottom">
                                    <div class="selectitem-bottomduration">
                                        <p>额度范围(元)</p>
                                        <span>3000～8000</span>
                                    </div>
                                    <div class="selectitem-bottomradio">
                                        <p>日利率(%)</p>
                                        <span>0.07%</span>
                                    </div>
                                    <div class="selectitem-bottomtime">
                                        <p>放款速度</p>
                                        <span>1小时</span>
                                    </div>
                                    
                                </div>
                                <div class="selectitem-applybtn1">
                                    手机扫码立即申请 
                                </div>
                        </div>
                   </div> -->
                  
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
    export default {
        data() {
            return {
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
                url:"http://47.103.61.179:8011/"
                // url:"http://api-backend.loan.xykj1.com/"
            }
        },
        components:{
            Footer 
        },
        mounted() {
            this.getfenye()
            // this.rotatediv()
            this.$nextTick(function() {
                this.initSwiper();
            });
        },
        created() {
            // this.user = JSON.parse(localStorage.getItem('info'))
            // this.user = localStorage.getItem('info')
            if(localStorage.getItem('info')){
                this.user = JSON.parse(localStorage.getItem('info'))
                console.log(this.user)
            }
            if(this.user){
                this.nlogin = false
                this.login = true
            }else{
                this.nlogin = true
                this.login = false
            }
            this.getselectdata()

        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper('.swiper-container',{
                    effect : 'flip',
                    loop:true,
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable :true,
                        
                    // }, 
                    navigation: {
                        nextEl: '.swiper-button-next',
                    },
                    flipEffect: {
                        slideShadows : false,
                        limitRotation : false,
                    },
                    // on:{
                    //     click: function(item){
                    //        console.log(item)
                    //     },
                    // },
                    // on: {
                    //     slideChange: function () {
                    //         console.log(this.activeIndex);
                    //     },
                    // },
                    // cubeEffect: {
                    //     slideShadows: false,
                    //     shadow: false,
                    //     shadowOffset: 100,
                    //     shadowScale: 0.6
                    // },
                })
            },  
            // 优选列表
            getselectdata(){
                axios.get(this.url+'products?page=1&per-page=12').then((res) => {
                    if(res.data.code === 1){
                        console.log(res)
                        this.selectdata = res.data.info.items
                        console.log(this.selectdata)
                        this.$nextTick(function() {
                            this.initSwiper();
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
            }
        }
    }
</script>

<style>
    


</style>