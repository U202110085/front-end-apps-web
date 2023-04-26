import Home from './components/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import PostHome from '@/components/PostHome.vue';
import UpdatePost from '@/components/update-post.vue';
import UserComponent from '@/components/UserComponent.vue';
import updateUser from '@/components/update-user.vue';
//aqui se deberian agregar los imports como para que en el codigo quedo igual de limpio en el caso de Home
//pero

const routes = [
    { path: '/', component: Home },
    { path: '/addtutorial', component: () => import('./components/AddTutorial.vue') },
    { path: '/user', component: UserComponent },
    { path: '/users', component: UserComponent },
    { path: '/user/:id', component: updateUser, name: 'user' },
    { path: '/post', component: PostHome },
    { path: '/post/:id', component: UpdatePost, name: 'post' },
    { path: '/:catchAll(.*)', component: () => import('./components/not-found.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
