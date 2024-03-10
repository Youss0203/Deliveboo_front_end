<template>
  <AppHeader />
  <AppMain />
  <!-- <AppFooter /> -->
  <RouterView />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// import AppFooter from "./components/AppFooter.vue";

export default {
  components: { AppHeader, AppMain },
};
</script>

<style lang="scss">
@use './assets/scss/app.scss' as *;
</style>
