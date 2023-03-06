<template>
  <Toast />
  <Header></Header>

  <router-view />
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style>
.router-buttons {
  position: absolute;
  top: 1;
  right: 0;
  background-color: black;
}
</style>
