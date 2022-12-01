import { defineStore } from 'pinia'

interface ITodo {
    id: number,
    name: string,
    done: boolean
}

export const useTodoStore = defineStore('TodoStore', {
    state: () => {
        return {
            thingsTodo: [] as ITodo[],
            ids: [] as number[]
        }
    },
    getters: {
        getDone() : ITodo[] {
            return this.thingsTodo.filter(item => item.done === true)
        },
        getYetToBeCompleted() : ITodo[] {
            return this.thingsTodo.filter(item => item.done === false)
        }
    },
    actions: {
        async refillStore() {
            
            const req = await fetch('http://localhost:5097/api/TodoItems')
            const res = await req.json()
            this.thingsTodo = res;
        },
        async addThingTodo(thingTodo: string) {

            let maxId: number = 1

            if(this.thingsTodo.length){
                maxId = this.thingsTodo.map(item => item.id).sort()[this.thingsTodo.length - 1] + 1
            }

            const body = {
                id: maxId,
                name: thingTodo,
                done: false
            }

            await fetch('http://localhost:5097/api/TodoItems',{
                method: 'POST',
                headers: {
                    'accept':'text/plain',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(body)
            })

            this.refillStore()
        },
        async removeThingTodo(id: number) {

            await fetch(`http://localhost:5097/api/TodoItems/${id}`,{
                method:'DELETE',
                headers: {
                    'accept':'*/*'
                }
            })

            this.refillStore()
        },
        async changeTodo(id: number, name: string, completed: boolean) {

            const body = JSON.stringify({
                id: id,
                name: name,
                done: completed
            })

            await fetch(`http://localhost:5097/api/TodoItems/${id}`,{
                method: 'PUT',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: body
            })

            this.refillStore();
        }
    }
})