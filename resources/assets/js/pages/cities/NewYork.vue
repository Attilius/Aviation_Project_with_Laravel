<template>
    <div>
        <div id="wrapper" class="wrapper">
            <div id="shadow"></div>
            <VideoPlayer
                :isPlay="isPlay"
                :city="city"
                @onChangeIsPlayStatus="updateIsPlayStatus($event)"
            />
            <Navbar class="navbar_" />
            <Header
                :city="city"
                :app="app"
                @onChangePageContent="updatePageContent($event)"
            />
            <div class="content-top">
                <h5>{{ city.name }}: {{ city.adjective }}</h5>
                <div class="container">
                    <VideoBox
                        :isPlay="isPlay"
                        :city="city"
                        @changeIsPlayStatus="updateIsPlayStatus($event)"
                    />
                    <DescriptionOfCity :city="city" />
                    <InfoCard
                        :isClickShadow="isClickShadow"
                        :infoItem="infoItem"
                        :city="city"
                        @onChangeIsClickShadowStatus="
                            updateIsClickShadowStatus($emit)
                        "
                    />
                    <PublicInformations :city="city" />
                </div>
            </div>

            <div class="content-bottom">
                <h5>{{ city.name }} Addresses</h5>
                <div class="container">
                    <ul id="addresses-menu">
                        <li class="menu-item active">See all</li>
                        <li class="menu-item">Attractions</li>
                        <li class="menu-item">Hotels</li>
                        <li class="menu-item">Restaurants</li>
                    </ul>

                    <div class="card-container" v-if="!show_more">
                        <div
                            class="card_"
                            v-for="address in addresses_all"
                            :key="address.id"
                        >
                            <img
                                class="addresses_img"
                                :src="address.image"
                                alt="hotel"
                            />
                            <div class="marking-title">
                                <i
                                    :id="address.id"
                                    class="large material-icons favorite"
                                    >favorite_border</i
                                >
                                <span class="name">{{ address.name }}</span>
                            </div>
                            <span class="label">
                                {{ address.label }}
                            </span>
                        </div>
                    </div>

                    <div class="card-container" v-else>
                        <div
                            class="card_"
                            v-for="address in addresses_less"
                            :key="address.id"
                        >
                            <img
                                class="addresses_img"
                                :src="address.image"
                                alt="hotel"
                            />
                            <div class="marking-title">
                                <i
                                    :id="address.id"
                                    class="large material-icons favorite"
                                    >favorite_border</i
                                >
                                <span class="name">{{ address.name }}</span>
                            </div>
                            <span class="label">
                                {{ address.label }}
                            </span>
                        </div>
                    </div>
                    <span id="show-more">Show more</span>
                    <h5>Another destinations</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../components/travel_guide/CityHeader.vue";
import Header from "../../components/travel_guide/city_components/Header.vue";
import VideoPlayer from "../../components/travel_guide/city_components/VideoPlayer.vue";
import VideoBox from "../../components/travel_guide/city_components/VideoBox.vue";
import DescriptionOfCity from "../../components/travel_guide/city_components/DescriptionOfCity.vue";
import InfoCard from "../../components/travel_guide/city_components/InfoCard.vue";
import PublicInformations from "../../components/travel_guide/city_components/PublicInformations.vue";
export default {
    name: "NewYork",
    props: ["app"],
    components: {
        Navbar,
        Header,
        VideoPlayer,
        VideoBox,
        DescriptionOfCity,
        InfoCard,
        PublicInformations
    },

    data() {
        return {
            isPlay: false,
            infoItem: "",
            isClickShadow: false,

            city: {
                header_video: "/video/New_York.mp4",
                header_video_poster: "/../images/NewYork.jpg",
                video: "/video/New_York2.mp4",
                poster: "/../images/New-York-Statue-of-Liberty.jpg",
                country: "United States Of America",
                name: "New York",
                currency: "USA Dollar",
                language: "English",
                travelling_time: "10h20",
                city_code: "NYC",
                adjective: "City of the empire state",
                quotes:
                    "“I love New York, even though it isn't mine, the way something has to be, a tree or a street or a house, something, anyway, that belongs to me because I belong to it.”",
                author:
                    "―Truman Capote, writer “Breakfast at Tiffany's” (1924-84)",
                article:
                    "New York City is also the most densely populated major city in the United States. Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area. With over 20 million people in its metropolitan statistical area and 23,582,649 in its combined statistical area as of 2020, New York is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly",
                article_continue:
                    "influencing commerce, entertainment, research, technology, education, politics, tourism, dining, art, fashion, and sports, and is the most photographed city in the world. Home to the headquarters of the United Nations, New York is an important center for international diplomacy, and has sometimes been called the capital of the world. Situated on one of the world's largest natural harbors, New York City is composed of five boroughs, each of which is coextensive with a respective county of the State of New York. The five boroughs—Brooklyn (Kings County), Queens (Queens County), Manhattan (New York County), the Bronx (Bronx County), and Staten Island (Richmond County)—were created when local governments were consolidated into a single municipal entity in 1898. The city and its metropolitan area constitute the premier gateway for legal immigration to the United States. New York is waiting for you to discover...",
                map:
                    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193614.05059428743!2d-74.0614249!3d40.6911623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2shu!4v1639769543137!5m2!1sen!2shu"
            },
            cityName: "New-York",
            addresses_all: [],
            addresses_less: [],
            show_more: true,
            area: "America",
            location: "New_York"
        };
    },

    mounted() {
        this.scrollPage(0, 0);
        this.openInfoCard();
        this.changeShadowClickState();
        this.fetchData("see all");
        
    },

    methods: {
        showMoreOrLess(array_length) {
            const showMore = document.getElementById("show-more");

            if (array_length > 9) {
                showMore.style.visibility = "visible";
                showMore.addEventListener("click", () => {
                    if (!this.show_more) {
                        this.show_more = true;
                        showMore.textContent = "Show more";
                    } else {
                        this.show_more = false;
                        showMore.textContent = "Show less";
                    }
                });
            } else showMore.style.visibility = "hidden";
        },

        showAddresses() {
            const addressesMenu = document.getElementById("addresses-menu");
            const menuItems = addressesMenu.getElementsByClassName("menu-item");

            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].addEventListener("click", () => {
                    menuItems[i].classList.add("active");
                    for (let sibling of menuItems[i].parentNode.children) {
                        if (sibling !== menuItems[i])
                            sibling.classList.remove("active");
                        else
                            this.fetchData(
                                menuItems[i].textContent.toLowerCase()
                            );
                            this.addresses = menuItems[i].textContent.toLowerCase();
                    }
                });
            }
        },

        fetchData(addressesItem) {
            this.showAddresses(); 
            setTimeout(() => {
                if (addressesItem === "see all") {
                    fetch(`/api/new-york?service=all&cityName=${this.cityName}`)
                        .then(response => response.json())
                        .then(data => {
                            this.addresses_all = [];
                            this.addresses_less = [];
                            this.showMoreOrLess(data.attractions.length + data.hotels.length + data.restaurants.length);
                            
                            for (let i = 0; i < data.attractions.length; i++) {
                                this.addresses_all.push(data.attractions[i]);
                            }

                            for (let l = 0; l < 3; l++) {
                                this.addresses_less.push(data.attractions[l]);
                            }

                            for (let i = 0; i < data.hotels.length; i++) {
                                this.addresses_all.push(data.hotels[i]);
                            }

                            for (let l = 0; l < 3; l++) {
                                this.addresses_less.push(data.hotels[l]);
                            }

                            for (let i = 0; i < data.restaurants.length; i++) {
                                this.addresses_all.push(data.restaurants[i]);
                            }

                            for (let l = 0; l < 3; l++) {
                                this.addresses_less.push(data.restaurants[l]);
                            }

                        });
                } else {
                    fetch(
                        `/api/new-york?service=${addressesItem}&cityName=${this.cityName}`
                    )
                        .then(response => response.json())
                        .then(data => {
                            this.addresses_all = data;
                            this.showMoreOrLess(data.length);
                            this.addresses_less = [];

                            for (let l = 0; l < 9; l++) {
                                this.addresses_less.push(data[l]);
                            }
                        });
                }
            }, 100);
        },

        updateIsPlayStatus(updateIsPlayStatus) {
            this.isPlay = updateIsPlayStatus;
        },

        updateIsClickShadowStatus(updateIsClickShadowStatus) {
            this.isClickShadow = updateIsClickShadowStatus;
        },

        scrollPage(positionY, positionX) {
            window.scroll({
                top: positionY,
                left: positionX
            });
        },

        openInfoCard() {
            const infoItems = document.getElementsByClassName(
                "information-container"
            )[0].children;
            const infoCard = document.getElementById("info-card");
            const shadow = document.getElementById("shadow");

            for (let i = 0; i < infoItems.length; i++) {
                infoItems[i].addEventListener("click", () => {
                    this.infoItem = infoItems[i].lastChild.textContent;
                    shadow.style.display = "block";
                    infoCard.style.display = "flex";
                });
            }
        },

        changeShadowClickState() {
            document.getElementById("shadow").addEventListener("click", () => {
                this.isClickShadow = true;
            });
        }
    }
};
</script>

<style scoped>
#wrapper {
    display: block;
}

.navbar_ {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 2;
}

.wrapper {
    height: 250vh;
}

article {
    text-align: justify;
}

.content-top,
.content-bottom {
    margin-top: 20px;
}

.content-top h5,
.content-bottom h5 {
    text-align: center;
    text-transform: uppercase;
    color: rgb(5, 55, 115);
    text-shadow: 2px 2px 5px silver;
    padding: 25px 0 15px 0;
    font-weight: 600;
}

#close {
    position: absolute;
    top: 15px;
    right: 25px;
    width: 2rem;
    height: 2rem;
    color: rgb(9, 55, 115);
    font-size: 2rem;
    padding-top: 1px;
    cursor: pointer;
    border: none;
    background: whitesmoke;
    transition: all 0.7s ease 0s;
}

#close:hover {
    background: rgb(9, 55, 115);
    border-radius: 50px;
    color: whitesmoke;
    transition: all 0.8s ease 0s;
}

#addresses-menu {
    display: flex;
    align-items: flex-start;
}

.menu-item {
    background: none;
    border: none;
    outline: none;
    margin-right: 50px;
    cursor: pointer;
}

.menu-item:focus {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
}

.active {
    color: #0984e3;
    border-bottom: 1px solid #0984e3;
}

.card-container {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(3, 4fr);
}

.card_ {
    height: 300px;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    box-shadow: 0 2px 5px #c4c4c4;
    cursor: pointer;
}

.card_:hover {
    box-shadow: 5px 5px 8px #c4c4c4;
}

#show-more {
    color: #0984e3;
    float: right;
    padding: 15px;
    cursor: pointer;
}

#shadow {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(1, 1, 1, 0.6);
    z-index: 1;
    display: none;
}

.addresses_img {
    height: 70%;
    width: 100%;
}

.marking-title {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
}

.favorite {
    color: red;
    font-size: 25px;
    font-weight: 100;
    padding: 0 10px;
}

.name {
    font-weight: 600;
    color: rgb(5, 55, 115);
}

.label {
    position: relative;
    left: 10px;
    bottom: -5px;
    color: rgb(5, 55, 115);
}
</style>
