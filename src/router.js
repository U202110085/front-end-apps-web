import { createRouter, createWebHashHistory } from "vue-router";
import AddTutorial from "@/components/AddTutorial.vue";
import LibraryComponent from "@/components/Library.vue";

const routes = [
    { path: "/", component: LibraryComponent },
    { path: "/addTutorial", component: AddTutorial },
    {},
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
