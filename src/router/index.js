import { auth } from "@/firebaseConfig.js"
import { onAuthStateChanged } from "firebase/auth"
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/list/1',
        },
        {
            path: '/list/:id',
            name: 'list',
            component: () => import('@/views/BlogList.vue'),
            meta: {
                showSidebar: true,
                showCarousel: true
            },
        },
        {
            path: '/post/:id',
            name: 'post',
            component: () => import('@/views/BlogPost.vue'),
            meta: {
                showSidebar: true,
                showCarousel: true
            },
        },
        {
            path: '/tags/:tag?',
            name: 'tags',
            component: () => import('@/views/Tags.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/project',
            name: 'project',
            component: () => import('@/views/ProjectList.vue'),
            meta: {
                requiresAuth: true,
                showSidebar: false,
                showCarousel: false
            },
            children:[
                {
                    path: '',
                    name: 'project-overview',
                    component: () => import('@/views/ProjectOverview.vue'),
                },
                {
                    path: 'yocue',
                    name: 'project-yocue',
                    component: () => import('@/views/Yocue.vue'),
                },
                {
                    path: 'dprc',
                    name: 'project-dprc',
                    component: () => import('@/views/Dprc.vue'),
                },
                {
                    path: 'tjcos',
                    name: 'project-tjcos',
                    component: () => import('@/views/Tjcos.vue'),
                },
                {
                    path: 'king-shield',
                    name: 'project-king-shield',
                    component: () => import('@/views/KingShield.vue'),
                },
                {
                    path: 'house579',
                    name: 'project-house579',
                    component: () => import('@/views/House579.vue'),
                },
                {
                    path: 'home-service',
                    name: 'project-home-service',
                    component: () => import('@/views/HomeService.vue'),
                },
                {
                    path: 'ciazhan',
                    name: 'project-ciazhan',
                    component: () => import('@/views/Ciazhan.vue'),
                },
                {
                    path: 'kumon',
                    name: 'project-kumon',
                    component: () => import('@/views/Kumon.vue'),
                },
                {
                    path: 'magic-abc',
                    name: 'project-magic-abc',
                    component: () => import('@/views/MagicAbc.vue'),
                },
                {
                    path: 'cycac',
                    name: 'project-cycac',
                    component: () => import('@/views/Cycac.vue'),
                },
                {
                    path: 'digital-travel',
                    name: 'project-digital-travel',
                    component: () => import('@/views/DigitalTravel.vue'),
                },
                {
                    path: 'ikea',
                    name: 'project-ikea',
                    component: () => import('@/views/Ikea.vue'),
                },
            ]
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const loggedIn = localStorage.getItem('loggedIn')
        if (loggedIn === 'true') next()
        else next({ name: 'login' })
    } else {
        next()
    }
})

export default router
