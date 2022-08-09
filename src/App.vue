<template>
  <Header></Header>
  <Footer></Footer>
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
