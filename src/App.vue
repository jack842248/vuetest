<template>
  <header>
    <Navbar></Navbar>
    <Carousel v-if="route.meta.showCarousel"></Carousel>
  </header>
  <main class="relative">
    <button
      v-if="route.meta.showSidebar"
      @click="toggleSidebar()"
      type="button"
      class="lg:hidden absolute bg-emerald-700 text-neutral-100 text-nen -top-8 p-1 px-2 z-1">
      <ChevronDoubleRightIcon
        v-if="!sidebarOpen"
        class="size-6">
      </ChevronDoubleRightIcon>
      <ChevronDoubleLeftIcon
        v-else
        class="size-6">
      </ChevronDoubleLeftIcon>
    </button>
    <aside
      v-if="route.meta.showSidebar"
      :class="sidebarOpen?'show':''">
      <Sidebar class="sticky top-0 h-screen overflow-y-auto"></Sidebar>
    </aside>
    <router-view
      :class="sidebarOpen?'hidden':''"
      v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath"/>
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { ChevronDoubleRightIcon ,ChevronDoubleLeftIcon } from '@heroicons/vue/20/solid'
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Carousel from '@/components/Carousel.vue';

const route = useRoute();

const sidebarOpen = ref(false);

const toggleSidebar = ()=> {
  sidebarOpen.value = !sidebarOpen.value;
}



watch(
  () => route.fullPath,
  () => {
    sidebarOpen.value = false
  }
)

const mediaQuery = window.matchMedia('(min-width: 1024px)')

const handleResize = (e) => {
  if (e.matches) {
    sidebarOpen.value = false
  }
}

onMounted(() => {
  mediaQuery.addEventListener('change', handleResize)
})

onBeforeUnmount(() => {
  mediaQuery.removeEventListener('change', handleResize)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>