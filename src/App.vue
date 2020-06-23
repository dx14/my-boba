<template>
  <div id="app" class="container">
    <div class="row pt-3">
      <div class="col-sm d-flex justify-content-center">
        <div class="">
          <AppHeader
            title="MyBoba"
            sub-title="Create your perfect bubble tea just the way you like it!"
          ></AppHeader>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm d-flex flex-wrap flex-column align-items-center">
        <BobaBase
          title="Base"
          sub-title="It's important. After all, tea is 50% of 'milk tea'!"
        ></BobaBase>
        <BobaToppings
          class="mb-4"
          title="Toppings"
          sub-title="Is it really bubble tea if there are no toppings?"
        ></BobaToppings>
        <FinishButton />
      </div>

      <div class="col-sm d-flex justify-content-center align-items-center">
        <img id="mascot" class="jump" src="./assets/mascot.png" />
      </div>

      <div class="col-md">
        <BobaStores
          title="Locations"
          sub-title="Bring your tea from the screen to your hands."
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
import FinishButton from "./components/FinishButton";

export default {
  name: "app",
  components: {
    AppHeader,
    BobaBase,
    BobaToppings,
    BobaStores,
    FinishButton,
  },
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
  margin: 5px 5px 5px 5px !important;
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
  animation: jump 4s linear alternate infinite;
}
</style>
