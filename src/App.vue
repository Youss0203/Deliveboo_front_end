<template>
  <AppHeader />
  <AppFooter />
  <RouterView />
  
</template>


<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';


export default {

    components: { AppHeader, AppFooter }
}
</script>


<style lang="scss">
@use './assets/scss/app.scss' as *;
</style>