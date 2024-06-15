import { createRouter, createWebHistory } from "vue-router";
import CreateUser from "@/components/CreateUser.vue";
import Users from "@/components/Users.vue";
import User from "@/components/User.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Users,
    },
    {
        path: '/create',
        name: 'createUser',
        component: CreateUser,
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;