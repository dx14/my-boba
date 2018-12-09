<template>
  <div class="">
    <SectionHeader v-bind:title="title" v-bind:sub-title="subTitle" />
    <b-form-group>
      <b-form-radio-group v-model="selected"
                             buttons
                             button-variant="outline-secondary"
                             size="sm"
                             name="buttons2"
                             :options="options">
      </b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>

import SectionHeader from './SectionHeader.vue'
  
export default {
  name: 'BobaBase',
  components: {
    SectionHeader
  },
  props: {
    title: String,
    subTitle: String
  },
  data () {
    return {
      selected: '', // Must be an array reference!
      options: [
        {text: 'Black', value: 'black'},
        {text: 'Oolong', value: 'oolong'},
        {text: 'Earl Grey', value: 'earlGrey'},
        {text: 'Taro', value: 'taro'},
        {text: 'Jasmine', value: 'jasmine'},
        {text: 'Thai', value: 'thai'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
