<template>
    <div id="radioForm">
        <h5 id="label" class="radio-form-label">Selecting {{ label }}</h5>
        <b-form-radio
            v-model="selected"
            name="some-radios"
            v-for="radio_data in radio_datas"
            :key="radio_data.text"
            @change="onChange"
            :value="radio_data.value"
            ><div class="radio-content">
                {{ radio_data.text }}
            </div></b-form-radio
        >

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
            <button style="margin: 10px" class="btn" @click="onClick">
                Ok
            </button>
        </div>

        <!-- Transaction messages -->

        <div class="messages">
            <p id="welcome-message">You don't selected any {{ label }} yet*</p>

            <p id="selected-message">
                {{ message[0] }}
                <span id="selected-value"
                    ><strong>{{ selected }}</strong></span
                >
                {{ message[1] }}
            </p>
        </div>

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
    props: ["app", "radio_datas", "label", "message"],
    data() {
        return {
            selected: "",
            form: []
        };
    },

    methods: {
        // Required warning box
        onClick() {
            this.$emit("onClick");
            this.setDisplay("warning-box", "none");
        },
        // Change event for Success message in the parent component
        changeDisplay() {
            this.$emit("changeDisplay", "flex");
        },

        setDisplay(element, property) {
            document.getElementById(element).style.display = property;
        },

        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.form = [];
            this.selected = "";
            this.viewMessage();
            this.setDisplay("radioForm", "none");
            this.changeDisplay();
        },

        fillForm(index, event) {
            this.form.push({
                text: this.radio_datas[index].text,
                value: event
            });
        },

        addText(event) {
            switch (event) {
                case 5:
                    this.fillForm(0, event);
                    break;
                case 10:
                    this.fillForm(1, event);
                    break;
                case 15:
                    this.fillForm(2, event);
                    break;
                case 20:
                    this.fillForm(3, event);
                    break;
                case 25:
                    this.fillForm(4, event);
                    break;

                default:
                    break;
            }
        },

        onChange(event) {
            this.viewMessage();
            if (this.form.length === 0 && event >= 5 && event <= 25) {
                this.addText(event);
            } else if (this.form.length > 0 && event >= 5 && event <= 25) {
                this.form = [];
                this.addText(event);
            } else {
                this.form = [];
            }
        },

        viewMessage() {
            if (this.selected === "") {
                this.setDisplay("selected-message", "none");
                this.setDisplay("welcome-message", "inline");
            } else {
                this.setDisplay("selected-message", "inline");
                this.setDisplay("welcome-message", "none");
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

.messages {
    margin: 25px 0;
}

#selected-value {
    color: lightgreen;
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
    color: lime !important;
}

#label {
    background: whitesmoke;
    color: rgb(9, 55, 115);
    font-weight: 600;
    border-radius: 0.25rem;
    margin-bottom: 20px;
}

#numbers-input {
    width: 80%;
    margin: 0 auto;
    text-align: center;
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

.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
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
