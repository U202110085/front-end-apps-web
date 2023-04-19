import { createRouter, createWebHistory } from "vue-router";
import AddTutorial from "@/components/AddTutorial.vue";
import Home from "@/components/Home.vue";

const routes = [{ path: "/", component: Home }, { path: "/add", component: AddTutorial }, {}];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    mode: "history",
    routes, // short for `routes: routes`
});

export default router;
