<template>
  <div id="app" class="container">
    
    <div class="row">
      
      <div class="col-sm d-flex justify-content-center">
        <div class="">
          <AppHeader title="MyBoba" sub-title="The Fun Way to Create Your Dream Bubble Tea!"></AppHeader>
        </div>
      </div>
      
    </div>
    
    <div class="row">
      
      <div class="col-sm d-flex flex-wrap flex-column align-items-center">
        <BobaBase title="Base" sub-title="It's important-- after all, tea is 50% of 'milk tea'!"></BobaBase>
        <BobaToppings class="mb-4" title="Toppings" sub-title="Is it really bubble tea if there are no toppings?"></BobaToppings>
        <b-button class="text-center mb-3 w-100 poppins text-large" size="lg" variant="primary">I'm Finished!</b-button>
      </div>
      
      <div class="col-sm d-flex justify-content-center align-items-center">
        <img src="./assets/logo.png" />
      </div>
      
      <div class="col-sm">
        <BobaShops title="Locations" sub-title="Bring your creation from your screen to your hands."></BobaShops>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import BobaBase from './components/BobaBase.vue'
import BobaToppings from './components/BobaToppings.vue'
import BobaShops from './components/BobaShops.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    BobaBase,
    BobaToppings,
    BobaShops
  }
}
</script>

<style lang="scss">
  @import "assets/scss/variables";
/* override default button radio/check styles */
  .btn-group {
    display: inherit !important;
  }
  .btn-group-toggle .btn {
    margin: 10px;
    border-radius: 50px !important;
  }

  .poppins {
    font-family: $poppins;
  }
</style>
