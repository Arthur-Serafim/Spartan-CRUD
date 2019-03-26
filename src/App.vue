<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './views/Home'

export default {
  
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  * {
    font-family: 'ZCOOL XiaoWei', serif;
  }
</style>
