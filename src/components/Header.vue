<script>
import Sign from "../components/Sign.vue";
export  default {
  components: {Sign},
  data(){
    return{
      isActiveBron:false,
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const subscribeButton = document.getElementById('subscribe-button');
  let subscribed = false; // Переменная для хранения состояния подписки

  // Функция для изменения состояния кнопки и текста
  function toggleSubscription() {
    subscribed = !subscribed; // Инвертируем состояние подписки
    if (subscribed) {
      subscribeButton.textContent = 'Вы подписаны!';
      subscribeButton.classList.add('subscribed');
    } else {
      subscribeButton.textContent = 'Подписаться';
      subscribeButton.classList.remove('subscribed');
    }
  }

  subscribeButton.addEventListener('click', toggleSubscription);
});
</script>
<template>
  <header>

    <div class="header-items">
      <ul class="header-list-1">
        <li><a href="#"><img src="../assets/img/Link%20-%20Crave%20Logo.png" alt="logo"></a></li>
        <router-link class="header-list-1-ul" to="/main">Главная</router-link>
        <router-link class="header-list-1-ul" to="/about">О сериале</router-link>
        <router-link class="header-list-1-ul" to="/actors">Эпизоды</router-link>
      </ul>

      <ul class="header-list-2">
        <li><a href="#"><button id="subscribe-button" class="header-list-2-button">Подписаться</button></a></li>
        <li><img @click="isActiveBron = true" id="VK" src="../assets/img/SignIn.png" alt="signin"></li>
        <Sign v-if="isActiveBron"></Sign>
      </ul>
    </div>
  </header>
</template>

<style>
.header-list-2-button {
  width: 121px;
  height: 40px;
  color: #00083f;
  background: #00c1f3;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: -2px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.header-list-2-button.subscribed {
  background-color: white;
  color: black;
}

.header-list-2-button:hover {
  background-color: rgb(130, 255, 240);
}

header {
  width: 100%;
  height: 3.5em;
  background: #000;
  color: white;
  font-family: "Inter", sans-serif;
  margin: 0 auto;
  border-bottom: 1px solid white;
}

.header-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.header-list-1 img {
  margin-right: 30px;
  margin-top: 9px;
}

.header-list-1 {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-list-1-ul {
  font-family: "Inter", sans-serif;
  list-style-type: none;
  margin-right: 1em;
  margin-top: 0.7em;
  font-size: 16px;
  color: #adadad;
  position: relative;
  padding-bottom: 5px;
}

.header-list-1-ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #00c1f3;
  transition: width 0.3s ease-in-out;
}

.header-list-1-ul:hover::after {
  width: 100%;
}

.header-list-1 a {
  text-decoration: none;
}

.header-list-1 li {
  list-style-type: none;
}

.header-list-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-list-2 li {
  list-style-type: none;
  margin-right: 0.5em;
  margin-top: 0.7em;
}
.header-list-2 img{
  cursor: pointer;
}

#VK {
  transition: filter 0.3s ease-in-out;
}

#VK:hover {
  filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg);
}
</style>

