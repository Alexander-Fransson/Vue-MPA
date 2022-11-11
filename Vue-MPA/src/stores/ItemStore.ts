import { defineStore } from "pinia";

interface ITodos {
    name: string,
    done: boolean,
    hidden: boolean
}

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
        chores: (state) => state.todos, 
    },
    actions: {
        searchChores(todo: string) {
            this.todos.map(chore => {
                if(!chore.name.includes(todo)){
                    chore.hidden = true;
                }
            })
        }
    }
});
