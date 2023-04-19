import Home from './components/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
//aqui se deberian agregar los imports como para que en el codigo quedo igual de limpio en el caso de Home
//pero

const routes = [
    { path: '/', component: Home },
    { path: '/addtutorial', component: () => import('./components/AddTutorial.vue') },
    { path: '/user/:id', component: () => import('./components/UserComponent.vue') },
    { path: '/:catchAll(.*)', component: () => import('./components/not-found.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
