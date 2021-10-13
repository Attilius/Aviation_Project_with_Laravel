/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlaneDeparture,
    faPlaneArrival,
    faPlane,
    faMapMarkedAlt,
    faUsers,
    faStar,
    faQuoteLeft,
    faQuoteRight,
    faHandshake,
    faPassport,
    faSuitcaseRolling,
    faMugHot,
    faBan,
} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faAvianex } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Home from "../js/components/Home.vue";
import About from "../js/components/About.vue";
import Services from "../js/components/Services.vue";
import Contact from "../js/components/Contact.vue";
import ScrollAnimation from "./directives/scrollAnimation";
import CurrentPage from "./directives/currentPage";

Vue.directive("scrollanimation", ScrollAnimation);
Vue.directive("currentpage", CurrentPage);

library.add(
    faPlaneDeparture,
    faPlaneArrival,
    faCopyright,
    faPlane,
    faMapMarkedAlt,
    faUsers,
    faStar,
    faQuoteLeft,
    faQuoteRight,
    faHandshake,
    faPassport,
    faSuitcaseRolling,
    faMugHot,
    faAvianex,
    faBan
);

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component("font-awesome-icon", FontAwesomeIcon);
//Vue.component("Home", require("./components/Home.vue").default);

const app = new Vue({
    el: "#app",

    components: {
        Home,
        About,
        Services,
        Contact
    }
});
