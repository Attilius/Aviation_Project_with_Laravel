<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader class="animated-header" :titles="titles" :images="images" />
                <ServiceMainContent
                class="main-content"
                    :titles="titles"
                    :text="text"
                    :important_text="important_text"
                    :items="items"
                    :fields="fields"
                />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import AnimatedHeader from "./AnimatedHeader.vue";
import ServiceMainContent from "./LuggageInsuranceMainContent.vue";
import Footer from "./Footer.vue";
export default {
    name: "Luggage_insurance",
    components: {
        Header,
        AnimatedHeader,
        ServiceMainContent,
        Footer
    },

    data() {
        return {
            titles: {
                first: "Luggage insurance",
                second: "Safe your luggage"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/luggage-1.jpg")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/luggage-2.jpg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/luggage-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/luggage-4.jpg")})`
                }
            },
            text:
                "Carrying luggage is essential when travelling. We provide separate insurance for your luggage. We take care of your personal valuables. In the event of loss we offer a full refund. If you wish to use ourservice you can take out insurance tailored to the size of your luggage.",
            important_text: "The price is per package size.",

            fields: [
                {
                    key: "size"
                },
                {
                    key: "height"
                },
                {
                    key: "width"
                },
                {
                    key: "depth"
                },
                {
                    key: "capacity"
                },
                {
                    key: "price",
                    variant: "dark"
                },
                {
                    key: "select"
                },
                {
                    key: "piece"
                },
            ],

            items: {
               first: {
                    size: "Small Cabin suitcase",
                    height: "45cm / 18inch",
                    width: "32cm / 13inch",
                    depth: "18cm / 7inch",
                    capacity: "30-40l",
                    price: "15 €"
                },
               second: {
                    size: "Large Cabin Suitcase",
                    height: "50cm / 20inch",
                    width: "36.5cm / 14.4inch",
                    depth: "23.4cm / 9.2inch",
                    capacity: "40-45l",
                    price: "20 €"
                },
               third: {
                    size: "X-large Cabin Suitcase",
                    height: "56cm / 22inch",
                    width: "38cm / 15inch",
                    depth: "24.5cm / 9.5inch",
                    capacity: "40-50l",
                    price: "20 €"
                },
               fourth: {
                    size: "Medium Suitcase",
                    height: "60cm / 24inch",
                    width: "43cm / 17inch",
                    depth: "26cm / 10.5inch",
                    capacity: "60-75l",
                    price: "30 €"
                },
               fifth: {
                    size: "Large Suitcase",
                    height: "69cm / 27inch",
                    width: "47cm / 18.5inch",
                    depth: "35.5cm / 14inch",
                    capacity: "100-117l",
                    price: "50 €"
                },
               sixth: {
                    size: "X-Large Suitcase",
                    height: "81cm / 32inch",
                    width: "55.8cm / 22inch",
                    depth: "35.5cm / 14inch",
                    capacity: "120-130l",
                    price: "60 €"
                }
            },
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
    height: 200vh;
    width: 100%;
}

.skin {
    height: 200vh;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

@media (max-width: 770px) {
    .animated-header {
        display: none;
    }

    .wrapper, .skin {
        height: 500vh;
    }
}


</style>
