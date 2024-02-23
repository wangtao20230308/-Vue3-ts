<script setup lang="ts">
// import { nextTick, ref } from 'vue'
// import { ElInput } from 'element-plus'
import { useTag } from '../../store/tag'
import { storeToRefs } from 'pinia'
import router from '../../routes';

const tagStore = useTag()
const { tabList } = storeToRefs(tagStore)

const handleClose = (item: { name: string; }) => {
    console.log(item);
    console.log(tabList.value);
    tabList.value = tabList.value.filter(tab => tab.name !== item.name)
    const obj = tabList.value[tabList.value.length - 1]
    router.push({
        name: obj.name,
    })
    tagStore.$patch((state) => {
        state.chilrenMenuName = obj.label
    })
}
const handleClick = (item: any) => {
    console.log(item);
    console.log(tabList.value);
    router.push(item.path)
    tagStore.$patch((state) => {
        state.chilrenMenuName = item.label
    })
}

</script>

<template>
    <div class="flex gap-2">
        <el-tag v-for="item in tabList" :key="item.name" closable :disable-transitions="false" @close="handleClose(item)"
            @click="handleClick(item)" :effect="$route.name === item.name ? 'dark' : 'plain'"
            style="cursor: pointer;margin-right: 5px;margin-bottom:10px;">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<style lang="scss" scoped>
.gap-2 {
    border-bottom: 1px solid #409eff;
}
</style>