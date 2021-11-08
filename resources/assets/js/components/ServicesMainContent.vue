<template>
    <div class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }}</article>

        <div class="input-box">
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
                    class="input-date"
                    name="date"
                    type="date"
                ></b-form-input>
            </div>

            <div class="input-column">
                <label for="date">Time</label>
                <b-form-input
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
            :distance_="distance_"
        />
    </div>
</template>

<script>
import RadioForm from "./Radio-form.vue";
export default {
    name: "ServicesMainContent",
    props: ["titles", "text", "radio_datas", "label", "message"],
    components: {
        RadioForm
    },

    data() {
        return {
            from: "",
            to: "",
            distance_: ""
        };
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
            fetch(
                `/api/private-jet-rent?departure_location=${this.from}&destination=${this.to}`
            )
                .then(response => response.json())
                .then(data => {
                    this.distance_ = data.distance;
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
    height: 520px;
    margin: 0 auto;
    position: relative;
    top: 105px;
    margin-bottom: 250px;
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
        top: 50px;
        width: 100%;
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
