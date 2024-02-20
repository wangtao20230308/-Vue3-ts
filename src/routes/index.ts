import { createRouter, createWebHistory } from "vue-router";

let routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/Login.vue')
    },
    {
        //主路由
        path: '/',
        redirect: '/home',
        name: 'main',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../views/main/main.vue'),
        children: [
            //子路由
            {
                // home
                path: 'home',
                name: 'home',
                component: () => import('../views/home/home.vue')
            },
            {
                // account
                path: 'account',
                name: 'account',
                component: () => import('../views/account/account.vue')
            },
             {
                // account
                path: 'account',
                name: 'account',
                component: () => import('../views/account/account.vue')
            },
             {
                // test
                path: 'test',
                name: 'test',
                component: () => import('../views/test/test.vue')
            }
        ]
    },
    //{
    //配置404页面
    //path: '/:catchAll(.*)',
    //name: '404',
    //component: () => import(''),
    //}
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 