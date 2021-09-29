<template>
    <div class="wrapper">
        <navbar />
        <b-row class="content">
            <b-col cols="12" lg="5" class="under-left">
                <div class="left">
                    <div class="cover-bg">
                        <b-img
                            :src="'images/A320.png'"
                            fluid
                            alt="Plane"
                        ></b-img>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" lg="7" class="right">
                <b-container class="open-page-content">
                    <h2 class="title-top">
                        Make your trip an <b>experience</b>
                    </h2>
                    <h1 class="title-bottom">fly with us</h1>
                    <b-form>
                        <b-row class="row1">
                            <div class="input-column">
                                <label for="from">From</label>
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
                                <label for="to">To</label>
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
                                <label for="date">Date of away</label>
                                <b-form-input
                                    class="input"
                                    name="date"
                                    type="date"
                                ></b-form-input>
                            </div>

                            <div id="back-way" class="input-column">
                                <label for="date">Date of back way</label>
                                <b-form-input
                                    id="back-date"
                                    class="input"
                                    name="date"
                                    type="date"
                                ></b-form-input>
                            </div>
                        </b-row>

                        <b-row class="row2">
                            <b-form-radio
                                class="radio"
                                v-model="selected_radio"
                                :aria-describedby="ariaDescribedby"
                                name="trip-radios"
                                value="ONE WAY"
                                v-on:change="showReturnDate('ONE WAY')"
                                >ONE WAY</b-form-radio
                            >
                            <b-form-radio
                                class="radio"
                                v-model="selected_radio"
                                :aria-describedby="ariaDescribedby"
                                name="trip-radios"
                                value="ROUND TRIP"
                                v-on:change="showReturnDate('ROUND TRIP')"
                                >ROUND TRIP</b-form-radio
                            >
                        </b-row>

                        <b-button id="submit-btn">BOOK NOW</b-button>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {

    components: {
        'navbar': Navbar,
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
                { value: "Budapest", text: "Budapest"},
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
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

*:focus {
    outline: 0px !important;
    box-shadow: 2px 2px 5px silver !important;
    border: 1px solid #ced4da !important;
}

.wrapper {
    width: 100%;
    height: 100hv;
    font-family: Poppins;
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
    box-shadow: 2px 2px 5px silver;
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
    box-shadow: 2px 2px 5px silver;
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

label {
    color: rgb(9, 55, 115);
    text-shadow: 2px 2px 5px silver;
}

.select {
    width: 150px;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}

option:hover {
    background: rebeccapurple;
    color: white;
}

.input {
    width: 190px;
    box-shadow: 2px 2px 5px silver;
}

#back-way {
    display: none;
}

#submit-btn {
    background: RebeccaPurple;
    width: 230px;
    box-shadow: 2px 2px 5px silver;
    border: 1px solid #ced4da;
    margin-left: 3px;
}

#submit-btn:active {
    box-shadow: none;
    background-color: whitesmoke;
    color: RebeccaPurple;
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

img {
    height: 424px;
    width: 589px;
    margin-top: 100px;
    margin-left: 180px;
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

    img {
        margin-left: 150px;
    }
}

@media (max-width: 1000px) {
    .title-top {
        font-size: 3rem;
    }

    .title-bottom {
        font-size: 3.5rem;
    }
}

@media (max-width: 991px) {
    img {
        margin-left: 0px;
    }

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

    .right {
        padding-right: 0;
    }
}
</style>
