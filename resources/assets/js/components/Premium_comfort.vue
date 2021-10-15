<template>
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import Content from "./PremiumComfortContent.vue"
import Footer from "./Footer.vue";
export default {
    name: "Premium_comfort",
    components: {
        Header,
        Content,
        Footer
    }
};
</script>

