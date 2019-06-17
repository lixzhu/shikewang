<template>
  <div id="app">
    <router-view/>
    <Footer/>
    <Dushu/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from './components/public/Footer.vue';
import Dushu from './components/public/Dushu.vue';
export default Vue.extend({
  components : {
    Footer,
    Dushu,
  },
});
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input{
  border:0px;
  outline:none;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
    color: #42b983;
    }
  }
}

</style>
