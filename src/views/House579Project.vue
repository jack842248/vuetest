<template>
    <div class="container max-w-4xl mx-auto relative z-2">
        <div class="flex flex-col sm:flex-row pt-10 px-3">
            <div class="flex sm:flex-col items-center">
                <div class="w-full mb-3 sm:mb-0 relative">
                    <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                    <h1 class="text-white text-3xl sm:whitespace-nowrap font-bold shrink-0 mr-2 mb-2">
                        House579房屋交易買賣平台
                    </h1>
                    <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">MVC架構</span>
                    <a
                        href="https://www.house579.com.tw/"
                        target="_blank"
                        class="absolute top-0 right-0 flex sm:hidden justify-center items-center w-10 h-10 rounded-full text-neutral-100 ml-auto bg-emerald-700 hover:bg-emerald-500">
                        <ArrowTopRightOnSquareIcon class="size-5"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <a
                    class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto sm:mt-auto rounded-full text-center text-emerald-500 hover:text-emerald-700"
                    href="https://www.house579.com.tw/"
                    target="_blank">https://www.house579.com.tw/ <ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                </a>
            </div>
            <div class="text-left">
                <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                    全新房屋買賣與租賃平台，架構參考 591 與 樂屋網，結合龐大案件庫作為核心優勢，提供完整房源資訊。會員可使用 Google 或 LINE 快速登入，提升使用便利性，吸引更多買賣雙方加入，打造高效房產交易生態。
                </p>
                <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">提供第三方登入</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">複雜條件篩選物件</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">會員、房東預約、留言系統</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-5">
            <swiper
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :breakpoints="{
                    0: {
                    slidesPerView: 3
                    },
                    640: {
                    slidesPerView: 4
                    },
                    1024: {
                    slidesPerView: 5
                    }
                }"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="thumbs-swiper w-[calc(100%-1.5rem)]">
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/house579/img-project-house579-1.jpg" alt="House579房屋交易買賣平台專案1">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/house579/img-project-house579-2.jpg" alt="House579房屋交易買賣平台專案2">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/house579/img-project-house579-3.jpg" alt="House579房屋交易買賣平台專案3">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/house579/img-project-house579-4.jpg" alt="House579房屋交易買賣平台專案4">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/house579/img-project-house579-5.png" alt="House579房屋交易買賣平台專案5">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/house579/img-project-house579-6.jpg" alt="House579房屋交易買賣平台專案6">
                </swiper-slide>
            </swiper>
            <swiper
                :loop="true"
                :effect="'coverflow'"
                :grabCursor="true"
                :centeredSlides="true"
                :slidesPerView="'auto'"
                :autoplay="{ delay: 3000 }"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }"
                :modules="modules"
                :thumbs="{ swiper: thumbsSwiper }"
                class="project-swiper my-10">
                <swiper-slide>
                    <img src="/images/project/house579/img-project-house579-1.jpg" alt="House579房屋交易買賣平台專案1">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/house579/img-project-house579-2.jpg" alt="House579房屋交易買賣平台專案2">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/house579/img-project-house579-3.jpg" alt="House579房屋交易買賣平台專案3">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/house579/img-project-house579-4.jpg" alt="House579房屋交易買賣平台專案4">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/house579/img-project-house579-5.png" alt="House579房屋交易買賣平台專案5">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/house579/img-project-house579-6.jpg" alt="House579房屋交易買賣平台專案6">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/vue/20/solid';
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