<template>

    <div class="country-leagues">
                <div class="country-matches-header">
                  <div class="country-detail">
                    <div class="img-logo">
                      <div class="country-info">
                        <img src="../assets/download.png" alt="">
                        <div class="country-name">
                          <span>{{ engladLeague }}</span>
                           <span>{{premier}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="right-arraw">
                      &gt;
                    </div>
                  </div>
                </div>
                <!-- maches  --> 
                <div class="matches">
                  <div class="time">
                    4
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
                          Manchester United
                        </div>
                        <div class="away-name">
                          Manchester United
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
                <!-- 2nd -->
                <div class="matches">
                  <div class="time">
                    61
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
                          Manchester United
                        </div>
                        <div class="away-name">
                          Manchester United
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
                <!-- 3rd -->
                <div class="matches">
                  <div class="time">
                    HT
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
                          Manchester United
                        </div>
                        <div class="away-name">
                          Manchester United
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
                <!-- 4th -->
                <div class="matches">
                  <div class="time">
                    3
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
                          Manchester United
                        </div>
                        <div class="away-name">
                          Manchester United
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
                <!-- 5th -->
                <div class="matches">
                  <div class="time">
                    60
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
                          Manchester United
                        </div>
                        <div class="away-name">
                          Manchester United
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
                <!-- 6th  -->
                <div class="matches">
                  <div class="time">
                    87
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
                          Barcelona
                        </div>
                        <div class="away-name">
                          Real Madrid
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
    
    </template>
    
    
    <script setup>
import { ref } from "vue";

    const engladLeague = ref("Endland League")
    const premier = ref("Premier")
    </script>
    
    <style>
    
    </style>