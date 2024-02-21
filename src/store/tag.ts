import { defineStore } from 'pinia'
// useMain  可以是 useUser、useCart 之类的名字 
// defineStore('main',{..}) 在devtools 就使用 main 这个名
export const useTag = defineStore('tag', {
    // 相当于data
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型,如果推断失败可以试下 as xxx
            tabList: [
                {
                    path: '/home',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home',
                },
            ], 
            menuData: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 'Plus',
                    url: 'Home/Home',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne',
                        },
                    ],
                },
                {
                    path: '/account',
                    name: 'mall',
                    label: '合作方商户管理',
                    icon: 'View',
                    url: 'MallManage/MallManage',
                    children: [
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageOne',
                        },
                    ],
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '合作方交易管理',
                    icon: 'Filter',
                    url: 'UserManage/UserManage',
                    children: [
                        {
                            path: '/page3',
                            name: 'page3',
                            label: '页面3',
                            icon: 'setting',
                            url: 'Other/PageOne',
                        },
                    ],
                },
                {
                    label: '其他合作方',
                    icon: 'Setting',
                    children: [
                        {
                            path: '/page4',
                            name: 'page4',
                            label: '页面4',
                            icon: 'setting',
                            url: 'Other/PageOne',
                        },
                        {
                            path: '/page5',
                            name: 'page5',
                            label: '页面5',
                            icon: 'setting',
                            url: 'Other/PageTwo',
                        },
                    ]
                }
            ]
        }
        
    },
    // 相当于计算属性
    getters: {
        doubleCount: (state) => {
            return state.counter * 2
        },
    },
    // 相当于vuex的 mutation + action，可以同时写同步和异步的代码
    actions: {
        selectMenu() {
            this.counter++
        },
        randomizeCounter() {
            setTimeout(() => {
                this.counter = Math.round(100 * Math.random())
            }, 0);
        },
    },
})