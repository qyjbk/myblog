<template>
    <div>
        <!-- 首页图片 -->
        <div class="w-screen h-64 relative mb-20 minwidthbox">
            <el-image class='w-full h-full' src="../../../public/head.jpg" fit="cover">
                <template #error>
                    <div class="image-slot flex  justify-center items-center w-full h-full text-3xl">
                        <el-icon><icon-picture /></el-icon>
                    </div>
                </template>
            </el-image>
            <p class="absolute top-28 left-20 text-8xl text-white uppercase font-black tracking-widest">
                <span class="block">Enjoy Life,</span>
                <span class="block text-yellow-500">Record Life.</span>
            </p>
        </div>
        <!-- 文章内容部分 -->
        <el-row :gutter="20" class="w-full">
            <el-col :span="4">
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="12">
                <ContentBox />
            </el-col>
            <el-col :span="4">e
                <div class="grid-content ep-bg-purple" />
            </el-col>
            <el-col :span="4">
                <div class="grid-content ep-bg-purple" />
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import ContentBox from '@/components/ContentBox/index.vue'
import { onMounted, reactive } from 'vue';

import { reqGetHomeCards } from "@/api/mock";

const homeCards = reactive({data: ''})
const getHomeCards = async () => {
    try{
        const res = await reqGetHomeCards();
        homeCards.data = res.data;
    }catch(err){
        console.log(err);
    }
}

onMounted(() => {
    getHomeCards();
})
</script>

<style scoped lang="scss">
.image-slot {
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
}
</style>