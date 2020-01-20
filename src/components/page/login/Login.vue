<template>
        <div class="login-page" v-loading="loading" element-loading-text="登录中" >
            <wheader></wheader>
            <div class="login-inner">
                <el-dialog :visible.sync="dialogFormVisible" :modal="false" :show-close="false" :close-on-click-modal="false">
                    <p>你好</p>
                    <p>欢迎来到犀金！</p>
                    <el-form :model="form">
                        <el-form-item :label-width="formLabelWidth">
                            <div style="font-size:20px;font-family:PingFangSC;font-weight:400;color:rgba(26,26,26,1);">+86</div>
                            <div class="login-itemline"></div>
                            <!-- <div class="login-iteminputline"></div> -->
                            <el-input v-model="form.phone" autocomplete="off" placeholder="请输入手机号" ></el-input>
                        </el-form-item>
                        <el-form-item :label-width="formLabelWidth">
                            <el-input v-model="form.message" autocomplete="off" placeholder="请输入短信验证码"></el-input>
                            <el-button class="mscodebtn" :class="{disabled: !this.canClick}"  @click="sendmessage()">{{content}}</el-button>
                            <!-- <span class="sendmessage" :class="{disabled: !this.canClick}"  @click="sendmessage()" >{{content}}</span> -->
                        </el-form-item>
                    </el-form>
                    <div class="login-btn" @click="login()">
                        <span>登录/注册</span>
                    </div>
                    <div class="login-tips">
                        登陆表明你已经同意
                        <span>《犀金发布规范和风险提示》</span>
                    </div>
                    <!-- <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div> -->
                </el-dialog>
            </div>
            <Footer></Footer>
        </div>
      </template>

      <script>
        $(document).ready(function(){
            $(".login-inner").height($(document.body).height())
            // alert($(document).height());
        });
        import Footer from '../../common/footer.vue'
        import Wheader from '../../common/wheader.vue'
        export default {
              data: function() {
                  return {
                    content: '发送验证码',  // 按钮里显示的内容
                    totalTime: 60,      //记录具体倒计时时间
                    canClick: true, //添加canClick
                    dialogFormVisible:true,
                      loading: false,
                      ruleForm: {
                          type: "",
                          phone: '',
                          message: ''
                      },
                    form: {
                        phone: '',
                        message:'',
                        name: '',
                        region: '',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: ''
                    },
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

              },
              methods: {
                sendmessage(){
                    var _this = this;
                    console.log
                    if(!_this.tel(_this.form.phone)){
                        this.$message.error("手机号码格式不正确");
                    }else{
                        if (!this.canClick) return
                        this.canClick = false
                        this.$post('get-sms-code',
                        {mobile:_this.form.phone,},
                    ).then((res) => {
                            if(res.code === 1){
                                this.$message({
                                    message: '获取验证码成功',
                                    type: 'success'
                                });

                            this.content = this.totalTime + 's后重发'
                            let clock = window.setInterval(() => {
                                this.totalTime--
                                this.content = this.totalTime + 's后重发'
                                if (this.totalTime < 0) {
                                    window.clearInterval(clock)
                                    this.content = '重发验证码'
                                    this.totalTime = 10
                                    this.canClick = true  //这里重新开启
                                }
                            },1000)
                            }else{
                                if(res.info){
                                this.$message.error(res.info.msg);
                                this.canClick = true
                                }else{
                                    this.$message.error(res.message);
                                    this.canClick = true
                                }
                            }
                            this.loading = false
                            }).catch(() => {this.loading = false})
                        }
                    },
                    login(){
                        var _this = this;
                        if(!_this.form.phone || !_this.form.message){
                            this.$message.error("手机号验证码不能为空");
                        }else{
                            this.$post('get-access-token',{mobile:_this.form.phone,sms_code:_this.form.message}
                        ).then((res) => {
                                if(res.code === 1){
                                    localStorage.setItem('tooken',res.info.access_token);
                                    _this.access_token = localStorage.getItem("tooken")
                                    this.$get('users?access_token='+_this.access_token).then((res) => {
                                        if(res.code === 1){
                                            localStorage.setItem("info",JSON.stringify(res.info.items[0]))
                                            setTimeout(()=>{
                                                this.$router.push('/index');
                                            },200)
                                            // localStorage.setItem("info",res.info.items[0])
                                            // localStorage.setItem("userinfo",res.info.id)
                                        }else{
                                            this.$message.error(res.msg);
                                        }
                                        this.loading = false
                                    }).catch(() => {this.loading = false})
                                    // _this. getuser()
                                    // localStorage.setItem('mobile',res.info.mobile);

                                    window.sessionStorage.removeItem("selected")


                                    // this.selected = sessionStorage.getItem("selected");

                                }else{
                                    this.$message.error(res.msg);
                                }
                                this.loading = false
                                }).catch(() => {this.loading = false})
                            }
                    },
                    tel:function tel(str){
                        var re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(198)|(199)|(166)|(165)|(146)|(148))+\d{8})$/;
                        return re.test(str)
                    },

              }
          }
      </script>
      <style>
      .login-inner{
          background: url("../../../../static/img/矩形备份 7.png");
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
