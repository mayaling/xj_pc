<template>
        <div class="mine-page">
            <!-- <div class="mine sheader">
                <div class="mine sheader-inner">
                    <div class="mine sheader-top">
                        <div class="mine sheader-left">
                            <div class="mine sheader-logo">
                                <img src="../../../../static/img/编组 2(2).png" alt="">
                            </div>
                            <div class="mine sheader-menu">
                                <ul>
                                    <li>首页</li>
                                    <li>优选</li>
                                    <li>阅读</li>
                                    <li>
                                        <img src="../../../../static/img/创业Bang！ 3.png" alt="">
                                    </li>
                                    <li>犀金APP</li>
                                </ul>
                            </div>
                        </div>
                        <div class="mine sheader-menuline">
                            <img src="../../../../static/img/矩形 2(1).png" alt="">
                        </div>
                        <div class="mine sheader-right">
                            <div class="mine sheader-searchbox">
                                <div class="sheader-searchlogo">
                                    <img src="../../../../static/img/Shape 2.png" alt="">
                                </div>
                                <div class="sheader-searchinput">
                                    <input type="text" placeholder="搜创业/项目/优选">
                                </div>
                            </div>
                            <div class="mine sheader-loginbox">
                                <ul>
                                    <li>注册</li>
                                    <li style="margin-top:10px;">
                                        <img src="../../../../static/img/矩形备份 4.png" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <Wheader></Wheader>
            <div class="index-inner">
                <div class="mine-aboutbox">
                    <div class="mine-aboutboxleft">
                        <div class="mine-aboutboxleft-logo">
                            <img :src="userdata.avatar_image" alt="">
                        </div>
                        <div class="mine-aboutboxleft-msg">
                            <p>
                                {{userdata.nick_name}}
                            </p>
                            <p>
                                {{userdata.register_time}}
                            </p>
                        </div>
                    </div>
                    <div class="mine-aboutboxright">
                        <div class="mine-aboutboxright-concerned">
                            <p>已关注</p>
                            <p>{{userdata.focus_num}}</p>
                        </div>
                        <div class="mine-aboutboxright-concerned">
                            <p>被关注</p>
                            <p>
                                {{userdata.focused_num}}
                            </p>
                        </div>
                        <div class="mine-aboutboxright-settings">
                            <!-- <p class="mine-aboutboxright-bang">
                                <img src="../../../../static/img/编组 11.png" alt="" class="mine-aboutboxright-bangbell">
                                <img src="../../../../static/img/椭圆形 2.png" alt="" class="mine-aboutboxright-bangmsg">
                                <span>创业bang!</span>
                            </p> -->
                            <p class="mine-aboutboxright-settingsbtn" @click="edituser">
                                <span>编辑资料</span>
                            </p>

                        </div>

                    </div>
                </div>
                <!-- 收藏 -->
                <div class="index-inner-read" v-if="collectshow">
                    <div class="index-inner-readtitle" @click="gousercenter()">
                        <span>我的收藏</span>
                        <span>
                            <img src="../../../../static/img/编组 8 (1).png" alt="">
                        </span>
                    </div>
                    <div class="index-inner-readlist">
                        <template v-for="(item,index) in collectdata">
                            <div class="index-inner-readitem">
                                <div class="index-inner-readitemimg" @click="goreaditem(item,index)">
                                    <!-- <img src="../../../../static/img/read.png" alt=""> -->
                                    <img :src="item.preview_image" alt="">
                                </div>
                                <div class="index-inner-readitemcontent">
                                    <p class="index-inner-readitemcontent-title">
                                        <!-- 聪明的投资者 第1章 投资与投机 -->
                                        {{item.title}}
                                    </p>
                                    <p class="index-inner-readitemcontent-inner" v-html="item.desc">
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
                                                {{item.article_time}}
                                                <!-- {{item.create_time}} -->
                                            </p>
                                        </div>
                                    </div>
                                    <div class="readitem-footerright">
                                        <div class="readitem-footertips">
                                            <span>
                                                <img src="../../../../static/img/Combined Shape 2.png" alt="">
                                            </span>
                                            <span>
                                                {{item.like_num}}
                                            </span>
                                            <span>
                                                <img src="../../../../static/img/Oval 2.png" alt="">
                                            </span>
                                            <span>
                                                {{item.comment_num}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- 订阅 -->
                <div class="mine-book" v-if="bookshow" @click="gousercenter()">
                    <div class="typetitle">
                        我的订阅
                        <span>
                            <img src="../../../../static/img/编组 8 (1).png" alt="">
                        </span>
                    </div>
                    <div class="mine-book-box">
                        <div class="book-item" v-for="(item,index) in bookdata">
                            <div class="book-item-logo" @click="goreadlist(item,index)">
                                <img :src="item.image" alt="">
                            </div>
                            <p class="book-username">
                                {{item.at_name}}
                            </p>
                            <p class="book-disbookbtn" @click="disbook(item,index)">
                                <span>取消订阅</span>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 创业帮 -->
                <div class="index-inner-bang" v-if="bangshow">
                    <div class="index-inner-bangtitle" @click="gousercenter()">
                        <span>我发布的创业Bang！</span>
                        <span>
                            <img src="../../../../static/img/编组 8 (1).png" alt="">
                        </span>
                    </div>
                    <div class="index-inner-banglist">
                        <template v-for="(item,index) in bangdata">
                            <div class="bang-item" @click="gobangitem(item,index)">
                                <div class="bang-item-top">
                                    <!-- <img src="../../../../static/img/矩形备份 2.png" alt="" class="bgimg"> -->
                                    <img :src="item.background_image" alt="" class="bgimg">

                                    <!-- <img src="../../../../static/img/形状结合 2(2).png" alt="" class="typeimg"> -->
                                    <img :src="item.type_logo" alt="" class="typeimg">
                                    <div class="bang-item-avatar">
                                        <img src="../../../../static/img/有得花 copy备份 6.png" alt="">
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
                </div>
                <div style="min-height: 100px;"></div>
                <el-dialog :visible.sync="dialogFormVisible" width=500px  :lock-scroll="false" :close-on-click-modal="false" @close='closeDialog'>
                    <p class="edituser-title">个人资料</p>

                    <el-form label-position="left" label-width="90px" :model="formLabelAlign" >
                        <el-form-item prop="imageList" ref="uploadElemet" label="头像">
                            <el-input v-show="false" v-model.trim="imageurl1"></el-input>

                            <img v-if="imageshow" :src="form.avatar_image" alt="" style="width: 100px;height: 100px;float: left;">
                            <el-upload class="upload-demo1" :on-preview="handlePreview1" :on-remove="handleRemove1"   :file-list="fileList1" list-type="picture" :on-change="handleChange1" :http-request="uploadfile" style="float:left;margin-left: 30px;margin-top: 55px;;">
                                <el-button size="small" type="primary" style="width:100px;height:44px;background:rgba(255,255,255,1);border-radius:3px;
                                border:1px solid rgba(0,125,250,1);font-size:15px;font-weight:400;color:rgba(0,125,250,1);">选择文件</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="昵称">
                            <el-input v-model="form.nick_name"></el-input>
                            <span style="margin-left: 20px;color:rgba(140,140,140,1);font-size:14px;">昵称限10个字</span>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-select v-model="form.gender" placeholder="请选择性别">
                                <template  v-for="item in sexdata">
                                    <el-option
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                                </template>

                            </el-select>
                        </el-form-item>
                        <el-form-item label="绑定手机号" >
                            <el-input v-model="form.mobile" placeholder="请输入绑定手机号"></el-input>
                            <span class="changephone" @click="changephone" v-if="beforechange">更换</span>
                            <span class="changephone1" v-if="afterchange">更换</span>
                        </el-form-item>
                        <el-form-item label="新手机号" v-if="changeshow">
                            <el-input v-model="form.newphone" placeholder="请输入新手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" v-if="changeshow">
                            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
                            <span class="changephone" :class="{disabled: !this.canClick}"  @click="sendmessage()">{{content}}</span>
                            <!-- <el-button class="mscodebtn" :class="{disabled: !this.canClick}"  @click="sendmessage()">{{content}}</el-button> -->
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <div class="submituserbtn" @click="submituser()" v-if="userchange">
                            <p>提交</p>
                        </div>
                        <div class="submituserbtn" @click="submituser1()" v-if="phonechange">
                            <p>提交</p>
                        </div>
                        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
                    </div>
                </el-dialog>
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
                    // uploadurl:"http://service.xykj1.com/",
                    uploadurl:"http://47.103.61.179:1022/",
                    imageList:"",
                    imageurl1:"",
                    fileList1:[],
                    hideUpload: false,
                    limitCount:1,
                    user:"",
                    userdata:"",
                    collectdata:"",
                    bookdata:"",
                    bangdata:"",
                    testdata:["asd","sfsf","erserw"],
                    changeshow:false,
                    userchange:true,
                    phonechange:false,
                    totalTime: 60,
                    canClick: true, //添加canClick
                    form: {
                        avatar_image:"",
                        nick_name: '',
                        region: '',
                        gender:"",
                        mobile:"",
                        newphone:"",
                        code:"",
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: ''
                    },
                    beforechange:true,
                    afterchange:false,
                    sexdata:[{
                        name:"男",
                        id:1
                    },{
                        name:"女",
                        id:2
                    }],
                    dialogFormVisible: false,
                    content: '获取验证码',  // 按钮里显示的内容
                    access_token:"",
                    collectshow:true,
                    bookshow:true,
                    bangshow:true,
                }
            },
            components:{
                Footer ,
                Wheader
            },
            mounted() {
                // let a = ['car','bus','train'];
                // let obj = {}
                // for(var i of a){
                //     obj[i] = 1
                // }
                // console.log(obj)
            },
            created() {
                // this.user = JSON.parse(localStorage.getItem('info'))
                if(localStorage.getItem('info')){
                    this.user = JSON.parse(localStorage.getItem('info'))
                }
                console.log(this.user)
                this.getuserdata()
                this.getcollectdata()
                this.getbookdata()
                this.getbangdata()
            },
            methods: {
                getuserdata(){
                    this.$get('my-center/get-focus-info?id='+this.user.id).then((res) => {
                        if(res.code === 1){
                          this.userdata = res.info
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getcollectdata(){
                    this.$get('article-collects?per-page=8&user_id='+this.user.id).then((res) => {
                        if(res.code === 1){
                        //   console.log(res.info.items)
                          this.collectdata = res.info.items
                          if(this.collectdata.length==0){
                              this.collectshow =false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getbookdata(){
                    this.$get('article-type/list?id='+this.user.id).then((res) => {
                        if(res.code === 1){
                          console.log(res)
                          this.bookdata = res.info.items
                          if(this.bookdata.length==0){
                              this.bookshow =false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                getbangdata(){
                    this.$get('businesses?page=1&per-page=8&u_id='+this.user.id).then((res) => {
                        if(res.code === 1){
                          console.log(res)
                          this.bangdata = res.info.items
                          if(this.bangdata.length==0){
                              this.bangshow =false
                          }
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                // 编辑资料
                edituser(){
                  this.dialogFormVisible = true
                  this.form = this.userdata
                  console.log(this.form)
                  this.imageshow = true;
                },
                changephone(){
                    this.changeshow = true
                    this.phonechange = true
                    this.userchange = false
                    this.beforechange = false
                    this.afterchange = true
                },
                gobangitem(item,index){
                    this.$router.push({path: '/bangitem', query: {id:item.id}});
                },
                disbook(item,index){
                    this.$post('article-type-subscription/toggle',{
                        article_type_id:item.at_id
                    }).then((res) => {
                        if(res.code === 1){
                          this.$message('取消订阅成功');
                          this.getbookdata()
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                goreaditem(item,index){
                    this.$router.push({path: '/readitem', query: {id:item.id}});
                },
                sendmessage(){
                    var _this = this;
                    console.log
                    if(!_this.tel(_this.form.newphone)){
                        this.$message.error("手机号码格式不正确");
                    }else{
                        if (!this.canClick) return
                        this.canClick = false
                        this.$post('get-sms-code',
                        {mobile:_this.form.newphone,},
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
                submituser(){
                    if(this.form.gender === "男"){
                        this.form.gender = 1
                    }else{
                        this.form.gender = 2
                    }
                    this.$put('user/update', {
                        mobile:this.form.mobile,
                        nick_name:this.form.nick_name,
                        gender:this.form.gender,
                        avatar_image:this.imageurl1?this.imageurl1:this.form.avatar_image
                    }).then((res) => {
                        if(res.code === 1){
                            this.$message({
                                message: res.message,
                                type: 'success'
                            });
                            this.dialogFormVisible = false
                            this.getuserdata()
                            this.getuser()
                            if(localStorage.getItem('info')){
                                this.user = JSON.parse(localStorage.getItem('info'))
                            }
                        }else{
                            this.$message.error(res.message);
                        }
                    })
                },
                submituser1(){
                    if(!this.tel(this.form.newphone)){
                        this.$message.error("新手机号不能为空");
                    }else{
                        this.$post('user/check-mobile', {
                            mobile:this.form.newphone,
                            sms_code:this.form.code,
                        }).then((res) => {
                            console.log(res)
                            if(res.code === 1){
                            console.log(res)
                            this.$put('user/update', {
                                    mobile:this.form.newphone,
                                    nick_name:this.form.nick_name,
                                    gender:this.form.gender,
                                    avatar_image:this.imageurl1?this.imageurl1:this.form.avatar_image
                                }).then((res) => {
                                    if(res.code === 1){
                                        this.$message({
                                            message: res.message,
                                            type: 'success'
                                        });
                                        this.dialogFormVisible = false
                                        this.getuserdata()
                                        if(localStorage.getItem('info')){
                                            this.user = JSON.parse(localStorage.getItem('info'))
                                        }
                                    }else{
                                        this.$message.error(res.message);
                                    }
                                })
                            }else{
                                if(!res.info.name){
                                    this.$message.error(res.message);
                                }else{
                                    this.$message.error(res.info.name[0]);
                                }
                            }
                        })
                    }
                },
                tel:function tel(str){
                    var re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(198)|(199)|(166)|(165)|(146)|(148))+\d{8})$/;
                    return re.test(str)
                },
                closeDialog(){
                   this.changeshow = false
                   this.phonechange = false
                    this.userchange = true
                    this.fileList1 = []
                },
                   // 封面图片上传
                uploadfile ( file ) {
                    // 用于显示图片
                    this.imageUrl1 = URL.createObjectURL(file.file);
                    //保存一份文件信息，用于上传
                    this.fileData = file.file;
                    console.log( this.fileData)
                    var formData = new FormData();
                    formData.append("file", this.fileData);
                    axios({
                        method: 'post',
                        url: this.uploadurl+'generals/upload-file-and-to-aliyun_oss?type=article',
                        data: formData,
                        config: { headers: {'Content-Type': 'multipart/form-data' , 'Authorization': 'Bearer ' + localStorage.getItem('tooken')}}
                    })
                    .then((response)=>{
                            console.log(response)
                            if(response.data.code==1){
                                this.imageurl1 = response.data.info;
                                console.log(this.imageurl1)
                                this.$message({
                                        message: "上传成功",
                                        type: 'success'
                                    });
                            }else{
                                this.$message.error(response.data.message);
                                // if(response.info.image){
                                //     this.$message.error(response.data.info.image[0]);
                                // }else{
                                //     this.$message.error(response.data.message);
                                // }
                            }
                    }).catch((response)=>{
                        this.$message.error(response.message);
                    });
                },
                imgChange(file, fileList1){
                    console.log(fileList1)
                    this.hideUpload = fileList1.length >= this.limitCount;
                    if(fileList1){
                        this.$refs['uploadElemet'].clearValidate();
                    }
                },
                handleRemove1(file, fileList1) {
                    console.log(file, fileList1);
                    this.hideUpload = fileList1.length >= this.limitCount;
                },
                // handlePictureCardPreview(file) {
                //     this.dialogImageUrl = file.url;
                //     this.dialogVisible = true;
                // },
                handleChange1(file, fileList1) {
                    this.fileList1 = fileList1.slice(-1);
                    this.imageshow = false;
                },
                getuser(){
                    var _this = this
                    this.$get('users?access_token='+_this.user.access_token).then((res) => {
                        if(res.code === 1){
                            localStorage.setItem("info",JSON.stringify(res.info.items[0]))
                            // localStorage.setItem("info",res.info.items[0])
                            // localStorage.setItem("userinfo",res.info.id)
                        }else{
                            this.$message.error(res.msg);
                        }
                        this.loading = false
                    }).catch(() => {this.loading = false})
                },
                 // 去个人中心
                 goreadlist(item,index){
                    this.$router.push({path: '/usercenter', query: {id:item.at_id,name:item.at_name}});
                },
                gousercenter(){
                    this.$router.push({path: '/usercenter',query: {id:this.user.id}});
                }
            }
        }
    </script>
    <style>

    </style>
