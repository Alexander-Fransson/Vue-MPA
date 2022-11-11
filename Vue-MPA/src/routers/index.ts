import {createRouter, createWebHashHistory} from 'vue-router';
import Menu from './views/Menu.vue';
import Todo from './views/Todo.vue';

const routes = [
    {name:'Menu', path: '/', component: Menu},
    {name: 'Todo', path: '/todo', component: Todo},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})