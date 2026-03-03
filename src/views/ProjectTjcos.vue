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
            <div class="flex flex-col sm:flex-row py-10 px-5">
                <div class="flex sm:flex-col items-center">
                    <div class="w-full mb-3 sm:mb-0 relative">
                        <span class="hidden sm:block text-sm shrink-0 text-neutral-600 mb-1">PROJECT NAME</span>
                        <h1 class="text-white text-2xl sm:whitespace-nowrap sm:text-3xl font-bold shrink-0 mr-2 mb-2">
                            台鉅美妝觀光工廠LineOA
                        </h1>
                        <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">Vue前端框架</span>
                        <a
                            href="https://page.line.me/yus0675j"
                            target="_blank"
                            class="absolute top-0 right-0 flex sm:hidden justify-center items-center w-10 h-10 rounded-full text-neutral-100 ml-auto bg-emerald-700 hover:bg-emerald-500">
                            <ArrowTopRightOnSquareIcon class="size-5"></ArrowTopRightOnSquareIcon>
                        </a>
                    </div>
                    <a
                        class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto sm:mt-auto rounded-full text-center text-emerald-500 hover:text-emerald-700"
                        href="https://page.line.me/yus0675j"
                        target="_blank">https://page.line.me/yus0675j
                        <ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <div class="text-left">
                    <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                        為台鉅美妝觀光工廠建置專屬 Line OA 與 LIFF 會員系統，整合會員蒐集與優惠訊息推播機制，並規劃導遊專屬預約導覽功能，有效控管團客入場與導覽時段，提升現場營運效率。
                    </p>
                    <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">RichMenu 依照主視覺進行設計</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">圖片上傳功能</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">使用Vue前端框架</p>
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
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/tjcos/img-project-tjcos-1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/tjcos/img-project-tjcos-2.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/tjcos/img-project-tjcos-3.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/tjcos/img-project-tjcos-4.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/tjcos/img-project-tjcos-5.png" alt="">
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
                        <img src="/images/project/tjcos/img-project-tjcos-1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/tjcos/img-project-tjcos-2.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/tjcos/img-project-tjcos-3.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/tjcos/img-project-tjcos-4.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/tjcos/img-project-tjcos-5.png" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CheckIcon } from '@heroicons/vue/20/solid';
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}
</script>