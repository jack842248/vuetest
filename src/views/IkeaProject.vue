<template>
    <div class="container max-w-4xl mx-auto relative z-2">
        <div class="flex flex-col sm:flex-row pt-10 px-3">
            <div class="flex sm:flex-col items-center">
                <div class="w-full mb-3 sm:mb-0 relative">
                    <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                    <h1 class="text-white text-3xl sm:whitespace-nowrap font-bold shrink-0 mr-2 mb-2">
                        IKEA測你的睡眠指數
                    </h1>
                    <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">MVC架構</span>
                </div>
            </div>
            <div class="text-left">
                <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                    結合 LINE LIFF 開發的互動測驗遊戲，讓玩家透過問答方式分析睡眠品質，並作為「超集玩家」活動通關任務之一，強化用戶參與與品牌黏著度。
                </p>
                <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">在LINE LIFF頁面上操作</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">分享測驗結果</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-5">
            <img src="/images/project/ikea/img-project-ikea-1.png" alt="IKEA測你的睡眠指數專案">
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