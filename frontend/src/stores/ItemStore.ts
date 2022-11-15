import { defineStore } from "pinia";



export const useItemStore = defineStore("ItemStore", {
    state: () => {
        return {
            todos: [
                {name: 'programming', done: false, hidden: false},
                {name: 'philosophise', done: false, hidden: false},
                {name: 'buy shoes', done: false, hidden: false},
                {name: 'visit grandma', done: false, hidden: false},
                {name: 'practise drivig', done: false, hidden: false},
                {name: 'work on AF-bravour', done: false, hidden: false}
            ],
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
        removeChore(choreName: string){
            this.todos = this.todos.filter(chore => chore.name !== choreName);
            console.log('remove');
        },
        async fill(){
            const request = await fetch('http://localhost:9292/api/v1/todos');
            const response = await request.json();
            this.todos = response;
            console.log('filling'); 
        }
    }
});
