<template>
    <div class="header-top">
        <div class="header-left">
            <div class="header-logo">
                <router-link :to="{path:'index'}">
                    <img src="../../../static/img/编组 20.png" alt="">
                </router-link>
            </div>
            <div class="header-menu">
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
                            <img src="../../../static/img/rbang1.png" alt="" class="bangimg">
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
        <div class="header-menuline">
            <img src="../../../static/img/hline.png" alt="">
        </div>
        <div class="readlist header-right">
            <div class="readlist header-searchbox" @click="gosearch">
                <div class="header-searchlogo">
                    <img src="../../../static/img/Shape 2(1).png" alt="">
                </div>
                <!-- <div class="header-searchinput">
                    <input type="text" placeholder="搜创业/项目/优选">
                </div> -->
                <!-- <img src="../../../static/img/Shape 2(1).png" alt=""> -->
            </div>
            <div class="readlist header-loginbox">
                <ul v-if="nlogin">
                    <li>注册</li>
                    <router-link :to="{path:'login'}">
                        <li style="margin-top:10px;">
                            <img src="../../../static/img/hlogin.png" alt="">
                        </li>
                    </router-link>

                </ul>
                <el-dropdown class="user-name" trigger="hover" @command="handleCommand" v-if="login">
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
</template>

<script>
    export default{
        data(){
            return{
                nlogin:true,
                login:false,
                user:"",
            }
        },
        created() {
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
        },

    }
</script>
