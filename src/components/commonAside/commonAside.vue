<script setup lang="ts">
import './commonAside.css'
import {
    House, Menu
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import router from '../../routes';
import { useTag } from '../../store/tag'
import { storeToRefs } from 'pinia'

const tagStore = useTag()
const { menuData, tabList } = storeToRefs(tagStore)

tagStore.selectMenu()

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const isCollapse = ref(false)
// 导航菜单数据

const clickMenu = (subItem: any) => {
    console.log("subItem", subItem)
    router.push({
        path: subItem.path,
    })
    tabList.value.push(subItem)
    // tagStore.selectMenu()
    // 对tabList进行去重
    let map = new Map()
    for (let item of tabList.value) {
        if (!map.has(item.name)) {
            map.set(item.name, item)
        }
    }
    tabList.value = [...map.values()]
    console.log("tabList去重", tabList.value)
    tagStore.$patch((state) => {
        state.chilrenMenuName = subItem.label
    })
}
const hasChildrenMenu = computed(() => menuData.value.filter((item) => item.children))
const noChildrenMenu = computed(() => menuData.value.filter((item) => !item.children))

const clickMenuIcon = () => {
    isCollapse.value = !isCollapse.value
}

</script>

<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <div class="cooprerate">
            <span v-show="!isCollapse" style="margin-right: 12px;">合作方管理平台</span>
            <el-icon class="menuIcon" @click="clickMenuIcon">
                <Menu />
            </el-icon>
        </div>
        <el-menu-item :index="item.name" v-for="item in noChildrenMenu" @click="clickMenu(item)">
            <el-icon>
                <House />
                <!-- <component :is="item.icon" /> -->
            </el-icon>
            <span>{{ item.label }}</span>
        </el-menu-item>
        <el-sub-menu :index="item.name ?? ''" v-for="item in hasChildrenMenu" :key="item.name">
            <template #title>
                <el-icon>
                    <!-- <Setting /> -->
                    <component :is="item.icon" />
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group title="" v-for="subItem in item.children" :key="subItem.name">
                <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">
                    <el-icon>
                        <component :is="subItem.icon" />
                    </el-icon>
                    <span>{{ subItem.label }}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: auto;
}

.cooprerate {
    display: flex;
    align-items: center;
    font-size: 18px;
    width: auto;
    height: 56px;
    line-height: 56px;
    padding-left: 20px;
    color: #fff;
    border-bottom: 4px solid #eeefef;
}

.menuIcon {
    font-size: 24px;
    cursor: pointer;
}
.menuIcon:hover{
    color: #409EFF;
}
</style>