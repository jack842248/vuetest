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
            name: 'About',
            component: () => import('@/views/About.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },
        // {
        //     path: '/project',
        //     name: 'Project',
        //     component: () => import('@/views/ProjectList.vue'),
        //     meta: {
        //         showSidebar: false,
        //         showCarousel: false
        //     },
        // },
        {
            path: '/project/yocue',
            name: 'ProjectYocue',
            component: () => import('@/views/ProjectYocue.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/dprc',
            name: 'ProjectDprc',
            component: () => import('@/views/ProjectDprc.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/tjcos',
            name: 'ProjectTjcos',
            component: () => import('@/views/ProjectTjcos.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/king-shield',
            name: 'ProjectKingShield',
            component: () => import('@/views/ProjectKingShield.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/house579',
            name: 'ProjectHouse579',
            component: () => import('@/views/ProjectHouse579.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/home-service',
            name: 'ProjectHomeService',
            component: () => import('@/views/ProjectHomeService.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/ciazhan',
            name: 'ProjectCiazhan',
            component: () => import('@/views/ProjectCiazhan.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/kumon',
            name: 'ProjectKumon',
            component: () => import('@/views/ProjectKumon.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/magic-abc',
            name: 'ProjectMagicAbc',
            component: () => import('@/views/ProjectMagicAbc.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/cycac',
            name: 'ProjectCycac',
            component: () => import('@/views/ProjectCycac.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/digital-travel',
            name: 'ProjectDigitalTravel',
            component: () => import('@/views/ProjectDigitalTravel.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/ikea',
            name: 'ProjectIkea',
            component: () => import('@/views/ProjectIkea.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
    ],
});

export default router
