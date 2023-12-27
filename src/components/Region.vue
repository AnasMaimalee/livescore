<template>
    
  <div class="region">
    <a href="">
        <div class="country-detail">
        <div class="country-flag">
             <img src="../assets/download.png" alt="">
             England
            </div>
    </div>
    </a>

    <a href="">
        <div class="country-detail">
        <div class="country-flag">
            <img src="../assets/ball.png" alt="" class="rounded-ball">
           Champions League
        </div>
    </div>
    </a>
    <a href="">
        <div class="country-detail">
        <div class="country-flag">
            <img src="../assets/spain.png" alt="">
            Spain
        </div>
    </div>
    </a>
    
    <a href="">
        <div class="country-detail">
        <div class="country-flag">
            <img src="../assets/italy.png" alt="">
            Italy
        </div>
    </div>
    </a>
    
    <a href="">
        <div class="country-detail">
        <div class="country-flag">
            <img src="../assets/germany.png" alt="">
            Germany
        </div>
    </div>
    </a>
  </div>
</template>

<script setup>

</script>

<style scoped>
    .region{
        
    }
    .country-detail{
        margin-bottom:-15px;
        font-size: 15px;
        background-color: #434343;
        border-radius: 7px;
        padding: 10px;

    }
    .country-detail>:first-child{
        /* margin-right: 8px; */
    }
    .country-flag img{
        width: 20px;
        margin-right: 5px;
    }
    .rounded-ball{
        border-radius: 50%;
    }
    .country-detail:hover{
        background-color: #1d2427;
    }
</style>