<template>
    <div>
        <div>
            <Header
                class="header"
                :app="app"
                @onClickLogin="updateLoginPath($event)"
            />
            <HomeContent 
                :app="app"
                @onChangePageContent="updatePageContent($event)"
                @onChangeAreaAndLocation="udateAreaAndLocation($event)"
            />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import HomeContent from "../components/HomeContent.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Home",
    props: ["app"],

    components: {
        Header,
        HomeContent,
        Footer
    },

    methods: {
        updatePageContent(updatePageContent) {
            this.$emit("onChangePageContent", updatePageContent);
        },

        udateAreaAndLocation(udateAreaAndLocation){
            this.$emit("onChangeAreaAndLocation",udateAreaAndLocation)
        }
    }
};
</script>

<style scoped>
.header {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 11;
}
</style>
