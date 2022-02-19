<template>
    <div class="wrapper">
        <div class="skin">
        <b-container class="container">
            <div class="services-header">
                <b-img
                    class="services"
                    :src="'images/services.jpg'"
                    fluid
                    alt="Services-image"
                ></b-img>
            </div>
            <div class="services-content">
                <div class="service">
                    <div class="container-1">
                        <b-img
                            class="service-img"
                            :src="'images/travel-insurance.jpg'"
                            fluid
                            alt="Services"
                        ></b-img>
                        <div class="overlay">
                            <div class="services-title">
                                <div class="icon-box">
                                    <font-awesome-icon
                                        class="icon"
                                        :icon="['fas', 'passport']"
                                    />
                                </div>
                                <h4 class="title">Travel insurance</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    The safety of our passengers is important to
                                    us.
                                </p>
                                <router-link class="more" to="/services/travel-insurance">read more ></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service">
                    <div class="container-1">
                        <b-img
                            class="service-img"
                            :src="'images/luggage-insurance.jpg'"
                            fluid
                            alt="Services"
                        ></b-img>
                        <div class="overlay">
                            <div class="services-title">
                                <div class="icon-box">
                                    <font-awesome-icon
                                        class="icon"
                                        :icon="['fas', 'suitcase-rolling']"
                                    />
                                </div>
                                <h4 class="title">Luggage insurance</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    We provide separate insurance for your
                                    luggage.
                                </p>
                                <router-link :app="app" class="more" to="/services/luggage-insurance">read more ></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service">
                    <div class="container-1">
                        <b-img
                            class="service-img"
                            :src="'images/premium-confort.png'"
                            fluid
                            alt="Services"
                        ></b-img>
                        <div class="overlay">
                            <div class="services-title">
                                <div class="icon-box">
                                    <font-awesome-icon
                                        class="icon"
                                        :icon="['fas', 'mug-hot']"
                                    />
                                </div>
                                <h4 class="title">Premium comfort</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    If you want extra comfort on a longer
                                    journey that crosses continents.
                                </p>
                                <router-link class="more" to="/services/premium-comfort">read more ></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service">
                    <div class="container-1">
                        <b-img
                            class="service-img"
                            :src="'images/private-jet.jpg'"
                            fluid
                            alt="Services"
                        ></b-img>
                        <div class="overlay">
                            <div class="services-title">
                                <div class="icon-box">
                                    <font-awesome-icon
                                        class="icon"
                                        :icon="['fab', 'avianex']"
                                    />
                                </div>
                                <h4 class="title">Private jet rent</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    Our company offers you the possibility to
                                    rent a private jet.
                                </p>
                                <router-link class="more" to="/services/private-jet-rent">read more ></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service">
                    <div class="container-1">
                        <b-img
                            class="service-img"
                            :src="'images/plane-group.jpg'"
                            fluid
                            alt="Services"
                        ></b-img>
                        <div class="overlay">
                            <div class="services-title">
                                <div class="icon-box">
                                    <font-awesome-icon
                                        class="icon"
                                        :icon="['fas', 'users']"
                                    />
                                </div>
                                <h4 class="title">Group discount</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    Share the experience with your friends. We
                                    offer a special discount for groups.
                                </p>
                                <router-link class="more" to="/services/group-discount">read more ></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service">
                    <div class="container-1">
                        <b-img
                            class="service-img"
                            :src="'images/travel-cancellation.jpg'"
                            fluid
                            alt="Services"
                        ></b-img>
                        <div class="overlay">
                            <div class="services-title">
                                <div class="icon-box">
                                    <font-awesome-icon
                                        class="icon"
                                        :icon="['fas', 'ban']"
                                    />
                                </div>
                                <h4 class="title">
                                    Booking cancellation
                                </h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    In this case, you can cancel your booking at
                                    any time before departure.
                                </p>
                                <router-link class="more" to="/services/booking-cancellation">read more ></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-box">
                <div class="individual">
                    <h4>Do you have a personalised need?</h4>
                    <router-link to="/contact" v-currentpage>Get a quote <span> > </span></router-link>
                </div>
            </div>
        </b-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "ServicesContent",
    props: ["app"],

    data() {
        return {
            service_cards: [
                {
                    img: "",
                    alt: "",
                    icon: [],
                    title: "",
                    description: ""
                },
                {
                    img: "",
                    alt: "",
                    icon: [],
                    title: "",
                    description: ""
                },
                {
                    img: "",
                    alt: "",
                    icon: [],
                    title: "",
                    description: ""
                },
                {
                    img: "",
                    alt: "",
                    icon: [],
                    title: "",
                    description: ""
                },
                {
                    img: "",
                    alt: "",
                    icon: [],
                    title: "",
                    description: ""
                },
                {
                    img: "",
                    alt: "",
                    icon: [],
                    title: "",
                    description: ""
                },
            ]
        }
    }
};
</script>

<style scoped>
.wrapper {
    background: url("../../img/airport-bg.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.skin {
    height: 100%;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
}

.services-header {
    width: 100%;
    display: flex;
    justify-content: center;
    background: whitesmoke;
}

.services-content {
    height: 100vh;
    width: 100%;
    background: whitesmoke;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 2fr);
    padding: 20px;
}

.service {
    width: 100%;
    height: 310px;
    place-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
}

.container-1 {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 77%;
    padding: 0;
}

.more {
    display: none;
}

.service-img {
    width: 100%;
    height: 100%;
    display: block;
}

.overlay {
    position: absolute;
    transition: all 0.3s ease-out;
    opacity: 1;
    background: rgba(9, 55, 115, 0.8);
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
}

.hover-content {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -50px;
    left: 95px;
    display: none;
}

p {
    font-size: 16px;
    color: whitesmoke;
    text-align: left;
    width: 60%;
    display: none;
    padding-top: 10px;
    font-weight: 300;
}

.services-title {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background: rgba(9, 55, 115, .9);
}

.icon-box {
    width: 66px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 28px;
}

.icon {
    font-size: 40px;
    background: transparent;
    color: lightskyblue;
    border: none;
}

.title {
    margin-top: 5px;
    padding: 15px 0;
    position: relative;
    color: white;
    font-weight: 500;
    text-transform: capitalize;
    transition: 0.3s all ease;
    z-index: 1;
    text-align: center;
    display: block;
    font-size: 1.2rem;
}

.bottom-box {
    height: 20vh;
    width: 100%;
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.individual {
    width: 100%;
    height: 80px;
    background: lightskyblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.individual h4 {
    color: white;
    padding-top: 5px;
}

.individual a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    background: rebeccapurple;
    padding: 8px 20px;
    border-radius: 3px;
    text-transform: uppercase;
    width: 170px;
    text-align: center;
}

.individual a span {
    color: lightskyblue;
    padding-left: 5px;
}

.individual a:hover {
    border: 3px solid white;
    color: rebeccapurple;
    background: transparent;
    font-weight: 600;
}

.individual a:hover span {
    color: rebeccapurple;
}

/* Services item hover settings */

.service:hover .overlay {
    height: 100%;
    opacity: 1;
}

.service:hover .services-title {
    background: transparent;
}

.service:hover p {
    display: inline;
    cursor: default;
}

.service:hover .more {
    color: whitesmoke;
    transition: all 0.4s ease 0.2s;
    display: block;
    cursor: default;
    font-weight: 600;
}

.service:hover .more:focus {
    border: none !important;
    box-shadow: none !important;
}

.service:hover .hover-content {
    display: flex;
    flex-direction: column;
}

.service:hover .more:hover {
    text-decoration: none;
    color: lightskyblue;
    cursor: pointer;
    -webkit-transition: 0.4s ease-in-out 0s;
    -moz-transition: 0.4s ease-in-out 0s;
    -o-transition: 0.4s ease-in-out 0s;
    transition: 0.4s ease-in-out 0s;
}

/* Scroll alimation classes settings */

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}

/* Responsive settings */

@media (max-width: 1200px) {
    .services-content {
        height: 150vh;
        grid-template-columns: repeat(2, 3fr);
    }

    .service {
        height: 300px;
        width: 70%;
    }
}

@media (max-width: 976px) {
    .service {
        width: 100%;
    }
}

@media (max-width: 750px) {
    .wrapper {
        background: whitesmoke;
    }

    .container {
        background: whitesmoke;
    }

    .services-content {
        grid-template-columns: repeat(1, 6fr);
    }

    .overlay {
        height: 100%;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hover-content {
        display: flex;
        flex-direction: column;
        left: 0;
        bottom: -100px;
    }

    .icon-box {
        margin: 0;
    }

    .services-title {
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
    }

    .title {
        margin: 0;
        padding: 0;
    }

    p {
        display: inline;
        cursor: default;
        text-align: center;
        width: 60%;
        margin: 0 auto;
        padding: 0;
        font-size: 0.8rem;
    }

    .more {
        color: lightskyblue !important;
        display: block;
        cursor: default;
        font-weight: 600;
        text-align: center;
        padding-top: 10px;
        font-size: 0.9rem;
    }

    .services-content {
        height: 250vh;
        margin-bottom: 60px;
    }

    .individual {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 120px;
    }

    .individual h4 {
        font-size: 1.2rem;
    }

    .individual a {
        margin-bottom: 20px;
    }
}

@media (max-width: 390px) {
    .title {
        font-size: 1rem;
    }

    p, .more {
        font-size: 12px;
    }
}

</style>
