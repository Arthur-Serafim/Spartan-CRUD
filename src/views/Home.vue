<template>
  <div>  
    <Navbar />
    <v-container class="home mt-3">
      <v-card align-content-space-around class="blue darken-3 elevation-10 mb-4" v-for="smoothie in smoothies" :key="smoothie.id">
        <v-card-text>
          <v-icon @click="deleteSmoothie(smoothie.id)" class="pointer white--text">delete</v-icon>
          <v-card-title>
            </v-card-title>
          <h2 class="display-2 mb-3 text-md-center font-weight-light white--text" id="title"> {{ smoothie.title }} </h2>
          <v-list class="blue darken-3">
            <v-flex row>
              <v-list-tile class="text-capitalize" v-for="(ingredient, index) in smoothie.ingredients" :key="index">
                  <v-list-tile-content id="chip"> 
                    <v-chip label class="white black--text">
                      {{ ingredient }} 
                    </v-chip>
                  </v-list-tile-content>
              </v-list-tile>
            </v-flex>
          </v-list>  
        </v-card-text>
      </v-card>      
    </v-container>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import db from '@/firebase/init.js'

  export default {
    name: 'Home',
    components:  {
      Navbar
    },
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

  #title {
    font-family: 'ZCOOL XiaoWei', serif !important;
  }

  #chip {
    display: inline-block
  }

</style>
