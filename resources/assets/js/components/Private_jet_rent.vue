<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader :titles="titles" :images="images" />
                <ServicesMainContent :titles="titles" :text="text" :radio_datas="radio_datas" :label="label" :message="message" />
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
                first: "Private jet rent",
                second: "Get private service"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/private-1.jpg")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/private-2.jpeg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/private-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/private-4.jpg")})`
                }
            },
            text:
                "Do you have an urgent and unavoidable trip? Do you need to travel to a special place? Our company offers you the possibility to rent a private jet.",

            radio_datas: [
                {
                    img: "/images/eclipse-500.jpg",
                    text: "Eclipse 500",
                    staff: "3 person",
                    passenger_capacity: "4 people",
                    price: "1500 €/h",
                    value: 100
                },
                {
                    img: "/images/embraer-phenom-100.jpg",
                    text: "Embraer Phenom 100",
                    staff: "3 person",
                    passenger_capacity: "4-7 people",
                    price: "1800 €/h",
                    value: 200
                },
                {
                    img: "/images/cessna-citation-latitude.jpg",
                    text: "Cessna Citation Latitude",
                    staff: "4 person",
                    passenger_capacity: "7-9 people",
                    price: "2100 €/h",
                    value: 300
                },
                {
                    img: "/images/bombardier-challenger-605.png",
                    text: "Bombardier Challenger 605",
                    staff: "4 person",
                    passenger_capacity: "9-12 people",
                    price: "2500 €/h",
                    value: 400
                },
                {
                    img: "/images/dassault-falcon-7X.jpg",
                    text: "Dassault Falcon 7X",
                    staff: "5 person",
                    passenger_capacity: "12-16 people",
                    price: "2800 €/h",
                    value: 500
                }
            ],

            label: "from our jet offer",

            message: "Test"
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
    height: 130vh;
    width: 100%;
}

.skin {
    height: 130vh;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
