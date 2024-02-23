<script setup lang="ts">
import './commonAside.css'
import {
    Setting,
    House 
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
    tagStore.$patch((state) => {
        state.chilrenMenuName = subItem.label
    })
}
const hasChildrenMenu = computed(() => menuData.value.filter((item) => item.children))
const noChildrenMenu = computed(() => menuData.value.filter((item) => !item.children))

</script>

<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-top: 17px;">
        <el-radio-button :label="false">展开菜单</el-radio-button>
        <el-radio-button :label="true">关闭菜单</el-radio-button>
    </el-radio-group>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

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
                    <Setting />
                    <!-- <component :is="item.icon" /> -->
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <el-menu-item-group title="" v-for="subItem in item.children" :key="subItem.name">
                <el-menu-item :index="subItem.name" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>