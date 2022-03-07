require("./bootstrap");

import Vue from "vue";
import { BootstrapVue, IconsPlugin, BCarousel, BCarouselSlide, CarouselPlugin } from "bootstrap-vue";
import '@material-design-icons/font';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'materialize-css/dist/css/materialize.min.css'
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
    faPaperPlane,
    faTimes,
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faClock,
    faEraser,
    faExternalLinkAlt,
    faSearch,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { faCopyright, faComments, faUser, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faAvianex, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ScrollAnimation from "./directives/scrollAnimation";
import CurrentPage from "./directives/currentPage";
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

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
    faBan,
    faComments,
    faPaperPlane,
    faTimes,
    faPhoneAlt,
    faEnvelope,
    faMapMarkerAlt,
    faClock,
    faUser,
    faEdit,
    faEraser,
    faExternalLinkAlt,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faTwitter,
    faSearch,
    faBars,
    faTimes
);

Vue.config.productionTip = false;
Vue.use(BootstrapVue, IconsPlugin);
Vue.use(CarouselPlugin);
Vue.use(VueRouter);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component('spinner', require('vue-simple-spinner'));
Vue.component('b-carousel', BCarousel);
Vue.component('b-carousel-slide', BCarouselSlide);

import * as mdb from 'mdb-ui-kit';
for (const component in mdb) {
    Vue.component(component, mdb[component])
  }

const router = new VueRouter({ routes });

new Vue({
    router,
    render: h => h(App)

}).$mount('#app');
