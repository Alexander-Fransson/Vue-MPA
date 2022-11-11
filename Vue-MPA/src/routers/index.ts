import {createRouter, createWebHashHistory} from 'vue-router';
import Menu from '../views/MenuView.vue';
import Todo from '../views/TodoView.vue';

const routes = [
    {name:'Menu', path: '/', component: Menu},
    {name: 'Todo', path: '/todos', component: Todo},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;