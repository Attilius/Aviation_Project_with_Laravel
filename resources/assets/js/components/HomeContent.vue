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
                        <b-row class="row1">
                            <div class="input-column">
                                <label class="label" for="from">From</label>
                                <div class="form-icon">
                                    <div class="icon">
                                        <font-awesome-icon
                                            :icon="['fas', 'plane-departure']"
                                        />
                                    </div>
                                    <b-form-select
                                        class="select"
                                        name="from"
                                        v-model="selected_from"
                                        :options="options_from"
                                    ></b-form-select>
                                </div>
                            </div>

                            <div class="input-column">
                                <label class="label" for="to">To</label>
                                <div class="form-icon">
                                    <div class="icon">
                                        <font-awesome-icon
                                            :icon="['fas', 'plane-arrival']"
                                        />
                                    </div>
                                    <b-form-select
                                        class="select"
                                        name="to"
                                        v-model="selected_to"
                                        :options="options_to"
                                    ></b-form-select>
                                </div>
                            </div>

                            <div class="input-column">
                                <label class="label" for="date"
                                    >Date of away</label
                                >
                                <b-form-input
                                    class="input"
                                    name="date"
                                    type="date"
                                ></b-form-input>
                            </div>

                            <div id="back-way" class="input-column">
                                <label class="label" for="date"
                                    >Date of back way</label
                                >
                                <b-form-input
                                    id="back-date"
                                    class="input"
                                    name="date"
                                    type="date"
                                ></b-form-input>
                            </div>
                            
                            <div class="input-column">
                                <label class="label" for="passengers">Passengers</label>
                                <div class="form-icon">
                                <b-form-select
                                    class="input"
                                    name="passengers"
                                    v-model="selected_passengers"
                                    :options="options_passengers"
                                ></b-form-select>
                                </div>
                            </div>
                            
                            <div class="input-column">
                                <label class="label" for="cabin">Cabin</label>
                                <div class="form-icon">
                                <b-form-select
                                    class="input"
                                    name="cabin"
                                    v-model="selected_cabin"
                                    :options="options_cabin"
                                ></b-form-select>
                                </div>
                            </div>
                        </b-row>

                        <b-row class="row2">
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
                    </b-form>
                </b-container>
            </b-col>
        </b-row>

        <main>
            <h3>Popular destinations</h3>
            <h5>We fly you to the place of your dreams</h5>
        </main>
        
        <div class="top-destinations">      
            <div id="athen" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>greece</h6>
                    <h3>athen</h3>
                </div>
            </div>
            <div id="barcelona" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>spain</h6>
                    <h3>barcelona</h3>
                </div>
            </div>
            <div id="cairo" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>egypt</h6>
                    <h3>cairo</h3>
                </div>
            </div>
            <div id="istanbul" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>turkey</h6>
                    <h3>istanbul</h3>
                </div>
            </div>
            <div id="lisboa" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>portugal</h6>
                    <h3>lisbon</h3>
                </div>
            </div>
            <div id="london" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>united kingdom</h6>
                    <h3>london</h3>
                </div>
            </div>
            <div id="montreal" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>canada</h6>
                    <h3>montreal</h3>
                </div>
            </div>
            <div id="munich" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>germany</h6>
                    <h3>munich</h3>
                </div>
            </div>
            <div id="new_york" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>united states of america</h6>
                    <h3>new york</h3>
                </div>
            </div>
            <div id="paris" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>france</h6>
                    <h3>paris</h3>
                </div>
            </div>
            <div id="rome" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>italy</h6>
                    <h3>rome</h3>
                </div>
            </div>
            <div id="zurich" class="card">
                <h4><span>from</span>100 €*</h4>
                <div class="skin-cover">
                    <h6>switzerland</h6>
                    <h3>zurich</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chat from "./Chat.vue";
export default {
    name: "HomeContent",

    components: {
        Chat
    },

    data() {
        return {
            selected_from: null,
            options_from: [
                {
                    value: null,
                    text: "Please select your location of departure",
                    disabled: true
                },
                { value: "Budapest", text: "Budapest" },
                { value: "London", text: "London" },
                { value: "Paris", text: "Paris" },
                { value: "Munich", text: "Munich" },
                { value: "New York", text: "New York" }
            ],
            selected_to: null,
            options_to: [
                {
                    value: null,
                    text: "Please select your destination",
                    disabled: true
                },
                { value: "Budapest", text: "Budapest" },
                { value: "London", text: "London" },
                { value: "Paris", text: "Paris" },
                { value: "Munich", text: "Munich" },
                { value: "New York", text: "New York" }
            ],
            selected_cabin: null,
            options_cabin: [
                {
                    value: null,
                    text: "Please select",
                    disabled: true
                },
                { value: "Economy", text: "Economy" },
                { value: "Premium Economy", text: "Premium Economy" },
                { value: "Business", text: "Business" },
                { value: "First", text: "First" }
            ],
            selected_passengers: null,
            options_passengers: [
                {
                    value: null,
                    text: "Please select",
                    disabled: true
                },
                { value: "Infant (0-23 months)", text: "Infant (0-23 months)" },
                { value: "Child (2-11 years)", text: "Child (2-11 years)" },
                { value: "Youth (12-17 years)", text: "Youth (12-17 years)" },
                { value: "Youth (18-24 years)", text: "Youth (18-24 years)" },
                { value: "Student (18-29 years)", text: "Student (18-29 years)" },
                { value: "Adult", text: "Adult" },
                { value: "Senior (65 years and Older)", text: "Senior (65 years and Older)" }
            ],
            selected_radio: ""
        };
    },

    methods: {
        showReturnDate: function(selected_radio) {
            if (selected_radio === "ROUND TRIP") {
                document.getElementById("back-way").style.display = "flex";
            } else {
                document.getElementById("back-way").style.display = "none";
                document.getElementById("back-date").value = "yyyy-mm-dd";
            }
        },

        onBooking(event) {
            event.preventDefault();
            alert("Booking Successful!");
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
    margin-right: 0 !important;
    margin-left: 0 !important;
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

main {
    margin: 60px 0 0 100px;
    color: rgb(9, 55, 115);
    text-shadow: 2px 2px 5px silver;
}

main h3 {
    text-transform: uppercase;
}
/* Cities settings */
#athen {
    background: url("../../img/athen.jpg");
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

#lisboa {
    background: url("../../img/lisboa.png");
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

#new_york {
   background: url("../../img/new_york.jpg");
    background-position-x: -50px;
    background-size: cover;
}

#paris {
   background: url("../../img/paris.jpg");
    background-position-x: -70px;
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

/* Card settings */

.card {
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 0.5rem;
    overflow: hidden;
}

.card:hover .skin-cover {
    transform: translateY(0rem);
}

.card h4 {
    background: rebeccapurple;
    height: 2.4rem;
    color: whitesmoke;
    width: 100%;
    text-align: center;
    padding-top: 5px;
    margin: 0 0 50px 150px;
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

.skin-cover h3 {
    padding-bottom: 40px;
    text-transform: uppercase;
}

.skin-cover h6 {
    text-transform: capitalize;
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

.row1,
.row2 {
    padding: 5px;
    width: 100%;
}

.row1 {
    justify-content: space-between;
    margin-left: 0;
}

.radio {
    margin-left: 13px;
}

.label,
.row2 {
    color: rgb(9, 55, 115);
    text-shadow: 2px 2px 5px silver;
}

.select {
    width: 100%;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}

option:hover {
    background: rebeccapurple;
    color: white;
}

.input {
    width: 200px;
    box-shadow: 2px 2px 5px silver;
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
    width: 200px;
    box-shadow: 2px 2px 5px silver;
}

.A320 {
    margin-top: 100px;
    margin-left: 250px;
    position: relative;
    animation: flight 1.5s ease-in-out;
    -webkit-animation: flight 1.5s ease-in-out;
}

.top-destinations {
    height: 150vh;
    width: 100%;
    background: whitesmoke;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    grid-gap: 20px;
    padding: 50px 100px;
}

@keyframes flight {
    from {
        left: -1000px;
    }
    to {
        left: 0px;
    }
}

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
