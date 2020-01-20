<template>
    <div class="app-page" v-loading="loading" element-loading-text="登录中" >
        <wheader></wheader>
        <div class="app-inner" style="position: relative;">
            <div class="index-inner">
                <div class="ballone" ref="ballone">

                </div>
                <div class="balltwo" ref="balltwo">

                </div>
                <div class="ballthree" ref="ballthree">

                </div>
                <div class="ballfour" ref="ballfour">

                </div>
                <div class="index-inner-banner" >
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
                                <div class="index-inner-bannerleft">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="../../../../static/img/s1.jpg" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                    <img src="../../../../static/img/s2.jpg" alt="">
                                                </div>
                                                <div class="swiper-slide">
                                                    <img src="../../../../static/img/s3.jpg" alt="">
                                                </div>
                                        </div>
                                        <!-- <div class="swiper-button-prev"></div> -->
                                        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                                        <!-- <div class="swiper-button-next"></div> -->
                                        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                                        　<div class="swiper-pagination"></div>

                                    </div>
                                </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
                            <div class="index-inner-bannerright">
                                <img src="../../../../static/img/犀金APP 2.png" alt="" class="app-title">
                                <p class="app-version">Version 1.5</p>
                                <p class="app-produce">职场、创业、资金 · 赚钱机会传递者</p>
                                <p class="app-line"></p>
                                <!-- <span></span> -->
                                <!-- <div></div> -->
                                <div class="app-settingsbtn">
                                    <img src="../../../../static/img/编组 5.png" alt="" @click="goandriod">
                                    <img src="../../../../static/img/编组 50.png" alt="" @click="goios">
                                    <img src="../../../../static/img/形状结合(1).png" alt="" style="position: relative;"  @mouseenter="enter()" @mouseleave="leave()">
                                    <!-- <img src="../../../../static/img/形状结合.png" alt=""> -->
                                    <img src="../../../../static/img/形状结合(2).png" alt="" style="position: relative;"  @mouseenter="enter1()" @mouseleave="leave1()">

                                </div>
                                <div>
                                    <img src="../../../../static/img/编组 43备份 2.png" alt="" class="focusapp1" v-if="wxshow">
                                    <img src="../../../../static/img/编组 43.png" alt="" class="donwnloadapp2" v-if="appshow">
                                </div>
                                <!-- <img src="../../../../static/img/编组 43备份 2.png" alt="" class="focusapp">
                                <img src="../../../../static/img/编组 43.png" alt="" class="donwnloadapp" > -->
                                <!-- <img src="../../../../static/img/编组 43备份 2.png" alt="" class="focusapp" v-if="codeshow">
                                <img src="../../../../static/img/编组 43.png" alt="" class="donwnloadapp" v-if="code1show"> -->


                                <!-- <el-row :gutter="20">
                                    <el-col :span="16">
                                        <div class="index-inner-bannerrighttitle">
                                            犀金APP现已开放下载
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="index-inner-bannerrightimg">
                                            <img src="../../../../static/img/编组 3.png" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="index-inner-bannerrigthdownload">
                                    <img src="../../../../static/img/编组 6.png" alt="">
                                </div>
                                <div class="index-bannerrigthdowntype">
                                    <el-row :gutter="20">
                                        <el-col :span="12">
                                            <div class="index-inner-bannerrightapple">
                                                <img src="../../../../static/img/编组 28.png" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="index-inner-bannerrightandroid">
                                                <img src="../../../../static/img/编组 30.png" alt="">
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                                <div class="inndex-bannerrigtlogintypebox">
                                    <el-row :gutter="20">
                                        <el-col :span="6" style="padding-top: 5px;">
                                            <img src="../../../../static/img/直线.png" alt="" style="width: 100%;">
                                        </el-col>
                                        <el-col :span="12">
                                            <div class="inndex-bannerrigtlogintype">
                                                <img src="../../../../static/img/编组 35.png" alt="">
                                                <img src="../../../../static/img/编组 39.png" alt="">
                                                <img src="../../../../static/img/编组 41.png" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="6" style="padding-top: 5px;">
                                            <img src="../../../../static/img/直线备份.png" alt="" style="width: 100%;padding-top: 5px;">
                                        </el-col>
                                    </el-row>
                                </div> -->
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    $(document).ready(function(){
        $(".app-inner").height($(document.body).height())
        // alert($(document).height());
    });
    import Footer from '../../common/footer.vue'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import Wheader from '../../common/wheader.vue'
    export default {
        data: function() {
            return {
                nlogin:true,
                login:false,
                dialogFormVisible:true,
                loading: false,
                ruleForm: {
                    type: "",
                    phone: '',
                    mscode: ''
                },
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            wxshow:false,
            appshow:false,
            oDiv:"",
            oDiv1:"",
            oDiv2:"",
            div:"",
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                }
            }
        },
        components:{
            Footer,
            Wheader
        },
        created() {
            if(localStorage.getItem('info')){
                this.user = JSON.parse(localStorage.getItem('info'))
            }
            // this.user = JSON.parse(localStorage.getItem('info'))
            if(this.user){
                this.nlogin = false
                this.login = true
            }
        },
        mounted() {
            this.$nextTick(function() {
                this.initSwiper();
            });
                var iSpeedX = 6;
                var iSpeedY = 8;
                var iSpeedX1 = 2;
                var iSpeedY1 = 8;
                var iSpeedX2 = -12;
                var iSpeedY2 = -10;
                var iSpeedX3 = 12;
                var iSpeedY3 = 8;
                // this.$refs.ballone.style.top="90px"
            this.invt = setInterval(() => {

                // var oDiv = document.getElementById('div1');
                var l = this.$refs.ballone.offsetLeft + iSpeedX;
                var t = this.$refs.ballone.offsetTop + iSpeedY;

                //当元素碰到底边时
                if (t >= document.documentElement.clientHeight- this.$refs.ballone.offsetHeight) {

                    iSpeedY *= -1;
                    //碰撞可能越界，防止出现滚动条，强行拉回来
                    t = document.documentElement.clientHeight- this.$refs.ballone.offsetHeight;
                    console.log(t)
                    //当元素碰到上边时
                } else if (t <= 0) {
                    iSpeedY *= -1;
                    //碰撞可能越界，防止出现滚动条，强行拉回来
                    t = 0;
                }

                //当元素碰到右边时
                if (l >= document.documentElement.clientWidth - this.$refs.ballone.offsetWidth) {

                    iSpeedX *= -1;
                    //碰撞可能越界，防止出现滚动条，强行拉回来
                    l = document.documentElement.clientWidth - this.$refs.ballone.offsetWidth;
                    console.log(l)
                    //当元素碰到左边时
                } else if (l <= 0) {
                    iSpeedX *= -1;
                    //碰撞可能越界，防止出现滚动条，强行拉回来
                    l = 0;
                }

                this.$refs.ballone.style.left = l + 'px';
                this.$refs.ballone.style.top = t + 'px';
            }, 30)

            this.invt1 = setInterval(() => {

               // var oDiv = document.getElementById('div1');
               var l = this.$refs.balltwo.offsetLeft + iSpeedX1;
               var t = this.$refs.balltwo.offsetTop + iSpeedY1;

               //当元素碰到底边时
               if (t >= document.documentElement.clientHeight- this.$refs.balltwo.offsetHeight) {

                   iSpeedY1 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   t = document.documentElement.clientHeight- this.$refs.balltwo.offsetHeight;
                   console.log(t)
                   //当元素碰到上边时
               } else if (t <= 0) {
                   iSpeedY1 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   t = 0;
               }

               //当元素碰到右边时
               if (l >= document.documentElement.clientWidth - this.$refs.balltwo.offsetWidth) {

                   iSpeedX1 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   l = document.documentElement.clientWidth - this.$refs.balltwo.offsetWidth;
                   console.log(l)
                   //当元素碰到左边时
               } else if (l <= 0) {
                   iSpeedX1 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   l = 0;
               }

               this.$refs.balltwo.style.left = l + 'px';
               this.$refs.balltwo.style.top = t + 'px';
           }, 30)

        //     this.invt1 = setInterval(() => {

        //        var l = this.$refs.balltwo.offsetLeft + iSpeedX1;
        //        var t = this.$refs.balltwo.offsetTop + iSpeedY1;

        //        //当元素碰到底边时
        //        if (t >= document.documentElement.clientHeight- this.$refs.balltwo.offsetHeight) {

        //            iSpeedY1 *= -1;
        //            //碰撞可能越界，防止出现滚动条，强行拉回来
        //            t = document.documentElement.clientHeight- this.$refs.balltwo.offsetHeight;
        //            console.log(t)
        //            //当元素碰到上边时
        //        } else if (t <= 0) {
        //            iSpeedY1 *= -1;
        //            //碰撞可能越界，防止出现滚动条，强行拉回来
        //            t = 0;
        //        }

        //        //当元素碰到右边时
        //        if (l >= document.documentElement.clientWidth - this.$refs.balltwo.offsetWidth) {

        //            iSpeedX1 *= -1;
        //            //碰撞可能越界，防止出现滚动条，强行拉回来
        //            l = document.documentElement.clientWidth - this.$refs.balltwo.offsetWidth;
        //            console.log(l)
        //            //当元素碰到左边时
        //        } else if (l <= 0) {
        //            iSpeedX1  *= -1;
        //            //碰撞可能越界，防止出现滚动条，强行拉回来
        //            l = 0;
        //        }

        //        this.$refs.balltwo.style.left = l + 'px';
        //        this.$refs.balltwo.style.top = t + 'px';
        //    }, 30)

           this.invt2 = setInterval(() => {

               // var oDiv = document.getElementById('div1');
               var l = this.$refs.ballthree.offsetLeft + iSpeedX2;
               var t = this.$refs.ballthree.offsetTop + iSpeedY2;

               //当元素碰到底边时
               if (t >= document.documentElement.clientHeight- this.$refs.ballthree.offsetHeight) {

                   iSpeedY2 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   t = document.documentElement.clientHeight- this.$refs.ballthree.offsetHeight;
                   console.log(t)
                   //当元素碰到上边时
               } else if (t <= 0) {
                   iSpeedY2 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   t = 0;
               }

               //当元素碰到右边时
               if (l >= document.documentElement.clientWidth - this.$refs.ballthree.offsetWidth) {

                   iSpeedX2 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   l = document.documentElement.clientWidth - this.$refs.ballthree.offsetWidth;
                   console.log(l)
                   //当元素碰到左边时
               } else if (l <= 0) {
                   iSpeedX2  *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   l = 0;
               }

               this.$refs.ballthree.style.left = l + 'px';
               this.$refs.ballthree.style.top = t + 'px';
           }, 30)

           this.invt3 = setInterval(() => {

               // var oDiv = document.getElementById('div1');
               var l = this.$refs.ballfour.offsetLeft + iSpeedX3;
               var t = this.$refs.ballfour.offsetTop + iSpeedY3;

               //当元素碰到底边时
               if (t >= document.documentElement.clientHeight- this.$refs.ballfour.offsetHeight) {

                   iSpeedY3 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   t = document.documentElement.clientHeight- this.$refs.ballfour.offsetHeight;
                   console.log(t)
                   //当元素碰到上边时
               } else if (t <= 0) {
                   iSpeedY3 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   t = 0;
               }

               //当元素碰到右边时
               if (l >= document.documentElement.clientWidth - this.$refs.ballfour.offsetWidth) {

                   iSpeedX3 *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   l = document.documentElement.clientWidth - this.$refs.ballfour.offsetWidth;
                   console.log(l)
                   //当元素碰到左边时
               } else if (l <= 0) {
                   iSpeedX3  *= -1;
                   //碰撞可能越界，防止出现滚动条，强行拉回来
                   l = 0;
               }

               this.$refs.ballfour.style.left = l + 'px';
               this.$refs.ballfour.style.top = t + 'px';
           }, 30)

        },
        updated() {
            // this.startmove()
        },
        destroyed() {
            clearInterval(this.invt);
            clearInterval(this.invt1);
            clearInterval(this.invt2);
            clearInterval(this.invt3);

        },
        methods: {
            goandriod(){
                window.location.href = "https://apps.apple.com/cn/app/%E7%8A%80%E9%87%91/id1472961547"
            },
            goios(){
                window.location.href = "https://sj.qq.com/myapp/detail.htm?apkName=com.xiyi.rhinobillion"
            },
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
            enter(){
                this.wxshow = true

            },
            leave(){
                this.wxshow = false
            },
            enter1(){
                this.appshow = true
            },
            leave1(){
                this.appshow = false
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('token', '');
                        this.loading = true
                        this.$post('get-access-token', {
                                name: this.ruleForm.username,
                                password: this.ruleForm.password
                            }).then((res) => {
                                console.log(res)
                                if (res.code === 1) {
                                    localStorage.setItem('token', res.info.access_token);
                                    this.token = localStorage.getItem("token")
                                    this.$get('admin/info', {
                                        access_token: this.token,
                                    }).then((res) => {
                                        console.log(res)
                                        if (res.code === 1) {
                                            localStorage.setItem('userInfo', JSON.stringify(res.info));
                                            this.$router.push('/Dashboard');
                                        } else {
                                            this.$message.error(res.message);
                                        }
                                        this.loading = false
                                    }).catch(() => {
                                        this.loading = false
                                    })
                                    // this.$router.push('/home');
                                } else {
                                    this.$message.error(res.message);
                                }
                                this.loading = false
                            }).catch(() => {
                                this.loading = false
                            })
                    } else {
                        return false;
                    }
                });
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
            startmove1(){
                var iSpeedX = 6;
                var iSpeedY = 8;
                setInterval(function () {
                    var oDiv = document.getElementsByClassName('ballone');
                    console.log(oDiv)
                    console.log(oDiv.offsetLeft)

                    var l = oDiv.offsetLeft + iSpeedX;
                    var t = oDiv.offsetTop + iSpeedY;

                    //当元素碰到底边时
                    if (t >= document.documentElement.clientHeight - oDiv.offsetHeight) {

                        iSpeedY *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        t = document.documentElement.clientHeight - oDiv.offsetHeight;

                        //当元素碰到上边时
                    } else if (t <= 0) {
                        iSpeedY *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        t = 0;
                    }

                    //当元素碰到右边时
                    if (l >= document.documentElement.clientWidth - oDiv.offsetWidth) {

                        iSpeedX *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        l = document.documentElement.clientWidth - oDiv.offsetWidth;

                        //当元素碰到左边时
                    } else if (l <= 0) {
                        iSpeedX *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        l = 0;
                    }

                    // oDiv.style.left = l + 'px';
                    // oDiv.style.top = t + 'px';
                }, 30);
            },
            startmove(){
                var iSpeedX = 6;
                    var iSpeedY = 8;
                    var l = this.oDiv + iSpeedX;
                    var t = this.oDiv + iSpeedY;
                    console.log(l)
                    //当元素碰到底边时
                    if (t >= document.documentElement.clientHeight - this.oDiv1) {

                        iSpeedY *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        t = document.documentElement.clientHeight - this.oDiv1;

                        //当元素碰到上边时
                    } else if (t <= 0) {
                        iSpeedY *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        t = 0;
                    }

                    //当元素碰到右边时
                    if (l >= document.documentElement.clientWidth - this.oDiv2) {

                        iSpeedX *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        l = document.documentElement.clientWidth - this.oDiv2;

                        //当元素碰到左边时
                    } else if (l <= 0) {
                        iSpeedX *= -1;
                        //碰撞可能越界，防止出现滚动条，强行拉回来
                        l = 0;
                    }
                    // this.div.style.width = "500px"
                    this.div.style.left = l + 'px';
                    this.div.style.top = t + 'px';
                    console.log(this.div.style.left)
            },
            // inv: function () {
            //     this.invt = setInterval(() => {
            //         var iSpeedX = 6;
            //         var iSpeedY = 8;
            //         var l = this.oDiv + iSpeedX;
            //         var t = this.oDiv + iSpeedY;

            //         //当元素碰到底边时
            //         if (t >= document.documentElement.clientHeight - this.oDiv1) {

            //             iSpeedY *= -1;
            //             //碰撞可能越界，防止出现滚动条，强行拉回来
            //             t = document.documentElement.clientHeight - this.oDiv1;

            //             //当元素碰到上边时
            //         } else if (t <= 0) {
            //             iSpeedY *= -1;
            //             //碰撞可能越界，防止出现滚动条，强行拉回来
            //             t = 0;
            //         }

            //         //当元素碰到右边时
            //         if (l >= document.documentElement.clientWidth - this.oDiv2) {

            //             iSpeedX *= -1;
            //             //碰撞可能越界，防止出现滚动条，强行拉回来
            //             l = document.documentElement.clientWidth - this.oDiv2;

            //             //当元素碰到左边时
            //         } else if (l <= 0) {
            //             iSpeedX *= -1;
            //             //碰撞可能越界，防止出现滚动条，强行拉回来
            //             l = 0;
            //         }
            //         // this.div.style.width = "500px"
            //         this.div.style.left = l + 'px';
            //         this.div.style.top = t + 'px';
            //     }, 30)
            // }

        }
    }
</script>
<style>
    .app-inner{
        min-height: 1140px;
        /* background:linear-gradient(219deg,rgba(19,216,255,1) 0%,rgba(55,122,230,1) 60%,rgba(255,20,234,1) 100%); */
        background:linear-gradient(219deg,rgba(19,216,255,1) 0%,rgba(55,122,230,1) 60%,rgba(255,20,234,1) 100%);
    }
    .login-footer{
        position:fixed;
        text-align: center;
        /* top:90%; */
        bottom:50px;
        /* margin-left:40%; */
        margin-left:-90px;
    }
</style>
