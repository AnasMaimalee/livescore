<template>

<div class="country-leagues" v-if="matchLenght > 0"> 
            <div class="country-matches-header">
              <div class="country-detail">
                <div class="img-logo">
                  <div class="country-info">
                    <img src="../assets/nigeria.png" alt="">
                    <div class="country-name">
                      <span>{{ league }}</span>
                       <span>{{nigeria}}</span>
                    </div>
                  </div>
                </div>
                <div class="right-arraw">
                  &gt;
                </div>
              </div>
            </div>
            <!-- maches  --> 

            <div class="main">
            <div  v-for="liveMatch in liveMatches" :key="liveMatch">
            
              <router-link class="matches" :to="{name:'Match', params:{id:liveMatch.id}}">
              <div class="time">
                {{ liveMatch.matchTime }}
              </div>
              <div class="club-logo">
                <div class="logo-home">
                    <img src="../assets/barcelona.png" alt="">
                  </div> 
                  <div class="logo-away">
                    <img src="../assets/realmadrid.png" alt="">
                </div>
              </div>
              <div class="club-name">
                    <div class="home-name">
                      {{ liveMatch.teamHome }} {{ liveMatch.id }}
                    </div>
                    <div class="away-name">
                      {{ liveMatch.teamAway }}
                    </div>
              </div>
              <div class="score">
                <span class="home">5</span>
                <span class="away">0</span>
              </div>
              <div class="fav">
                <span class="material-symbols-outlined" @click="addToFav(liveMatch.id)">
                   grade
                </span>
              </div>
              </router-link>
            </div>
          </div>
            <!-- 2nd -->
  </div>

</template>


<script setup>
import { computed, ref } from "vue";
import { useTaskStore } from "@/store/Taskstore"

const taskStore = useTaskStore()
const league = ref("Nigeria League")
const nigeria = ref("NPFL")

const matchLenght = taskStore.getMatchLenght
const liveMatches = computed(() =>taskStore.$state.matches)

const addToFav = (payload) =>{
  taskStore.addToFav(payload)
}
</script>

<style>
  .material-symbols-outlined:hover {
  color: blue; 
}


</style>