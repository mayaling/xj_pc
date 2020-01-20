<template>
    <div class="index-header">
        <div class="index-header-logo">
            <router-link :to="{path:'index'}">
                <img src="../../../static/img/编组 2(2).png" alt="">
            </router-link>
        </div>
        <div class="index-header-menu">
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
                    <li style="margin-top:6px;">
                        <img src="../../../static/img/创业Bang！ 3.png" alt="">
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
        <div class="index-header-menuline">
            <img src="../../../static/img/矩形 2(1).png" alt="">
        </div>
        <div class="index-header-search" @click="gosearch()">
            <div class="index-header-searchlogo">
                <img src="../../../static/img/Shape 2.png" alt="">
            </div>
            <!-- <div class="index-header-searchbox">
                <input type="text" placeholder="搜创业/项目/优选">
            </div> -->
        </div>
        <div class="index-header-loginbox">
            <ul v-if="nologin">
                <li @click="gologin">注册</li>
                <li style="margin-top:10px;" @click="gologin">
                    <img src="../../../static/img/矩形备份 4.png" alt="">
                </li>
            </ul>
            <el-dropdown class="user-name" trigger="hover" @command="handleCommand" v-if="login" :placement="bottom-start">
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
</template>

    <script>
        export default {
            data() {
                return {
                    guihuadata:"",
                    articledata:"",
                    bangdata:"",
                    nologin:true,
                    login:false,
                    username:"",
                    user:"",
                }
            },
            created() {
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                // this.user = JSON.parse(localStorage.getItem('info'))
                // this.user = localStorage.getItem('info')
                console.log(this.user)
                // if(!this.user){
                //     this.nlogin = true
                //     this.login = false
                // }

                if(this.user !== ""){
                    this.nologin = false
                    this.login = true
                }
            },
            methods: {
                // 用户名下拉菜单选择事件
                handleCommand(command) {
                    if(command == 'loginout'){
                    localStorage.setItem('info','');
                        localStorage.setItem('tooken','');
                        setTimeout(()=>{
                            this.$router.push('/login');
                        },200)
                        // this.$router.push('/login');
                    } else if(command == 'user'){
                        this.$router.push('/mine');
                    } else if(command == 'editpsw'){
                        this.$router.push('/editpsw')
                    }
                },
                gologin(){
                    this.$router.push('/login');
                },
                gosearch(){
                    this.$router.push({path: '/sread'});
                },
            }
        }
    </script>


    <style scoped>
    </style>
