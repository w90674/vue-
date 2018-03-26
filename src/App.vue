<template>
  <div id="app">
     <VHome></VHome>
  </div>
</template>

<script>
  import VHome from '@/routes/Home'
export default {
  name: 'app',
  components:{VHome},
}
</script>

<style  lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color #fff;
  width 100%
}

</style>
