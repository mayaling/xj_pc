<template>
    <div class="sidebar">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
              </template>
  <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{subItem.title}}</el-menu-item>
  </el-submenu>
  </template>
  <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
  </template>
  </el-menu>
  </div>
  </template>
  
  <script>
      import bus from '../common/bus';
      export default {
          data() {
              return {
                  collapse: false,
                  //items: [],
                  items: [{
                    icon: 'el-icon-document',
                    index: '1',
                    title: '文章管理',
                    subs:[
                        {
                        index: 'articlelist',
                        title: '文章列表'
                        },
                        {
                        index: 'comment',
                        title: '评论列表'
                        },{
                        index: 'replylist',
                        title: '回复列表'
                        },{
                        index: 'type',
                        title: '类型管理'
                        },{
                        index: 'keywords',
                        title: '标签管理'
                        },
                        // {
                        // index: 'tinymce',
                        // title: '富文本'
                        // },
                        // {
                        // index: 'articlelisttest',
                        // title: '文章列表测试'
                        // },
                    ]
                },
                {
                    icon: 'el-icon-lx-people',
                    index: '2',
                    title: '用户管理',
                    subs:[
                        {
                        index: 'userlist',
                        title: '用户列表'
                        },
                        {
                        index: 'violation',
                        title: '违规用户'
                        }, {
                        index: 'suit',
                        title: '马甲用户'
                        },
                    ]
                }, 
                {
                    icon: 'el-icon-mobile-phone',
                    index: '3',
                    title: '创业bang',
                    subs:[
                        {
                        index: 'bangtype',
                        title: '类型管理'
                        }, {
                        index: 'bangbackimg',
                        title: '背景图管理'
                        },{
                        index: 'bangbanner',
                        title: 'banner管理'
                        }
                    ]
                },
                {
                    icon: 'el-icon-mobile-phone',
                    index: '4',
                    title: 'APP管理',
                    subs:[
                        {
                        index: 'banner',
                        title: 'banner图管理'
                        }, {
                        index: 'activity',
                        title: '活动管理'
                        },
                    ]
                },
                // {
                //     icon: 'el-icon-document',
                //     index: '3',
                //     title: '评论管理',
                //     subs:[
                //         {
                //         index: 'commentlist',
                //         title: '评论管理'
                //         },
                //     ]
                // },
                // {
                //     icon: 'el-icon-document',
                //     index: '4',
                //     title: '回复管理',
                //     subs:[
                //         {
                //         index: 'replylist',
                //         title: '回复管理'
                //         },
                //     ]
                // },
            ],
              }
          },
          computed: {
              onRoutes() {
                  return this.$route.path.replace('/', '');
              }
          },
          created() {
              // 通过 Event Bus 进行组件间通信，来折叠侧边栏
              bus.$on('collapse', msg => {
                  this.collapse = msg;
              })
          }
      }
  </script>
  
  <style scoped>
      .sidebar {
          display: block;
          position: absolute;
          left: 0;
          top: 70px;
          bottom: 0;
          overflow-y: scroll;
      }
      
      .sidebar::-webkit-scrollbar {
          width: 0;
      }
      
      .sidebar-el-menu:not(.el-menu--collapse) {
          width: 250px;
      }
      /*  .el-menu-item,.el-submenu__title{ height:40px; line-height:40px;}*/
      
      .sidebar>ul {
          height: 100%;
      }
  </style>