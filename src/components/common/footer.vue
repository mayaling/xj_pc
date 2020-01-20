<template>
    <div class="footer">
        <div class="footer-topbox">
            <div class="footer-top">
                <div class="footer-toptype">
                    <div class="footer-toptypeitem">
                        <p class="footer-toptitle">犀金 —— 发现更多吸金机会！</p>
                        <div>
                            <p> • 地址：上海市浦东新区张杨路生命人寿大厦  </p>
                            <p> • 邮编：200122 </p>
                            <p>• 客服电话：4000191990 </p>
                            <p>• 投诉电话：023-67682699</p>
                        </div>
                        <img src="../../../static/img/footer.png" alt="">
                    </div >
                    <div class="footer-toptypeitem">
                        <!-- <router-link :to="{path:'about'}"> -->
                            <p class="footer-toptitle">关于我们</p>
                        <!-- </router-link> -->
                        <!-- <p class="footer-toptitle">关于我们</p> -->
                        <div>
                            <router-link :to="{path:'about'}">
                                <p>• 犀金简介</p>
                            </router-link>
                            <router-link :to="{path:'call'}">
                                <p>• 联系我们</p>
                            </router-link>
                            <!-- <p>• 合作伙伴</p> -->
                        </div>

                    </div>
                    <div class="footer-toptypeitem">
                        <!-- <router-link :to="{path:'join'}"> -->
                            <p class="footer-toptitle">加入我们</p>
                        <!-- </router-link> -->

                        <!-- <router-link :to="{path:'about'}">
                            <p class="footer-toptitle">加入我们</p>
                        </router-link> -->
                        <div>
                            <router-link :to="{path:'makemoney'}">
                                <p>• 参与节目</p>
                            </router-link>
                            <!-- <p>• 参与节目</p> -->
                        </div>
                    </div>
                    <div class="footer-toptypeitem">
                        <!-- <router-link :to="{path:'xieyi'}"> -->
                            <p class="footer-toptitle">平台条款</p>
                        <!-- </router-link> -->
                        <div>
                            <router-link :to="{path:'xieyi'}">
                                <p>• 使用协议</p>
                            </router-link>
                            <router-link :to="{path:'publish'}">
                                <p>• 发布规范</p>
                            </router-link>
                            <router-link :to="{path:'mzsm'}">
                                <p>• 免责声明</p>
                            </router-link>
                        </div>
                    </div>
                    <div>
                        <p class="footer-toptitle">犀金APP</p>
                        <div class="footer-topapp">

                            <div>
                                <img src="../../../static/img/xjlogo.png" alt="">
                            </div>
                            <div>
                                <!-- <img src="../../../static/img/sshlogo.png" alt=""> -->
                            </div>
                            <div></div>
                            <!-- <div></div>
                            <div></div>
                            <div></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-middlebox">
            <div class="footer-middle">
                <!-- <ul>
                    <li class="footer-middleleft">
                        <img src="../../../static/img/有得花 copy备份 6.png" alt="">
                    </li>
                    <li class="footer-middle-center">
                        Copyright 2019 Seeking. All rights reserved.  沪ICP备18008898号-1 沪公网安备 50024002000076号  电子营业执照
                    </li>
                    <li class="footer-middle-right">
                        <img src="../../../static/img/cx.png" alt="">
                        <img src="../../../static/img/rz.png" alt="">
                    </li>
                </ul> -->
                <div class="footer-middle-logo">
                    <img src="../../../static/img/有得花 copy备份 6.png" alt="">
                </div>
                <div> Copyright 2019 Seeking. All rights reserved.
                   <span @click="gobeian()" style="cursor: pointer;">
                        沪ICP备18008898号-1
                    </span>
                    沪公网安备 50024002000076号  电子营业执照</div>
                <div>
                    <img src="../../../static/img/cx.png" alt="">
                    <img src="../../../static/img/rz.png" alt="">
                </div>
            </div>
        </div>
        <!-- <div class="footer-bottombox">
            <div class="footer-bottom">
                <ul>
                    <li>友情链接</li>
                    <li>
                        大自驾网 | 凤凰古城住宿推荐 | 北京
                    </li>
                </ul>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        methods: {
            gobeian(){
                window.location.href = "http://www.miit.gov.cn/"
            }
        }
    }
</script>


<style scoped>

</style>
