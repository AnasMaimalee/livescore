<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import WebSocketServices from '../websocket/webSocketService'
const webSocketService = new WebSocketServices()

onMounted(() => {
  const webSocketURL = 'ws://localhost:8080'
  webSocketService.connect(webSocketURL)

  webSocketService.addEventListener('message', (event) =>{
    const data = JSON.parse(event.data);
    console.log('Recieved Websocket message:', data)
  })
})
</script> 