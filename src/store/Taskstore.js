import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state: () =>({
        country: [
            {id :1, name: 'kano'}
        ],
        leagues:[
            'premier', 'bundesliga','serieA','ligue1',
        ],
        matches:[],
        name: "hassan",
        premier:[],
        bundesliga:[],
        serieA:[],
        ligue1:[],
    }),

    actions:{
        addMatche(payload){
            console.log(this.matches)
            this.matches.push(payload)
            console.log("success")
        },

        addLeagues(payload){
            const exist = this.leagues.includes(payload)
            if(exist){
                console.log("league already exist")
            }
            else {
                this.leagues.push(payload) 
            }
        }
    }
})
