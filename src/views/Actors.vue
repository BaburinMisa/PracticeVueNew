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
          <div class="carts-actors" v-for="(episode, index) in episodes" :key="index">
            <iframe v-if="index === 0" width="400" height="230" src="https://www.youtube.com/embed/LiUiD6AGaHw?si=Z7DXXTr19f8tg8M9" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                   web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe v-if="index === 1" width="400" height="230" src="https://www.youtube.com/embed/fpG2IAYMzBM?si=F3iLh2Dhha1tQQkG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe v-if="index === 2" width="400" height="230" src="https://www.youtube.com/embed/0XtJQotJxJY?si=lmihvj7oWsR8HJQe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe v-if="index === 3" width="400" height="230" src="https://www.youtube.com/embed/8jt31SBRtHg?si=gsx0602TPlqTm9DJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe v-if="index === 4" width="400" height="230" src="https://www.youtube.com/embed/Iqq168pVMcQ?si=YidpanSHpDjiYszX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe v-if="index === 5" width="400" height="230" src="https://www.youtube.com/embed/ngsnmr06ueQ?si=Ou763dTWK0x--QHJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>{{ episode.name }}</p>
            <h1>{{ episode.description }}</h1>
            <h2>{{ episode.date }}</h2>
          </div>
        </div>
      </div>
    </div>
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