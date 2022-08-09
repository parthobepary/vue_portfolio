<template>
  <div class="bg-dark bg-gradient">
    <Header></Header>
    <!-- home start -->
    <div class="my-5">
      <div class="homebenner">
        <div class="flex-center row container mx-auto">
          <div class="col-12 col-md-4 my-3">
            <img
              class="img-fluid img-control"
              src="@/assets/logo1.png"
              alt=""
            />
          </div>
          <div class="col-12 col-md-8 text-white">
            <div class="ms-5">
              <h1>Partho Bepary</h1>
              <h3>Front end developer (vue.js)</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda amet quae autem, explicabo odio tenetur dolores esse
                deleniti sed quisquam minus doloribus excepturi numquam nam
                accusantium placeat voluptate minima adipisci. Dolores, fugiat
                corrupti commodi porro esse sequi ea iusto.
              </p>
              <a
                href="@/assets/Partho-bepary.pdf"
                download
                class="btn btn-primary"
                >Dowonload resume</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- home end -->
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../Share/Footer_vue.vue";
import Header from "../Share/Header_nav.vue";
import About from "./Vue_about.vue";
import Contact from "./Vue_contact.vue";
import Project from "./Vue_project.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    About,
    Project,
    Contact,
  },
};
</script>

<style>
.homebenner {
  background-color: rgb(35, 39, 43);
}
.flex-center {
  align-items: center;
}
.img-control {
  width: 300px;
  height: 400px;
  border-radius: 200px;
}
</style>
