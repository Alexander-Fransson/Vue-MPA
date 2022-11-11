import {createRouter, createWebHashHistory} from 'vue-router';
import Menu from './views/Menu.vue';

const routes = [
    {name:'Menu', path: '/', component: Menu}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})