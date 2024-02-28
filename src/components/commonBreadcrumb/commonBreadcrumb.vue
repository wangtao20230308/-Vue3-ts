<template>
    <el-breadcrumb :separator-icon="ArrowRightBold">
        <el-breadcrumb-item style="font-weight: 700;">{{ mainMenu }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ chilrenMenuName
        }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import './commonBreadcrumb.css'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { useTag } from '../../store/tag'
import { storeToRefs } from 'pinia'

const tagStore = useTag()
const { mainMenu, chilrenMenuName } = storeToRefs(tagStore)

onMounted(() => {
    console.log('mainMenu', mainMenu);

})
</script>