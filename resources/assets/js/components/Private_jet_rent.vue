<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader :titles="titles" :images="images" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import AnimatedHeader from "./AnimatedHeader.vue";
import Footer from "./Footer.vue";
export default {
    name: "Premium_comfort",
    components: {
        Header,
        AnimatedHeader,
        Footer
    },

    data() {
        return {
            titles: {
                first: "Private jet rent",
                second: "Get private service"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/private-1.jpg")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/private-2.jpg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/private-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/private-4.jpg")})`
                },
            },
            text: "Do you have an urgent and unavoidable trip? Do you need to travel to a special place? Our company offers you the possibility to rent a private jet."
        };
    }
};
</script>

<style scoped>
.header {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        z-index: 1;
    }

.wrapper {
    background: url("../../img/airport-bg.jpg");
    background-size: cover;
    height: 150vh;
    width: 100%;
}

.skin {
    height: 150vh;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>