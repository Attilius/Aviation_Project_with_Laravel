<template>
    <div>
        <Header />
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