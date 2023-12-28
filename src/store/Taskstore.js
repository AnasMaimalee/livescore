import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state: () =>({
        country: [
            {id :1, name: 'kano'}
        ],
        leagues:[
            'premier', 'bundesliga','serieA','ligue1',
        ],
        name: "hassan",
        premier:[],
        bundesliga:[],
        serieA:[],
        ligue1:[],
    })
})
