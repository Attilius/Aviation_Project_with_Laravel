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
                    v-for="award in awards"
                    :key="award.alt"
                    class="award"
                    :src="award.source"
                    fluid
                    :alt="award.alt"
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

        <div class="img-box">
            <div class="skin"></div>
        </div>
        <div class="bottom-box">
            <div class="skin">
                <section class="counters">
                    <h3>More than...</h3>
                    <div
                        v-scrollanimation
                        id="counters-container"
                        class="container"
                    >
                        <Counter :counter_data="counters[0]" :counter_function="value1" />
                        <Counter :counter_data="counters[1]" :counter_function="value2" />
                        <Counter :counter_data="counters[2]" :counter_function="value3" />
                        <Counter :counter_data="counters[3]" :counter_function="value4" />
                    </div>
                </section>

                <FeedbacksCarousel />
            </div>
        </div>
    </div>
</template>

<script>
import Counter from "./Counter.vue";
import FeedbacksCarousel from "./FeedbacksCarousel.vue";
export default {
    name: "AboutContent",

    components: {
        Counter,
        FeedbacksCarousel
    },

    data() {
        return {
            awards: [
                {
                    source: "images/awards-2019.png",
                    alt: "Award-2019"
                },
                {
                    source: "images/awards-2021.png",
                    alt: "Award-2021"
                }
            ],

            counters: [
                {
                    icon: ["fas", "users"],
                    title: "Satisfied customers"
                },
                {
                    icon: ["fas", "plane"],
                    title: "Flights"
                },
                {
                    icon: ["fas", "map-marked-alt"],
                    title: "Routes"
                },
                {
                    icon: ["fas", "handshake"],
                    title: "Partners"
                }
            ],
            values: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
            speed: 200,
            targets: [150000, 5500, 2000, 600]
        };
    },

    created() {
        let intval = setInterval(() => {
            for (let i = 0; i < this.values.length; i++) {
                this.count(i, this.values[i], intval);
            }
        }, 10);
    },

    mounted() {
        this.scrollPage(0,0);
    },

    methods: {
        count(index, item, intval) {
            const counters_container = document.getElementById(
                "counters-container"
            );
            let inc = this.targets[index] / this.speed;
            if (counters_container.classList.contains("enter")) {
                if (item.value < this.targets[index]) {
                    item.value += inc;
                } else {
                    clearInterval(intval);
                }
            }
        },

        scrollPage(positionY, positionX) {
            window.scroll({
                top: positionY,
                left: positionX
            });
        },
    },

    computed: {
        value1() {
            return this.values[0].value.toFixed();
        },
        value2() {
            return this.values[1].value.toFixed();
        },
        value3() {
            return this.values[2].value.toFixed();
        },
        value4() {
            return this.values[3].value.toFixed();
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
    height: 100vh;
    background-color: rgb(51, 100, 179);
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgb(51, 100, 179);
    box-shadow: none;
}

.main-content {
    width: 72%;
}

.top {
    border-bottom: 1px solid silver;
    background-color: whitesmoke;
    padding: 25px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
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
    background: url("../../img/plane-front.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    width: 100%;
    height: 60vh;
}

.bottom-box {
    width: 100%;
    height: 100vh;
    background: url("../../img/sky.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.skin {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.2);
}

.counters h3 {
    color: whitesmoke;
    text-align: center;
    padding-top: 70px;
    text-shadow: 2px 2px 5px silver;
    padding-bottom: 50px;
}

.counters .container {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    color: whitesmoke;
}

.counters .container div {
    background: rgba(51, 100, 179, 0.7);
    padding: 10px;
    border-radius: 10px;
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

@media (max-width: 1000px) {
    .counters .container {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .counter {
        font-size: 1.5rem;
    }

    .counters .container h3 {
        font-size: 1rem;
    }

    .icon {
        font-size: 2rem;
    }

    .counters h2 {
        padding-bottom: 50px;
    }

    .bottom-box,
    .skin {
        height: 110vh;
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

    .counter {
        font-size: 1rem;
    }

    .counters .container h3 {
        font-size: 0.7rem;
    }

    .icon {
        font-size: 1.5rem;
    }

    .bottom-box,
    .skin {
        height: 150vh;
    }
}

@media (max-width: 380px) {
    .content {
        height: 190vh;
    }
}
</style>
