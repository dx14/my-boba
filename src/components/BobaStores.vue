<template>
  <div>
    <!-- Initial section when no selection has been made -->
    <SectionHeader v-bind:title="title" v-bind:sub-title="subTitle" />
    <b-alert show variant="secondary" v-if="!hasFetched">
      Select your tea and toppings to see matching bubble tea stores in your
      area!
    </b-alert>

    <!-- Loading section -->
    <div class="pt-3" v-if="loading">
      <h3>We got your order!</h3>
      <span>Please wait while we fetch your bubble tea stores...</span>
      <div class="d-flex justify-content-center mb-3">
        <b-spinner variant="danger" label="Loading..."></b-spinner>
      </div>
    </div>
 
    <!-- No Valid Stores Found -->
    <b-alert show variant="secondary" v-if="noStoresLoaded">
      No stores were found with your selected criteria...
    </b-alert>

    <!-- Store section after load -->
    <b-list-group v-for="storeInfo in storeInfo" :key="storeInfo.id">
      <b-list-group-item
        :href="storeInfo.url"
        target="_blank"
        class="flex-column align-items-start"
      >
        <address>
          <strong>{{ storeInfo.name }}</strong
          ><br />
          {{ getAddress(storeInfo.location) }}<br />
          {{ getCityStateZip(storeInfo.location) }} <br />
          {{ storeInfo.display_phone }}
        </address>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import { EventBus } from "../event-bus.js";

export default {
  name: "BobaStores",
  components: {
    SectionHeader,
  },
  props: {
    title: String,
    subTitle: String,
  },
  data() {
    return {
      loading: false,
      storeInfo: [],
      finishBtnClicked: false,
      storesLoaded: false,
      noStoresLoaded: false,
    };
  },
  computed: {
    hasFetched() {
      return this.finishBtnClicked;
    },
  },
  methods: {
    getAddress(location) {
      return `${location.address1}, ${location.address2}`;
    },
    getCityStateZip(location) {
      return location.display_address.slice(-1)[0];
    },
  },
  async mounted() {
    EventBus.$on("store-fetch-started", () => {
      this.noStoresLoaded = false;
      this.storeInfo = [];
      this.finishBtnClicked = true;
      this.loading = true;
    }),
      EventBus.$on("store-info-updated", (storeInfo) => {
        this.storeInfo = storeInfo.slice(0, 3);
        this.loading = false;
        this.storesLoaded = true;

        if (storeInfo == 0) {
          this.noStoresLoaded = true;
        }
      });
  },
};
</script>
