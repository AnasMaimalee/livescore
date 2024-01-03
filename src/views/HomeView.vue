<template>
 <!-- body  -->
 <div class="body-top">
            <router-link :to="{name:'home'}">Football</router-link>
            <a href="">Hockey</a>
            <a href="">BasketBall</a>
            <a href="">Tennis</a>
            <a href="">Cricket</a>
            <a href="">Race</a>
         </div>
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
            <div class="center">
              <!-- center  -->
          <!-- betadvert  -->
          <div class="bet-advert">
            <div class="ls-bet">
              <span>LS</span>
              <span>Bet</span>
            </div>
            <div class="center">
              N100,000 Welcome Bonus <br>
              when yo join Livescore Bet*
            </div>
            <div class="end">
              <span>GET NOW</span>
            </div>
          </div>
          <div class="country-leagues">
            
            <!-- maches  --> 
            <england>

            </england>
            <spain>

            </spain>
          <!-- spain  -->
         
          <!-- nigeria  -->
          <nigeria>

          </nigeria>
        </div>

            </div>
            <div class="right">
              ia ma right
            </div>
         </div> 
         
        <task></task>
          <!-- footer  -->
          
          <div class="footer">
            <div class="contain">
              <div class="first">
                <img src="../assets/ball.png" alt="">
                <span class="title">Scores</span>
              </div>
              <div class="second">
                <i class="bi bi-heart"></i>
                <span class="title">Favourite</span>
              </div>
              <div class="third">
                <i class="bi bi-newspaper"></i>
                <span class="title">News</span>
              </div>
              <div class="forth">
                <div class="ls-bet-down">
                  <span>LS</span>
                  <span>Bet</span>
                </div>
              </div>
          </div>
        </div>
        <liveve-match></liveve-match>
</template>

<script setup>

import England from "../components/England.vue";
import Nigeria from "../components/Nigeria.vue";
import Spain from "../components/Spain.vue";
import Footer from "../components/Footer.vue"
import Task from "../components/Task.vue"
import Region from "../components/Region.vue";
import liveveMatch from "../components/liveMatch.vue"

function openNav(){
        document.getElementById("mySidenav").style.width = "250px";
       }
       function closeNav(){
        document.getElementById("mySidenav").style.width = "0px";
       }

       function openSearchnav(){
        document.getElementById("mySearchnav").style.width = "100%"
       }
       function closeSearchNav(){
        document.getElementById("mySearchnav").style.width = "0px";
       }

</script>
<style>
.left{
  height: auto;
}
</style>