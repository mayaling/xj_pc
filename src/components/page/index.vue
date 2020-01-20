<template>
    <div class="index-page">
        <div class="index-header">
            <div class="index-header-logo">
                <img src="../../../../static/img/编组 2(2).png" alt="">
            </div>
            <div class="index-header-menu">
                <ul>
                    <li>首页</li>
                    <li>优选</li>
                    <li>阅读</li>
                    <li style="margin-top:6px;">
                        <img src="../../../../static/img/创业Bang！ 3.png" alt="">
                    </li>
                    <li>犀金APP</li>
                </ul>
            </div>
            <div class="index-header-menuline">
                <img src="../../../../static/img/矩形 2(1).png" alt="">
            </div>
            <div class="index-header-search">
                <div class="index-header-searchlogo">
                    <img src="../../../../static/img/Shape 2.png" alt="">
                </div>
                <div class="index-header-searchbox">
                    <input type="text" placeholder="搜创业/项目/优选">
                </div>
            </div>
            <div class="index-header-loginbox">
                <ul>
                    <li>注册</li>
                    <li style="margin-top:10px;">
                        <img src="../../../../static/img/矩形备份 4.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-inner">
            <div class="index-inner-banner">
                <div class="index-inner-bannerleft">
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
                                <img src="../../../../static/img/矩形备份 16.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                    <img src="../../../../static/img/矩形备份 16.png" alt="">
                                </div>
                                <div class="swiper-slide">
                                        <img src="../../../../static/img/矩形备份 16.png" alt="">
                                    </div>
                        </div>
                        <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                        <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                        　<div class="swiper-pagination"></div>
                       
                    </div>	
                </div>
                <div class="index-inner-bannerright">
                    <div class="index-inner-bannerrighttitle">
                        <span>犀金APP现已开放下载</span>
                        <span><img src="../../../../static/img/编组 3.png" alt=""></span>
                    </div>
                    <!-- .index-banner-bannerrigth -->
                </div>
            </div>
            <div class="index-inner-bigbanner"></div>
        </div>
    </div>
</template>
  
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data: function() {
            return {

            }
        },
        mounted() {
            this.$nextTick(function() {
                this.initSwiper();
            });
        },
        created() {

        },
        methods: {
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
        }
    }
</script>
<style>
</style>