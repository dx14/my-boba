<template>
  <div class="">
    <SectionHeader v-bind:title="title" v-bind:sub-title="subTitle" />
    <b-list-group>
      <b-list-group-item href="#" active class="flex-column align-items-start">
        <address>
          <strong>Kung Fu Tea</strong><br>
          1355 Market St, Suite 900<br>
          San Francisco, CA 94103<br>
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
      </b-list-group-item>
      <b-list-group-item href="#" class="flex-column align-items-start">
        <address>
          <strong>TeaTop</strong><br>
          4434 East Main Street<br>
          Cupertino, CA 94103<br>
          <abbr title="Phone">P:</abbr> (123) 456-2229
        </address>
      </b-list-group-item>
      <b-list-group-item href="#" disabled class="flex-column align-items-start">
        <address>
          <strong>Sweet Hut</strong><br>
          1606 Oakmont Cr<br>
          San Jose, CA 94104<br>
          <abbr title="Phone">P:</abbr> (123) 455-7388
        </address>
      </b-list-group-item>
    </b-list-group>

<!-- list-group-content.vue -->

<!-- list-group.vue -->
  </div>
</template>

<script>

import SectionHeader from './SectionHeader.vue'
  
export default {
  name: 'BobaShops',
  components: {
    SectionHeader
  },
  props: {
    title: String,
    subTitle: String
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
