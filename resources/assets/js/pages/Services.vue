<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <ServicesContent :app="app" />
        <Footer :app="app" />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import ServicesContent from "../components/ServicesContent.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Services",
    props: ['app'],
    components: {
        Header,
        ServicesContent,
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