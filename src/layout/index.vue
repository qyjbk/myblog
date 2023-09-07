<template>
    <div class="font-mono">
        <Header></Header>
        <router-view class="pt-12"></router-view>
    </div>
</template>

<script setup lang="ts">
import Header from "./Header/index.vue";
</script>

<style scoped lang="scss">

</style>