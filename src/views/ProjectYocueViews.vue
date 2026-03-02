<template>
    <div class="w-full bg-neutral-800">
        <div class="container mx-auto">
            <router-link
                to="/project"
                class="flex text-white relative z-50 p-3 m-2">
                <ArrowLeftIcon class="size-6"></ArrowLeftIcon>Back
            </router-link>
            <div class="flex flex-col sm:flex-row py-10 px-5">
                <div class="flex sm:flex-col items-center">
                    <div class="flex sm:flex-col items-center sm:items-start w-full mb-3 sm:mb-0">
                        <span class="hidden sm:block text-sm shrink-0 text-neutral-600 mb-1">PROJECT NAME</span>
                        <h1 class="text-white text-2xl sm:text-3xl font-bold shrink-0 mr-2">
                            鉅晨科技有限公司
                        </h1>
                        <a
                            href="https://www.yocue.com/"
                            target="_blank"
                            class="flex sm:hidden justify-center items-center w-10 h-10 rounded-full text-neutral-100 ml-auto bg-emerald-700 hover:bg-emerald-500">
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
                <p class="ml-auto w-full sm:w-1/2 text-neutral-400 text-sm leading-6">鉅晨科技深耕於充滿人情味的高雄，聚集南部數名有多年豐富經驗與開發熱忱的成員共同組成，不論洽談、規劃、設計、開發及每個細節，鉅晨都有專業的服務團隊用心製作，在與客戶洽談溝通的過程中依據多年的經驗，可量身打造出最人性化、最具代表性的專屬介面與功能，無論APP、網站、系統開發等，都能讓您感受到別出心裁的設計與滿滿的用心。</p>
            </div>
        </div>
        <div class="p-5">
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
                class="project-swiper mb-3">
                <swiper-slide>
                    <img src="/images/img-project-yocue1.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-yocue2.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-yocue3.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-yocue4.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-yocue5.png" alt="">
                </swiper-slide>
            </swiper>
            
        </div>
        
    
    </div>
</template>

<script setup>
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid';
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>