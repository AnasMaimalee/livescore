<template>
  <div class="content">
    <!-- left  -->
    <div class="main-page">
      <div class="top-left">
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
              <label for="league" class="label">League</label>
              <select class="" aria-label="Default select example" v-model="selectedLeague">
                <option v-for="league in leagues" :key="league" :value="league">
                  {{league}}
                </option>
              </select>
            </div>

            <div class="league">
              <label for="league" class="label">Home</label>
              <select class="" aria-label="Default select example" v-model="teamHome">
                <option v-for="club in clubs" :key="club" selected :value="club.clubName">
                  {{ club.clubName }}
                </option>
              </select>
            </div>

            <div class="league">
              <label for="league" class="label">Away</label>
              <select class="" aria-label="Default select example" v-model="teamAway">
                <option v-for="club in clubs" :key="club" selected :value="club.clubName">
                  {{ club.clubName }}
                </option>
              </select>
            </div>

            <div class="league">
              <label for="league" class="label">Time</label>
              <input type="datetime-local" v-model="matchTime">
            </div>

            <div class="save">
              <span class="save-btn" @click="saveMatch">Save</span>
              <span class="close" @click="show =! show">close</span>
            </div>
        </div>
      </form>
      </div>
      {{ selectedLeague }}
    
    </div>
    <div class="main-page">
      <div class="top-body">
        <span class="add">Add New League</span>
        <div>
          <span v-if="!showAddLeague" class="plus"><i class="bi bi-plus" @click="showAddLeague =! showAddLeague"></i></span>
          <span v-else class="plus"><i class="bi bi-dash-lg" @click="showAddLeague =! showAddLeague"></i></span>
        </div>
      </div>
      <!-- add new league  -->
        <div v-if="showAddLeague">
          <form @submit.prevent="preventDefault">
          <div class="add-league-body">
            <label for="league-title" class="label">Name</label>
            <input type="text" v-model="newAddedLeague">
          </div>
          <div class="save">
            <button class="save-btn" @click="saveLeagueBtn">Save</button>
          </div>
        </form>
        {{ newAddedLeague }}
        </div>
    </div>
    <!-- right  -->
    <div class="main-page">
      <div class="top-right">
        <span class="add">Add New Club</span>
        <div>
          <span v-if="!showAddClub" class="plus" @click="showAddClub =! showAddClub"><i class="bi bi-plus"></i></span>
          <span v-else class="plus" @click="showAddClub =! showAddClub"><i class="bi bi-dash-lg"></i></span>
        </div>
        </div>

       <!-- add  match body  -->
       <div v-if="showAddClub">
        <form @submit.prevent="preventDefault">
        <div class="add-club-body">
            <div class="league">
              <label for="league" class="label">League</label>
              <select class="" aria-label="Default select example" v-model="clubLeague">
                <option v-for="league in leagues" :key="league" :value="league">
                  {{league}}
                </option>
              </select>
            </div>
            <div class="league">
              <label for="club-name" class="label">Name</label>
              <input type="text" v-model="clubName">
            </div>
            <div class="league">
              <label for="logo" class="label">Logo *img</label>
              <input type="file" @change="handleFIleChange">
            </div>
            <div class="save">
              <span class="save-btn" @click="saveclub">Save</span>
              <span class="close">close</span>
            </div>
        </div>
      </form>
      </div>
    
    </div>
    ff
    <div v-for="club in clubs" :key="club.clubName">
      {{ club.clubName }}
   </div>
   <div v-for="matche in magtches" :key="matche">
    {{  matche.league}}
    {{ matche.teamAway }} {{ matche.teamHome }} {{ matche.matchTime }}
  </div>
  </div>
    3w
  
</template>

<script setup>
import { useTaskStore } from "@/store/Taskstore";
import { ref } from "vue";
const task = useTaskStore()
const show = ref(true)
const showAddClub = ref(false)
const showAddLeague = ref(false)
const preventDefault = () =>{
  console.log("Form Submission Preventef")
  return false
}
const matchTime = ref('')
const selectedLeague = ref('')
const teamAway = ref('')
const teamHome = ref('')

const saveMatch = () =>{
  console.log("teamAway")
  console.log(teamAway)
  const object = {league: selectedLeague.value, teamAway: teamAway.value, teamHome: teamHome.value, matchTime: matchTime.value }
  task.addMatche(object)
  selectedLeague.value = ''
  matchTime.addClub = null
}

const clubLeague = ref('')
const clubName = ref('')
const clubLogo = ref('')
const newAddedLeague = ref('')

const handleFIleChange = (event) =>{
  const selectedFile = event.target.files[0]
  clubLogo.value = selectedFile
}
const saveclub = () =>{
  const object = {league: clubLeague.value, clubName: clubName.value, clubLogo: clubLogo.value}
  task.addClub(object)
  clubLeague.value = ''
  clubName.value = ''
  clubLogo.value = null

  task.addClubLogo(clubLogo.value)
}


const clubs = task.$state.clubs
console.log(clubs)
const matches = task.$state.matches
console.log(matches)

const leagues = task.$state.leagues
// console.log(leagues)

const saveLeagueBtn = () =>{
  task.addLeagues(newAddedLeague.value)
  newAddedLeague.value = ''
}



</script>

<style>
/* main page  */
.content{
  display: grid-row;
  justify-content: space-between;
  /* margin: 10px; */
}
.main-page{
  width: 50%;
  margin: 10px 30px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 8px;
}
.top-left{
  display: flex;
  justify-content: space-between;
}

.top-right{
  display: flex;
  justify-content: space-between;
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
.add-club-body{
  margin-top: 20px;
  border-top: 1px solid #fff;
  justify-content: space-between;
  align-content: center;
  font-size: 1.2em;
}
input[type="file"]{
  border: none;
  color: #fff;
  width: 40px;
  pad: 5px;
  /* background: #fff; */
}
.league{
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
.label{
  flex-basis: 30%;
  text-align: end;
  margin-right: 20px;
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
.save-btn{
  color: #222831;
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
    width: 80%;
    margin: 10px auto;
  }
  
}
</style>