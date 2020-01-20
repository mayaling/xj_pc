//import Vue from 'vue';
//import Router from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: resolve => require(['../components/page/index/index.vue'], resolve),
            meta: { title: '首页' }
        },
        {
            path: '/read',
            component: resolve => require(['../components/page/read/read.vue'], resolve),
            meta: { title: '阅读' }
        },    {
            path: '/readlist',
            component: resolve => require(['../components/page/read/readlist.vue'], resolve),
            meta: { title: '阅读' }
        },  {
            path: '/readitem',
            component: resolve => require(['../components/page/read/readitem.vue'], resolve),
            meta: { title: '阅读' }
        }, {
            path: '/blank',
            component: resolve => require(['../components/page/read/blank.vue'], resolve),
            meta: { title: '阅读' }
        },  {
            path: '/sread',
            component: resolve => require(['../components/page/read/sread.vue'], resolve),
            meta: { title: '阅读搜索' }
        }, {
            path: '/bang',
            component: resolve => require(['../components/page/bang/bang.vue'], resolve),
            meta: { title: 'bang' }
        },{
            path: '/bangblank',
            component: resolve => require(['../components/page/bang/bangblank.vue'], resolve),
            meta: { title: 'bang' }
        }, {
            path: '/sbang',
            component: resolve => require(['../components/page/bang/sbang.vue'], resolve),
            meta: { title: '搜索bang' }
        }, {
            path: '/bangitem',
            component: resolve => require(['../components/page/bang/bangitem.vue'], resolve),
            meta: { title: '搜索bang' }
        },{
            path: '/about',
            component: resolve => require(['../components/page/about/about.vue'], resolve),
            meta: { title: '关于我们' }
        },{
            path: '/produce',
            component: resolve => require(['../components/page/about/produce.vue'], resolve),
            meta: { title: '关于我们' }
        },{
            path: '/join',
            component: resolve => require(['../components/page/about/join.vue'], resolve),
            meta: { title: '关于我们' }
        },{
            path: '/xieyi',
            component: resolve => require(['../components/page/about/xieyi.vue'], resolve),
            meta: { title: '关于我们' }
        },{
            path: '/call',
            component: resolve => require(['../components/page/about/call.vue'], resolve),
            meta: { title: '联系我们' }
        },{
            path: '/publish',
            component: resolve => require(['../components/page/about/publish.vue'], resolve),
            meta: { title: '发布规范' }
        },{
            path: '/mzsm',
            component: resolve => require(['../components/page/about/mzsm.vue'], resolve),
            meta: { title: '免责声明' }
        },{
            path: '/makemoney',
            component: resolve => require(['../components/page/about/makemoney.vue'], resolve),
            meta: { title: '赚钱圈' }
        },{
            path: '/userhomepage',
            component: resolve => require(['../components/page/about/userhomepage.vue'], resolve),
            meta: { title: '个人中心' }
        },{
            path: '/mine',
            component: resolve => require(['../components/page/about/mine.vue'], resolve),
            meta: { title: '个人中心' }
        }, {
            path: '/usercenter',
            component: resolve => require(['../components/page/about/usercenter.vue'], resolve),
            meta: { title: '个人中心' }
        }, {
            path: '/app',
            component: resolve => require(['../components/page/app/app.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login/Login.vue'], resolve)
        },{
            path: '/select',
            component: resolve => require(['../components/page/select/select.vue'], resolve)
        },{
            path: '/sselect',
            component: resolve => require(['../components/page/select/sselect.vue'], resolve)
        },
        {
            path: '/audio',
            component: resolve => require(['../components/page/audio/audio.vue'], resolve)
        }, {
            path: '/audiodetail',
            component: resolve => require(['../components/page/audio/audiodetail.vue'], resolve)
        },
        {
            path: '/saudio',
            component: resolve => require(['../components/page/audio/saudio.vue'], resolve)
        },

        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
