<script setup lang="ts">
import './main.css'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px"><CommonAside></CommonAside></el-aside>
                <el-main> 
                    <CommonTags></CommonTags>
                    <CommonBreadcrumb></CommonBreadcrumb>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped></style>