import {createRouter, createWebHistory} from "vue-router";

import home from '../Pages/HomePage.vue';
import uitleg from '../Pages/UitlegPage.vue';
import notFound from '../Pages/404Page.vue';
import quizlijst from '../Pages/QuizLijstPage.vue';

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
