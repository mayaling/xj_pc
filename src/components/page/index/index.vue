<template>
    <div class="index-page">
        <!-- <div class="index-header">
            <div class="index-header-logo">
                <router-link :to="{path:'index'}">
                    <img src="../../../../static/img/编组 2(2).png" alt="">
                </router-link>
            </div>
            <div class="index-header-menu">
                <ul>
                    <router-link :to="{path:'index'}">
                        <li>
                            首页
                        </li>
                    </router-link>
                    <li>优选</li>
                    <router-link :to="{path:'read'}">
                        <li>
                            阅读
                        </li>
                    </router-link>
                    <router-link :to="{path:'bang'}">
                        <li style="margin-top:6px;">
                            <img src="../../../../static/img/创业Bang！ 3.png" alt="">
                        </li>
                    </router-link>
                    <router-link :to="{path:'app'}">
                        <li>犀金APP</li>
                    </router-link>
                </ul>
            </div>
            <div class="index-header-menuline">
                <img src="../../../../static/img/矩形 2(1).png" alt="">
            </div>
            <div class="index-header-search" @click="gosearch()">
                <div class="index-header-searchlogo">
                    <img src="../../../../static/img/Shape 2.png" alt="">
                </div>
                <div class="index-header-searchbox">
                    <input type="text" placeholder="搜创业/项目/优选">
                </div>
            </div>
            <div class="index-header-loginbox">
                <ul v-if="nologin">
                    <li>注册</li>
                    <li style="margin-top:10px;">
                        <img src="../../../../static/img/矩形备份 4.png" alt="">
                    </li>
                </ul>
                <el-dropdown class="user-name" trigger="click" @command="handleCommand" v-if="login">
                    <p class="el-dropdown-link">
                        <span class="touxiangbox">
                            <img :src="user.avatar_image" alt="">
                        </span>
                        <span>
                            {{user.nick_name}}
                        </span>
                    </p>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item  command="user">个人中心</el-dropdown-item>
                      <el-dropdown-item  command="loginout">注销</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div> -->
        <wheader></wheader>
        <div class="index-inner">
            <!-- banner部分轮播和下载通道 -->
            <div class="index-inner-banner">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                            <div class="index-inner-bannerleft">
                                <div class="swiper-container" @mouseenter="enter4()" @mouseleave="leave4()">
                                    <div class="swiper-wrapper">
                                        <template v-for="item in swiperdata1">
                                            <div class="swiper-slide" @click="gobannerdetail(item,index)">
                                                <img :src="item.img_url" alt="">
                                            </div>
                                        </template>
                                        <!-- <div class="swiper-slide">
                                            <img src="../../../../static/img/矩形备份 16.png" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                                <img src="../../../../static/img/矩形备份 16.png" alt="">
                                            </div>
                                            <div class="swiper-slide">
                                                    <img src="../../../../static/img/矩形备份 16.png" alt="">
                                                </div> -->
                                    </div>
                                    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                                    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                                    　<div class="swiper-pagination"></div>
                                </div>
                            </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="padding-left: 17px;padding-right:0;">
                        <div class="index-inner-bannerright">
                            <div class="index-inner-bannerrightbgbox">
                                <img src="../../../../static/img/编组 8.png" alt="" class="index-inner-bannerrightbg">
                            </div>
                                <el-row :gutter="20">
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
                                                <!-- <div  class="picashow">
                                                    <img src="../../../../static/img/编组 35.png" alt="" >
                                                </div>
                                                <div class="picadisshow" style="display: none;">
                                                    <img src="../../../../static/img/编组 38.png" alt="" >
                                                </div>
                                                <div  class="pica">
                                                    <img src="../../../../static/img/编组 35.png" alt="" class="picashow">
                                                    <img src="../../../../static/img/编组 38.png" alt="" class="picadisshow">
                                                </div> -->
                                                <div @mouseenter="enter()" @mouseleave="leave()">
                                                    <img src="../../../../static/img/编组 35.png" alt="" v-if="wx">
                                                    <img src="../../../../static/img/编组 38.png" alt="" v-if="wxshow">
                                                </div>

                                                <div  @mouseenter="enter1()" @mouseleave="leave1()">
                                                    <img src="../../../../static/img/编组 39.png" alt="" v-if="wb">
                                                    <img src="../../../../static/img/编组 44.png" alt="" v-if="wbshow">
                                                </div>

                                                <div  @mouseenter="enter2()" @mouseleave="leave2()">
                                                    <img src="../../../../static/img/编组 41.png" alt="" v-if="xj">
                                                    <img src="../../../../static/img/编组 51.png" alt="" v-if="xjshow">
                                                </div>
                                                <img src="../../../../static/img/编组 43备份 2.png" alt="" class="focusapp" v-if="codeshow">
                                                <img src="../../../../static/img/编组 43.png" alt="" class="donwnloadapp" v-if="code1show">

                                            </div>
                                        </el-col>
                                        <el-col :span="6" style="padding-top: 5px;">
                                            <img src="../../../../static/img/直线备份.png" alt="" style="width: 100%;padding-top: 5px;">
                                        </el-col>
                                    </el-row>
                                </div>
                            <!-- <div class="index-inner-bannerrighttitle">
                                <span>犀金APP现已开放下载</span>
                                <span><img src="../../../../static/img/编组 3.png" alt=""></span>
                            </div> -->
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 大banner -->
            <div class="index-inner-bigbanner" @click="gomakemoney()">
                <img :src="bannerdata.index_banner_one" alt="">
            </div>

            <!-- 规划 -->
            <div class="index-inner-planning">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                        <div class="index-inner-planningleft">
                            <template v-for="(item,index) in guihuadata">
                                <div class="inner-planingleft-card">
                                    <div class="planingleft-cardimg" @click="goreaditem(item,index)">
                                        <!-- <img src="../../../../static/img/矩形备份 11.png" alt=""> -->
                                        <img :src="item.img_url" alt="">
                                        <div class="planingleft-cardtypeimg">
                                            <!-- 职业规划 -->
                                            {{item.type_name}}
                                        </div>
                                    </div>
                                    <div class="inner-planingleft-cardcontent">
                                        <div class="planingleft-cardcontent-title">
                                            <!-- 如何开一家汽修保养店 -->
                                            {{item.title}}
                                        </div>
                                        <div class="planingleft-cardcontent-content" v-html="item.preview_content">
                                            <!-- {{item.preview_content}} -->
                                            <!-- 巨大的市场前景势必迎来下一轮的投资高潮，面对蜂拥而至的跨国汽车服务巨头，大势所趋，必有宏图，汽车有多少汽修行业前景就有多广。而于观望情绪渐浓的本土... -->
                                        </div>
                                        <div class="planingleft-cardcontent-footer">
                                            <div class="planingleft-cardcontent-footerleft">
                                                <div class="planingleft-cardcontent-footerimg">
                                                    <!-- <img src="../../../../static/img/有得花 copy备份 6.png" alt=""> -->
                                                    <img :src="item.avatar_image" alt="">
                                                </div>
                                                <div class="planingleft-cardcontent-footeruser">
                                                    <p class="planingleft-cardcontent-footername">
                                                        {{item.author}}
                                                    </p>
                                                    <p class="planingleft-cardcontent-footertime">
                                                        {{item.create_time}}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="planingleft-cardcontent-footerright">
                                                <div class="planingleft-cardcontent-footertips">
                                                    <span>
                                                        <span class="planingleft-cardcontent-footertipsnum">
                                                            {{item.like_num}}
                                                        </span>
                                                        喜欢
                                                    </span>
                                                    <span>•</span>
                                                    <span>
                                                        <span class="planingleft-cardcontent-footertipsnum">
                                                            {{item.comment_num}}
                                                        </span>
                                                        评论
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="padding-left: 17px;padding-right:0;">
                        <div class="index-inner-planningright">
                            <img src="../../../../static/img/矩形备份 20.png" alt="" class="index-inner-planningrightbg">
                            <div class="index-inner-planningrightmask">

                            </div>
                            <div class="index-inner-planningrightbox">
                                <div class="index-inner-planningrighttitle">
                                    <img src="../../../../static/img/zixun.png" alt="">
                                </div>
                                <div class="index-inner-planningrighswiper">
                                    <div class="swiper-container1">
                                        <div class="swiper-wrapper">
                                            <template v-for="(item,index) in swiperdata2" v-if="index<5">
                                                <div class="swiper-slide">
                                                    <p>{{item.title}}</p>
                                                    <div>
                                                        {{item.content}}
                                                    </div>
                                                </div>
                                            </template>
                                            <!-- <div class="swiper-slide">
                                               <p>如何开一家汽修保养店</p>
                                               <div>
                                                    巨大的市场前景势必迎来下一轮的投资高潮，面对蜂拥而至的跨国汽车服务巨头，大势所趋，必有宏图，汽车有多少汽修行业前景就有多广。而于观望情绪渐浓的本土巨大的市场前景势必迎来下一轮的投资高潮，面对蜂拥而至的跨国汽车服务巨头，大势所趋，必有宏图，汽车有多少汽修行业前景就有多广。而于观望情绪渐浓的本土巨大的市场前景势必迎来下一轮的投资高潮，面对蜂拥而至的跨国汽车服务巨头，大势所趋，必有宏图，汽车有多少汽修行业前景就有多广。而于观望情绪渐浓的…
                                               </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <p>如何开一家汽修保养店</p>
                                                <div>
                                                        在部分安卓手机的今日头条主界面中，搜索框已经被调整至页面的核心位置。网络流传的内测版截图显示，今日头条app主界面的搜索栏已经从顶部边框移至主页面，占据了首屏约三分之一的位置，推荐页展现从纯feed流变为搜索框加feed流的组合形式。此前，媒体就已爆出，今日头条打造的通用搜索引擎独立页面悄然上线，支持全网搜索。今日头条方面表示，内测版本仅为小范围试验，并非正式上线。
                                                </div>
                                            </div> -->
                                        </div>
                                        　<div class="swiper-pagination"></div>
                                    </div>
                                </div>

                            </div>

                            <!-- <div class="index-inner-planningrighttitlebox">
                               <div class="index-inner-planningrighttitle">
                                    <span> 优选产品</span>
                                    <span>
                                        <img src="../../../../static/img/编组 9.png" alt="">
                                    </span>
                               </div>
                               <div class="index-inner-planningrightchange" style="cursor: pointer" @click="goselect()">
                                    换一批
                               </div>
                            </div> -->
                            <div class="inner-planningright-productlist">
                                <!-- <template v-for="(item,index) in selectdata">
                                    <div class="inner-planningright-productitem">
                                        <img :src="item.image" alt="">
                                        <p>{{item.name}}</p>
                                    </div>
                                </template>  -->
                                <!-- <div class="inner-planningright-productitem">
                                    <img src="../../../../static/img/Mask 2.png" alt="">
                                    <p>爱分期</p>
                                </div>
                                <div class="inner-planningright-productitem">
                                    <img src="../../../../static/img/Mask 2.png" alt="">
                                    <p>爱分期</p>
                                </div>
                                <div class="inner-planningright-productitem">
                                    <img src="../../../../static/img/Mask 2.png" alt="">
                                    <p>爱分期</p>
                                </div>
                                <div class="inner-planningright-productitem">
                                    <img src="../../../../static/img/Mask 2.png" alt="">
                                    <p>爱分期</p>
                                </div>
                                <div class="inner-planningright-productitem">
                                    <img src="../../../../static/img/Mask 2.png" alt="">
                                    <p>爱分期</p>
                                </div>
                                <div class="inner-planningright-productitem">
                                    <img src="../../../../static/img/Mask 2.png" alt="">
                                    <p>爱分期</p>
                                </div> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <!-- 阅读 -->
            <div class="index-inner-read">
                <div class="index-inner-readtitle" @click="goread()">
                    <span>阅读</span>
                    <span>
                        <img src="../../../../static/img/编组 8 (1).png" alt="">
                    </span>
                </div>
                <div class="index-inner-readlist">
                    <template v-for="(item,index) in articledata">
                        <div class="index-inner-readitem" >
                            <div class="index-inner-readitemimg" @click="goreaditem(item,index)">
                                <!-- <img src="../../../../static/img/read.png" alt=""> -->
                                <img :src="item.img_url" alt="">
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
                                            <!-- {{item.create_time}} -->
                                        </p>
                                    </div>
                                </div>
                                <div class="readitem-footerright">
                                    <div class="readitem-footertips">
                                        <span>
                                            <img src="../../../../static/img/Combined Shape 2.png" alt="">
                                        </span>
                                        <span>13</span>
                                        <span>
                                            <img src="../../../../static/img/Oval 2.png" alt="">
                                        </span>
                                        <span>65</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="checkmorebang" @click="goread()">
                    查看更多
                </div>
            </div>


            <!-- 电台 -->
            <div class="index-inner-audio">
                <div class="index-inner-readtitle" @click="goaudio">
                    <span>电台</span>
                    <span>
                        <img src="../../../../static/img/编组 8 (1).png" alt="">
                    </span>
                </div>
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
                <div class="checkmorebang" @click="goaudio()">
                    查看更多
                </div>
            </div>

            <!-- 创业帮 -->
            <div class="index-inner-bang">
                <div class="index-inner-bangtitle" @click="gobang">
                    <span>
                        <img src="../../../../static/img/bangtitle.png" alt="">
                    </span>
                    <span style="margin-left: 10px;">
                        <img src="../../../../static/img/编组 8 (1).png" alt="">
                    </span>
                </div>
                <div class="index-inner-banglist">
                    <template v-for="(item,index) in bangdata">
                        <div class="bang-item">
                            <div class="bang-item-top" @click="gobangitem(item,index)">
                                <!-- <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg"> -->
                                <img :src="item.background_image" alt="" class="bgimg">

                                <!-- <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg"> -->
                                <img :src="item.type_logo" alt="" class="typeimg">
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
                    <!-- <div class="bang-item">
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
                    </div> -->
                    <!-- <div class="bang-item">
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
                    </div> -->
                </div>
                <div class="checkmorebang" @click="gobang()">
                    查看更多
                </div>
            </div>
            <!-- 底部 -->
            <div style="min-height: 100px;">

            </div>
            <!-- <div class="index-inner-footer">
                <img src="../../../../static/img/矩形备份 18.png" alt="">
            </div> -->
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
                listdata:"",
                guihuadata:"",
                articledata:"",
                selectdata:"",
                bangdata:"",
                nlogin:true,
                login:false,
                username:"",
                user:"",
                ashow:true,
                adisshow:false,
                wx:true,
                wb:true,
                xj:true,
                wxshow:false,
                wbshow:false,
                xjshow:false,
                codeshow:false,
                url:"http://47.103.61.179:8011/",
                swiperdata1:"",
                swiperdata2:"",
                bannerdata:"",
                arrowshow1:false,
                arrowshow2:false,

            }
        },
        components:{
            Footer,
            Wheader
        },
        mounted() {
            // this.$nextTick(function() {
            //     this.initSwiper();
            //     this.initSwiper1()
            // });


            // this.picachange()
            // console.log(this.ashow)
            // console.log(this.adisshow)
        },
        created() {
            if(localStorage.getItem('info')){
                this.user = JSON.parse(localStorage.getItem('info'))
            }
            if(this.user){
                this.nlogin = false
                this.login = true
            }
            this.getguihuadata()
            this.getarticledata()
            this.getbangdata()
            this.getbangdata()
            this.getselectdata()
            this.getswiper1data()
            this.getswiper2data()
            this.getlistdata()
            this.getbannerdata()

        },
        methods: {
            initSwiper() {
                var mySwiper = new Swiper(".swiper-container",{
                    direction:"horizontal",/*横向滑动*/
                    loop:true,
                    // autoplay:true,//等同于以下设置
                    autoplay: {
                        delay: 3000,//3秒切换一次
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,

                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        hiddenClass: 'btn-hidden',
                    },
                    touchRatio : 2,//触摸变慢
　　　　        });
                mySwiper.navigation.$nextEl.addClass('hide');
                mySwiper.navigation.$prevEl.addClass('hide');
                //鼠标移出隐藏按钮，移入显示按钮
                mySwiper.el.onmouseover=function(){
                    mySwiper.navigation.$nextEl.removeClass('hide');
                    mySwiper.navigation.$prevEl.removeClass('hide');
                }
                mySwiper.el.onmouseout=function(){
                    mySwiper.navigation.$nextEl.addClass('hide');
                    mySwiper.navigation.$prevEl.addClass('hide');
                }
            },
            initSwiper1() {
                var mySwiper1 = new Swiper(".swiper-container1",{
                    direction:"horizontal",/*横向滑动*/
                    loop:true,
                    autoplay:true,//等同于以下设置
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    touchRatio : 2,//触摸变慢
　　　　        });
            },
            getlistdata(){
                this.$get('radios?sort=-id&page=1&per-page=8&sort=-id').then((res) => {
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
            getbannerdata(){
                this.$get('index-settings').then((res) => {
                    if(res.code === 1){
                        this.bannerdata = res.info
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            getswiper1data(){
                this.$get('index-banners').then((res) => {
                    console.log(res)
                    if(res.code === 1){
                      this.swiperdata1 = res.info.items
                      console.log(this.swiperdata1)
                      this.$nextTick(function() {
                        this.initSwiper();
                        // this.initSwiper1()
                    });
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            getswiper2data(){
                this.$get('week-news').then((res) => {
                    console.log(res)
                    if(res.code === 1){
                      this.swiperdata2 = res.info.items
                      this.$nextTick(function() {
                        // this.initSwiper();
                        this.initSwiper1()
                    });
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            getguihuadata(){
                this.$get('articles?sort=-id&page=1&per-page=3').then((res) => {
                    console.log(res)
                    if(res.code === 1){
                        this.guihuadata = res.info.items
                        console.log(this.guihuadata)
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            getarticledata(){
                this.$get('articles?sort=-id&page=1&per-page=8&lpop=3').then((res) => {
                        if(res.code === 1){
                            this.articledata = res.info.items
                            console.log(this.articledata)
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                }).catch(() => {this.loading = false})
            },
            getbangdata(){
                this.$get('businesses?sort=-id&page=1&per-page=8').then((res) => {
                    if(res.code === 1){
                        this.bangdata = res.info.items
                        console.log(this.bangdata)
                    }else{
                        this.$message.error(res.msg);
                    }
                    this.loading = false
                }).catch(() => {this.loading = false})
            },
            gosearch(){
                this.$router.push({path: '/sread'});
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
            gobannerdetail(item,index){
                // console.log(item)
                this.$router.push({path: '/readitem', query: {id:item.data_id}});
            },
            goreaditem(item,index){
                this.$router.push({path: '/readitem', query: {id:item.id}});
            },
            gobangitem(item,index){
                this.$router.push({path: '/bangitem', query: {id:item.id}});
            },
            goread(){
                this.$router.push({path: '/read'});
            },
            goaudio(){
                this.$router.push({path: '/audio'});
            },
            gobang(){
                this.$router.push({path: '/bang'});
            },
              // 优选列表
            getselectdata(){
                axios.get(this.url+'products?page=1&per-page=6').then((res) => {
                    if(res.data.code === 1){
                        console.log(res)
                        this.selectdata = res.data.info.items
                        console.log(this.selectdata)
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
            goselect(){
                this.$router.push({path: '/select'});
            },
            gomakemoney(){
                this.$router.push({path: '/makemoney'});

            },
            handeldetail(item,index){
                console.log(item)
                this.$router.push({path: '/audiodetail', query: {id:item.id,radio_url:item.radio_url}});
            },
            // picachange(){
            //     $(document).ready(function(){
            //         $(".picashow").mouseenter(function (){
            //             alert(1)
            //             this.wxshow = true
            //             this.wx = false
            //             console.log(this.wxshow)
            //         }).mouseleave (function (){

            //         });
            //     });
            // },
            enter(){
                this.wxshow = true
                this.wx = false
                this.codeshow = true
            },
            leave(){
                this.wxshow = false
                this.wx = true
                this.codeshow = false
            },
            enter1(){
                this.wbshow = true
                this.wb = false
                // this.codeshow = true
            },
            leave1(){
                this.wbshow = false
                this.wb = true
                // this.codeshow = false
            },
            enter2(){
                this.xjshow = true
                this.xj = false
                this.code1show = true
            },
            leave2(){
                this.xjshow = false
                this.xj = true
                this.code1show = false
            },
            enter4(){
                this.arrowshow1 = true
                this.arrowshow2 = true

            },
            leave4(){
                this.arrowshow1 = false
                this.arrowshow2 = false

            }
        }
    }
</script>
<style>

</style>
