<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader :titles="titles" :images="images" />
                <ServicesMainContent :titles="titles" :text="text" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import AnimatedHeader from "./AnimatedHeader.vue";
import ServicesMainContent from "./ServicesMainContent.vue"
import Footer from "./Footer.vue";
export default {
    name: "Travel_insurance",
    components: {
        Header,
        AnimatedHeader,
        ServicesMainContent,
        Footer
    },

    data() {
        return {
            titles: {
                first: "Travel insurance",
                second: "Safe your travel"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/travel-1.jpg")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/travel-2.jpg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/travel-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/travel-4.jpg")})`
                },
            },
            text: "The safety of our passengers is important to us. We give you the option to request the service before you travel, or even at the moment of boarding, so it's just a click away.",

            insured: [
                child= "",
                adult= "",
                group= ""
            ]
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
    height: 100vh;
    width: 100%;
}

.skin {
    height: 100vh;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
