<template>
  <div class="">
    <SectionHeader v-bind:title="title" v-bind:sub-title="subTitle" />
    <b-form-group>
      <b-form-radio-group
        v-model="selected"
        buttons
        button-variant="outline-secondary"
        size="sm"
        name="buttons2"
        :options="teas"
      >
      </b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
import TeasService from "../services/tea";
import SectionHeader from "./SectionHeader.vue";
import { mutations } from "../state";

export default {
  name: "BobaBase",
  components: {
    SectionHeader
  },
  props: {
    title: String,
    subTitle: String
  },
  data() {
    return {
      selected: "",
      teas: []
    };
  },
  async mounted() {
    const response = await TeasService.getAllTeas();
    if (response) {
      this.teas = response.data.map(tea => {
        return {
          text: tea.displayName,
          value: tea.name
        };
      });
    }
  },
  watch: {
    selected: (newTea, oldTea) => {
      mutations.updateSelectedTea(newTea);
    }
  }
};
</script>

<style scoped></style>
