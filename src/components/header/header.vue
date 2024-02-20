<script setup lang="ts">
import './header.css'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import router from '../../routes';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
    console.log(tab.props.name)
    if(tab.props.name == 'first'){
        router.push({name:'home'})
    } else if(tab.props.name == 'second'){
        router.push({name:'account'})
    } else if(tab.props.name == 'third'){
        router.push({name:'account'})
    } else {
        router.push({name:'test'})
    } 
}
</script>

<template>
    <div class="header">
        <div>
            客户名：<span>临时客户</span>
        </div>
        <div>
            客户号：<span>955000099999999 </span>
        </div>
        <div>
            上次登录：<span>2024/02/20</span>
        </div>
        <div>
            退出
        </div>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="账户管理" name="first"></el-tab-pane>
        <el-tab-pane label="交易管理" name="second"></el-tab-pane>
        <el-tab-pane label="收款方" name="third"></el-tab-pane>
        <el-tab-pane label="设置" name="fourth"></el-tab-pane>
      </el-tabs>
</template>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
