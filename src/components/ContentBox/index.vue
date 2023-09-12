<template>
    <div class="w-full h-60 bg-slate-300 relative flex">
        <img src="../../../public/head.jpg" alt="" class="w-60 h-40 absolute posi left-4 object-cover" >
        <div class="">
            <h2>{{ title }}</h2>
            <h4><span>{{ auther }}</span><span>{{ publishTime }}</span></h4>
            <p>{{ desc }}</p>
        </div>
    </div>
    <!-- 底部序号 -->
    <div>
        <p >1/9</p>
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