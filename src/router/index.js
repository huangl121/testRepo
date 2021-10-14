import Vue from 'vue'
import Router from 'vue-router'
// 下面的情况，默认会导入@/views/login下的index.vue组件
import Layout from '@/components/Layout'
import Home from '@/views/home'
import dsconfig from '@/views/dsconfig'
import Scripts from '@/views/scripts'
import Job from '@/views/job'
import Backup from '@/views/backup'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'layout',  //路由名称
            redirct: '/home', //当访问/时重定向到home
            component: Layout, //组件对象
            // 因为首页，数据源，任务等都是 Layout 下的 main 里的，所以要将这些组件作为 Layout 组件的子组件，使用children，里面是一个数组，接收一个个对象
            // meta 是
            children: [
                {
                    path: '/home',
                    component: Home,
                    meta: {title: '首页'}
                },
                {
                    path: '/dsconfig',
                    component: dsconfig,
                    meta: {title: '数据源管理'}
                },
                {
                    path: '/scripts',
                    component: Scripts,
                    meta: {title: '脚本管理'}
                },
                {
                    path: '/job',
                    component: Job,
                    meta: {title: '任务管理'}
                },
                {
                    path: 'backup',
                    component: Backup,
                    meta: {title: '灾备管理'}
                }
            ]
        },

    ]
});
