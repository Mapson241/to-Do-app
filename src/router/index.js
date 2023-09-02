import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import Task from "../views/task.vue"


const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/add",
        name: "add",
        component: Task,
    },
    {
        path: "/edit/:id",
        name: "Edit",
        props: true,
        component: Task,
    },

    {
        path: "/:pathMacth(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach()

export default router;
