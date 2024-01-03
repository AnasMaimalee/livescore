<template>

<div class="country-leagues">
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

            <div v-for="liveMatch in liveMatches" :key="liveMatch">

            <div class="matches" >
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
                <i class="bi bi-heart"></i>
              </div>
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

const liveMatches = computed(() =>taskStore.$state.matches)
</script>

<style>

</style>