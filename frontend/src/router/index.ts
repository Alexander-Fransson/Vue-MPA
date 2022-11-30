import {createRouter, createWebHashHistory} from 'vue-router'
import Menu from '../views/MenuView.vue'
import TodoList from '../views/TodoListView.vue'

const routes = [
    {name: 'Menu', path: '/', component: Menu},
    {name: 'TodoList', path: '/todo', component: TodoList}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router