import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state: () =>({
        country: [
            {id :1, name: 'Nigeria'}
        ],
        name: "hassan"
    })
})
