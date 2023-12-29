<template>
    <div class="main-page">
      <div class="top-body">
        <span class="add">Add New Match</span>
        <div>
          <span v-if="!show" class="plus" @click="show =! show"><i class="bi bi-plus"></i></span>
          <span v-else class="plus" @click="show =! show"><i class="bi bi-dash-lg"></i></span>
        </div>
        </div>

       <!-- add  match body  -->
       <div v-if="show">
        <form @submit.prevent="preventDefault">
        <div class="add-match-body">
            <div class="league">
              <label for="league">Select League</label>
              <select class="" aria-label="Default select example" v-model="selectedLeague">
                <option v-for="league in leagues" :key="league" :value="league">
                  {{league}}
                </option>
              </select>
            </div>

            <div class="league">
              <label for="league">Team/Home</label>
              <select class="" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
              </select>
            </div>

            <div class="league">
              <label for="league">Team/Away</label>
              <select class="" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
              </select>
            </div>

            <div class="league">
              <label for="league">Time</label>
              <input type="datetime-local">
            </div>

            <div class="save">
              <button class="save-btn" @click="save">Save</button>
              <span class="close" @click="show =! show">close</span>
            </div>
        </div>
      </form>
      </div>
      {{ selectedLeague }}
<hr>
      <div class="top-body">
        <span class="add">Add New League</span>
        <span class="plus"><i class="bi bi-plus" @click="showAddLeague =! showAddLeague"></i></span>
      </div>
      <!-- add new league  -->
        <div v-if="showAddLeague">
          <form @submit.prevent="preventDefault">
          <div class="add-league-body">
            <label for="league-title">Enter League Name</label>
            <input type="text" v-model="leagueTitle">
          </div>
        </form>
        </div>
    </div>
   
</template>

<script setup>
import { useTaskStore } from "@/store/Taskstore";
import { ref } from "vue";

const showAddLeague = ref(false)
const preventDefault = () =>{
  console.log("Form Submission Preventef")
  return false
}
const selectedLeague = ref('')

const save = () =>{
  selectedLeague.value = ''
}
const task = useTaskStore()
const leagues = task.$state.leagues
const show = ref(false)
console.log(leagues)

</script>

<style>
/* main page  */
.main-page{
  width: 50%;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 8px;
}
.top-body{
  display: flex;
  justify-content: space-between;
}
.add, .plus{
  padding: 5px;
  background-color: #fff;
  color:#222831;
  border-radius: 4px;
}
.add-match-body{
  margin-top: 20px;
  border-top: 1px solid #fff;
  justify-content: space-between;
  align-content: center;
  font-size: 1.2em;
}
.league{
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
.add-match-body>:first-child{
  margin-top: 20px;
}
.league>:last-child, .add-league-body>:last-child{
  /* flex-grow: 0.8; */
  width: 70%;
  padding: 4px;
  border-radius: 4px;
}
.save{
  display: flex;
  justify-content: end;
  margin-top: 10px;
}
.save-btn, .close{
  background-color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
}
.close{
  color:red;
  margin-left:5px;
}
/* add new league  */
.add-league-body{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width:370px){
  .main-page{
    width: 100%;
    
  }
  .league>:last-child, .add-league-body>:last-child{
    width: 50%;
    padding: 1px;
  }
  .league>:first-child, .add-league-body>:first-child{
    font-size: medium;
  }
}
</style>