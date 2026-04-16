<template>
    <div class="container max-w-4xl mx-auto relative z-2">
        <div class="flex flex-col sm:flex-row py-10 px-5">
            <div class="flex sm:flex-col items-center">
                <div class="w-full mb-3 sm:mb-0 relative">
                    <span class="hidden sm:block text-sm shrink-0 text-neutral-600 mb-1">PROJECT NAME</span>
                    <h1 class="text-white text-2xl sm:whitespace-nowrap sm:text-3xl font-bold shrink-0 mr-2 mb-2">
                        鉅晨科技有限公司
                    </h1>
                    <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">MVC架構</span>
                    <a
                        href="https://www.yocue.com/"
                        target="_blank"
                        class="absolute top-0 right-0 flex sm:hidden justify-center items-center w-10 h-10 rounded-full text-neutral-100 ml-auto bg-emerald-700 hover:bg-emerald-500">
                        <ArrowTopRightOnSquareIcon class="size-5"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <a
                    class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto sm:mt-auto rounded-full text-center text-emerald-500 hover:text-emerald-700"
                    href="https://www.yocue.com/"
                    target="_blank">https://www.yocue.com/ 
                    <ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                </a>
            </div>
            <div class="text-left">
                <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                    2023 年啟動舊站翻新計畫，以「無限」為核心主視覺，結合清新明亮的絢藍粉色調，打造簡潔且富現代感的品牌形象。整合公司歷年專案成果與技術實力，在未投放任何廣告的情況下，使「高雄APP」關鍵字自然搜尋排名提升至第一位。
                </p>
                <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">Google PageSpeed 四項分數都達到90+</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">內崁Youtube iframe</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">內崁Google Map iframe</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">Sal.js滾動效果</p>
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
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/yocue/img-project-yocue-1.jpg" alt="鉅晨科技官網專案1">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/yocue/img-project-yocue-2.jpg" alt="鉅晨科技官網專案2">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/yocue/img-project-yocue-3.jpg" alt="鉅晨科技官網專案3">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/yocue/img-project-yocue-4.jpg" alt="鉅晨科技官網專案4">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/yocue/img-project-yocue-5.png" alt="鉅晨科技官網專案5">
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
                    <img src="/images/project/yocue/img-project-yocue-1.jpg" alt="鉅晨科技官網專案1">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/yocue/img-project-yocue-2.jpg" alt="鉅晨科技官網專案2">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/yocue/img-project-yocue-3.jpg" alt="鉅晨科技官網專案3">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/yocue/img-project-yocue-4.jpg" alt="鉅晨科技官網專案4">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/yocue/img-project-yocue-5.png" alt="鉅晨科技官網專案5">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/vue/20/solid';
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}
</script>