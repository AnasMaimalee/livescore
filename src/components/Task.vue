<template>
    <div v-for="count in country" :key="count.id">
        <span>{{  count.name }}</span>
    </div>
</template>

<script setup>
import { useTaskStore } from '../store/Taskstore';''
const task = useTaskStore()
const name =  task.name
const country = task.country
console.log(country)
console.log(name)
</script>