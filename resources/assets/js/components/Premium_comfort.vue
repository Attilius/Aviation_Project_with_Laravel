<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader
                    class="animated-header"
                    :titles="titles"
                    :images="images"
                />
                <ServicesMainContent
                    :titles="titles"
                    :text="text"
                    :radio_datas="radio_datas"
                    :label="label"
                    :message="message"
                    :comfort_services="comfort_services"
                    :comfort_services_all="comfort_services_all"
                />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import AnimatedHeader from "./AnimatedHeader.vue";
import ServicesMainContent from "./ServicesMainContent.vue";
import Footer from "./Footer.vue";
export default {
    name: "Premium_comfort",
    components: {
        Header,
        AnimatedHeader,
        ServicesMainContent,
        Footer
    },

    data() {
        return {
            titles: {
                first: "Premium comfort",
                second: "Enjoy premium comfort"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/comfort-1.png")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/comfort-2.jpg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/comfort-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/comfort-4.jpg")})`
                }
            },
            text:
                "If you want extra comfort on a longer journey that crosses continents. Or you want to make your journey more comfortable after a tiring business meeting. We can do that for you too.",

            radio_datas: [],
            label: "comfort services",
            comfort_services: [
                {text: "Mini bar 180 €", value: 180},
                {text: "Game console 220 €", value: 220},
                {text: "Massage seat 250 €", value: 250},
                {text: "Individual seating 620 €", value: 620}
                
            ],
            comfort_services_all:[
                {text: "All-inclusive cabin 1250 €", value: 1250}
            ],
            message: []
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

@media (max-width: 768px) {
    .animated-header {
        display: none;
    }
}
</style>
