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
                <ServicesMainContent
                    :titles="titles"
                    :text="text"
                    :radio_datas="radio_datas"
                    :label="label"
                    :message="message"
                />
                
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import AnimatedHeader from "../components/AnimatedHeader.vue";
import ServicesMainContent from "../components/ServicesMainContent.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "Private_jet_rent",
    props: ["app"],
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
                    speed: 685,
                    range_distance: 2084,
                    staff: "3 person",
                    passenger_capacity: "4 people",
                    price: 1500,
                    value: 100
                },
                {
                    img: "/images/embraer-phenom-100.png",
                    text: "Embraer Phenom 100",
                    speed: 750,
                    range_distance: 2182,
                    staff: "1 person",
                    passenger_capacity: "4-7 people",
                    price: 1800,
                    value: 200
                },
                {
                    img: "/images/cessna-citation-latitude.jpg",
                    text: "Cessna Citation Latitude",
                    speed: 826,
                    range_distance: 5332,
                    staff: "2 person",
                    passenger_capacity: "7-9 people",
                    price: 2400,
                    value: 300
                },
                {
                    img: "/images/bombardier-challenger-605.jpg",
                    text: "Bombardier Challenger 605",
                    speed: 870,
                    range_distance: 7400,
                    staff: "2 person",
                    passenger_capacity: "9-12 people",
                    price: 2900,
                    value: 400
                },
                {
                    img: "/images/dassault-falcon-7X.jpg",
                    text: "Dassault Falcon 7X",
                    speed: 900,
                    range_distance: 11019,
                    staff: "3 person",
                    passenger_capacity: "12-16 people",
                    price: 3500,
                    value: 500
                }
            ],

            label: "from our jet offer",

            message: ["Total cost is", "€"]
        }
    },

    
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

.animated-header {
    margin-bottom: 350px;
}

@media (max-width: 768px) {
    .animated-header {
        display: none;
    }
}
</style>
