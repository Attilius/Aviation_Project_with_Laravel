<template>
    <div>
        <b-form-group v-slot="{ ariaDescribedby }">
            <h5 class="radio-form-label">Selecting discount</h5>
            <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                @change="onChange"
                value="5"
                >Family (5-9 person) - 5%</b-form-radio
            >
            <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                @change="onChange"
                value="10"
                >Small group (10-14 person) - 10%</b-form-radio
            >
            <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                @change="onChange"
                value="15"
                >Medium group (15-20 person) - 15%</b-form-radio
            >
            <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                @change="onChange"
                value="20"
                >Large group (21-25 person) - 20%</b-form-radio
            >
            <b-form-radio
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                @change="onChange"
                value="25"
                >X-Large group (more than 25 person) - 25%</b-form-radio
            >
        </b-form-group>

        <p id="welcome-message">You don't selected any discount yet*</p>

        <p id="selected-message">
            You get <strong>{{ selected }} % </strong> discount from
            the full price of ticket.
        </p>

        <b-form @submit="onSubmit">
            <b-button id="submit-btn" type="submit" variant="primary"
                >Submit</b-button
            >
        </b-form>
    </div>
</template>

<script>
export default {
    name: "RadioForm",
    data() {
        return {
            selected: "",
            form: [],
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

        onChange(event) {
            this.viewMessage();
            if (this.form.length === 0) this.form.push(event); 
            else {
               this.form = [];
               this.form.push(event);
            }
        },

        viewMessage() {
            if (this.selected === "") {
                document.getElementById("selected-message").style.display = "none";
                document.getElementById("welcome-message").style.display = "inline";
            } else {
                document.getElementById("selected-message").style.display = "inline";
                document.getElementById("welcome-message").style.display = "none";
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

</style>
