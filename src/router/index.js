import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name:"home",
        component: () => import('../components/Pages/Vue_home.vue')
    },
    {
        path:"/about",
        name:"about",
        component: () => import('../components/Pages/Vue_about.vue')
    }
]

export default createRouter({
    history: createWebHistory('/'),
    routes
})