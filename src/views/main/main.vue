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
                <el-aside style="width: auto;">
                    <CommonAside></CommonAside>
                </el-aside>
                <el-main style="padding: 0 20px;">
                    <CommonTags></CommonTags>
                    <CommonBreadcrumb></CommonBreadcrumb>
                    <router-view />
                </el-main>
            </el-container>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<style lang="scss" scoped></style>