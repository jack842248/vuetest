<template>
    <div class="container max-w-4xl mx-auto relative z-2">
        <div class="flex flex-col sm:flex-row pt-10 px-3">
            <div class="flex sm:flex-col items-center">
                <div class="w-full mb-3 sm:mb-0 relative">
                    <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                    <div class="flex">
                        <h1 class="text-white text-3xl sm:whitespace-nowrap font-bold shrink-0 mr-2 mb-2">
                            居家通服務平台LineOA
                        </h1>
                    </div>
                    <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">Vue前端框架</span>
                    <a
                        href="https://www.houserepair.com.tw/"
                        target="_blank"
                        class="absolute top-0 right-0 flex sm:hidden justify-center items-center w-10 h-10 rounded-full text-neutral-100 ml-auto bg-emerald-700 hover:bg-emerald-500">
                        <ArrowTopRightOnSquareIcon class="size-5"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <a
                    class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto sm:mt-auto rounded-full text-center text-emerald-500 hover:text-emerald-700"
                    href="https://www.houserepair.com.tw/"
                    target="_blank">https://www.houserepair.com.tw/ <ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                </a>
            </div>
            <div class="text-left">
                <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                    整合多項居家服務的數位平台，使用者可依需求發送案件，工程或業務方即時接收通知並提供初步報價。雙方確認合意後才進行委任，完整保障使用者與服務提供者的權益，打造安全、透明的居家服務體驗。
                </p>
                <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">串接藍新金流</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">案件評分系統</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">使用Vue前端框架</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="mt-5">
            <img src="/images/project/home-service/img-project-home-service-1.png" alt="居家通服務媒合平台LineOA專案">
        </div>
    </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/vue/20/solid';
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