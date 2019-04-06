<template>
  <v-form>
    <v-container class="mt-5">
      <h1 
        class="display-1 text-md-center font-weight-light pb-4"
      >
        Edit {{ smoothie.title }}
      </h1>
      <v-text-field
        label="Title"
        v-model="smoothie.title"
        prepend-icon="edit"
      ></v-text-field>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-text-field
            label="Ingredients"
            v-model="another"
            prepend-icon="fastfood"
            @keydown.enter.prevent="addIng"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6>

          <h2 class="display-1 text-md-center font-weight-light">Ingredients</h2>
          <v-list id="list" v-for="(ingredient, index) in smoothie.ingredients" :key="index">
              <div class="subheading text-md-center" id="delete" @click="deleteIng(index)">
                <v-icon small>close</v-icon> 
                 {{ ingredient }}
              </div>
          </v-list>
        </v-flex>
      <v-btn
        class="mt-2"
        flat
        color="orange"
        @click="EditSmoothie"
      >
        Edit Smoothie
      </v-btn>
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        color="warning"
        top
      >
        {{ warning }}
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </v-form>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'EditSmoothie',
  data() {
    return {
      smoothie: null,
      another: null,
      warning: null,
      snackbar: false,
    }
  },
  methods: {
    EditSmoothie() {
      console.log(this.smoothie)
    },
    addIng() {
        if (this.another) {
          this.smoothie.ingredients.push(this.another)
          this.another = null
        } else {
          this.warning = 'You must add an ingredient'
          this.snackbar = true
        }
      },
      deleteIng(index) {
        this.smoothie.ingredients.splice(index, 1)
      }
  },
  created() {
     let ref = db.collection('smoothie').where('slug', '==', this.$route.params.smoothie_slug)
     ref.get().then(snapshot => {
       snapshot.forEach(doc => {
         this.smoothie = doc.data()
         this.smoothie.id = doc.id
       });
     })
  }
}
</script>

<style lang="scss">
  .card--flex-toolbar {
    margin-top: -64px;
  }
  #list {
    background-color: #fafafa;
  }
  #delete {
    cursor: pointer;
  }
</style>
