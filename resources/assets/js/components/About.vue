<template>
    <div>
        <Header class="header" />
        <AboutContent />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import AboutContent from "./AboutContent.vue";
import Footer from "./Footer.vue";

export default {
    name: "About",

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
        z-index: 1;
    }
</style>