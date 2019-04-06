<template>
  <v-form>
    <v-container class="mt-5">
      <h1 
        class="display-1 text-md-center font-weight-light pb-4"
      >
        Add New Smoothie
      </h1>
      <v-text-field
        label="Title"
        v-model="title"
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
          <v-list id="list" v-for="(ingredient, index) in ingredients" :key="index">
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
        @click="AddSmoothie"
      >
        Add Smoothie
      </v-btn>
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        color="error"
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
  import slugify from 'slugify'

  export default {
    name: 'AddSmoothie',
    data () {
      return {
        title: null,
        ingredients: [],
        slug: null,
        snackbar: false,
        warning: null,
        another: null
      }
    },
    methods: {
      AddSmoothie() {
        if (this.title) {
          // Create slug
          this.slug = slugify(this.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
          })
          db.collection('smoothie').add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          this.ingredients = null
          this.title = null
          this.slug = null
        } else {
          this.warning = 'You must enter a name' 
          this.snackbar = true
        }
      },
      addIng() {
        if (this.another) {
          this.snackbar = false
          this.ingredients.push(this.another)
          this.another = null
        } else {
          this.warning = 'You must add an ingredient'
          this.snackbar = true
        }
      },
      deleteIng(index) {
        this.ingredients.splice(index, 1)
      }
    },
  }
</script>

<style>
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