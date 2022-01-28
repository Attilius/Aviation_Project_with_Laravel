<template>
    <div id="content" class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }}</article>

        <!-- Success message -->

        <div id="success">
            <h5>Thank you for requesting our service!</h5>
            <router-link class="link" to="/services">Back</router-link>
        </div>

        <RadioFormOfGroupDiscount
            class="radio-form"
            :app="app"
            :radio_datas="radio_datas"
            :label="label"
            :message="message"
            @changeDisplay="updateDisplay($event)"
            @onClick="setFromAlert($event)"
        />
    </div>
</template>

<script>
import RadioFormOfGroupDiscount from "./RadioFormOfGroupDiscount.vue";
export default {
    name: "GroupDiscountContent",
    props: [
        "app",
        "titles",
        "text",
        "radio_datas",
        "label",
        "message"
    ],
    components: {
        RadioFormOfGroupDiscount
    },

    mounted() {
        this.setContentHeight();
    },

    methods: {
        resetAlertBackground() {
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                input.addEventListener("input", () => {
                    input.classList.remove("alert-bg");
                });
            });
        },

        setFromAlert() {
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                input.classList.add("alert-bg");
            });
        },

        updateDisplay(updatedDisplay) {
            document.getElementById("success").style.display = updatedDisplay;
            if (window.innerWidth > 768) window.scrollTo(0, 500);
            else window.scrollTo(0, 0);
        },

        setContentHeight() {
            const content = document.getElementById("content");

            switch (location.hash) {
                case"#/services/group-discount":
                    if (window.innerWidth > 768) {
                        content.style.height = "400px";
                    }
                    break;
            }
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

.radio-form {
    padding: 30px;
}

.input-box {
    display: flex;
    width: 95%;
    margin: 0 auto;
    padding-top: 30px;
}

#inputs-line {
    display: flex;
}

.input {
    width: 150px;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    box-shadow: none;
    text-align: center;
}

.input:focus {
    box-shadow: none !important;
}

.input-date {
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
    text-align: center;
}

.input-date:focus {
    box-shadow: 2px 2px 5px black !important;
}

.input-column {
    margin-right: 10px;
}

.form-icon {
    display: flex;
    width: 180px;
    box-shadow: 2px 2px 5px black;
}

label {
    color: whitesmoke;
    text-shadow: none;
}

#submit-btn {
    background: RebeccaPurple;
    width: 80px;
    height: 40px;
    box-shadow: 2px 2px 5px black;
    border: none;
    border-radius: 0.25rem;
    margin-top: 22px;
    color: whitesmoke;
    font-size: 1rem;
    transition: all 0.3s ease;
}

#submit-btn:active {
    box-shadow: none !important;
    background-color: rebeccapurple !important;
    color: whitesmoke !important;
}

#submit-btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
    transition: 0.4s ease-in-out 0s;
}

.date-and-time {
    display: flex;
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

.alert-bg {
    background: gold;
}

@media (max-width: 1350px) {
    .text-content {
        height: 550px;
    }
}

@media (max-width: 1250px) {
    .text-content {
        height: 600px;
    }
}

@media (max-width: 900px) {
    .text-content {
        height: 620px;
    }
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

    .input-box {
        flex-direction: column;
        align-items: center;
        width: 85%;
        margin: 0 auto;
    }

    .input {
        width: 100%;
    }

    .date-and-time {
        width: 103%;
    }

    .input-date {
        width: 100%;
    }

    .form-icon {
        width: 100%;
    }
}
</style>
