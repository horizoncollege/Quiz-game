import {createRouter, createWebHistory} from "vue-router";

import home from '../components/HomePage.vue';
import uitleg from '../components/UitlegPage.vue';
import notFound from '../components/404Page.vue';
import quizlijst from '../components/QuizLijstPage.vue';

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
        path: '/quizlijst',
        component: quizlijst
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
