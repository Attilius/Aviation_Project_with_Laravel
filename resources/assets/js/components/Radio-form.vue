<template>
    <div id="radioForm">
        <!-- Private jet rent radio button form -->

        <b-form-group
            id="jet-select-form"
            class="form"
            v-slot="{ ariaDescribedby }"
        >
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

        <!-- Required warning box -->

        <div id="warning-box">
            <div class="warning-header">
                <div class="icon-title">
                    <b-img
                class="alert-icon"
                fluid
                :src="'../images/alert.png'"
                alt="alert-icon"
            ></b-img>
            <h5>warning</h5>
                </div>
                
            <button id="close-btn" @click="onClick">X</button>
            </div>
            
            <h3>Alert</h3>
            <p>Missing requered data(s)!</p>
            <button style="margin: 10px" class="btn" @click="onClick">Ok</button>
        </div>

        <!-- Travel insurance checkbox form -->

        <b-form-group
            id="form-2"
            class="checkbox-form"
            v-slot="{ ariaDescribedby }"
        >
            <b-form-checkbox-group
                v-model="checked"
                :aria-describedby="ariaDescribedby"
                :options="insurances"
                name="insurances"
                class="insurences-content"
                button-variant="outline-light"
                @change="onChangeCheckbox"
                buttons
                stacked
            >
            </b-form-checkbox-group>
            <div id="number-form" class="number-form">
                <h6 class="insured-text">{{ selected }}</h6>
                <b-form-input
                    id="numbers-input"
                    type="number"
                    placeholder="Number of persons"
                    min="1"
                ></b-form-input>
                <div class="buttons">
                    <button
                        id="btn-s"
                        class="btn"
                        @click="onSubmitNumberOfPersons"
                    >
                        Send
                    </button>
                    <button id="btn-c" class="btn" @click="onCancel">
                        Cancel
                    </button>
                </div>
            </div>
        </b-form-group>

        <!-- Premium comfort checkbox form -->

        <b-form-group id="independent" v-slot="{ ariaDescribedby }">
            <b-form-checkbox
                v-for="comfort_service in comfort_services"
                v-model="checked"
                :key="comfort_service.text"
                :value="comfort_service.value"
                :aria-describedby="ariaDescribedby"
                name="comfort-services"
                class="comfort-services"
                @change="onCheckedIndependent"
            >
                {{ comfort_service.text }}
            </b-form-checkbox>
        </b-form-group>

        <b-form-group id="all" v-slot="{ ariaDescribedby }">
            <b-form-checkbox
                v-for="comfort_service_all in comfort_services_all"
                v-model="checked"
                :key="comfort_service_all.text"
                :value="comfort_service_all.value"
                :aria-describedby="ariaDescribedby"
                name="comfort-services_all"
                class="comfort-services"
                @change="onCheckedAll"
            >
                {{ comfort_service_all.text }}
            </b-form-checkbox>
        </b-form-group>

        <!-- Transaction messages -->

        <p id="welcome-message">You don't selected any {{ label }} yet*</p>

        <p id="selected-message">
            {{ message[0] }} <span id="selected-value"><strong>{{ selected }}</strong></span> {{ message[1] }}
        </p>

        <b-form @submit="onSubmit" class="submit-btn">
            <b-button
                id="submit-btn"
                type="submit"
                variant="primary"
                @submit="changeDisplay"
                >Submit</b-button
            >
        </b-form>
    </div>
</template>

<script>
export default {
    name: "RadioForm",
    props: [
        "radio_datas",
        "label",
        "message",
        "travelling_data",
        "insurances",
        "comfort_services",
        "comfort_services_all"
    ],
    data() {
        return {
            selected: "",
            form: [],
            type_of_jet: "",
            speed: "",
            price: "",
            checked: [],
            numbers: ""
        };
    },

    mounted() {
        this.hideNumberForm();
    },

    methods: {
// Required warning box        
        onClick() {
            this.$emit('onClick')
            document.getElementById("warning-box").style.display = "none";
            
        },
// Success message in the parent (ServicesMainContent.vue) component
        changeDisplay() {
            this.$emit("changeDisplay", "flex");
        },
// Premium comfort checkbox form
        onCheckedIndependent() {
            document.getElementById("independent").addEventListener("change", (e) => {
                if (e.target.checked) {
                    document.getElementById("welcome-message").style.display = "none";
                    document.getElementById("all").disabled = true;
                    this.addDataToForm(e, this.form, this.comfort_services);
                    this.form = [...new Set(this.form)];
                } else {
                    this.removeDataFrom_Form(e, this.form);
                }
                if (this.form.length == 0) {
                    document.getElementById("all").disabled = false;
                    document.getElementById("welcome-message").style.display = "inline";
                }
            });
        },

        addDataToForm(event, arrayOfSubmit, arrayFromProps) {
            for (let j = 0; j < arrayFromProps.length; j++) {
                if (event.target._value == arrayFromProps[j].value) {
                    arrayOfSubmit.push(
                        arrayFromProps[j].text,
                        event.target._value
                    );
                }
            }
        },

        removeDataFrom_Form(event, arrayOfSubmit) {
            if (!event.target.checked) {
                for (let i = 0; i < arrayOfSubmit.length; i++) {
                    if (event.target._value == arrayOfSubmit[i]) {
                        arrayOfSubmit.splice(i-1, 2);
                    }
                }
            }    
        },
// Premium comfort checkbox form
        onCheckedAll() {
            document.getElementById("all").addEventListener("change", (e) => {
                if (e.target.checked) {
                    document.getElementById("welcome-message").style.display = "none";
                    document.getElementById("independent").disabled = true;
                    this.form.push(this.comfort_services_all[0].text, this.checked[0]);
                    this.form = [...new Set(this.form)];
                } else {
                    document.getElementById("welcome-message").style.display = "inline";
                    document.getElementById("independent").disabled = false;
                    this.form = [];
                }
            });
        },
// Travel insurance checkbox form
        hideNumberForm() {
            const formDiv = document.getElementById("form-2");
            if (location.pathname != "/services/travel-insurance") {
                formDiv.style.display = "none";
            }
        },
// Travel insurence
        onChangeCheckbox() {
            document.getElementById("number-form").style.display = "block";
            document.getElementById("welcome-message").style.display = "inline";
            if (this.checked.length === 1) {
                for (let i = 0; i < this.insurances.length; i++) {
                    if (this.insurances[i].value == this.checked[0]) {
                        this.selected = this.insurances[i].text;
                        this.price = this.insurances[i].value;
                        this.form.push(this.insurances[i].text);
                        this.contolledSend();
                    }
                }
                this.checked = [];
            }
        },
// Travel insurance
        contolledSend() {
            document
                .getElementById("numbers-input")
                .addEventListener("change", e => {
                    if (e.target.value > 0)
                        document.getElementById("btn-s").style.display = "flex";
                    else {
                        document.getElementById("btn-s").style.display = "none";
                        e.target.value = "";
                    }
                });
        },
// Travel insurance numbers of person
        onSubmitNumberOfPersons() {
            this.numbers = document.getElementById("numbers-input").value;
            this.form.push(
                this.numbers,
                this.getCost(this.price, this.numbers)
            );
            document.getElementById("numbers-input").value = "";
            this.price = "";
            document.getElementById("number-form").style.display = "none";
        },
// Travel insurance numbers of person
        onCancel() {
            document.getElementById("number-form").style.display = "none";
            this.form.pop(this.form[this.form.length - 1]);
        },
// Private jet rent
        getAllFlightTime() {
            const totalDistance = this.travelling_data.distance_ * 2;
            const jetSpeed = this.speed;
            const result = totalDistance / jetSpeed;
            return result;
        },
// Private jet rent & Travel insurance
        getCost(allFlightTime, price) {
            return allFlightTime * price;
        },

        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.checked = [];
            this.form = [];
            this.selected = "";
            this.viewMessage();
            this.removeMarker();
            document.getElementById("welcome-message").style.display = "none";
            document.getElementById("independent").disabled = false;
            document.getElementById("all").disabled = false;
            document.getElementById("radioForm").style.display = "none";
            this.changeDisplay();
        },
// Private jet rent (selecting jet)
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
// Private jet rent
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

        getObjectValues(obj) {
            for (const property in obj) return `${obj[property]}`;
        },
// Private jet rent
        select() {
            if (this.getObjectValues(this.travelling_data) === "") {
                this.close();
                document.getElementById("warning-box").style.display = "flex";
            } else {
                document.getElementById("jet").style.display = "none";
                document.getElementById("label").style.marginBottom = "20px";
                document.getElementById("selected-message").style.display =
                    "inline";
                document.getElementById("welcome-message").style.display =
                    "none";
                this.selected = this.getCost(
                    this.getAllFlightTime(),
                    this.price
                ).toFixed(2);
                this.form.push(
                    this.travelling_data.from,
                    this.travelling_data.to,
                    this.travelling_data.date,
                    this.travelling_data.time,
                    this.type_of_jet,
                    this.selected
                );
            }
        },
// Group discount
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
// Private jet rent
        removeMarker() {
            const radioContent = document.getElementsByClassName("radio-content");
            for (let i = 0; i < radioContent.length; i++) {
                radioContent[i].style.color = "whitesmoke";
            }
        },
// Private jet rent
        showCard(index) {
            document.getElementById("jet").style.display = "block";
            document.getElementById("jet").children[index].style.display =
                "block";
            this.exceptionalDisplay(index);
            this.speed = this.radio_datas[index].speed;
            this.price = this.radio_datas[index].price;
            this.type_of_jet = this.radio_datas[index].text;
        },
// Private jet rent
        displayOffer(index) {
            document.getElementById("selected-message").style.display = "none";
            document.getElementById("welcome-message").style.display = "inline";
            document.getElementsByClassName("radio-content")[
                index
            ].style.color = "lime";
            this.showCard(index);
        },
// Private jet rent
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
// (Group discount)
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
    box-shadow: 3px 3px 9px black;
    padding: 10px;
    color: whitesmoke;
    background: linear-gradient(135deg, rgb(51, 100, 179), rgb(9, 55, 115));
}

#selected-value {
    color: lightgreen;
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

.number-form {
    width: 300px;
    height: 149px;
    position: absolute;
    top: 338px;
    left: 250px;
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
    background: linear-gradient(180deg, royalblue, rgb(9, 55, 115));
}

#number-form {
    display: none;
}

#numbers-input {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 15px;
}

#btn-s,
#btn-c {
    margin: 10px auto;
}

#btn-s {
    display: none;
}

.insured-text {
    color: whitesmoke;
    text-align: center;
    padding-top: 15px;
    margin-bottom: 15px;
}

.comfort-services {
    color: whitesmoke;
}

#all {
    position: relative;
    top: -15px;
    margin-bottom: 0;
}

#warning-box {
    background: whitesmoke;
    color: rgb(9, 55, 115);
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
    width: 300px;
    height: 200px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: 3;
}

.alert-icon {
    width: 35px;
    height: 35px;
}

.warning-header {
    width: 100%;
    height: 40px;
    background: rgb(250, 230, 100);
    border-radius: 0.25rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
}

.icon-title {
    display: flex;
    justify-content: flex-start;
    margin: auto 10px;
    height: 40px;
    align-items: center;
}

.icon-title h5 {
    text-transform: uppercase;
    margin: auto 10px;
}

#close-btn {
    height: 25px;
    width: 25px;
    border-radius: 50px;
    color: whitesmoke;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 0 0 0;
    border: none;
    margin: auto 10px;
    font-weight: 700;
}

#close-btn:focus {
    box-shadow: none !important;
    border: none !important;
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

    .checkbox-form {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .number-form {
        top: 280px;
        left: 60px;
    }

    #warning-box {
        left: 14%;
    }
}
</style>
