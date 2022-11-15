import { defineStore } from "pinia";

interface ITodo{
    name: string,
    done: boolean,
    hidden: boolean
}

export const useItemStore = defineStore("ItemStore", {
    state: () => {
        return {
            todos: [] as ITodo[],
        }
    },
    getters: {
        count() : number {
            return this.todos.length;
        },
        searchedFor: (state) => {
            return (choreName : string) => state.todos.filter(chore => chore.name.includes(choreName));
        }  
    },
    actions: {
        async removeChore(choreName: string){
            this.todos = await this.todos.filter(chore => chore.name !== choreName);
            console.log('remove');
        },
        async fill(){
            const request = await fetch('http://localhost:9292/api/v1/todos');
            const response = await request.json();
            this.todos = response;
            console.log('filling'); 
        },
        async add(todoItem: ITodo){
            console.log('adding '+todoItem.name);
            //const request = await fetch()
        }
    }
});
