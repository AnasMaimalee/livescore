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
                        <img :src="getImageUrl(match.clublogo)" alt="">
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
const viewMatch = computed(() => taskStore.$state.matches.filter(match => match.id == matchId))
console.log(viewMatch)
console.log(matchId)

function getImageUrl(name){
    return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<style>

</style>