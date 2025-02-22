<template>
  <div id="app">
    <h1>tuyi</h1>
    <router-view></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  
  
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
