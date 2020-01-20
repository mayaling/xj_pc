<template>
        <div class="bangitem-page">
            <wheader></wheader>
           
            <div class="index-inner">
                <div class="bangitem-banner">
                    <!-- <div class="bangitem-bannermask">
                        <img src="../../../../static/img/矩形备份 12@2x.png" alt="">
                    </div> -->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                                <!-- <div class="swiper-slide">
                                    <img :src="imgdata.type_logo" alt="" class="typelogo">
                                    <p class="swiperdesc">{{imgdata.description}}</p>
                                    <img :src="imgdata.background_image" alt="">
                                </div>
                                <template v-for="(item,index) in imgdata.pic_list">
                                    <div class="swiper-slide">
                                        <img :src="item" alt="">
                                    </div>
                                </template> -->
                                <div class="swiper-slide">
                                    <img :src="listdata.type_logo" alt="" class="typelogo">
                                    <p class="swipertypename">{{listdata.area}}</p>
                                    <p class="swiperdesc">{{listdata.description}}</p>
                                    <div class="bangitem-bannermask">
                                        <img :src="listdata.background_image" alt="">
                                    </div>
                                    <img :src="listdata.background_image" alt="" class="topslide">
                                </div>
                                <template v-for="(item,index) in listdata.pic_list">
                                    <div class="swiper-slide">
                                        <div class="bangitem-bannermask">
                                            <img :src="item" alt="">
                                            <!-- <img src="../../../../static/img/矩形备份 12@2x.png" alt=""> -->
                                        </div>
                                        <img :src="item" alt="" class="topslide">
                                        <!-- <img src="../../../../static/img/矩形备份 12.png" alt="" class="topslide"> -->
                                    </div>
                                </template> 
                            <!-- <div class="swiper-slide">
                                    <div class="bangitem-bannermask">
                                            <img src="../../../../static/img/矩形备份 12@2x.png" alt="">
                                        </div>
                                <img src="../../../../static/img/矩形备份 12.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                    <div class="bangitem-bannermask">
                                            <img src="../../../../static/img/矩形备份 12@2x.png" alt="">
                                        </div>
                                <img src="../../../../static/img/矩形备份 12.png" alt="">
                            </div> -->
                        </div>
                        <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                        <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                    　  <div class="swiper-pagination"></div>
                    </div>	
                </div>
                <!-- 联系创业者 -->
                <div class="bangitem-contect">
                    <div class="bang typetitle">
                        联系创业者
                    </div>
                    <div class="bangitem-contecttop">
                        <div class="bangitem-contecttoplogo" @click="gouserpage">
                            <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                            <img :src="listdata.avatar_image" alt="">
                        </div>
                        <div class="bangitem-contecttopname">
                            {{listdata.nick_name}}
                        </div>
                    </div>
                    <div class="bangitem-contectbottom">
                        <div class="bangitem-contectbottom-item">
                            <img src="../../../../static/img/zhiyuandidian7备份.png" alt="" class="bangitem-contectbottom-itemlogo">
                            <span class="bangitem-contectbottom-itemname">创业领域</span>
                            <span class="bangitem-contectbottom-iteminner">{{listdata.area}}</span>
                        </div>
                        <div class="bangitem-contectbottom-item">
                            <img src="../../../../static/img/zhiyuandidian7.png" alt="" class="bangitem-contectbottom-itemlogo">
                            <span class="bangitem-contectbottom-itemname">项目进行地点</span>
                            <span class="bangitem-contectbottom-iteminner">{{listdata.city_name}}</span>
                        </div>
                        <div class="bangitem-contectbottom-item">
                            <img src="../../../../static/img/shijian 2.png" alt="" class="bangitem-contectbottom-itemlogo">
                            <span class="bangitem-contectbottom-itemname">征集时间截止至</span>
                            <span class="bangitem-contectbottom-iteminner">{{listdata.end_time}}</span>
                        </div>
                        <div class="bangitem-contectbottom-gocontect">
                            <p>
                                <span>{{listdata.interested_nums}}</span>
                                人感兴趣
                            </p>
                            <img src="../../../../static/img/编组 24@2x.png" alt="" class="gotalk"  @click="opendialog">
                           
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
                </div>
              

            </div>
            <div class="bangbox">
                <!-- 创业帮 -->
                <div class="index-inner-bang">
                        <div class="bang typetitle">
                            更多创业计划
                        </div>
                        <div class="index-inner-banglist">
                            <template v-for="(item,index) in bangdata">
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
                        <div style="min-height: 50px;"></div>
                        <!-- <div class="index-inner-banglist">
                            <div class="bang-item">
                                <div class="bang-item-top">
                                    <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg">
                                    <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <p class="bang-item-title">上海•猫咪咖啡馆</p>
                                </div>
                                <div class="bang-item-bottom">
                                    <div class="bang-item-content">
                                        想要募集三位愿意一起加入我的团队的小伙伴
                                    </div>
                                    <div class="bang-item-footer">
                                        <div class="bang-item-footerleft">
                                            <span>
                                                <span style="color: #999999">截止至</span>
                                                2018-7-8
                                            </span>
                                        </div>
                                        <div class="bang-item-footerright">
                                            12人感兴趣
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bang-item">
                                <div class="bang-item-top">
                                    <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg">
                                    <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <p class="bang-item-title">上海•猫咪咖啡馆</p>
                                </div>
                                <div class="bang-item-bottom">
                                    <div class="bang-item-content">
                                        想要募集三位愿意一起加入我的团队的小伙伴
                                    </div>
                                    <div class="bang-item-footer">
                                        <div class="bang-item-footerleft">
                                            <span>
                                                <span style="color: #999999">截止至</span>
                                                2018-7-8
                                            </span>
                                        </div>
                                        <div class="bang-item-footerright">
                                            12人感兴趣
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bang-item">
                                <div class="bang-item-top">
                                    <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg">
                                    <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <p class="bang-item-title">上海•猫咪咖啡馆</p>
                                </div>
                                <div class="bang-item-bottom">
                                    <div class="bang-item-content">
                                        想要募集三位愿意一起加入我的团队的小伙伴
                                    </div>
                                    <div class="bang-item-footer">
                                        <div class="bang-item-footerleft">
                                            <span>
                                                <span style="color: #999999">截止至</span>
                                                2018-7-8
                                            </span>
                                        </div>
                                        <div class="bang-item-footerright">
                                            12人感兴趣
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bang-item">
                                <div class="bang-item-top">
                                    <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg">
                                    <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <p class="bang-item-title">上海•猫咪咖啡馆</p>
                                </div>
                                <div class="bang-item-bottom">
                                    <div class="bang-item-content">
                                        想要募集三位愿意一起加入我的团队的小伙伴
                                    </div>
                                    <div class="bang-item-footer">
                                        <div class="bang-item-footerleft">
                                            <span>
                                                <span style="color: #999999">截止至</span>
                                                2018-7-8
                                            </span>
                                        </div>
                                        <div class="bang-item-footerright">
                                            12人感兴趣
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bang-item">
                                <div class="bang-item-top">
                                    <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg">
                                    <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
                                    </div>
                                    <p class="bang-item-title">上海•猫咪咖啡馆</p>
                                </div>
                                <div class="bang-item-bottom">
                                    <div class="bang-item-content">
                                        想要募集三位愿意一起加入我的团队的小伙伴
                                    </div>
                                    <div class="bang-item-footer">
                                        <div class="bang-item-footerleft">
                                            <span>
                                                <span style="color: #999999">截止至</span>
                                                2018-7-8
                                            </span>
                                        </div>
                                        <div class="bang-item-footerright">
                                            12人感兴趣
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                </div>
            </div>
            <Footer></Footer>
        </div>
    </template>
      
    <script>
        $(document).ready(function(){
            $(".btn-prev").html("<   上一页")
            $(".btn-next").html("下一页   >")
        });
        import Swiper from 'swiper';
        import 'swiper/dist/css/swiper.min.css';
        import Footer from '../../common/footer.vue'
        import Wheader from '../../common/wheader.vue'
        export default {
            data() {
                return {
                    dialogFormVisible:false,
                    id:"",
                    listdata:"",
                    bangdata:"",
                    user:"",
                }
            },
            components:{
                Footer ,
                Wheader
            },
            mounted() {
                
            },
            created() {
                this.id = this.$route.query.id
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                this.getlistdata()
                this.getbangdata()
            },
            methods: {
                opendialog(){
                    this.dialogFormVisible = true
                },
                getlistdata(){
                    this.$get('business/list?per-page=1',{id:this.id}).then((res) => {
                        if(res.code === 1){
                            this.listdata = res.info.items[0]
                            this.$nextTick(function() {
                                this.initSwiper();
                            });
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
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
                getbangdata(){
                    this.$get('business/list?page=1&per-page=4').then((res) => {
                        if(res.code === 1){
                            this.bangdata = res.info.items
                            this.pages = res.info._meta.pageCount
                            this.total = res.info._meta.totalCount
                            this.currentPage = res.info._meta.currentPage
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                }, 
                gouserpage(){
                    if(this.user){
                        if(this.user.id == this.listdata.u_id){
                            this.$router.push({path:"/mine",query:{id:this.listdata.u_id}});
                        }else{
                            this.$router.push({path:"/userhomepage",query:{id:this.listdata.u_id}});
                        }
                    }else{
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                        });
                    }
                },
                gobangitem(item,index){
                    this.$router.push({path: '/bangblank', query: {id:item.id}});
                }
            }
        }
    </script>
    <style>

    </style>