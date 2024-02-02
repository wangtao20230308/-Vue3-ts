<script setup lang="ts">
onMounted(() => {
  document.title = '环球汇'
})
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}
body {
    display: block;
}
</style>
