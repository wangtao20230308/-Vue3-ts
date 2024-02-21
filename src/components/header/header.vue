<script setup lang="ts">
import './header.css'

import router from '../../routes';

const exitSystem = () => {
    router.push({ name: 'login' })
    // 为了登入安全、退出系统时清除登入凭证token
    localStorage.removeItem('token')
}
</script>

<template>
    <div class="header">
        <img src="../../assets/logo_2.png">
        <div class="right">
            <div>
                客户名：<span>合作方客户</span>
            </div>
            <div>
                客户号：<span>955000099999999 </span>
            </div>
            <div>
                上次登录：<span>2024/02/20</span>
            </div>
            <div @click="exitSystem">
                退出登录
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
