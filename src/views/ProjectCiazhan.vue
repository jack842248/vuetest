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
                            空間特工3D模擬角鋼架
                        </h1>
                    </div>
                </div>
                <div class="text-left">
                    <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                        為顧客打造的 3D 角鋼架模擬系統，使用 Unity 遊戲引擎開發，可自由設定層板數、鋼架尺寸與木板材質，提供直覺操作與即時視覺呈現，幫助使用者在下訂前更精準掌握實體空間與結構配置。
                    </p>
                    <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">Unity遊戲引擎開發</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">360度視角</p>
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
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/ciazhan/img-project-ciazhan-1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/ciazhan/img-project-ciazhan-2.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/ciazhan/img-project-ciazhan-3.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/ciazhan/img-project-ciazhan-4.png" alt="">
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
                        <img src="/images/project/ciazhan/img-project-ciazhan-1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/ciazhan/img-project-ciazhan-2.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/ciazhan/img-project-ciazhan-3.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/ciazhan/img-project-ciazhan-4.png" alt="">
                    </swiper-slide>
                </swiper>
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