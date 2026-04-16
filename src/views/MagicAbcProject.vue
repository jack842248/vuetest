<template>
    <div class="container max-w-4xl mx-auto relative z-2">
        <div class="flex flex-col sm:flex-row pt-10 px-3">
            <div class="flex sm:flex-col items-center">
                <div class="w-full mb-3 sm:mb-0 relative">
                    <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                    <h1 class="text-white text-3xl sm:whitespace-nowrap font-bold shrink-0 mr-2 mb-2">
                        MagicABC兒童語言學習後台
                    </h1>
                    <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">Vue前端框架</span>
                </div>
            </div>
            <div class="text-left">
                <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                    此後台系統支援教師建立個案、檢視每日學習紀錄與成效分析，並將前端 App 蒐集的數據整合為直覺化圖表介面。讓家長與老師能快速理解學習狀態，提升教學效率與溝通品質
                </p>
                <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">ECharts 圖表呈現數據</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">html2pdf.js PDF下載</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">使用 Vue 前端框架</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-5">
            <img src="/images/project/magic-abc/img-project-magic-abc-1.png" alt="MagicABC兒童語言學習專案">
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid';
import { ref, onMounted, onUnmounted } from "vue";

const isMobile400 = ref(false)

const checkScreen = () => {
    isMobile400.value = window.innerWidth < 501
}

onMounted(() => {
    checkScreen()
    window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkScreen)
})
</script>