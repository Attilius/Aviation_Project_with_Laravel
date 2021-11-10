<template>
    <div id="content" class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }}</article>

        <div id="inputs" class="input-box">
            <div class="input-column">
                <label for="from">From</label>
                <div class="form-icon">
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'plane-departure']" />
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
                        <font-awesome-icon :icon="['fas', 'plane-arrival']" />
                    </div>
                    <b-form-input
                        id="to"
                        class="input"
                        name="to"
                        type="text"
                    ></b-form-input>
                </div>
            </div>

            <div class="date-and-time">
                <div class="input-column">
                    <label for="date">Date</label>
                    <b-form-input
                        id="date"
                        class="input-date"
                        name="date"
                        type="date"
                    ></b-form-input>
                </div>

                <div class="input-column">
                    <label for="date">Time</label>
                    <b-form-input
                        id="time"
                        class="input-date"
                        name="time"
                        type="time"
                    ></b-form-input>
                </div>
            </div>

            <b-form @submit="onSubmit">
                <button type="submit" id="submit-btn">Send</button>
            </b-form>
        </div>

        <RadioForm
            class="radio-form"
            :radio_datas="radio_datas"
            :label="label"
            :message="message"
            :travelling_data="travelling_data"
            :insurences="insurences"
        />
    </div>
</template>

<script>
import RadioForm from "./Radio-form.vue";
export default {
    name: "ServicesMainContent",
    props: ["titles", "text", "radio_datas", "label", "message", "insurences"],
    components: {
        RadioForm
    },

    data() {
        return {
            travelling_data: {
                from: "",
                to: "",
                date: "",
                time: "",
                distance_: ""
            }
        };
    },

    mounted() {
        this.hideInputs();
        this.setContentHeight();
    },

    methods: {
        hideInputs() {
            const inputs = document.getElementById("inputs");
            if (location.pathname != "/services/private-jet-rent") {
                inputs.style.display = "none";
            }
        },

        setContentHeight() {
            const content = document.getElementById("content");

            switch (location.pathname) {
                case "/services/travel-insurance":
                    if (window.innerWidth > 768) {
                        content.style.height = "400px";
                    }
                    break;

                case "/services/private-jet-rent":
                    if (window.innerWidth > 768) {
                        content.style.height = "520px";
                    }
                    break;

                case "/services/group-discount":
                    if (window.innerWidth > 768) {
                        content.style.height = "400px";
                    }
                    break;
            }
        },

        addValue() {
            this.travelling_data.from = document.getElementById("from").value;
            this.travelling_data.to = document.getElementById("to").value;
            this.travelling_data.date = document.getElementById("date").value;
            this.travelling_data.time = document.getElementById("time").value;
        },

        dataReset() {
            document.getElementById("from").value = "";
            document.getElementById("to").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
        },

        onSubmit(event) {
            event.preventDefault();
            this.addValue();
            this.fetchData();
            this.dataReset();
        },

        fetchData() {
            fetch(
                `/api/private-jet-rent?departure_location=${this.travelling_data.from}&destination=${this.travelling_data.to}`
            )
                .then(response => response.json())
                .then(data => {
                    this.travelling_data.distance_ = data.distance;
                });
        }
    }
};
</script>

<style scoped>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.text-content {
    background: transparent;
    width: 80%;
    margin: 0 auto 150px;
    position: relative;
}

h2::after {
    content: "";
    position: absolute;
    background-color: lightskyblue;
    width: 20%;
    height: 7px;
    bottom: -10px;
    left: 30px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 5px black;
}

h2 {
    padding: 15px 20px 25px 30px;
    position: relative;
    margin-top: 50px;
    color: whitesmoke;
    text-transform: capitalize;
    text-shadow: 2px 2px 5px black;
    width: 30%;
}

article {
    width: 95%;
    margin: 0px auto;
    padding: 25px 0;
    color: #ced4da;
    border-bottom: 2px solid lightskyblue;
}

.radio-form {
    padding: 30px;
}

.input-box {
    display: flex;
    width: 95%;
    margin: 0 auto;
    padding-top: 30px;
}

.input {
    width: 150px;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    box-shadow: none;
    text-align: center;
}

.input:focus {
    box-shadow: none !important;
}

.input-date {
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
    text-align: center;
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
    margin-top: 22px;
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

.date-and-time {
    display: flex;
}

@media (max-width: 1350px) {
    .text-content {
        height: 550px;
    }
}

@media (max-width: 1250px) {
    .text-content {
        height: 600px;
    }
}

@media (max-width: 900px) {
    .text-content {
        height: 620px;
    }
}

@media (max-width: 768px) {
    .text-content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 5%;
    }

    article {
        width: 85%;
        margin: 0 30px;
    }

    .input-box {
        flex-direction: column;
        align-items: center;
        width: 85%;
        margin: 0 auto;
    }

    .input {
        width: 100%;
    }

    .date-and-time {
        width: 103%;
    }

    .input-date {
        width: 100%;
    }

    .form-icon {
        width: 100%;
    }
}
</style>
