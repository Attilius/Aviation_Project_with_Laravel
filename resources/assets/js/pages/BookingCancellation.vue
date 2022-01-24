<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader class="animated-header" :titles="titles" :images="images" />
                <CancelledContent :app="app" :titles="titles" :text="text" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import AnimatedHeader from "../components/AnimatedHeader.vue";
import CancelledContent from "../components/CancelledContent.vue"
import Footer from "../components/Footer.vue";

export default {
    name: "BookingCancellation",
    props: ['app'],
    components: {
        Header,
        AnimatedHeader,
        CancelledContent,
        Footer
    },

    data() {
        return {
            titles: {
                first: "Booking cancellation",
                second: "Delete your travel"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/cancelled-1.jpg")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/cancelled-2.jpg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/cancelled-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/cancelled-4.jpg")})`
                },
            },
            text: "Did something unexpected happen before departure? No problem. We understand it. In this case, you can cancel your booking at any time before departure."
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

@media(max-width: 768px) {
    .animated-header {
        display: none;
    }
}

</style>