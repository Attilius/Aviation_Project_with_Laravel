<template>
    <div>
        <div class="jet-information"></div>
        <b-form-group class="form" v-slot="{ ariaDescribedby }">
            <h5 class="radio-form-label">Selecting {{ label }}</h5>
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

.jet-information {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    position: sticky;
    top: 50%;
    left: 50%;
    display: none;
}

@media(max-width: 768px) {
    .radio-form-label {
        width: 100%;
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
}

</style>
