<template>

  <div class="mainfirst">
    <div class="text_image">
      <div class="text">
        <img src="../assets/img/Img%20-%20h%20b%20o%20original.png" alt="hbologo">
        <h1 class="texth1">Мы владеем этим городом</h1> <br>
        <span class="text_imagespan1">2022 * 1 Сезон</span> <span  class="text_imagespan2">14+, V, L, N, M</span > <span class="text_imagespan3">QC: 13+</span>
        <p class="textp1">Хроника взлета и падения оперативной группы по контролю <br> оружия полицейского департамента Балтимора.</p>
        <p  class="textp2">Жанры: Драма</p>

        <router-link class="header-list-2-ul" to="/about"><button class="textbutton">Узнать больше</button></router-link>
        <router-link class="header-list-2-ul" to="/actors"><button class="textbutton">Эпизоды</button></router-link>


        <p class="textp3">©HBO Content and Home Box Office, Inc. used under license.
          <br>©Bell Media Inc. All Rights Reserved</p>
        <p  class="textp4">©HBO Content and Home Box Office, Inc. utilisé sous license.
          <br>©Bell Media Inc. Tous droits réservés</p>

      </div>

      <div class="image">
        <img src="../assets/img/mainimg.jpg" alt="mainlogo">
      </div>
    </div>
  </div>

</template>

<style>

.textbutton {
  background: black;
  color: white;
  font-size: 15px;
  width: 215px;
  height: 42px;
  font-family: "Inter", sans-serif;
  border: 1px solid;
  margin-right: 40px;
  margin-top: 76px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.textbutton:hover {
  background-color: white;
  color: black;
}

.textp4 {
  color: #aeaeae;
  font-size: 10px;
  font-family: "Inter", sans-serif;
}

.textp3 {
  color: #aeaeae;
  font-size: 10px;
  font-family: "Inter", sans-serif;
  margin-top: 62px;
}

.textp2 {
  color: #aeaeae;
  font-size: 15px;
  font-family: "Inter", sans-serif;
  margin-top: 5px;
}

.textp1 {
  font-size: 16px;
  line-height:27px ;
  color: #fff;
  font-family: "Inter", sans-serif;
  margin-top: 32px;
}

.image {
  width: 90%;

  margin-top: 60px;
}

.text {
  padding-left: 150px;
  margin-top: 120px;
}

.text_imagespan3 {
  color: #aeaeae;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  border: 1px solid;
  margin-left: 15px;
}

.text_imagespan2 {
  color: #aeaeae;
  font-size: 13px;
  font-family: "Inter", sans-serif;
  border: 1px solid;
  margin-left: 20px;
}

.text_imagespan1 {
  color: #aeaeae;
  font-size: 14px;
  font-family: "Inter", sans-serif;
}

.texth1 {
  margin-top: 10px;
  color: #fff;
  font-size: 53px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

.text_image {
  display: flex;
  justify-content: space-between;
}

.mainfirst {
  background: black;
  width: 100%;
  margin: 0 auto;
  height:1000px ;
}

.image img {
  width: 100%;
}

</style>
<script setup lang="ts">
</script>