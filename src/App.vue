<template>
  <MyComponente/>

</template>

<script>

import MyComponente from './components/MyComponente.vue';


export default {
  name: 'App',
  components: {
    MyComponente,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #31352B;
  margin-top: -20px; 
}
</style>
