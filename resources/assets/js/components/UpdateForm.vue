<template>
    <div id="update-form">
        <h5>Update number of piece</h5>
        <b-form-select
            class="select"
            v-model="selected"
            :options="options"
        ></b-form-select>
        <button id="confirm-btn" class="confirm-btn">Confirm</button>
        <button class="cancel" @click="cancelUpdateForm">X</button>
    </div>
</template>

<script>
export default {
    name: "UpdateForm",

    data() {
        return {
            selected: null,
            options: [
                { value: null, text: "Please select a number" },
                { value: 1, text: "1" },
                { value: 2, text: "2" },
                { value: 3, text: "3" },
                { value: 4, text: "4" },
                { value: 5, text: "5" },
                { value: 6, text: "6" },
                { value: 7, text: "7" },
                { value: 8, text: "8" },
                { value: 9, text: "9" },
                { value: 10, text: "10" }
            ]
        };
    },

    methods: {
        cancelUpdateForm() {
            document.getElementById("confirm-btn").style.visibility = "hidden";
            document.getElementById("update-form").style.visibility = "hidden";
        }
    }
};
</script>

<style scoped>
#update-form {
    width: 400px;
    height: 200px;
    background: rgb(51, 100, 179);
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px black;
    border-radius: 5px;
    position: absolute;
    top: 900px;
    left: 400px;
    visibility: hidden;
}

.select {
    width: 50%;
    margin: 10px;
}

.confirm-btn {
    width: 90px;
    height: 30px;
    background: rebeccapurple;
    color: whitesmoke;
    border-radius: 0.25rem;
    margin: 10px;
    border: none;
}

.confirm-btn:active {
    color: rebeccapurple;
    background: whitesmoke;
}

.cancel {
    height: 25px;
    width: 25px;
    background: red;
    color: whitesmoke;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.25rem;
}

.cancel:active {
    height: 24px;
    width: 24px;
}

.cancel:focus,
.confirm-btn:focus {
    box-shadow: none !important;
    border: none !important;
}</style>
