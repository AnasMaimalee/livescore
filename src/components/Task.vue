<template>
    <div v-for="count in country" :key="count.id">
        <span>{{  count.name }}</span><br>
        <div v-for="src in logo" :key="src.id">

            <img :src="getImageUrl(src.src)" alt="">
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '../store/Taskstore';''
const task = useTaskStore()
const name =  task.name
const logo = (task.laliga)
const country = task.country
const league = task.leagues
console.log(league)
console.log(country)
console.log(name)
function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>