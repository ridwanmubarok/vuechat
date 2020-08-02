import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../components/Index.vue";
import Video from "../components/Video.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/daylight/Video",
    name: "Video",
    component: Video
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
