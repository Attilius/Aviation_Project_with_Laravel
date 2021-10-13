<template>
    <div class="wrapper">
        <b-container>
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
                            <div class="text">
                                <font-awesome-icon
                                    class="icon"
                                    :icon="['fas', 'passport']"
                                />
                                <h4 class="title">Travel insurance</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    The safety of our passengers is important to
                                    us.
                                </p>
                                <a class="more" href="/services">read more ></a>
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
                            <div class="text">
                                <font-awesome-icon
                                    class="icon"
                                    :icon="['fas', 'suitcase-rolling']"
                                />
                                <h4 class="title">Luggage insurance</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    We provide separate insurance for your
                                    luggage.
                                </p>
                                <a class="more" href="/services">read more ></a>
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
                            <div class="text">
                                <font-awesome-icon
                                    class="icon"
                                    :icon="['fas', 'mug-hot']"
                                />
                                <h4 class="title">Premium confort</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    If you want extra comfort on a longer
                                    journey that crosses continents.
                                </p>
                                <a class="more" href="/services">read more ></a>
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
                            <div class="text">
                                <font-awesome-icon
                                    class="icon"
                                    :icon="['fab', 'avianex']"
                                />
                                <h4 class="title">Private jet rent</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    Our company offers you the possibility to
                                    rent a private jet.
                                </p>
                                <a class="more" href="/services">read more ></a>
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
                            <div class="text">
                                <font-awesome-icon
                                    class="icon"
                                    :icon="['fas', 'users']"
                                />
                                <h4 class="title">Group discount</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    Share the experience with your friends. We
                                    offer a special discount for groups.
                                </p>
                                <a class="more" href="/services">read more ></a>
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
                            <div class="text">
                                <font-awesome-icon
                                    class="icon"
                                    :icon="['fas', 'ban']"
                                />
                                <h4 class="title">Booking cancellation</h4>
                            </div>
                            <div class="hover-content">
                                <p>
                                    In this case, you can cancel your booking at
                                    any time before departure.
                                </p>
                                <a class="more" href="/services">read more ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "ServicesContent"
};
</script>

<style scoped>
.wrapper {
    background: rgb(51, 100, 179);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.services-header {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(51, 100, 179);
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

.text {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: rgb(9, 55, 115);
}

.icon {
    font-size: 40px;
    background: transparent;
    color: lightskyblue;
    border: none;
    margin-top: 15px;
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

/* Services item hover settings */

.service:hover .overlay {
    height: 100%;
    opacity: 1;
}

.service:hover .text {
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
    .services-content {
        height: 270vh;
        grid-template-columns: repeat(1, 6fr);
    }
}
</style>
