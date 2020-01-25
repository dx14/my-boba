<template>
  <div class="d-flex flex-column align-items-center">
    <div class="d-flex align-items-baseline">
      <h1 class="mb-0">{{ title }}</h1>
      <img class="section_header_icon" src="../assets/logo.png" />
    </div>
    <p class="">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: String,
    subTitle: String
  }
};
</script>

<style scoped>
h1 {
  font-size: 6em;
}
.section_header_icon {
  height: 6em;
  width: 6em;
}
</style>
