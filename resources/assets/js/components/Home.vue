<template>
    <div>
        <Header class="header" />
        <HomeContent />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import HomeContent from "./HomeContent.vue";
import Footer from "./Footer.vue";

export default {
    name: "Home",

    components: {
        Header,
        HomeContent, 
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