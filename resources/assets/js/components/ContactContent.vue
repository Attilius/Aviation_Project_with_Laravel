<template>
    <div class="content">
        <div class="skin">
            <div class="top">
                <h1 class="title">Contact Us</h1>
            </div>
            <div class="middle">
                <div class="contact-data">
                    <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'phone-alt']"
                    />
                    <div class="text-data">
                        <p class="phone">
                            +1 234 567 8900 <span>+1 234 567 9800</span>
                        </p>
                    </div>
                </div>
                <div class="contact-data">
                    <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'envelope']"
                    />
                    <div class="text-data">
                        <a class="email" href="">info@loremairlines.com</a>
                    </div>
                </div>
                <div class="contact-data">
                    <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'map-marker-alt']"
                    />
                    <div class="text-data">
                        <p>1234 Avenue of the Sun New York, NY 10018 US.</p>
                    </div>
                </div>
                <div class="contact-data">
                    <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
                    <div class="text-data tdata-4">
                        <p>Mon-Sat: 8:00am-6:00pm Sunday: Closed</p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <form id="form" action="" method="post">
                    <div class="fields">
                        <div class="person-datas">
                            <div class="input-field">
                                <i class="material-icons prefix">account_circle</i>
                                <label id="label-name" for="icon_prefix">Name*</label>
                                <input type="text" name="name" id="icon_prefix" class="validate" />
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix">phone</i>
                                <label id="label-phone" for="icon_telephone">Phone*</label>
                                <input type="tel" name="tel" id="icon_telephone" class="validate" />
                            </div>

                            <div class="input-field">
                                <i class="material-icons prefix">mail_outline</i>
                                <label id="label-email" for="icon_email">Email*</label>
                                <input type="email" name="email" id="icon_email" class="validate" />
                                <span class="helper-text" data-error="Invalid email address" data-success="Correct"></span>
                            </div>
                        </div>
                        <div class="input-field message">
                            <i class="material-icons prefix">mode_edit</i>
                            <textarea
                                name="message"
                                id="icon_message"
                                class="materialize-textarea"
                            ></textarea>
                            <label id="label-message" for="icon_message">Your message*</label>
                        </div>
                    </div>
                    <div class="btn_">
                        <input id="s-btn" type="button" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "ContactContent",

    mounted() {
        this.setInputFocusLabelColor();
        this.scrollPage(0,0);
        $('#icon_message').val();
        M.textareaAutoResize($('#icon_message'));
    },

    methods: {
        getInputs() {
           const inputs = [
                {
                    activeInput: document.getElementById("icon_prefix"),
                    label: document.getElementById("label-name")
                },
                {
                    activeInput: document.getElementById("icon_telephone"),
                    label: document.getElementById("label-phone")
                },
                {
                    activeInput: document.getElementById("icon_email"),
                    label: document.getElementById("label-email")
                },
                {
                    activeInput: document.getElementById("icon_message"),
                    label: document.getElementById("label-message")
                }];
            return inputs;
        },

        setInputFocusLabelColor() {
            this.getInputs().forEach(input => {
                input.activeInput.addEventListener("focusin", () => {
                    input.label.style.color = "#6a1b9a";
                });
                input.activeInput.addEventListener("focusout", () => {
                    input.label.style.color = "#9e9e9e";
                });
            });
        },

        scrollPage(positionY, positionX) {
            window.scroll({
                top: positionY,
                left: positionX
            });
        },
    }
};
</script>

<style scoped>
.content {
    height: 87vh;
    width: 100%;
    background: url("../../img/contact-bg.jpg");
    background-size: cover;
    background-position: center;
}

.skin {
    height: 87vh;
    width: 100%;
    background: rgba(7, 5, 5, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.title {
    padding: 15px 25px 25px 35px;
    position: relative;
    margin-top: 50px;
    color: whitesmoke;
    text-transform: capitalize;
    text-shadow: 2px 2px 5px black;
    width: 100%;
    text-align: center;
}

.title::after {
    content: "";
    position: absolute;
    background-color: rebeccapurple;
    width: 3%;
    height: 7px;
    bottom: -10px;
    left: 48.5%;
    margin-bottom: 20px;
    box-shadow: 2px 2px 5px black;
    border-radius: 50px;
}

.top {
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.middle {
    width: 50%;
    height: 5rem;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    margin: 40px auto;
}

.contact-data {
    display: flex;
    flex-direction: column;
    height: 5rem;
    width: auto;
    color: rebeccapurple;
    justify-content: center;
    align-items: center;
}

.tdata-4 {
    width: 110% !important;
}

.icon {
    color: rebeccapurple;
    font-size: 1.5rem;
    background: transparent;
    border: none;
}

p,
.email {
    color: whitesmoke;
    font-size: 0.8rem;
    margin: 5px auto;
    text-align: center;
}

.phone {
    display: flex;
    flex-direction: column;
}

.text-data {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}

.bottom {
    width: 50%;
    height: 53%;
    background: whitesmoke;
    margin: 10px auto;
    border-radius: 0.25rem;
}

#form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 35px auto;
}

.fields {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
}

.input-field {
    height: 20%;
}

.person-datas {
    width: 44%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
    padding-bottom: 10px;
}

.person-datas .input-field {
    width: 100%;
}

.message {
    width: 40%;
    height: 100px;
    padding: 0;
    margin-right: 70px;
}

#icon_message {
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #9e9e9e;
    padding-top: 10px;
    max-height: 200px;
}

label {
    color: #9e9e9e;
}

input {
    height: 50px;
    background: lightgrey;
    border: none;
    padding-left: 15px;
    border-radius: 0.25rem;
}

input:focus, textarea:focus {
    border: none !important;
    box-shadow: none !important;
}

.input-field input[type=text]:focus,
.input-field input[type=tel]:focus,
.input-field input[type=email]:focus,
.input-field textarea[name=message]:focus {
     border-bottom: 1px solid #6a1b9a !important;
     box-shadow: 0 1px 0 0 #6a1b9a !important;
}

.input-field .prefix.active {
     color: #6a1b9a;
}

.btn_ {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    position: relative;
}

#s-btn {
    width: 200px;
    padding: 0;
    background: rebeccapurple;
    border-radius: 0.25rem;
    color: whitesmoke;
    margin-top: 50px;
}

#s-btn:hover {
    background: whitesmoke;
    color: rebeccapurple;
    border: 2px solid rebeccapurple;
}

@media (max-width: 768px) {
    .content,
    .skin {
        height: 150vh;
    }

    .title {
        font-size: 1.5rem;
    }

    .title::after {
        width: 10%;
    }

    .middle {
        grid-template-columns: repeat(2, 2fr);
        grid-gap: 10px;
        margin: 40px auto;
        height: 11rem;
        width: 100%;
    }

    .contact-data {
        width: 100%;
    }

    .bottom {
        width: 95%;
    }

    #form {
        width: 80%;
    }

    .fields {
        flex-direction: column;
    }

    .person-datas,
    .message {
        width: 100%;
        padding: 0;
    }

    .message {
        margin-top: 25px;
    }

    #icon_message {
        width: 86%;
    }
}
</style>
