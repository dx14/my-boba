<template>
  <div class="">
    <SectionHeader v-bind:title="title" v-bind:sub-title="subTitle" />
    <b-form-group>
      <b-form-checkbox-group
        v-model="selectedToppings"
        buttons
        button-variant="outline-secondary"
        size="sm"
        name="buttons2"
        :options="toppings"
      >
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
import ToppingsService from "../services/topping";
import SectionHeader from "./SectionHeader";
import { mutations } from "../state";

export default {
  name: "BobaToppings",
  components: {
    SectionHeader
  },
  props: {
    title: String,
    subTitle: String
  },
  data() {
    return {
      selectedToppings: [],
      toppings: []
    };
  },
  async mounted() {
    const response = await ToppingsService.getAllToppings();
    if (response) {
      this.toppings = response.data.map(topping => {
        return {
          text: topping.displayName,
          value: topping.name
        };
      });
    }
  },
  watch: {
    selectedToppings: (newToppings, oldToppings) => {
      mutations.updateSelectedToppings(newToppings);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
