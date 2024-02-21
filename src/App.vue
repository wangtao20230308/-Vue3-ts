<script setup lang="ts">
onMounted(() => {
  document.title = '合作方平台'
})
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  position: absolute;
  bottom: 0px;
}
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
