<template>
    <div class="w-full h-60 bg-slate-300 relative">
        <img src="../../../public/head.jpg" alt="" class="w-60 h-40 absolute posi left-4 object-cover" >
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: String,
    title: String,
    auther: String,
    publishTime: String,
    desc: String,
    classify: String,
    cardImgUrl: String,
    serial: Number
})
</script>

<style scoped lang="scss">
.posi{
    top: -1rem;
}
</style>