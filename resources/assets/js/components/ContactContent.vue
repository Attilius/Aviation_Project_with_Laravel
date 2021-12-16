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
                        <p>1010 Avenue of the Moon New York, NY 10018 US.</p>
                    </div>
                </div>
                <div class="contact-data">
                    <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
                    <div class="text-data tdata-4">
                        <p>Mon–Sat: 8:00am–6:00pm Sunday: Closed</p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <form id="form" action="" method="post">
                    <div class="fields">
                        <div class="person-datas">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name*"
                            />
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Phone*"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email*"
                            />
                        </div>
                        <div class="message">
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Your message*"
                            ></textarea>
                        </div>
                    </div>
                    <div class="btn_">
                        <input id="s-btn" type="button" value="Submit >" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactContent"
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
    background: rgba(5, 16, 57, 0.9);
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
    height: 50%;
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

.person-datas {
    width: 44%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
}

.message {
    width: 44%;
    height: 200px;
    padding-right: 8px;
}

#message {
    width: 100%;
    height: 100%;
    background: lightgrey;
    border: none;
    padding: 15px;
    border-radius: 0.25rem;
}

#message:focus,
#name:focus,
#tel:focus,
#email:focus {
    border: 2px solid rebeccapurple !important;
    box-shadow: none !important;
    background: white;
}

input {
    height: 50px;
    background: lightgrey;
    border: none;
    padding-left: 15px;
    border-radius: 0.25rem;
}

.btn_ {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#s-btn {
    width: 200px;
    padding: 0;
    background: rebeccapurple;
    border-radius: 0.25rem;
    color: whitesmoke;
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

}
</style>
