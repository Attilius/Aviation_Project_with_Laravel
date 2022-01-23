<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <ContactContent />
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import ContactContent from "../components/ContactContent.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Contact",
    props: ['app'],

    components: {
        Header,
        ContactContent,
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