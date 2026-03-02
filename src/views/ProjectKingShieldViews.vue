<template>
    <div class="w-full bg-neutral-800">
        <div class="container mx-auto">
            <router-link
                to="/project"
                class="flex text-white relative z-50 p-3 m-2">
                <ArrowLeftIcon class="size-6"></ArrowLeftIcon>Back
            </router-link>
            <div class="flex flex-col sm:flex-row pt-10 px-3">
                <div class="flex sm:flex-col items-center">
                    <div class="flex sm:flex-col items-center sm:items-start w-full mb-2 sm:mb-0">
                        <span class="hidden sm:block text-sm shrink-0 text-neutral-500 mb-1">PROJECT NAME</span>
                        <h1 class="text-white text-3xl font-bold shrink-0 mr-2">
                            金盾智慧科技有限公司
                        </h1>
                        <a
                            href="#"
                            class="flex sm:hidden justify-center items-center bg-emerald-700 w-10 h-10 rounded-full text-neutral-100 ml-auto">
                            <ArrowTopRightOnSquareIcon class="size-5"></ArrowTopRightOnSquareIcon>
                        </a>
                    </div>
                    <a
                        class="hidden sm:flex justify-center items-center ml-auto sm:ml-0 sm:mr-auto  sm:mt-auto rounded-full text-center text-emerald-400"
                        href="https://www.dprc.ncku.edu.tw/"
                        target="_blank">https://www.dprc.ncku.edu.tw/ <ArrowTopRightOnSquareIcon class="size-5 ml-1"></ArrowTopRightOnSquareIcon>
                    </a>
                </div>
                <p class="ml-auto w-full sm:w-1/2 text-white text-sm ">鉅晨科技深耕於充滿人情味的高雄，聚集南部數名有多年豐富經驗與開發熱忱的成員共同組成，不論洽談、規劃、設計、開發及每個細節，鉅晨都有專業的服務團隊用心製作，在與客戶洽談溝通的過程中依據多年的經驗，可量身打造出最人性化、最具代表性的專屬介面與功能，無論APP、網站、系統開發等，都能讓您感受到別出心裁的設計與滿滿的用心。</p>
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
                    <img src="/images/img-project-dprc1.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-dprc2.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-dprc3.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="/images/img-project-dprc4.png" alt="">
                </swiper-slide>
            </swiper>
            
        </div>
        
    
    </div>
</template>

<script setup>
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid';
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