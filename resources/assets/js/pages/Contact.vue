<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <ContactContent />
        <Footer :app="app" />
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
    },

    methods: {
        updateLoginPath(updateLoginPath) {
            this.$emit("onClickLogin", updateLoginPath);
        },

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