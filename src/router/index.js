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
            component: () => import('@/views/BlogListViews.vue'),
            meta: {
                showSidebar: true,
                showCarousel: true
            },
        },
        {
            path: '/post/:id',
            name: 'post',
            component: () => import('@/views/BlogPostViews.vue'),
            meta: {
                showSidebar: true,
                showCarousel: true
            },
        },
        {
            path: '/tags/:tag?',
            name: 'tags',
            component: () => import('@/views/TagsViews.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },

        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/AboutViews.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },
        {
            path: '/project',
            name: 'Project',
            component: () => import('@/views/ProjectViews.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/yocue',
            name: 'ProjectYocue',
            component: () => import('@/views/ProjectYocueViews.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/dprc',
            name: 'ProjectDprc',
            component: () => import('@/views/ProjectDprcViews.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        {
            path: '/project/kingshield',
            name: 'ProjectKingShield',
            component: () => import('@/views/ProjectKingShieldViews.vue'),
            meta: {
                showSidebar: false,
                showCarousel: false
            },
        },
        
    ],
});

export default router
