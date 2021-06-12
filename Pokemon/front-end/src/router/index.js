import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Dashboard from "@/views/Dashboard";
import Photo from "@/views/Photo";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/pokes/:id',
        name: 'Photo',
        component: Photo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
