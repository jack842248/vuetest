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
                            救國團探索教育中心
                        </h1>
                        <span class="text-xs text-neutral-100 bg-emerald-700 px-1 rounded">MVC架構</span>
                    </div>
                    <a
                        class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto  sm:mt-auto rounded-full text-center text-emerald-400">還未正式上線<ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <div class="text-left">
                    <p class="w-full ml-0 sm:ml-auto sm:w-2/3 text-neutral-400 text-sm leading-6">
                        由團隊鏈企管顧問公司主辦的探索教育活動官網，完整介紹中心師資團隊與課程內容，並提供企業與單位線上填寫課程洽詢表單，協助快速媒合與規劃客製化體驗課程。
                    </p>
                    <ul class="w-full ml-0 sm:ml-auto sm:w-2/3 text-sm mt-2 leading-6">
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">jquery.animateNumber數字動畫效果</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">課程洽詢表單</p>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="size-3 text-emerald-500"></CheckIcon>
                            <p class="pl-2 text-neutral-400">後台編輯上稿功能</p>
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
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/cycac/img-project-cycac-1.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/cycac/img-project-cycac-2.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/cycac/img-project-cycac-3.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/cycac/img-project-cycac-4.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full max-h-20 aspect-square object-contain" src="/images/project/cycac/img-project-cycac-5.png" alt="">
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
                        <img src="/images/project/cycac/img-project-cycac-1.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/cycac/img-project-cycac-2.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/cycac/img-project-cycac-3.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/cycac/img-project-cycac-4.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/project/cycac/img-project-cycac-5.png" alt="">
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