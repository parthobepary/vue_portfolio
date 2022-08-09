<template>
  <div class="bg-dark bg-gradient">
    <Header></Header>
    <Home></Home>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import About from "./components/Pages/Vue_about.vue";
import Contact from "./components/Pages/Vue_contact.vue";
import Home from "./components/Pages/Vue_home.vue";
import Project from "./components/Pages/Vue_project.vue";
import Footer from "./components/Share/Footer_vue.vue";
import Header from "./components/Share/Header_nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    About,
    Project,
    Contact,
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
