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
                    :distance_="distance_"
                />
                <div class="input-box">
                    <div class="input-column">
                        <label for="from">From</label>
                        <div class="form-icon">
                            <div class="icon">
                                <font-awesome-icon
                                    :icon="['fas', 'plane-departure']"
                                />
                            </div>
                            <b-form-input
                                id="from"
                                class="input"
                                name="from"
                                type="text"
                            ></b-form-input>
                        </div>
                    </div>

                    <div class="input-column">
                        <label for="to">To</label>
                        <div class="form-icon">
                            <div class="icon">
                                <font-awesome-icon
                                    :icon="['fas', 'plane-arrival']"
                                />
                            </div>
                            <b-form-input
                                id="to"
                                class="input"
                                name="to"
                                type="text"
                            ></b-form-input>
                        </div>
                    </div>

                    <div class="input-column">
                        <label for="date">Date of away</label>
                        <b-form-input
                            class="input-date"
                            name="date"
                            type="date"
                        ></b-form-input>
                    </div>
                    <b-form @submit="onSubmit">
                        <button type="submit" id="submit-btn">Send</button>
                    </b-form>
                </div>
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

            message: [],

            from: "",
            to: "",
            distance_: ""
        }
    },

    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.from = document.getElementById("from").value;
            this.to = document.getElementById("to").value;
            this.fetchData();
            document.getElementById("from").value = "";
            document.getElementById("to").value = "";
        },

        fetchData() {
            fetch(`/api/private-jet-rent?departure_location=${this.from}&destination=${this.to}`)
                .then(response => response.json())
                .then(data => {
                    this.distance_ = data.distance;
                });
        }
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

.animated-header {
    margin-bottom: 350px;
}

.input-box {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 30px;
}

.input {
    width: 150px;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    box-shadow: none;
}

.input:focus {
    box-shadow: none !important;
}

.input-date {
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
}

.input-date:focus {
    box-shadow: 2px 2px 5px black !important;
}

.input-column {
    margin-right: 10px;
}

.form-icon {
    display: flex;
    width: 180px;
    box-shadow: 2px 2px 5px black;
}

label {
    color: whitesmoke;
    text-shadow: none;
}

#submit-btn {
    background: RebeccaPurple;
    width: 80px;
    height: 40px;
    box-shadow: 2px 2px 5px black;
    border: none;
    border-radius: 0.25rem;
    margin-top: 40px;
    color: whitesmoke;
    font-size: 1rem;
    transition: all 0.3s ease;
}

#submit-btn:active {
    box-shadow: none !important;
    background-color: rebeccapurple !important;
    color: whitesmoke !important;
}

#submit-btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
    transition: 0.4s ease-in-out 0s;
}

@media (max-width: 768px) {
    .animated-header {
        display: none;
    }
}
</style>
