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
            component: () => import('@/views/BlogTags.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
            meta: {
                showSidebar: false,
                showCarousel: true
            },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
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
                    component: () => import('@/views/YocueProject.vue'),
                },
                {
                    path: 'dprc',
                    name: 'project-dprc',
                    component: () => import('@/views/DprcProject.vue'),
                },
                {
                    path: 'tjcos',
                    name: 'project-tjcos',
                    component: () => import('@/views/TjcosProject.vue'),
                },
                {
                    path: 'king-shield',
                    name: 'project-king-shield',
                    component: () => import('@/views/KingShieldProject.vue'),
                },
                {
                    path: 'house579',
                    name: 'project-house579',
                    component: () => import('@/views/House579Project.vue'),
                },
                {
                    path: 'home-service',
                    name: 'project-home-service',
                    component: () => import('@/views/HomeServiceProject.vue'),
                },
                {
                    path: 'ciazhan',
                    name: 'project-ciazhan',
                    component: () => import('@/views/CiazhanProject.vue'),
                },
                {
                    path: 'kumon',
                    name: 'project-kumon',
                    component: () => import('@/views/KumonProject.vue'),
                },
                {
                    path: 'magic-abc',
                    name: 'project-magic-abc',
                    component: () => import('@/views/MagicAbcProject.vue'),
                },
                {
                    path: 'cycac',
                    name: 'project-cycac',
                    component: () => import('@/views/CycacProject.vue'),
                },
                {
                    path: 'digital-travel',
                    name: 'project-digital-travel',
                    component: () => import('@/views/DigitalTravelProject.vue'),
                },
                {
                    path: 'ikea',
                    name: 'project-ikea',
                    component: () => import('@/views/IkeaProject.vue'),
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
