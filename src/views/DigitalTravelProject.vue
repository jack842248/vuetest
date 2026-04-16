<template>
    <div class="container max-w-4xl mx-auto relative z-2">
        <div class="flex flex-col sm:flex-row pt-10 px-3">
            <div class="flex sm:flex-col items-center">
                <div class="w-full mb-3 sm:mb-0 relative">
                    <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                    <h1 class="text-white text-3xl sm:whitespace-nowrap font-bold shrink-0 mr-2 mb-2">
                        立吉達旅遊公司
                    </h1>
                </div>
            </div>
            <div class="text-left">
                <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                    為位於澳洲的旅行社打造會員整合後台系統，統一管理內部與外部會員資料，並支援電子報發送功能，優化行銷溝通流程與會員關係維護效率。
                </p>
                <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">串聯簡訊驗證系統</p>
                    </li>
                    <li class="flex items-center">
                        <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                        <p class="pl-2 text-neutral-400">電子報寄件模板</p>
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
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/digtial-travel/img-project-digtial-travel-1.jpg" alt="立吉達旅遊公司專案1">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/digtial-travel/img-project-digtial-travel-2.png" alt="立吉達旅遊公司專案2">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/digtial-travel/img-project-digtial-travel-3.jpg" alt="立吉達旅遊公司專案3">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/digtial-travel/img-project-digtial-travel-4.png" alt="立吉達旅遊公司專案4">
                </swiper-slide>
                <swiper-slide>
                    <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/digtial-travel/img-project-digtial-travel-5.png" alt="立吉達旅遊公司專案5">
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
                    <img src="/images/project/digtial-travel/img-project-digtial-travel-1.jpg" alt="立吉達旅遊公司專案1">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/digtial-travel/img-project-digtial-travel-2.png" alt="立吉達旅遊公司專案2">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/digtial-travel/img-project-digtial-travel-3.jpg" alt="立吉達旅遊公司專案3">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/digtial-travel/img-project-digtial-travel-4.png" alt="立吉達旅遊公司專案4">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/project/digtial-travel/img-project-digtial-travel-5.png" alt="立吉達旅遊公司專案5">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid';
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