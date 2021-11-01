<template>
    <div>
        <b-form-group v-slot="{ ariaDescribedby }">
            <h5>Selecting discount</h5>
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

        <div class="mt-3" id="selected-message">
            You get <strong>{{ selected }} % </strong> discount from
            the full price of ticket.
        </div>

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
        },

        onChange(event) {
            document.getElementById("selected-message").style.display = "inline";
            
            if (this.form.length === 0) this.form.push(event); 
            else this.selected = "";
        }
    }
};
</script>

<style scoped>
#submit-btn {
    margin: 20px 0;
}

.radio:focus {
    border: none !important;
    box-shadow: none !important;
}

#selected-message {
    display: none;
}

</style>
