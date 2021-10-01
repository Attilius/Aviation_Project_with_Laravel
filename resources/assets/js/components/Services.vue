<template>
    <div>
        <Header />
        <ServicesContent />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import ServicesContent from "./ServicesContent.vue";
import Footer from "./Footer.vue";

export default {
    name: "Services",

    components: {
        Header,
        ServicesContent,
        Footer
    }
}
</script>