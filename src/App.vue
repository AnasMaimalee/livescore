<template>
  <div class="section">
        <!-- computer -->
        <div class="laptop-header">
          <span @click="openNav" class="sidebtn">
            <div class="i-line">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </span>
          <span class="livescore">LiveScore</span>
          <div class="ball-score">
            <img src="./assets/ball.png" alt="">
            <span>Scores</span>
          </div>
          <div class="favourites">
            <i class="bi bi-heart"></i>
            <span>Favourites</span>
          </div>
          <div class="news">
            <i class="bi bi-newspaper"></i>
            <span>News</span>
          </div>
          <div class="get-app">
            <i class="bi bi-arrow-down-circle"></i>
            <span>Get the app</span>
          </div>
          <div class="slash">|</div>
          <div class="livescore-bet">
            LiveScore <span>Bet</span>
          </div>
        </div>
        <!-- mobile  -->
        <div class="header">
          <span @click="openNav" class="sidebtn">
            <div class="i-line">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </span>
          <span class="livescore">LiveScore</span>
          <span class="search-btn"  @click="openSearchnav"><i class="bi bi-search"></i></span>
        </div>

          <!-- sidebar  -->
          <div class="sidenav" id="mySidenav">
            <div class="top-nav">
              <div class="left">
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
              </div>
              <div class="right">
                <a href="javascript:void(0)" class="closebtn" @click="closeNav">x</a>
              </div>
            </div>
          </div>
          <!-- end of side bar  -->
          <!-- searchbar  -->
          <div class="searchnav" id="mySearchnav">
            <div class="search-top">
              <div class="left">
                <a href="javascript:void(0)" class="closebtn" @click="closeSearchNav">x</a>
              </div>
              <div class="right">
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
                <a href="">Link 1</a>
              </div>
            </div>
          </div>
          <!-- end of search nav  -->

          <!-- body  -->
          <div class="body-top">
            <a href="">Football</a>
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
                <img src="./assets/ball.png" alt="">
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
    </div>  
</template>
<script setup>
import England from "./components/England.vue";
import Nigeria from "./components/Nigeria.vue";
import Spain from "./components/Spain.vue";
import Footer from "./components/Footer.vue"
import Task from "./components/Task.vue"
import Region from "./components/Region.vue";

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
          body{
            background-color: #222831;
            color: #fff;
            margin: 30px 200px;
          }
          a{
            text-decoration: none;
            color: white;
          }
          .section{
            /* margin-bottom:50p 40x; */
            flex: 1;
          }
          .header{
            /* background-color: #111; */
            padding: 5px;
            color: white;
            display: flex;
            border-bottom: 1px solid #fff;
            justify-content: space-between;
          }
          .header>:first-child{
           color: #fff;
           margin-top: 2;

          }
         
         
          .header>:last-child{
            border:none;margin-top: 4px;margin-right: 7px;
            /* background-color: black; */
          }
         .header{
          display: none;
         }
          .sidebtn{
            margin-top: 6px;
            margin-left: 10px;
          }
        
          .line{
            width: 10px;
            border-top: 1px solid #fff;
            color: #fff;
            padding: 3px;
          }
         .sidenav{
            height: 100% ;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: -3;
            background-color: #222831;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
            border-right: 1px solid  #fff;
         }
        
         .sidenav a{
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
         }
         .sidenav a:hover{
          color :#f1f1f1
         }
         .closebtn{
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 36px;
          margin-left: 50px;
         }
         /* livescore  */
         .livescore{
          font-size: 1.5em;
         }
         /* search part  */
         .searchnav{
            height: 100% ;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #222831;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
         }
         /* laptop header  */
         .laptop-header{
          font-size: 1.5em;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
         }
         .laptop-header>:nth-child(2){
          flex-grow:0.1 ;
          margin-left: 0px;
         }
         .laptop-header>:last-child{
          margin-right: 10px;
         }
         .laptop-header .livescore{
          font-size: xx-large;
          
         }
         /* main body  */
         .main-body{
          display: flex;
          justify-content: space-between;
         }
         .main-body a:hover{
          background-color: red;
         }
         .main-body>:first-child{
          border: 1px solid #fff;
          height: auto;
          border-radius: 9px;
          flex-grow: 0;
         }
         .bi-search{
          
         }
         .search-area{
          padding: 15px;
          margin-bottom: 5px;
         }
         .search-area i{
          margin-right: 5px;
         }
         .search-area input{
          border: none;
          margin-left: 5px;
          padding: 6px;
          background-color: #222831;
         }
         .main-content{
          border-top: 1px solid #fff;
         }
         .main-body>:nth-child(2){
          flex-grow: 0.9;
          padding: 15px 5px;
          border-radius: 9px;
          border: 1px solid #fff;
         }
         /* region  */
         .region-main{
          margin: 25px 20px;
          /* padding: 5px; */
          display: flex;
          justify-content: space-between;
         }
         .region-part{
          margin-bottom: 10px;
         }
         .ball-score>:first-child, .favourites>:first-child, .news>:first-child, .get-app>:first-child{
          margin-right: 10px;
          align-items: center;
         }
         
         .ball-score img{
          border-radius: 50%;
          width: 20px;
         }
         /* main top body  */
         .body-top{
          margin-top: 30px;
          display: flex;
          font-size: medium;
          /* justify-content: space-around; */
          /* overflow-x: scroll; */
         }
         .body-top a{
          text-decoration: none;
          padding: 5px 20px;
          background-color: #3a4042;
          border-radius: 20px;
          color: #818181;
          margin-left: 15px;
          width: auto;
          /* overflow: scroll; */
         }
         .body-top a:hover{
          background-color: #1d2427;
         }
         .body-top>:first-child{
          background-color: #fff;
         }
         .bet-advert{
          color: #fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #cf4647;
          padding: 10px;
          border-radius: 8px;
          margin-left: 5px;
         }
         .ls-bet{
          background-color: #ff5722;
          padding: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
         }
         .ls-bet>:first-child{
          color: #222831;
         }
         .end{
          background-color: #222831;
          padding: 9px;
          border-radius: 7px;
         }
         /* country matchesheader */
         .country-detail{
          display: flex;
          justify-content: space-between;
          margin: 20px 15px;
          align-items: center;
         }
         .right-arraw{
          
         }
         .country-info{
          display: flex;
          justify-content: space-between ;
          
         }
         .country-info img{
          width: 30px;
          height: 30px;
          margin-right: 9px;
         }
         .country-name{
          display: flex;
          flex-direction: column;
         }
         .country-name>:first-child{
          font-weight: bolder;
          font-size: medium;
          margin-top: -5px;
         }
         /* matches  */
         .matches{
          background-color: #434343;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
          margin: 1px 5px;
          border-radius: 5px;
          border-left: 3px solid  #ff5722;
          margin-top: 5px;
         }
         .matches:hover{
          background-color: #1d2427;
         }
         .time{
          font-size: x-small;
         }
         .matches .time{
          display: flex;
          width: 40px;
         }
         .club-logo{
          /* margin-left: -20px; */
          flex-grow: 0.001;
         }
         .club-logo img{
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-top: 5px;
         }
         .logo-clubNames{
          display: flex;
          flex-direction: column;
          /* margin-left: -30px; */
         }
         .club-name{
          /* margin-left: -20px; */
          flex-grow: 0.8;
         }
         .club-name .away-name{
          margin-bottom: -5px;
         }
         .score{
          display: grid;
          /* margin-left: 50px; */
         }
         .home-name, .score .home{
          margin-bottom: 4px;
          font-size: medium;

         }
         .away-name, .score .away{
          margin-top: 6gpx;
          font-size: medium;

         }
         .matches>:last-child{
          margin-right: 10px;
         }
         .footer{
          display: none;
          background-color: #212121;
          position: fixed;
          bottom: 0;
          width: 100%;
          columns: #fff;
          padding: 10px ;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
         }
         .footer div{
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 0px 5px;
         }
         .contain .first img{
          width: 25px;
          height: 25px;
          border-radius: 50%;
         }
         .first, .second, .third{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
         }
         .ls-bet-down{
          font-size: xx-small;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px;
          background-color: #ff5722;
          border-radius: 5px;
          height: 30px;
         }

        @media screen and (max-width:370px) {
          body{
            margin: 0;
            padding: 0;
          }
          .footer{
            display: block;
          }
          .header{
            display: flex;
          }
          .laptop-header{
            display: none;
          }
          .main-body>:nth-child(2){
            padding: 0px 0px;
            border: none;
            width: 100%;
          }
          .main-body>:first-child{
            display: none;
          }
          .main-body>:last-child{
            display: none;
          }
         
      }
       </style>
