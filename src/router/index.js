import Vue from "vue";
import Router from "vue-router";
import App from "../App";
import Home from "../components/Home";
// import Resume from "../components/Resume";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    }
    // {
    //   name: "Resume",
    //   path: "/resume",
    //   component: Resume
    // }
  ]
});
