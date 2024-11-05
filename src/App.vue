<template>
  <MenuCoches />
  <router-view />
</template>

<script>
import MenuCoches from "./components/MenuCoches.vue";
export default {
  name: "App",
  components: {
    MenuCoches,
  },
};
</script>

<style>
</style>
