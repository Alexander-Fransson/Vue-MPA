import { defineStore } from 'pinia'

interface ITodo {
    id: number,
    name: string,
    done: string
}

export const useTodoStore = defineStore('TodoStore', {
    state: () => {
        return {
            thingsTodo: [] as ITodo[],
        }
    },
    getters: {
        
    },
    actions: {
        async refillStore() {
            const req = await fetch('http://localhost:5097/api/TodoItems')
            const res = await req.json()
            this.thingsTodo = res;
            console.log(JSON.stringify(this.thingsTodo))
        },
        async addThingTodo(thingTodo: string) {

            const body = {
                id: this.thingsTodo.length + 1,
                name: thingTodo,
                done: false
            }

            const req = await fetch('http://localhost:5097/api/TodoItems',{
                method: 'POST',
                headers: {
                    'accept':'text/plain',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(body)
            })

            const res = await req.json()
            console.log(res)
            this.refillStore()
        }
    }
})