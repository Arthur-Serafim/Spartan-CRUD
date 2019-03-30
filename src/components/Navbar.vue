<template>
    <v-toolbar 
      app
      flat 
      class="amber darken-3" 
    >
      <v-toolbar-title 
        class="headline text-uppercase"
      >
        <router-link :to="{ name: 'Home' }" tag="a">
          <span class="font-weight-light white--text" id="title">Ninja Smoothie</span>
        </router-link>
        <v-btn 
          v-on="on"
          color="deep-orange darken-4" 
          class="mr-3"
          :to="{ name: 'AddSmoothie' }"
          dark 
          absolute 
          bottom 
          right 
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
import AddSmoothie from '@/views/AddSmoothie'

export default {
   name: 'Navbar',
   components: { AddSmoothie }
}
</script>

<style lang="scss">
  a {
    text-decoration: none
  }
</style>




