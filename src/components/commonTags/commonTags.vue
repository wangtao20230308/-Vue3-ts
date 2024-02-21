<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ElInput } from 'element-plus'
import { useTag } from '../../store/tag'
import { storeToRefs } from 'pinia'
import router from '../../routes';

const tagStore = useTag()
const { tabList } = storeToRefs(tagStore)

const handleClose = (item) => {
    console.log(item);
    console.log(tabList.value);
    tabList.value = tabList.value.filter(tab => tab.name !== item.name)
    const obj = tabList.value[tabList.value.length - 1]
    router.push({
        name: obj.name,
    })
}

</script>

<template>
    <div class="flex gap-2">
        <el-tag v-for="item in tabList" :key="item.name" closable :disable-transitions="false" @close="handleClose(item)"
            @click="$router.push(item.path)" :effect="$route.name === item.name ? 'dark' : 'plain'"
            style="cursor: pointer;margin-right: 5px">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<style lang="scss" scoped></style>