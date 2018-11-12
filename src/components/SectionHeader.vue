<template>
  <div class="">
    <div class="section_header d-flex align-items-baseline">
      <img class="section_header_icon" src="../assets/logo.png" />
      <h2 class="mb-0">{{ title }}</h2>
    </div>
    <p class="">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: String,
    subTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-size: 3em;
  }
  .section_header {
    margin-left: -3em;
  }
  .section_header_icon {
    height: 3em;
    width: 3em;
  }
</style>
