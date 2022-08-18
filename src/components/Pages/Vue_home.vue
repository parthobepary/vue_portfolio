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
              <h1>This is function: {{ 1 + 1 + 2 + 3 }}</h1>
              <h1>This is function: {{ add(1, 2, 3) }}</h1>
              <h1>This is function: {{ sub(1, 3) }}</h1>
              <h1 v-for="item in list" v-bind:key="item.id">
                Name: {{ item.name }}
              </h1>
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
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    sub(x, y) {
      return x - y;
    },
  },
  data() {
    return { list: undefined };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.list = data;
      });
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
