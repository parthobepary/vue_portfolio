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
              <h1 class="text-success">Partho Bepary</h1>
              <h3 class="text-warning">Front end developer (vue.js)</h3>
              <p>
                I am Front end web developer. My exprience about web design and
                development about 1 year.I am a quick learner and enjoy to work
                with long time.
                <br />
                <strong>Expert : </strong> HTML5, CSS3, React.js, Node.js,
                Express.js, Next.js, Mongoos, Mongodb atlas, Stripe, Firebase
                <br />
                <strong>Tools : </strong> Vs code, Heroku, Vercel, Netlify, Git,
                Github
              </p>
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
