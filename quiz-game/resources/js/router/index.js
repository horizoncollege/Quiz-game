import { createRouter, createWebHistory } from "vue-router";

import home from '../components/HomePage.vue';
import uitleg from '../components/UitlegPage.vue';
import notFound from '../components/404Page.vue';

const routes = [

    {
        path: '/',
        component: home
    },
    {
        path: '/uitleg',
        component: uitleg
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
})

export default router