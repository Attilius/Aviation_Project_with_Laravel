<template>
    <div>
        <b-form-group class="form" v-slot="{ ariaDescribedby }">
            <h5 id="label" class="radio-form-label">Selecting {{ label }}</h5>
            <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                v-for="radio_data in radio_datas"
                :key="radio_data.text"
                @change="onChange"
                :value="radio_data.value"
                ><div class="radio-content">
                    {{ radio_data.text }}
                </div></b-form-radio
            >
            <div id="jet">
                <div
                    v-for="radio_data in radio_datas"
                    :key="radio_data.value"
                    class="jet-information"
                >
                    <img class="jet-img" :src="radio_data.img" alt="plane" />
                    <div class="data">
                        <p class="radio-form-key">Type:</p>
                        {{ radio_data.text }}
                    </div>
                    <div class="data">
                        <p class="radio-form-key">Staff:</p>
                        {{ radio_data.staff }}
                    </div>
                    <div class="data">
                        <p class="radio-form-key">Passenger capacity:</p>
                        {{ radio_data.passenger_capacity }}
                    </div>
                    <div class="data">
                        <p class="radio-form-key">Price:</p>
                        {{ radio_data.price }} €/h
                    </div>
                    <div class="buttons">
                        <button class="btn" @click="select">Ok</button>
                        <button class="btn" @click="close">Cancel</button>
                    </div>
                </div>
            </div>
        </b-form-group>

        <b-form-group class="checkbox-form" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
                v-model="checked"
                :aria-describedby="ariaDescribedby"
                :options="insurences"
                name="insurences"
                class="insurences-content"
                button-variant="outline-light"
                @change="onChangeCheckbox"
                buttons
                stacked
            >
            </b-form-checkbox-group>
        </b-form-group>

        <p id="welcome-message">You don't selected any {{ label }} yet*</p>

        <p id="selected-message">
            {{ message[0] }} <strong>{{ selected }}</strong> {{ message[1] }}
        </p>

        <b-form @submit="onSubmit" class="submit-btn">
            <b-button id="submit-btn" type="submit" variant="primary"
                >Submit</b-button
            >
        </b-form>
    </div>
</template>

<script>
export default {
    name: "RadioForm",
    props: ["radio_datas", "label", "message", "travelling_data", "insurences"],
    data() {
        return {
            selected: "",
            form: [],
            departure_place: "",
            destination: "",
            departure_date: "",
            departure_time: "",
            type_of_jet: "",
            speed: "",
            price: "",
            checked: []
        };
    },

    methods: {
        onChangeCheckbox() {
            console.log(this.checked);
        },

        getAllFlightTime() {
            const totalDistance = this.travelling_data.distance_ * 2;
            const jetSpeed = this.speed;
            const result = totalDistance / jetSpeed;
            return result;
        },

        getCost(allFlightTime, price) {
            return allFlightTime * price;
        },

        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.form = [];
            this.selected = "";
            this.viewMessage();
            this.removeMarker();
        },

        close() {
            document.getElementById("jet").style.display = "none";
            document.getElementById("label").style.marginBottom = "20px";
            this.selected = "";
            this.form = [];
            this.viewMessage();
            for (let i = 0; i < 5; i++) {
                document.getElementById("jet").children[i].style.display =
                    "none";
            }
            this.removeMarker();
        },

        exceptionalDisplay(index) {
            for (let i = 0; i < this.radio_datas.length; i++) {
                if (i != index) {
                    document.getElementById("jet").children[i].style.display =
                        "none";
                    document.getElementsByClassName("radio-content")[
                        i
                    ].style.color = "whitesmoke";
                }
            }
        },

        select() {
            document.getElementById("jet").style.display = "none";
            document.getElementById("label").style.marginBottom = "20px";
            document.getElementById("selected-message").style.display =
                "inline";
            this.departure_place = this.travelling_data.from;
            this.destination = this.travelling_data.to;
            this.departure_date = this.travelling_data.date;
            this.departure_time = this.travelling_data.time;
            this.selected = this.getCost(
                this.getAllFlightTime(),
                this.price
            ).toFixed(2);
            this.form.push(
                this.departure_place,
                this.destination,
                this.departure_date,
                this.departure_time,
                this.type_of_jet,
                this.selected
            );
        },

        addText(event) {
            switch (event) {
                case 5:
                    this.form.push(this.radio_datas[0].text);
                    break;
                case 10:
                    this.form.push(this.radio_datas[1].text);
                    break;
                case 15:
                    this.form.push(this.radio_datas[2].text);
                    break;
                case 20:
                    this.form.push(this.radio_datas[3].text);
                    break;
                case 25:
                    this.form.push(this.radio_datas[4].text);
                    break;

                default:
                    break;
            }
        },

        removeMarker() {
            const radioContent = document.getElementsByClassName(
                "radio-content"
            );
            for (let i = 0; i < radioContent.length; i++) {
                radioContent[i].style.color = "whitesmoke";
            }
        },

        showCard(index) {
            document.getElementById("jet").style.display = "block";
            document.getElementById("jet").children[index].style.display =
                "block";
            this.exceptionalDisplay(index);
            this.speed = this.radio_datas[index].speed;
            this.price = this.radio_datas[index].price;
            this.type_of_jet = this.radio_datas[index].text;
        },

        displayOffer(index) {
            document.getElementById("selected-message").style.display = "none";
            document.getElementsByClassName("radio-content")[
                index
            ].style.color = "lime";
            this.showCard(index);
        },

        onChange(event) {
            this.viewMessage();
            if (event > 25) {
                switch (event) {
                    case 100:
                        this.displayOffer(0);
                        break;
                    case 200:
                        this.displayOffer(1);
                        break;
                    case 300:
                        this.displayOffer(2);
                        break;
                    case 400:
                        this.displayOffer(3);
                        break;
                    case 500:
                        this.displayOffer(4);
                        break;

                    default:
                        break;
                }
            }

            if (this.form.length === 0 && event >= 5 && event <= 25) {
                this.addText(event);
                this.form.push(event);
            } else if (this.form.length > 0 && event >= 5 && event <= 25) {
                this.form = [];
                this.addText(event);
                this.form.push(event);
            } else {
                this.form = [];
            }
        },

        viewMessage() {
            if (this.selected === "") {
                document.getElementById("selected-message").style.display =
                    "none";
                document.getElementById("welcome-message").style.display =
                    "inline";
            } else {
                document.getElementById("selected-message").style.display =
                    "inline";
                document.getElementById("welcome-message").style.display =
                    "none";
            }
        }
    }
};
</script>

<style scoped>
#submit-btn {
    margin: 20px 0;
    border: none;
    box-shadow: 2px 2px 5px black;
    transition: all 0.3s ease;
}

#submit-btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
    transition: 0.4s ease-in-out 0s;
}

.radio-form-label {
    color: whitesmoke;
    width: 25%;
    padding: 10px;
    text-align: center;
}

#welcome-message {
    color: #ced4da;
}

#selected-message {
    display: none;
    border: 1px solid #292b2c;
    padding: 10px;
    color: #ced4da;
}

#jet {
    border: 1px solid #292b2c;
    box-shadow: 3px 3px 9px black;
    border-radius: 5px;
    background: linear-gradient(
        180deg,
        lightskyblue,
        lightskyblue,
        rgb(51, 100, 179),
        rgb(9, 55, 115)
    );
    position: absolute;
    top: 15%;
    left: 40%;
    display: none;
    z-index: 1;
}

.jet-information {
    width: 400px;
    height: 500px;
    display: none;
}

.jet-img {
    width: 100%;
    height: 60%;
    padding: 10px;
}

.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
}

.btn {
    height: 30px;
    width: 100px;
    color: whitesmoke;
    background: rebeccapurple;
    box-shadow: 1px 1px 5px black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
}

.radio-form-key {
    color: whitesmoke;
    padding: 0 5px;
    margin: 5px 10px;
}

.data {
    display: flex;
    align-items: center;
    color: whitesmoke;
}

.radio-content {
    color: whitesmoke;
    text-shadow: none;
    cursor: pointer;
}

.insurences-content:focus {
    border: none !important;
    box-shadow: none !important;
}

.radio-content:hover {
    color: lime !important;
}

#label {
    background: whitesmoke;
    color: rgb(9, 55, 115);
    font-weight: 600;
    border-radius: 0.25rem;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .radio-form-label {
        width: 100%;
        margin-bottom: 25px;
    }

    #selected-message {
        padding: 0;
        border: none;
    }

    .submit-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #jet {
        border: 1px solid #292b2c;
        box-shadow: none;
        background: linear-gradient(
            180deg,
            lightskyblue,
            lightskyblue,
            rgb(51, 100, 179),
            rgb(9, 55, 115)
        );
        position: absolute;
        top: 19%;
        left: 0%;
        display: none;
    }

    .jet-information {
        width: 100%;
        height: 500px;
        display: none;
    }
}
</style>
