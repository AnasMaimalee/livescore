<template>
     <div class="matches" v-for="liveMatch in liveMatches" :key="liveMatch.teamAway">
        
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
                      {{ liveMatch.teamHome }}
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
                <i class="bi bi-heart"></i>
              </div>
    </div>
</template>

<script setup>
import { useStore } from '@/store/store';
import { useTaskStore } from '@/store/Taskstore';
import { computed } from 'vue';

const store = useStore()
const taskStore = useTaskStore()

// const liveMatches = store.liveMatches
const liveMatches = computed(()=> taskStore.matches)
console.log(liveMatches)

</script>


<style>


</style>