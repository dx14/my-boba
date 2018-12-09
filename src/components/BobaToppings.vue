<template>
  <div class="">
    <SectionHeader v-bind:title="title" v-bind:sub-title="subTitle" />
    <b-form-group>
      <b-form-checkbox-group v-model="selectedToppings"
                             buttons
                             button-variant="outline-secondary"
                             size="sm"
                             name="buttons2"
                             :options="toppings">
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>

import SectionHeader from './SectionHeader.vue'
  
export default {
  name: 'BobaToppings',
  components: {
    SectionHeader
  },
  props: {
    title: String,
    subTitle: String
  },
  data () {
    return {
      selectedToppings: [], // Must be an array reference!
      toppings: [
        {text: 'Tapioca', value: 'tapioca'},
        {text: 'Grass Jelly', value: 'grassJelly'},
        {text: 'Pudding', value: 'pudding'},
        {text: 'Red Bean', value: 'redBean'},
        {text: 'Popping Jelly', value: 'poppingJelly'},
        {text: 'Mung Bean', value: 'mungBean'},
        {text: 'Aloe Vera', value: 'aloeVera'},
        {text: 'Lychee Jelly', value: 'lycheeJelly'},
        {text: 'Coffee Jelly', value: 'coffeeJelly'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
