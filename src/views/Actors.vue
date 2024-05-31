<script setup >
import episodesData from "/src/data/episode.json"
const episodes = episodesData;
</script>

<template>
<div class="wrapper">
  <div class="cont">
  <p class="mainthirdP">Эпизоды</p>
  <div class="season"><p>Сезон 1</p></div>
    <div class="episodes-content">
      <div class="carts">
        <div class="carts-actors" v-for="(episode,index) in episodes" :key="index">
          <img :src="episode.image" alt="episode.name">


          <p>{{episode.name}}</p>
          <h1>{{episode.description}}</h1>
          <h2>{{episode.date}}</h2>
        </div>
      </div>
    </div></div>
  </div>
</template>

<style>
.season{
  margin-top: 2%;
  margin-left:8%;
  margin-bottom:2%;
  font-size: 17px;

}
.mainthirdP{
  font-weight: 400;
  font-size: 24px;
  font-family: "Inter", sans-serif;
  color: white;
  padding-top: 140px;
  margin-left: 140px;
  border-bottom: 2px solid #00c1f3;
  width: 300px;
  padding-bottom: 10px;
  margin-bottom: 2%;
}
.carts-actors video{
  width: 100%;
}
.wrapper {
  font-family: "Inter", sans-serif;
  background: #161616;
  width: 100%;
  height: 1300px;
}
.carts-actors p{
  margin-top: 0.5em;
  color: #FFFFFF;
  font-size:16px;
}
.carts-actors h1{
  margin-top: 0.5em;
   color: #AEAEAE;
   font-size: 15px;
   line-height:27px;
}
p{
  color: #ffffff;
  margin: 0 auto;
}
.carts-actors h2{
  color: #AEAEAE;
  font-size: 13px;
  margin-top: 6%;

}
.carts{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 75px 24px ;
  width: 90%;
}

.episodes-content {
width: 85%;
  margin: 0 auto;
}
@media (max-width: 1200px) {
  .carts {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .carts {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .carts {
    grid-template-columns: 1fr;
    gap: 50px 24px;
  }
}
</style>