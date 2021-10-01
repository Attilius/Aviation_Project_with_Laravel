<template>
    <div>
        <Header />
        <ContactContent />
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import ContactContent from "./ContactContent.vue";
import Footer from "./Footer.vue";

export default {
    name: "Contact",

    components: {
        Header,
        ContactContent,
        Footer
    }
}
</script>