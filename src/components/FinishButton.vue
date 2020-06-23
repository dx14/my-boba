<template>
  <div id="button-wrapper" class="d-inline-block" tabindex="0">
    <div id="finish-btn-wrapper">
      <b-button
        class="text-center mb-3 w-100 poppins text-large"
        size="lg"
        variant="primary"
        :disabled="!locationEnabled"
        @click="filterValidStores"
      >
        I'm Finished!</b-button
      >
      <div v-if="!locationEnabled">
        <b-tooltip target="finish-btn-wrapper" title="Please share your location to proceed!"></b-tooltip>
      </div>
    </div>
    
  </div>
</template>

<script>
import StoresService from "../services/store";
import YelpService from "../services/yelp";
import { getters, mutations } from "../state";
import { EventBus } from "../event-bus.js";

export default {
  data() {
    return {
      locationEnabled: false,
      stores: [],
    };
  },
  methods: {
    async filterValidStores() {
      // start load spinner
      EventBus.$emit("store-fetch-started");

      // find valid stores based on selections
      const selectedTea = getters.getSelectedTea();
      const selectedToppings = getters.getSelectedToppings();

      let validStores = [];
      this.stores.forEach((store) => {
        if (
          store.teas.includes(selectedTea) &&
          selectedToppings.every((t) => store.toppings.includes(t))
        ) {
          validStores.push(store);
        }
      });

      // update valid stores in state
      if (validStores.length > 0) {
        mutations.updateValidStores(validStores);
      }

      // retrieve store info from yelp
      const storeInfo = await YelpService.getStoresFromYelp(
        validStores,
        getters.getLatitude(),
        getters.getLongitude()
      );

      // stop spinner
      EventBus.$emit("store-info-updated", storeInfo);
    },
    setupLocationSettings() {
      const me = this;
      if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
          function success(position) {
            // for when getting location is a success
            mutations.updateLatitude(position.coords.latitude);
            mutations.updateLongitude(position.coords.longitude);
            me.locationEnabled = true;
          },
          function error() {
            // for when getting location results in an error
            me.locationEnabled = false;
          },
          { timeout: 10000 }
        );
      } else {
        me.locationEnabled = false;
      }
    },
  },
  async mounted() {
    // load stores
    const response = await StoresService.getAllStores();
    if (response) {
      this.stores = response.data;
    }

    this.setupLocationSettings();
  },
};
</script>

<style scoped>
#button-wrapper:focus {
  outline: none;
}
</style>
