<template>
  <v-footer
    app
    absolute
    height="auto"
    color="amber darken-3"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        deep-orange 
        dark-4
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2019 — <a id="git" target="_blank" href="https://github.com/Seraph-Arthur">Arthur Serafim</a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<style lang="scss">
#git {
  text-decoration: none;
  font-weight: bold;
  color: white;
}
</style>
