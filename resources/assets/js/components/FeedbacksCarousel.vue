<template>
    <div>
        <b-carousel
            id="carousel"
            v-model="slide"
            :interval="5000"
            controls
            indicators
            background="linear-gradient(135deg, lightblue, rgb(51, 100, 179), rgb(51, 100, 179), lightblue)"
            img-width="500"
            img-height="250"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                class="slide"
                caption=""
                img-blank
                img-alt="Blank image"
                ><div class="person">
                    <b-img
                        class="customer"
                        :src="'images/victor.jpg'"
                        fluid
                        alt="Person"
                    ></b-img>
                    <div>
                        <h4>Victor Blastique</h4>
                        <div class="stars">
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                        </div>
                    </div>
                </div>
                <p>
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-left']"
                    />
                    When I travel for business, I always arrive on time and it's
                    almost relaxing to travel. In some cases, I had to plan a
                    specific itinerary, and they helped me with that as well.
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-right']"
                    />
                </p>
            </b-carousel-slide>

            <b-carousel-slide
                class="slide"
                caption=""
                img-blank
                img-alt="Blank image"
                ><div class="person">
                    <b-img
                        class="customer"
                        :src="'images/jennifer.jpg'"
                        fluid
                        alt="Person"
                    ></b-img>
                    <div>
                        <h4>Jennifer Oregano</h4>
                        <div class="stars">
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                        </div>
                    </div>
                </div>
                <p>
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-left']"
                    />
                    I am absolutely satisfied. My journeys have always gone
                    smoothly. Friendly and courteous service. If I have to
                    travel I will choose them without question.
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-right']"
                    />
                </p>
            </b-carousel-slide>

            <b-carousel-slide
                class="slide"
                caption=""
                img-blank
                img-alt="Blank image"
                ><div class="person">
                    <b-img
                        class="customer"
                        :src="'images/john.jpg'"
                        fluid
                        alt="Person"
                    ></b-img>
                    <div>
                        <h4>Jonathan Doe</h4>
                        <div class="stars">
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                        </div>
                    </div>
                </div>
                <p>
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-left']"
                    />
                    We came across their advertisement during our last holiday.
                    We chose them and have no regrets. It was very pleasant on
                    the way in. I look forward to travelling with them again.
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-right']"
                    />
                </p>
            </b-carousel-slide>

            <b-carousel-slide
                class="slide"
                caption=""
                img-blank
                img-alt="Blank image"
                ><div class="person">
                    <b-img
                        class="customer"
                        :src="'images/valerie.png'"
                        fluid
                        alt="Person"
                    ></b-img>
                    <div>
                        <h4>Valerie Pavilioni</h4>
                        <div class="stars">
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                            <font-awesome-icon
                                class="icon"
                                :icon="['fas', 'star']"
                            />
                        </div>
                    </div>
                </div>
                <p>
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-left']"
                    />
                    The best at a good price. Maybe that says it all. I've only
                    travelled short distances with them so far, but I'm sure my
                    next destination will be further afield.
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-right']"
                    />
                </p>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: "FeedbacksCarousel",
    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    }
};
</script>

<style scoped>
#carousel {
    box-shadow: 5px 5px 5px rgb(39, 39, 39);
    border: 1px solid whitesmoke;
}
.slide {
    width: 580px;
    height: 290px;
}

.slide p {
    color: whitesmoke;
}

.person {
    display: flex;
    padding-bottom: 15px;
}

.customer {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 20px;
}

h4 {
    color: whitesmoke;
    font-size: 1.2rem;
}

.stars {
    display: flex;
}

.icon {
    color: goldenrod;
    font-size: 1rem;
    margin-right: 5px;
    border: none;
    background-color: transparent;
}

.quote-sign {
    font-size: 0.5rem;
    color: whitesmoke;
}
</style>
