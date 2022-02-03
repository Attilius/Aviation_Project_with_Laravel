<template>
    <div>
        <mdb-carousel
            id="carousel"
            class="slide"
            :interval="8000"
            slide
            :items="carouselData.length"
        >
            <template #[data.id] v-for="data in carouselData">
                <div :key="data.name" class="slide-top">
                    <img class="customer" :src="data.src" :alt="data.alt" />
                    <div>
                        <h4 class="customerName">
                            {{ data.name }}
                        </h4>
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
                <p class="comment" :key="data.comment">
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-left']"
                    />
                    {{ data.comment }}
                    <font-awesome-icon
                        class="quote-sign"
                        :icon="['fas', 'quote-right']"
                    />
                </p>
            </template>
        </mdb-carousel>
    </div>
</template>

<script>
import { mdbCarousel } from "mdbvue";
export default {
    name: "FeedbacksCarousel",

    components: {
        mdbCarousel
    },
    data() {
        return {
            carousel: 0,
            carouselData: [
                {
                    id: 1,
                    img: true,
                    name: "Victor Blastique",
                    src: "images/victor.jpg",
                    alt: "Victor Blastique iamge",
                    comment: `When I travel for business, I always arrive on time and it's
                    almost relaxing to travel. In some cases, I had to plan a
                    specific itinerary, and they helped me with that as well.`
                },
                {
                    id: 2,
                    img: true,
                    name: "Jennifer Oregano",
                    src: "images/jennifer.jpg",
                    alt: "Jennifer Oregano image",
                    comment: `I am absolutely satisfied. My journeys have always gone
                    smoothly. Friendly and courteous service. If I have to
                    travel I will choose them without question.`
                },
                {
                    id: 3,
                    img: true,
                    name: "Jonathan Doe",
                    src: "images/john.jpg",
                    alt: "Jonathan Doe image",
                    comment: `We came across their advertisement during our last holiday.
                    We chose them and have no regrets. It was very pleasant on
                    the way in. I look forward to travelling with them again.`
                },
                {
                    id: 4,
                    img: true,
                    name: "Valerie Pavilioni",
                    src: "images/valerie.png",
                    alt: "Valerie Pavilioni image",
                    comment: `The best at a good price. Maybe that says it all. I've only
                    travelled short distances with them so far, but I'm sure my
                    next destination will be further afield.`
                }
            ]
        };
    },

    mounted() {
        const names = document.querySelectorAll(".customerName");
        const comments = document.querySelectorAll(".comment");

        names.forEach((name, index) => {
            let counter = 1;
            
            setInterval(() => {
                if (index === counter) {
                    name.style.visibility = "visible";
                    comments[index].style.visibility = "visible";
                } else {
                    name.style.visibility = "hidden";
                    comments[index].style.visibility = "hidden";
                }
                if (counter !== names.length-1) counter++;
                else counter = 0;
            }, 8000);
        });
    }
};
</script>

<style scoped>
#carousel {
    box-shadow: 5px 5px 5px rgb(39, 39, 39);
    border: 1px solid whitesmoke;
    background: linear-gradient(
        135deg,
        lightblue,
        rgb(51, 100, 179),
        rgb(51, 100, 179),
        lightblue
    );
}

.slide {
    width: 580px;
    height: 290px;
}

.slide p {
    color: whitesmoke;
    width: 80%;
    margin: 0 auto;
}

.slide-top {
    width: 100%;
    height: 33%;
    display: flex;
}

.person {
    display: flex;
    padding-bottom: 15px;
}

.customer {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 20px;
}

h4 {
    color: whitesmoke;
    font-size: 1.2rem;
    width: 100%;
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

@media (max-width: 1000px) {
    .slide {
        width: 450px;
        height: 220px;
    }

    .slide p {
        font-size: 13px;
    }

    .customer {
        height: 60px;
        width: 60px;
    }

    h4 {
        font-size: 1rem;
        margin-bottom: 0;
    }

    .icon {
        font-size: 0.7rem;
    }
}

@media (max-width: 576px) {
    .slide {
        width: 350px;
        height: 180px;
    }

    .slide p {
        font-size: 10px;
        margin: 0;
    }

    .person {
        padding: 0;
    }

    .customer {
        height: 40px;
        width: 40px;
    }

    h4 {
        font-size: 0.8rem;
    }

    .icon {
        font-size: 0.6rem;
    }
}
</style>
