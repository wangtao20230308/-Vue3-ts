<script setup lang="ts">
import './main.css'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main style="margin-top:100px">
                <router-view />
            </el-main>
            <el-footer style="position:absolute;bottom:50px;width:100%">
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<style lang="scss" scoped></style>