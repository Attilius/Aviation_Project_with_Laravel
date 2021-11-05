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
                ><div class="radio-content">{{ radio_data.text }}</div></b-form-radio
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
                        {{ radio_data.price }}
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

        exceptionalDisplay(index) {
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
            document.getElementById("selected-message").style.display =
                "inline";
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

        showCard(index) {
            document.getElementById("jet").style.display = "block";
            document.getElementById("jet").children[index].style.display =
                "block";
            this.exceptionalDisplay(index);
        },

        displayOffer(index) {
            if (window.innerWidth <= 768)
                document.getElementById("label").style.marginBottom = "110px";
            document.getElementById("selected-message").style.display = "none";
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
    background: linear-gradient(180deg, lightskyblue, lightskyblue, rgb(51, 100, 179), rgb(9, 55, 115));
    position: absolute;
    top: 0%;
    left: 40%;
    display: none;
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

.radio-content:hover {
    color: lime;
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
        background: linear-gradient(180deg, lightskyblue, lightskyblue, rgb(51, 100, 179), rgb(9, 55, 115));
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
