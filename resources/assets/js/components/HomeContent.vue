<template>
    <div class="wrapper">
        <b-row class="content">
            <b-col cols="12" lg="5" class="under-left">
                <div class="left">
                    <div class="cover-bg">
                        <b-img
                            class="A320"
                            :src="'images/A320.png'"
                            fluid
                            alt="Plane"
                        ></b-img>
                    </div>
                </div>
                <Chat id="chat" />
            </b-col>
            <b-col cols="12" lg="7" class="right">
                <b-container class="open-page-content">
                    <h2 class="title-top">
                        Make your trip an <b>experience</b>
                    </h2>
                    <h1 class="title-bottom">fly with us</h1>
                    <b-form @submit="onBooking">
                        <b-row class="travelling-datas">
                            <div class="input-field">
                                <i class="material-icons prefix"
                                    >flight_takeoff</i
                                >
                                <input
                                    id="departure_place"
                                    type="text"
                                    @click="test"
                                />
                                <ul class="airports">
                                    <li
                                        v-for="airport in airports"
                                        :key="airport.id"
                                        @click="selectAirport"
                                    >
                                        <div class="airport">
                                            <i
                                                id="rotate-90deg"
                                                class="material-icons"
                                                >flight</i
                                            >
                                            <div class="data_">
                                                <span id="city_"
                                                    >{{ airport.city + ", " + airport.airport }}
                                                </span
                                                >
                                                <span id="country_"
                                                    >{{ airport.IATA_code + "-" + airport.country}}
                                                </span
                                                >
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <label id="label-departure" for="from"
                                    >Departure from*</label
                                >
                                <span
                                    class="helper-text"
                                    data-error="Please enter a departure city."
                                    data-success=""
                                ></span>
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix">flight_land</i>
                                <input id="arriving_place" type="text" />
                                <label id="label-arriving" for="from"
                                    >Arriving at*</label
                                >
                                <span
                                    class="helper-text"
                                    data-error="Please enter an arrival city."
                                    data-success=""
                                ></span>
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix">today</i>
                                <label id="label-date-away" for="date"
                                    >Departure date*</label
                                >
                                <input
                                    id="departure_date"
                                    type="text"
                                    class="datepicker"
                                />
                            </div>

                            <div id="back-way" class="input-field">
                                <i class="material-icons prefix">today</i>
                                <label id="label-date-return" for="date"
                                    >Return date*</label
                                >
                                <input
                                    id="return_date"
                                    type="text"
                                    class="datepicker"
                                />
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix"
                                    >account_circle</i
                                >
                                <input
                                    id="icon_prefix"
                                    type="text"
                                    :value="passengers_value"
                                    @click="setPassengers"
                                />
                                <label for="icon_prefix" class="active"
                                    >Passengers*</label
                                >
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix"
                                    >airline_seat_recline_extra</i
                                >
                                <input
                                    id="input-select"
                                    type="text"
                                    value="ECONOMY"
                                    @click="onSelect"
                                />
                                <ul class="select-list">
                                    <li>economy</li>
                                    <li>premium economy</li>
                                    <li>business</li>
                                    <li>first class</li>
                                </ul>
                                <label for="icon_prefix" class="active"
                                    >Cabin*</label
                                >
                            </div>

                            <b-row class="travel-type">
                                <b-form-radio
                                    class="radio"
                                    v-model="selected_radio"
                                    name="trip-radios"
                                    value="ONE WAY"
                                    v-on:change="showReturnDate('ONE WAY')"
                                    >ONE WAY</b-form-radio
                                >
                                <b-form-radio
                                    class="radio"
                                    v-model="selected_radio"
                                    name="trip-radios"
                                    value="ROUND TRIP"
                                    v-on:change="showReturnDate('ROUND TRIP')"
                                    >ROUND TRIP</b-form-radio
                                >
                            </b-row>
                            <b-button type="submit" id="submit-btn"
                                >BOOK NOW</b-button
                            >
                        </b-row>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>

        <main>
            <h5 class="main-title">Popular destinations</h5>
            <h6 class="main-subtitle">Explore the world with us</h6>

            <div class="top-destinations">
                <div
                    v-for="card in app.random_cards"
                    :key="card.id"
                    :id="card.id"
                    class="card"
                    @click="
                        onChangePageContent(card.id),
                            onChangeAreaAndLocation([card.area, card.location])
                    "
                >
                    <h4><span>from</span>{{ card.price }}</h4>
                    <div class="skin-cover">
                        <h6>{{ card.country }}</h6>
                        <h5>{{ card.city }}</h5>
                    </div>
                </div>
            </div>

            <router-link to="/travel-guide" class="travel-guide-btn"
                ><b-button id="submit-btn"
                    >More destinations</b-button
                ></router-link
            >
            <div class="other-services">
                <div class="car-rent">
                    <a
                        class="skin_"
                        target="_blank"
                        href="https://www.rentalcars.com/"
                    >
                        <h5 class="outer-service-title-car">Rental car</h5>
                    </a>
                </div>
                <div class="hotel-booking">
                    <a
                        class="skin_"
                        target="_blank"
                        href="https://www.booking.com/"
                    >
                        <h5 class="outer-service-title-hotel">Book hotel</h5>
                    </a>
                </div>
            </div>
        </main>
        <Passengers
            class="passengers"
            @changePassengersValue="updatePassengersValue($event)"
        />
    </div>
</template>

<script>
import Chat from "./Chat.vue";
import Passengers from "./Passengers.vue";
import AirportsDatas from "../../json/airports.json";
export default {
    name: "HomeContent",
    props: ["app"],
    components: {
        Chat,
        Passengers
    },

    data() {
        return {
            airports: AirportsDatas.airports,
            selected_radio: "",
            passengers_value: "1 Adult",
            cityUri: ""
        };
    },

    mounted() {
        this.scrollPage(0, 0);
        this.setFocusedInputLabelColor();
        const calendar = document.querySelectorAll(".datepicker");
        M.Datepicker.init(calendar, {
            minDate: new Date(Date.now())
        });
        this.getCityName();
    },

    methods: {
        test() {
            document.getElementsByClassName("airports")[0].style.display =
                "block";
        },

        selectAirport() {
            const departure_input = document.getElementById("departure_place");
            const label = document.getElementById("label-departure")
            const selectFields = document.querySelectorAll(".airport");

            selectFields.forEach(field => {
                field.addEventListener("click", () => {
                    console.dir(field.children[1].children[0].textContent)
                    departure_input.value = field.children[1].children[0].textContent;
                    label.classList.add("active");
                });
            });
        },

        updatePassengersValue(updatePassengersValue) {
            this.passengers_value = updatePassengersValue;
        },

        setPassengers() {
            document.getElementsByClassName("passengers")[0].style.display =
                "flex";
        },

        onSelect() {
            const select = document.getElementsByClassName("select-list");
            const selectItems = document.querySelectorAll(".select-list li");
            const selectInput = document.getElementById("input-select");
            select[0].style.display = "block";

            selectItems.forEach(item => {
                item.addEventListener("click", () => {
                    selectInput.value = item.textContent.toUpperCase();
                    select[0].style.display = "none";
                });
            });
        },

        onChangeAreaAndLocation([cardArea, cardLocation]) {
            this.$emit("onChangeAreaAndLocation", [cardArea, cardLocation]);
        },

        onChangePageContent(cardId) {
            this.$emit("onChangePageContent", cardId);
        },

        scrollPage(positionY, positionX) {
            window.scroll({
                top: positionY,
                left: positionX
            });
        },

        getCityName() {
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                card.addEventListener("mousedown", () => {
                    this.cityUri = card.lastChild.lastChild.textContent.replace(
                        " ",
                        "-"
                    );
                });
            });
        },

        showReturnDate: function(selected_radio) {
            if (selected_radio === "ROUND TRIP") {
                document.getElementById("back-way").style.display = "flex";
            } else {
                document.getElementById("back-way").style.display = "none";
            }
        },

        onBooking(event) {
            event.preventDefault();
            alert("Booking Successful!");
        },

        getInputs() {
            const inputs = [
                {
                    activeInput: document.getElementById("departure_place"),
                    label: document.getElementById("label-departure")
                },
                {
                    activeInput: document.getElementById("arriving_place"),
                    label: document.getElementById("label-arriving")
                },
                {
                    activeInput: document.getElementById("departure_date"),
                    label: document.getElementById("label-date-away")
                },
                {
                    activeInput: document.getElementById("return_date"),
                    label: document.getElementById("label-date-return")
                }
            ];
            return inputs;
        },

        setFocusedInputLabelColor() {
            this.getInputs().forEach(input => {
                input.activeInput.addEventListener("focusin", () => {
                    input.label.style.color = "#6a1b9a";
                });
                input.activeInput.addEventListener("focusout", () => {
                    input.label.style.color = "#9e9e9e";
                });
            });
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}

*:focus {
    outline: 0px !important;
    box-shadow: 2px 2px 5px silver !important;
    border: 1px solid #ced4da !important;
}

body {
    background: whitesmoke;
}

.content {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: whitesmoke;
    margin: 0 !important;
    border-bottom: 1px solid rgb(9, 55, 115);
    box-shadow: 2px 2px 10px rgb(9, 55, 115);
}

.under-left {
    height: 100vh;
    width: 40%;
    box-shadow: 2px 2px 5px rgb(9, 55, 115);
    background: rgb(9, 55, 115);
    border-right: 10px solid whitesmoke;
    border-top-right-radius: 200%;
    border-bottom-right-radius: 1000%;
    padding: 0;
}

.left {
    background: url("../../img/city.jpg");
    height: 100vh;
    width: 90%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
    box-shadow: 2px 2px 5px rgb(9, 55, 115);
}

.cover-bg {
    background: linear-gradient(
        135deg,
        white,
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.9)
    );
    height: 100vh;
    width: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
}

.right {
    height: 100vh;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.open-page-content {
    width: 80%;
}

.title-top {
    font-size: 3.5rem;
    font-weight: 400;
    color: rgb(9, 55, 115);
    text-transform: capitalize;
    text-shadow: 2px 2px 5px silver;
}

.title-bottom {
    font-size: 4rem;
    font-weight: 500;
    color: rgb(9, 55, 115);
    text-transform: uppercase;
    text-shadow: 2px 2px 5px silver;
}

.travelling-datas,
.travel-type {
    padding: 5px;
    width: 100%;
}

.travelling-datas {
    justify-content: space-between;
    margin-left: 0;
}

.radio {
    margin-left: 13px;
}

.label,
.travel-type {
    color: rgb(9, 55, 115);
}

#departure_date,
#return_date {
    width: 150px;
}

label {
    color: #9e9e9e;
}

input {
    width: 190px !important;
    padding: 20px;
}

.input-field {
    width: 200px;
}

.input-field input[type="text"]:focus {
    border-bottom: 1px solid #6a1b9a !important;
    box-shadow: 0 1px 0 0 #6a1b9a !important;
}

.input-field input[type="text"]:focus + label {
    color: #6a1b9a !important;
    text-shadow: 2px 2px 5px silver;
}

.input-field .prefix.active {
    color: #6a1b9a;
}

input:focus {
    border: none !important;
    box-shadow: none !important;
}

.datepicker-date-display {
    background: rgb(9, 55, 115);
}

.datepicker-cancel,
.datepicker-done,
.datepicker-table td.is-today {
    color: rebeccapurple;
}

.datepicker-table td.is-today .datepicker-day-button {
    color: royalblue;
    font-weight: 600;
}

.month-prev:active,
.month-next:active {
    background: rebeccapurple;
    opacity: 0.8;
}

.is-selected,
.is-selected .datepicker-day-button {
    background: rebeccapurple !important;
    color: whitesmoke !important;
    font-weight: 400 !important;
}

.datepicker-day-button:active {
    background: rebeccapurple !important;
    color: whitesmoke;
    opacity: 0.7;
}

.modal {
    background: transparent;
    box-shadow: none !important;
    height: 46.8%;
    border: none !important;
}

.modal-content .datepicker-container {
    border: none !important;
}

#back-way {
    display: none;
}

#submit-btn {
    background: RebeccaPurple;
    width: 230px;
    height: 40px;
    box-shadow: 2px 2px 5px silver;
    border: 1px solid #ced4da;
    margin-left: 3px;
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
    background: transparent;
    border: 1px solid rebeccapurple;
    transition: 0.4s ease-in-out 0s;
}

.input-column {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.icon {
    width: 38px;
    height: 38px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ced4da;
    border-left: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
}

.form-icon {
    display: flex;
    width: 180px;
    box-shadow: 2px 2px 5px silver;
}

.A320 {
    margin-top: 100px;
    margin-left: 250px;
    position: relative;
    animation: flight 1.5s ease-in-out;
    -webkit-animation: flight 1.5s ease-in-out;
}

#icon_prefix,
#input-select {
    cursor: pointer;
}

.select-list {
    width: 95%;
    height: 120px;
    border: 1px solid #9e9e9e;
    background: whitesmoke;
    margin-left: 45px;
    position: absolute;
    top: 0;
    z-index: 11;
    display: none;
}

.select-list li {
    text-transform: uppercase;
    padding: 0.25rem;
    cursor: pointer;
}

.select-list li:hover {
    background: #6a1b9a;
    color: white;
}

.passengers {
    display: none;
}

.airports {
    width: 450px;
    height: 200px;
    border: 1px solid grey;
    overflow-y: scroll;
    display: none;
}

.airports li {
    height: 50px;
    width: 100%;
    border-top: 1px solid #ced4da;
    cursor: pointer;
}

.airports li:hover {
    background: #ced4da;
}

.airport {
    height: 50px;
    width: 100%;
    display: flex;
}

.airport i {
    width: 50px;
    height: 50px;
    padding: 5px;
}

#rotate-90deg {
    transform: rotate(90deg);
    color: rgb(5, 55, 115);
    display: flex;
    align-items: center;
    justify-content: center;
}

.data_ {
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
}

#city_,
#country_ {
    margin-bottom: 0 !important;
}

#country_ {
    color: rgb(5, 55, 115);
}

/*-------- Main content settings ------*/

main {
    width: 80%;
    height: 110vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.main-title {
    margin-top: 50px;
    text-align: center;
    text-transform: uppercase;
    color: rgb(5, 55, 115);
    text-shadow: 2px 2px 5px silver;
    font-weight: 600;
}

.main-subtitle {
    margin-bottom: 15px;
    text-align: center;
    color: rgb(5, 55, 115);
    text-shadow: 2px 2px 5px silver;
    font-weight: 400;
}

.top-destinations {
    height: 45vh;
    width: 100%;
    background: whitesmoke;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 20px;
}

.travel-guide-btn {
    margin: 0 auto;
}

.other-services {
    width: 100%;
    height: 200px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.skin_ {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.outer-service-title-car,
.outer-service-title-hotel {
    color: whitesmoke;
    margin-top: 70px;
}

.outer-service-title-car {
    text-align: end;
    padding-right: 100px;
}

.outer-service-title-hotel {
    text-align: start;
    padding-left: 100px;
}

.car-rent {
    height: 100%;
    width: 48%;
    background-image: url("../../img/car.jpg");
    background-repeat: no-repeat;
    background-position-y: -70px;
    background-size: 100%;
    transition: all 1s ease 0s;
}

.hotel-booking {
    height: 100%;
    width: 48%;
    background-image: url("../../img/hotel.jpg");
    background-repeat: no-repeat;
    background-position-y: -80px;
    background-size: 100%;
    transition: all 1s ease 0s;
}

.car-rent:hover,
.hotel-booking:hover {
    background-size: 110%;
    background-position-y: -100px;
    transition: all 1s ease 0s;
}

/*-------- Cities settings -----------*/

#athens {
    background: url("../../img/athens.jpg");
    background-position-x: -80px;
    background-size: cover;
}

#barcelona {
    background: url("../../img/barcelona.jpg");
    background-position-x: -120px;
    background-size: cover;
}

#cairo {
    background: url("../../img/cairo.png");
    background-position-x: -120px;
    background-size: cover;
}

#istanbul {
    background: url("../../img/istanbul.jpg");
    background-position-x: 0;
    background-size: cover;
}

#lisbon {
    background: url("../../img/lisbon.png");
    background-position-x: -120px;
    background-size: cover;
}

#london {
    background: url("../../img/london.jpeg");
    background-position-x: -180px;
    background-size: cover;
}

#montreal {
    background: url("../../img/montreal.jpg");
    background-position-x: -50px;
    background-size: cover;
}

#munich {
    background: url("../../img/munich.jpg");
    background-position-x: -80px;
    background-size: cover;
}

#new-york {
    background: url("../../img/new-york.jpg");
    background-position-x: -50px;
    background-size: cover;
}

#paris {
    background: url("../../img/paris.jpg");
    background-position-x: -87px;
    background-size: cover;
}

#rome {
    background: url("../../img/rome.jpg");
    background-position-x: -70px;
    background-size: cover;
}

#zurich {
    background: url("../../img/zurich.jpg");
    background-position-x: -70px;
    background-size: cover;
}

/*------------ Card settings -------------*/

.card {
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;
}

.card:hover {
    box-shadow: 5px 5px 10px rgb(5, 55, 115);
}

.card:hover .skin-cover {
    transform: translateY(0rem);
}

a:hover {
    text-decoration: none;
}

.card h4 {
    background: green;
    height: 3rem;
    color: whitesmoke;
    width: 100%;
    text-align: center;
    padding: 5px 0 0 70px;
    margin: 0 0 70px 140px;
    transform: rotate(45deg);
}

.card h4 span {
    font-size: 0.8rem;
    padding-right: 10px;
}

.skin-cover {
    background: linear-gradient(180deg, transparent, rgb(5, 55, 115));
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: whitesmoke;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    border-radius: 0.5rem;
    transform: translateY(1rem);
}

.skin-cover h5 {
    margin-top: 0;
    font-weight: 600;
    font-size: 1.8rem;
    padding-bottom: 40px;
    text-transform: uppercase;
}

.skin-cover h6 {
    text-transform: capitalize;
    margin: 0;
}

@keyframes flight {
    from {
        left: -1000px;
    }
    to {
        left: 0px;
    }
}

/*----------- Responsive settings ------------*/

@media (max-width: 1355px) {
    .A320 {
        margin-left: 150px;
    }
}

@media (max-width: 1200px) {
    form {
        flex-direction: column;
    }

    .input,
    .input-column,
    .select,
    .form-icon {
        width: 100%;
    }
}

@media (max-width: 1100px) {
    .A320 {
        margin-left: 120px;
    }
}

@media (max-width: 1000px) {
    .title-top {
        font-size: 3rem;
    }

    .title-bottom {
        font-size: 3.5rem;
    }

    .A320 {
        margin-left: 100px;
    }
}

@media (max-width: 991px) {
    .under-left {
        height: 40vh;
        width: 100%;
        padding-right: 0;
        background: none;
        border-right: none;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
    }

    .left {
        background: url("../../img/city.jpg");
        height: 40vh;
        width: 100%;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
    }

    .cover-bg {
        background: linear-gradient(
            135deg,
            white,
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 0.7)
        );
        height: 40vh;
        width: 100%;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        height: 160vh;
    }

    .right {
        padding-right: 0;
    }

    .A320 {
        margin-left: 0px;
    }

    #chat {
        display: none;
    }
}

@media (max-width: 576px) {
    .title-top {
        font-size: 2rem;
    }

    .title-bottom {
        font-size: 2.5rem;
    }
}
</style>
