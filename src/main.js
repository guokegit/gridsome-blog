// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './assets/css/index.css'
import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  Vue.mixin({
    data(){
      return {
        GRIDSOME_API_URL:process.env.GRIDSOME_API_URL
      }
    }
  })
}
