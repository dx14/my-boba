<template>
  <div id="app" class="container">
    <div class="row pt-3">
      <div class="col-sm d-flex justify-content-center">
        <div class="">
          <AppHeader
            title="MyBoba"
            sub-title="The Fun Way to Create Your Dream Bubble Tea!"
          ></AppHeader>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm d-flex flex-wrap flex-column align-items-center">
        <BobaBase
          title="Base"
          sub-title="It's important-- after all, tea is 50% of 'milk tea'!"
        ></BobaBase>
        <BobaToppings
          class="mb-4"
          title="Toppings"
          sub-title="Is it really bubble tea if there are no toppings?"
        ></BobaToppings>
        <b-button
          class="text-center mb-3 w-100 poppins text-large"
          size="lg"
          variant="primary"
          @click="finish"
          >I'm Finished!</b-button
        >
      </div>

      <div class="col-sm d-flex justify-content-center align-items-center">
        <img id="mascot" class="jump" src="./assets/mascot.png" />
      </div>

      <div class="col-sm">
        <BobaStores
          title="Locations"
          sub-title="Bring your creation from your screen to your hands."
        ></BobaStores>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import BobaBase from "./components/BobaBase";
import BobaToppings from "./components/BobaToppings";
import BobaStores from "./components/BobaStores";
import { getters } from "./state";

export default {
  name: "app",
  components: {
    AppHeader,
    BobaBase,
    BobaToppings,
    BobaStores
  },
  methods: {
    finish() {
      console.log(getters.getSelectedTea());
      console.log(getters.getSelectedToppings());
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";

#app {
  max-width: 1100px;
  height: auto;
}

/* For mobile phones: */
#mascot {
  padding: 40px 0px 40px 0px;
  width: 50% !important;
  height: auto !important;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  #mascot {
    padding: 0;
    width: 70% !important;
    height: auto !important;
  }
}

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

@keyframes jump {
  0% {
    transform: translate(0, 0);
  }
  90% {
    transform: translate(0, 0);
  }
  95% {
    transform: translate(0, 8%);
  }
  100% {
    transform: translate(0, 0);
  }
}
.jump {
  animation: jump 5s linear alternate infinite;
}
</style>
