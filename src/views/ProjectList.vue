<template>
    <div class="relative w-full h-full bg-neutral-800">
        <div class="absolute top-0 bottom-0 left-1/2 grid grid-cols-4 sm:grid-cols-7 w-full h-full -translate-x-1/2">
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
            v-if="route.name !== 'project-overview'"
            to="/project"
            class="w-fit group flex text-neutral-400 relative p-3 m-2 hover:text-emerald-700 z-50">
            <ArrowLeftIcon class="ani-move size-6"></ArrowLeftIcon>回作品列表
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { ArrowLeftIcon } from '@heroicons/vue/20/solid';

const route = useRoute();
</script>