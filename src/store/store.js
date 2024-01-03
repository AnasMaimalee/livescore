import { defineStore } from "pinia";
import { useTaskStore } from "./Taskstore";
import { ref } from "vue";

export const useStore = defineStore('store', {
    state: ()=>({
        kano: "Kano State",
        payload:"Anas Maimalee Hello",
        count: ref(0),
        liveMatches: [
           
        ],
        
    }),

    getters:{
        updatePayload(newValue){
            this.payload = newValue
            console.log(newValue)
            console.log(this.payload)
        },

       
        increment(state){
            this.count += 10
        }
    },

    actions:{
        changePayload(newValue){
            this.payload = newValue
        }
    }

})