<template>
    <div>
        <Header class="header" :app="app" @onClickLogin="updateLoginPath($event)" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader
                    class="animated-header"
                    :titles="titles"
                    :images="images"
                />
                <TravelInsuranceContent
                    :app="app"
                    :titles="titles"
                    :text="text"
                    :label="label"
                    :insurances="insurances"
                    @onClickLogin="updateLoginPath($event)"
                />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import AnimatedHeader from "../components/AnimatedHeader.vue";
import TravelInsuranceContent from "../components/TravelInsuranceContent.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "TravelInsurance",
    props: ['app'],

    components: {
        Header,
        AnimatedHeader,
        TravelInsuranceContent,
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
                }
            },

            text:
                "The safety of our passengers is important to us. We give you the option to request the service before you travel, or even at the moment of boarding, so it's just a click away.",

            insurances: [
                { text: "Baby: ( 0-2 age )", value: 100 },
                { text: "Child: ( 3-17 age )", value: 150 },
                { text: "Adult: ( 18-64 age )", value: 250 },
                { text: "Retired: ( 65-120 age )", value: 300 }
            ],

            label: "type of insurance"
        };
    },

    mounted() {
        this.updateLoginPath();
    },

    methods: {
        updateLoginPath(updateLoginPath) {
            this.$emit("onClickLogin", updateLoginPath);
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

@media (max-width: 768px) {
    .animated-header {
        display: none;
    }
}
</style>
