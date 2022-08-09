<template>
  <div class="bg-dark bg-gradient">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/Share/Footer_vue.vue";
import Header from "./components/Share/Header_nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Oswald", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
