<template>
   <!-- main body  -->
<br>     <div class="main-body">
            <div class="left">
              <div class="search-area">
                <div class="search-field">
                  <i class="bi bi-search"></i>
                  <input type="text" placeholder="Search....">
                </div>
              </div>

              <div class="main-content">
                <div class="content-detail">

                  <div class="region-part">
                    <div class="region-main">
                    <a href="#">REGION</a>
                    <span>&gt;</span>
                  </div>
                  <region></region>
                  </div>

                  <!-- team  -->
                  <div class="region-part">
                    <div class="region-main">
                    <a href="#">TEAMS</a>
                    <span>&gt;</span>
                  </div>
                  <region></region>
                  </div>
                  <!-- competition  -->
                  <div class="region-part">
                    <div class="region-main">
                    <a href="#">Competition</a>
                    <span>&gt;</span>
                  </div>
                  <region></region>
                  </div>
                </div>
              </div>

            </div>
            <div class="center" v-for="match in viewMatch" :key="match.id">
                <div class="view-head">
                    <div class="left-head">
                        <!-- <img :src="getImageUrl(match.clublogo)" alt=""> -->
                        <span class="">Laliga</span> <br>
                        <span class="">Spain</span>
                    </div>
                    <div class="right-head">
                        <span class="material-symbols-outlined">
                            videocam
                        </span>
                        <span class="material-symbols-outlined">
                            grade
                        </span>
                    </div>
                </div>

                <div class="score-logo">
                    <div class="home-team">
                        <!-- <img :src="getImageUrl()" alt=""> -->
                        <div class="team-logo">
                            <img src="../assets/realmadrid.png" alt="">
                        </div>
                        <div class="team-name">
                            {{ match.teamHome }}
                        </div>
                    </div>

                    <div class="score">
                        
                        <div class="score-part">
                            <div class="home-team-score">
                            1 &nbsp;
                            </div>
                            <span>-</span>
                            <div class="away-team-score">
                                &nbsp;  0 
                            </div>
                        </div>

                        <div v-if="match.status == 1">
                            Full Time
                        </div>
                        <div v-else>
                            64
                        </div>
                    </div>

                    <div class="away-team">
                        <div class="team-logo">
                            <img src="../assets/barcelona.png" alt="">
                        </div>
                        <div class="team-name">
                            {{ match.teamAway }}
                        </div>
                        <!-- <img :src="getImageUrl()" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
</template>
            <!-- <img :src="getImageUrl(src.src)" alt=""> -->

<script setup>
import Region from "@/components/Region.vue";
import { useRoute} from "vue-router"
import { computed, ref } from "vue"
import { useTaskStore } from "@/store/Taskstore";
// const matchId = ref(null)
const taskStore = useTaskStore()
const route = useRoute()
const matchId = route.params.id
const viewMatch = computed(() => taskStore.getLiveMatches.filter(match => match.id == matchId))
console.log(viewMatch)
console.log(matchId)

function getImageUrl(name){
    return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<style scoped>
.view-head{
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    
}
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 15px;
}
.score-logo{
    background-color: #434343;
    display: flex;
    margin: 10px 20px;
    font-size: 1.5em;
    justify-content: space-around;
    border-radius: 20px;
}
.score-part{
    display: flex;
    font-size: 2em;
}
.home-team, .away-team{
    display: grid;
    grid-template-areas: auto 1fr;
    text-align: center;
    padding: 20px;
}
.home-team>:nth-child(2), .away-team>:nth-child(2){
    justify-content: center;
    align-items: center;
}

.score{
    display: grid;
    justify-content: space-around;
    grid-template-areas: auto 1fr;
    text-align: center;
    padding: 20px;
}
</style>