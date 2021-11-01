<template>
    <div>
        <b-form-group label="Selecting discount" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                name="radios-stacked"
                stacked
            ></b-form-radio-group>
        </b-form-group>

        <div class="mt-3">
            Selected: You get <strong>{{ selected }} % </strong> discount from
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

            options: [
                { text: "Small group (10-15 person) - 10%", value: 10 },
                { text: "Medium group (15-20 person) - 15%", value: 15 },
                { text: "Large group (20-25 person) - 20%", value: 20 },
                { text: "X-Large group (more than 25 person) - 25%", value: 25 }
            ]
        };
    },

    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert("Empty form");
        }
    }
};
</script>

<style scoped>
#submit-btn {
    margin: 20px 0;
}
</style>