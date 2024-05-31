<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
export  default {
  components: {Header,Footer},
  data(){
    return{

    }
  }
}
</script>


<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>

</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
