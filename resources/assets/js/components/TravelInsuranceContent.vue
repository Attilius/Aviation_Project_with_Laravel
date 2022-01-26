<template>
    <div id="content" class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }}</article>

        <div id="form-content">
            <b-form-group
                id="form-2"
                class="checkbox-form"
                v-slot="{ ariaDescribedby }"
            >
                <b-form-checkbox-group
                    id="insurances"
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

            <p id="welcome-message">You don't selected any {{ label }} yet*</p>

            <p id="selected-message" v-for="item in form" :key="item.type">
                <span id="selected-value">{{ item.type }}</span>
                <span id="selected-value">on {{ item.person }} person</span>
                <span id="selected-value">{{ item.price }} €</span>
            </p>

            <b-form @submit="onSubmit" id="form">
                <b-button
                    id="submit-btn"
                    class="submit-btn-disabled"
                    type="submit"
                    variant="primary"
                    >Submit</b-button
                >
            </b-form>
        </div>

        <!-- Success message -->

        <div id="success">
            <h5>Thank you for requesting our service!</h5>
            <router-link class="link" to="/services">Back</router-link>
        </div>

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

                <button id="close-btn" @click="onClickCancel" v-if="!app.user">
                    X
                </button>
                <button id="close-btn" @click="onClick" v-else>X</button>
            </div>

            <br />
            <p id="warning-message" v-if="!app.user">
                You must have been logged in before use this service!
            </p>
            <p id="warning-message" v-else>
                Must have been selected at least one item of insurance before
                submitting!
            </p>
            <div class="btn-group" v-if="!app.user">
                <button
                    style="marginRight: 30px"
                    class="btn"
                    @click="onClickLogin"
                >
                    Login
                </button>
                <button
                    id="cancel-btn"
                    style="marginLeft: 30px"
                    class="btn"
                    @click="onClickCancel"
                >
                    Cancel
                </button>
            </div>
            <button style="margin: 10px" class="btn" @click="onClick" v-else>
                Ok
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TravelInsuranceContent",
    props: ["app", "titles", "text", "insurances", "label"],

    data() {
        return {
            selected: "",
            checked: [],
            price: "",
            form: [],
            numbers: ""
        };
    },

    mounted() {
        this.submitBtnController();
        this.formUseController();
    },

    methods: {
        setDisplay(element, property) {
            document.getElementById(element).style.display = property;
        },

        onChangeCheckbox() {
            if (!this.app.user) {
                console.log(location.href);
            } else {
                this.setDisplay("number-form", "block");
                if (this.checked.length === 1) {
                    for (let i = 0; i < this.insurances.length; i++) {
                        if (this.insurances[i].value == this.checked[0]) {
                            this.selected = this.insurances[i].text;
                            this.price = this.insurances[i].value;
                            this.contolledSend();
                        }
                    }
                    this.checked = [];
                }
            }
        },

        contolledSend() {
            document
                .getElementById("numbers-input")
                .addEventListener("change", e => {
                    if (e.target.value > 0) this.setDisplay("btn-s", "flex");
                    else {
                        this.setDisplay("btn-s", "none");
                        e.target.value = "";
                    }
                });
        },

        submitBtnController() {
            if (!this.form.length) document.getElementById("submit-btn").disabled = true;
            else document.getElementById("submit-btn").disabled = false;
            
        },

        formUseController() {
            const insurances = document.getElementById("insurances");
            insurances.addEventListener("mouseover", () => {
                if (!this.app.user) {
                    this.setDisplay("warning-box", "flex");
                }
            });
        },

        onClick() {
            this.setDisplay("warning-box", "none");
            document.getElementById("insurances").style.border =
                "2px solid gold";
            document.getElementById("insurances").style.borderRadius =
                "0.25rem";
        },

        onClickCancel() {
            this.setDisplay("warning-box", "none");
        },

        onClickLogin() {
            const path = location.hash.split("#");
            this.$emit("onClickLogin", path[1]);
            this.$router.push("/login");
        },

        onSubmitNumberOfPersons() {
            this.numbers = document.getElementById("numbers-input").value;
            this.form.push({
                type: this.selected,
                person: this.numbers,
                price: this.getCost(this.price, this.numbers)
            });
            this.setDisplay("welcome-message", "none");
            document
                .getElementById("submit-btn")
                .classList.replace("submit-btn-disabled", "submit-btn-enabled");
            document.getElementById("submit-btn").disabled = false;
            document.getElementById("numbers-input").value = "";
            document.getElementById("insurances").style.border = "none";
            this.price = "";
            this.numbers = "";
            this.setDisplay("number-form", "none");
        },

        onCancel() {
            this.setDisplay("number-form", "none");
        },

        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.checked = [];
            this.form = [];
            this.selected = "";
            this.viewMessage();
            this.setDisplay("form-content", "none");
            this.setDisplay("success", "flex");
        },

        viewMessage() {
            if (this.selected === "") {
                this.setDisplay("selected-message", "none");
                this.setDisplay("welcome-message", "inline");
            } else {
                this.setDisplay("selected-message", "block");
                this.setDisplay("welcome-message", "none");
            }
        },

        getCost(allFlightTime, price) {
            return allFlightTime * price;
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
    height: 400px;
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

/*##########################################*/

.insurences-content {
    margin: 30px;
}

.insurences-content:focus {
    border: none !important;
    box-shadow: none !important;
}

.insured-text {
    color: whitesmoke;
    text-align: center;
    padding-top: 15px;
    margin-bottom: 15px;
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

#btn-s,
#btn-c {
    margin: 10px auto;
}

#btn-s {
    display: none;
}

#submit-btn {
    margin-left: 30px;
}

.submit-btn-disabled {
    margin: 20px 30px;
    background: rebeccapurple;
    color: whitesmoke;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
}
.submit-btn-disabled:hover {
    background: rebeccapurple !important;
    color: whitesmoke !important;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
}

.submit-btn-enabled {
    margin: 20px 30px;
    border: none;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
    transition: all 0.3s ease;
}

.submit-btn-enabled:hover {
    color: rebeccapurple;
    background: whitesmoke !important;
    border: 1px solid rebeccapurple;
    box-shadow: none !important;
    transition: 0.4s ease-in-out 0s;
}

#welcome-message {
    color: #ced4da;
    margin-left: 30px;
}

#success {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: whitesmoke;
}

.link {
    width: 100px;
    height: 30px;
    background: rebeccapurple;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    margin-top: 20px;
    text-decoration: none;
    box-shadow: 2px 2px 5px black;
}

.link:hover {
    border: 1px solid rebeccapurple;
    background: whitesmoke;
    color: rebeccapurple;
}

#numbers-input {
    width: 200px;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    box-shadow: none;
    text-align: center;
    margin: 0 auto;
}

#numbers-input:focus {
    box-shadow: none !important;
}

#selected-message {
    display: block;
    margin: 10px 30px;
    color: whitesmoke;
}

/* Warning box */

#warning-box {
    background: whitesmoke;
    color: rgb(9, 55, 115);
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
    width: 400px;
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

#warning-message {
    padding: 20px;
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

.btn-group {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
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

    #selected-message {
        padding: 0;
        border: none;
    }

    .submit-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .checkbox-form {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #form {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .number-form {
        top: 200px;
        left: 60px;
        z-index: 2;
    }

    #warning-box {
        top: 150px;
        left: 5px;
        z-index: 2;
    }
}
</style>
