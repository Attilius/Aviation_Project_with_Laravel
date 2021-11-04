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
                >{{ radio_data.text }}</b-form-radio
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
                    <div class="buttons">
                        <button class="btn" @click="select">Ok</button>
                        <button class="btn" @click="close">Cancel</button>
                    </div>
                </div>
            </div>
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
    props: ["radio_datas", "label", "message"],
    data() {
        return {
            selected: "",
            form: []
        };
    },

    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.form = [];
            this.selected = "";
            this.viewMessage();
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
        },
        // TODO rename this function
        close2(index) {
            for (let i = 0; i < 5; i++) {
                if (i != index) {
                    document.getElementById("jet").children[i].style.display =
                        "none";
                }
            }
        },

        select() {
            document.getElementById("jet").style.display = "none";
            document.getElementById("label").style.marginBottom = "20px";
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

        onChange(event) {
            this.viewMessage();
            if (event > 25) {
                switch (event) {
                    case 100:
                    if (window.innerWidth <= 768) document.getElementById("label").style.marginBottom = "110px";
                        document.getElementById("jet").style.display = "block";
                        document.getElementById(
                            "jet"
                        ).firstChild.style.display = "block";
                        this.close2(0);
                        break;
                    case 200:
                        if (window.innerWidth <= 768) document.getElementById("label").style.marginBottom = "110px";
                        document.getElementById("jet").style.display = "block";
                        document.getElementById(
                            "jet"
                        ).children[1].style.display = "block";
                        this.close2(1);
                        break;
                    case 300:
                        if (window.innerWidth <= 768) document.getElementById("label").style.marginBottom = "110px";
                        document.getElementById("jet").style.display = "block";
                        document.getElementById(
                            "jet"
                        ).children[2].style.display = "block";
                        this.close2(2);
                        break;
                    case 400:
                        if (window.innerWidth <= 768) document.getElementById("label").style.marginBottom = "110px";
                        document.getElementById("jet").style.display = "block";
                        document.getElementById(
                            "jet"
                        ).children[3].style.display = "block";
                        this.close2(3);
                        break;
                    case 500:
                        if (window.innerWidth <= 768) document.getElementById("label").style.marginBottom = "110px";
                        document.getElementById("jet").style.display = "block";
                        document.getElementById("jet").lastChild.style.display =
                            "block";
                        this.close2(4);
                        break;

                    default:
                        break;
                }
            }

            if (this.form.length === 0) {
                this.addText(event);
                this.form.push(event);
            } else {
                this.form = [];
                this.addText(event);
                this.form.push(event);
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
}

.radio-form-label {
    background: #292b2c;
    color: whitesmoke;
    width: 25%;
    padding: 10px;
    text-align: center;
}

#selected-message {
    display: none;
    border: 1px solid #292b2c;
    padding: 10px;
}

#jet {
    border: 1px solid #292b2c;
    box-shadow: 2px 2px 5px black;
    background: whitesmoke;
    position: absolute;
    top: 20%;
    left: 40%;
    display: none;
}

.jet-information {
    width: 400px;
    height: 400px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.btn:hover {
    color: rebeccapurple;
    background: transparent;
    border: 1px solid rebeccapurple;
    transition: 0.4s ease-in-out 0s;
}

.radio-form-key {
    background: rgb(9, 55, 115);
    color: whitesmoke;
    padding: 0 10px;
    margin: 5px 10px;
}

.data {
    display: flex;
    align-items: center;
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
        background: whitesmoke;
        position: absolute;
        top: 0%;
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
