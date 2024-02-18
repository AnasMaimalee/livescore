import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state: () =>({
        country: [
            {id :1, name: 'kano'}
        ],
        leagues:[
            'premier', 'bundesliga','serieA','ligue1',
        ],
        memuna:"memuna",
        matches:[
            {id: 1, teamAway: "kano Pillars", teamHome: "Jigawa State", league: "NPL", status: 1}
        ],
        clubs:[],
        name: "hassan",
        premier:[],
        bundesliga:[],
        serieA:[],
        ligue1:[],
        favMatch: [],

        
        
    }),

    getters:{   
        getLiveMatches(state){
            return state.matches
        },
        getMatchLenght(state){
            return state.matches.length
        }

    },

    actions:{
        addMatche(payload){
            this.matches.push(payload)
        },

        addLeagues(payload){
            const exist = this.leagues.includes(payload)
            if(exist){
                // console.log("league already exist")
            }
            else {
                this.leagues.push(payload) 
            }
        },
        addClub(payload){
            this.clubs.push(payload)
            // console.log(this.clubs)
        },

        addClubLogo(payload){
            // console.log("maimalee")
        },

        addToFav(payload){
            this.favMatch.push(payload)
        }
    }
})
