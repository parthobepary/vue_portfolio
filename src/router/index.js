import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name:"home",
        component: () => import('../components/Pages/Vue_home.vue')
    },
    {
        path:"/blog",
        name:"about",
        component: () => import('../components/Pages/Vue_blogs.vue')
    },
    {
        path:"/contact",
        name:"contact",
        component: () => import('../components/Pages/Vue_contactroute.vue')
    },
    {
        path:"/project",
        name:"project",
        component: () => import('../components/Pages/Vue_projectroute.vue')
    }

]

export default createRouter({
    history: createWebHistory('/'),
    routes
})