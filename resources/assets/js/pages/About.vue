<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <AboutContent />
        <Footer :app="app" />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import AboutContent from "../components/AboutContent.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "About",
    props: ["app"],

    components: {
        Header,
        AboutContent,
        Footer
    }
}
</script>

<style scoped>
   .header {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        z-index: 11;
    }
</style>