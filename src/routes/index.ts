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
        beforeEnter: (_to: any, _from: any, next: (arg0?: string | undefined) => void) => {
            // 路由独享守卫
            const token = localStorage.getItem('token')
            if (token) {
                next()
            } else {
                next('/login')
            }
        },
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../views/main/main.vue'),
        children: [
            //子路由
            {
                // home
                path: 'home',
                name: 'home',
                component: () => import('../views/home/home.vue'),
                // children: [
                //     // home
                //     path: 'page1',
                //     name: 'page1',
                //     component: () => import('../views/home/home.vue'),
                // ]
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
            },
            {
                // page1
                path: 'page1',
                name: 'page1',
                component: () => import('../views/pageone/pageOne.vue')
            },
            {
                // page2
                path: 'page2',
                name: 'page2',
                component: () => import('../views/pageTwo/pageTwo.vue')
            },
            {
                // page3
                path: 'page3',
                name: 'page3',
                component: () => import('../views/pageThree/pageThree.vue')
            },
            {
                // page4
                path: 'page4',
                name: 'page4',
                component: () => import('../views/pageFour/pageFour.vue')
            },
            {
                // page5
                path: 'page5',
                name: 'page5',
                component: () => import('../views/pageFive/pageFive.vue')
            },
        ]
    },
    {
        //404请求不存在的路径
        path: '/:pathMatch(.*)*',
        component: () => import('../components/notFound/notFound.vue')
    }
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 