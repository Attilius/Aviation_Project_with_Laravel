<template>
    <div>
        <div class="content-header">
            <div class="color-box">
                <h1>Aviation is our passion</h1>
                <b-img
                    class="B737"
                    :src="'images/B737.png'"
                    fluid
                    alt="Plane"
                ></b-img>
            </div>
        </div>

        <div class="content">
            <div class="awards">
                <b-img
                    class="award"
                    :src="'images/awards-2019.png'"
                    fluid
                    alt="Award-2019"
                ></b-img>
                <b-img
                    class="award"
                    :src="'images/awards-2021.png'"
                    fluid
                    alt="Award-2021"
                ></b-img>
            </div>

            <b-container class="main-content">
                <b-row class="top">
                    <div class="upper">
                        <b-img
                            class="office"
                            :src="'images/office.jpg'"
                            fluid
                            alt="Office"
                        ></b-img>
                        <b-col class="text-content">
                            <h3>About us</h3>
                            <article>
                                Our company is the result of a recently formed
                                airline partnership. Initially, we only
                                supported our market-leading peers by providing
                                ancillary flights. We now offer our own routes
                                to customers who want to travel. We also operate
                                charter flights to many destinations around the
                                world. We work with our colleagues on a daily
                                basis to provide a tailor-made solution for each
                                of our customers. Whether it's a business trip
                                or a holiday, all you need to do is choose a
                                destination and a date, leave the rest to us!
                            </article>
                        </b-col>
                    </div>
                    <div class="center">
                        <b-img
                            class="pilot"
                            :src="'images/pilot.jpg'"
                            fluid
                            alt="Pilot"
                        ></b-img>
                        <b-col class="text-content">
                            <article>
                                With years of experience and thousands of hours
                                flown, our experienced pilots guarantee the
                                safety of our passengers. We develop them
                                through a variety of training courses. They
                                demonstrate their confident skills day in, day
                                out, in small and large aircraft.
                            </article>
                        </b-col>
                    </div>
                    <div class="under">
                        <b-img
                            class="stewardess"
                            :src="'images/stewardess.jpg'"
                            fluid
                            alt="Stewardess"
                        ></b-img>
                        <b-col class="text-content">
                            <article>
                                Our friendly and helpful cabin crew will ensure
                                the comfort of our passengers. They will do
                                their utmost to make your journey, even if it
                                takes several hours, a pleasant one.
                            </article>
                        </b-col>
                    </div>
                </b-row>
            </b-container>
        </div>

        <div class="img-box"></div>
        <div class="bottom-box">
            <section class="counters">
                <div v-scrollanimation id="counters-container" class="container">
                    <div>
                        <font-awesome-icon
                            class="icon"
                            :icon="['fas', 'users']"
                        />
                        <div class="counter">{{ val1 }}</div>
                        <h3>Customers</h3>
                    </div>
                    <div>
                        <font-awesome-icon
                            class="icon"
                            :icon="['fas', 'plane']"
                        />
                        <div class="counter">{{ val2 }}</div>
                        <h3>Flights</h3>
                    </div>
                    <div>
                        <font-awesome-icon
                            class="icon"
                            :icon="['fas', 'map-marked-alt']"
                        />
                        <div class="counter">{{ val3 }}</div>
                        <h3>Routes</h3>
                    </div>
                </div>
            </section>

            <div class="reviews">
                <div class="feedback"></div>
                <div class="feedback"></div>
                <div class="feedback"></div>
                <div class="feedback"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutContent",

    data() {
        return {
            value1: 0,
            value2: 0,
            value3: 0,
            speed: 200,
            targets: [150000, 5500, 2000]
        };
    },

    created() {
        let intval = setInterval(() => {
            const counters_container = document.getElementById("counters-container");
            let inc1 = this.targets[0] / this.speed;
            let inc2 = this.targets[1] / this.speed;
            let inc3 = this.targets[2] / this.speed;
            if (counters_container.classList.contains("enter")) {
                if (
                    this.value1 < this.targets[0] ||
                    this.value2 < this.targets[1] ||
                    this.value3 < this.targets[2]
                ) {
                    this.value1 += inc1;
                    this.value2 += inc2;
                    this.value3 += inc3;
                } else {
                    clearInterval(intval);
                }
            }
        }, 10);
    },

    computed: {
        val1() {
            return this.value1.toFixed();
        },
        val2() {
            return this.value2.toFixed();
        },
        val3() {
            return this.value3.toFixed();
        }
    }
};
</script>

<style scoped>
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}

.upper,
.center {
    display: flex;
    margin-bottom: 50px;
}

.under {
    display: flex;
}
.content-header {
    height: 40vh;
    width: 100%;
    background-color: whitesmoke;
}

.color-box {
    height: 40vh;
    width: 100%;
    background: linear-gradient(180deg, rgb(9, 55, 115), rgb(51, 100, 179));
    border-bottom-right-radius: 80%;
    display: flex;
    justify-content: space-around;
}

h1 {
    color: whitesmoke;
    text-shadow: 2px 2px 5px silver;
    padding: 40px 50px;
    display: block;
    width: 400px;
    font-size: 3rem;
}

h3 {
    color: rgb(9, 55, 115);
    text-shadow: 2px 2px 5px silver;
    margin-bottom: 10px;
}

.content {
    width: 100%;
    height: 86vh;
    background-color: rgb(51, 100, 179);
    display: flex;
    justify-content: space-between;
}

.main-content {
    width: 80%;
}

.top {
    border-bottom: 1px solid silver;
    background-color: whitesmoke;
    padding: 25px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    right: 150px;
    width: 113.2%;
}

.office {
    width: 20%;
    margin-right: 55px;
    border-top-left-radius: 30px;
}

.pilot {
    width: 20%;
    margin-right: 55px;
}

.stewardess {
    width: 20%;
    margin-right: 55px;
    border-bottom-left-radius: 30px;
}

article {
    line-height: 1.7rem;
    text-align: justify;
}

.text-content {
    margin-right: 50px;
}

.img-box {
    background: url("../../img/airport-bg.jpg");
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 50vh;
}

.bottom-box {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgb(51, 100, 179);
    padding-top: 110px;
}

.counters .container h3 {
    color: whitesmoke;
    font-size: 1.2rem;
}

.counters .container {
    display: grid;
    grid-gap: 300px;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    color: whitesmoke;
}

.counter {
    padding: 10px 20px;
}

.icon {
    font-size: 2.5rem;
    background-color: transparent;
    border: none;
    margin: 0 auto;
}

.counter {
    font-size: 2rem;
}

.awards {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: transparent;
    align-items: center;
    width: 20%;
}

.award {
    height: 150px;
    width: 150px;
}

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}

.reviews {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25%;
    margin-top: 150px;
}

.feedback {
    background-color: whitesmoke;
    height: 100%;
    width: 20%;
    margin: 0 70px;
}

@media (max-width: 1350px) {
    .top {
        border-bottom: 1px solid silver;
        background-color: whitesmoke;
        padding: 25px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        display: flex;
        justify-content: space-between;
        position: relative;
        right: 0;
        width: 100%;
    }
}

@media (max-width: 1200px) {
    .content-header,
    .color-box {
        height: 20%;
    }

    .color-box {
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        padding: 20px;
        display: inline;
        text-align: center;
        width: 100%;
    }

    .B737 {
        width: 90%;
        margin: 0 auto;
    }

    .office {
        display: none;
    }

    .content {
        flex-direction: column-reverse;
        justify-content: space-between;
        height: 100vh;
    }

    .awards {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }

    .top {
        position: absolute;
    }

    .text-content {
        margin-right: 0;
    }
}

@media (max-width: 900px) {
    h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 820px) {
    .content {
        height: 120vh;
    }
    .center,
    .under {
        flex-direction: column;
    }

    .pilot,
    .stewardess {
        margin: 0;
        width: 150px;
        height: 100px;
        margin: 0 auto 10px;
    }

    .stewardess {
        border-radius: 0;
    }
}

@media (max-width: 750px) {
    .content {
        height: 150vh;
    }

    h1 {
        font-size: 2rem;
    }
}

@media (max-width: 576px) {
    .content {
        height: 170vh;
    }

    h1 {
        font-size: 1rem;
    }

    .counters .container {
        grid-template-columns: repeat(1, 1fr);
    }
}

@media (max-width: 380px) {
    .content {
        height: 190vh;
    }
}
</style>
