<template>
  <div class="body">  
    <v-container class="home mt-3">
      <v-card 
        class=" elevation-10 mb-4" 
        v-for="smoothie in smoothies" :key="smoothie.id"
      >
        <v-img
          class="white--text"
          height="200px"
          src="https://organicpowerfoods.com/wp-content/uploads/2015/12/Best-Protein-Rich-Smoothie-Recipes.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 flexbox>
                <v-chip dark label class="title font-weight-light">{{ smoothie.title }}</v-chip>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <div class="pb-3 justify-center">
          <v-icon
            flat
            class="font-weight-light right pt-2 pr-2 icon"
            @click="deleteSmoothie(smoothie.id)"
          >
            delete
          </v-icon>
          <router-link 
            :to="{ name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug}}"
          >
            <v-icon
              flat          
              class="font-weight-light left pt-2 pl-2 icon"
            >
              edit
            </v-icon>
          </router-link>
        </div>
        <v-card-text>
          <v-list>
            <template v-for="(ingredient, index) in smoothie.ingredients">
              <v-divider :key="index"></v-divider>
              <v-subheader :key="index" class="text-capitalize">
                {{ ingredient }}
              </v-subheader>
            </template>
            <v-divider></v-divider>
          </v-list>
        </v-card-text>
      </v-card>      
    </v-container>
  </div>
</template>

<script>
  import db from '@/firebase/init.js'

  export default {
    name: 'Home',
    data() {
      return {
        smoothies: []
      }
    },
    methods: {
      deleteSmoothie(id) {
        db.collection('smoothie').doc(id).delete().then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id
          })
        })
      }
    },
    created() {
      // fetch data from firestore
      db.collection('smoothie').get().then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        })
      })
    }
  }
</script>

<style lang="scss">

  .home {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
  }

  .title {
    display: flex;
    justify-content: center;
  }

  .icon {
    cursor: pointer
  }


</style>
