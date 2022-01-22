<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <div class="content">
            <h1>Page is Not found :(</h1>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "PageNotFound",
    props: ['app'],

    components: {
        Header, 
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

.content {
    height: 100vh;
    width: 100%;
}
</style>