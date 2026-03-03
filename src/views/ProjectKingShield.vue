<template>
    <div class="relative w-full bg-neutral-800">
        <div class="absolute top-0 bottom-0 left-1/2 grid grid-cols-4 sm:grid-cols-7 w-full h-full -translate-x-1/2 z-1">
            <div class="flex justify-center bg-amber-5 w-full h-full">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
            <div class="text-center mx-auto">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
            <div class="text-center mx-auto">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
            <div class="text-center mx-auto">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
            <div class="text-center mx-auto">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
            <div class="hidden sm:block text-center mx-auto">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
            <div class="hidden sm:block text-center mx-auto">
                <div class="w-px bg-neutral-500/10 h-full"></div>
            </div>
        </div>
        <router-link
            to="/project"
            class="w-fit group flex text-white relative z-50 p-3 m-2 hover:text-emerald-700">
            <ArrowLeftIcon class="ani-move size-6"></ArrowLeftIcon>回作品列表
        </router-link>
        <div class="container max-w-4xl mx-auto relative z-2">
            <div class="flex flex-col sm:flex-row pt-10 px-3">
                <div class="flex sm:flex-col items-center">
                    <div class="w-full mb-3 sm:mb-0 relative">
                        <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                        <h1 class="text-white text-3xl sm:whitespace-nowrap font-bold shrink-0 mr-2 mb-2">
                            金盾智慧科技有限公司
                        </h1>
                        <a
                            href="https://www.kingshield.com.tw/"
                            target="_blank"
                            class="absolute top-0 right-0 flex sm:hidden justify-center items-center w-10 h-10 rounded-full text-neutral-100 ml-auto bg-emerald-700 hover:bg-emerald-500">
                            <ArrowTopRightOnSquareIcon class="size-5"></ArrowTopRightOnSquareIcon>
                        </a>
                    </div>
                    <a
                        class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto sm:mt-auto rounded-full text-center text-emerald-500 hover:text-emerald-700"
                        href="https://www.kingshield.com.tw/"
                        target="_blank">https://www.kingshield.com.tw/ <ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <div class="text-left">
                    <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                        為 金盾智慧科技有限公司 打造一頁式形象網站，以「智慧晶片」為核心視覺概念，象徵科技驅動與創新實力。整體版面結構清晰、資訊層次分明，完整呈現公司成立背景、核心服務項目與未來發展方向，建立專業且具前瞻性的品牌形象。
                    </p>
                    <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">一頁式錨點滾動</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">RWD響應式(多斷點優化)</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">aos.js滾動效果</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-5">
                <img src="/images/project/king-shield/img-project-king-shield-1.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/vue/20/solid';
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}
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