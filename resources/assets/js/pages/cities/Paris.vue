<template>
    <div>
        <div v-if="openAddressPage">
            <AddressesPage 
                v-if="openAddressPage"
                :addressesPageContent="addressesPageContent"
                @changeOpenAddressPageState="updateOpenAddressPageState($event)"
            />
        </div>
        
        <div id="wrapper" class="wrapper" v-else>
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
                                @click="showAddressesContent(address.id)"
                            />
                            <div class="marking-title">
                                <div
                                    class="favorite-marker"
                                    @mouseover="showHoverLabel"
                                >
                                    <i
                                        :id="address.id"
                                        class="large material-icons favorite"
                                        @mouseenter="markFavoriteAddress"
                                        >favorite_border</i
                                    >
                                </div>
                                <span 
                                    class="name"
                                    @click="showAddressesContent(address.id)"
                                >{{ address.name }}</span>
                                <span class="hover-label"
                                    >Click add or remove this item for your
                                    favorites</span
                                >
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
                                @click="showAddressesContent(address.id)"
                            />
                            <div class="marking-title">
                                <div
                                    class="favorite-marker"
                                    @mouseover="showHoverLabel"
                                >
                                    <i
                                        :id="address.id"
                                        class="large material-icons favorite"
                                        @mouseenter="markFavoriteAddress"
                                        >favorite_border</i
                                    >
                                </div>
                                <span 
                                    class="name" 
                                    @click="showAddressesContent(address.id)"
                                >{{ address.name }}</span>
                                <span class="hover-label"
                                    >Click add or remove this item for your
                                    favorites</span
                                >
                            </div>
                            <span class="label">
                                {{ address.label }}
                            </span>
                        </div>
                    </div>
                    <span id="show-more">Show more</span>
                </div>
            </div>
            <footer>
                <router-link class="footer-menu" to="/">Lorem Airlines</router-link>
                <router-link class="footer-menu" to="/travel-guide">Travel Guide</router-link>
            </footer>
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
import AddressesPage from "../../components/travel_guide/city_components/AddressesPage.vue";
export default {
    name: "Paris",
    props: ["app"],
    components: {
        Navbar,
        Header,
        VideoPlayer,
        VideoBox,
        DescriptionOfCity,
        InfoCard,
        PublicInformations,
        AddressesPage
    },

    data() {
        return {
            isPlay: false,
            infoItem: "",
            isClickShadow: false,

            city: {
                header_video: "/video/Paris.mp4",
                header_video_poster: "/../images/Paris_.jpg",
                video: "/video/Paris2.mp4",
                poster: "/../images/Paris-Tour-Eiffel.jpg",
                country: "France",
                name: "Paris",
                currency: "Euro",
                language: "French",
                travelling_time: "1h33",
                city_code: "PAR",
                adjective: "City of the Love",
                quotes:
                    "“If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life, it stays with you, for Paris is a moveable feast.”",
                author:
                    "―Ernest Hemingway",
                article:
                    "Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents as of 1 January 2019 in an area of more than 105 square kilometres. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts. The City of Paris is the centre and seat of government of the region and province of Île-de-France, or Paris Region, which has an estimated estimated population of or about 18 percent of the population of France as of 2017.",
                article_continue:
                    "The Musée d'Orsay, Musée Marmottan Monet and Musée de l'Orangerie are noted for their collections of French Impressionist art. The Pompidou Centre Musée National d'Art Moderne has the largest collection of modern and contemporary art in Europe. The Musée Rodin and Musée Picasso exhibit the works of two noted Parisians. The historical district along the Seine in the city centre has been classified as a UNESCO World Heritage Site since 1991; popular landmarks there include the Cathedral of Notre Dame de Paris on the Île de la Cité, now closed for renovation after the 15 April 2019 fire. Other popular tourist sites include the Gothic royal chapel of Sainte-Chapelle, also on the Île de la Cité; the Eiffel Tower, constructed for the Paris Universal Exposition of 1889; the Grand Palais and Petit Palais, built for the Paris Universal Exposition of 1900; the Arc de Triomphe on the Champs-Élysées, and the hill of Montmartre with its artistic history and its Basilica of Sacré-Coeur.",
                map:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167998.12179446057!2d2.206952164367434!3d48.85877000312214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUMOhcml6cywgRnJhbmNpYW9yc3rDoWc!5e0!3m2!1shu!2shu!4v1644683373115!5m2!1shu!2shu"
            },
            cityName: "Paris",
            addresses_all: [],
            addresses_less: [],
            collection_of_favorites: [],
            addressesPageContent: {},
            show_more: true,
            area: "Europe",
            location: "Paris",
            openAddressPage: false
        };
    },
    
    watch: {
        openAddressPage: function(newValue, oldValue) {
            if (newValue) return;
            if (oldValue) location.reload();
        }
    },

    mounted() {
        this.scrollPage(0, 0);
        this.openInfoCard();
        this.changeShadowClickState();
        this.fetchData("see all");
        this.showAddresses();
        this.showMoreOrLess();
    },

    methods: {
        updateOpenAddressPageState(updateOpenAddressPageState) {
            this.openAddressPage = updateOpenAddressPageState;
        },

        showAddressesContent(id) {
            this.openAddressPage = true;

            if (this.show_more) {
                this.addresses_less.forEach(address => {
                    if (address.id === id) {
                        this.addressesPageContent = address;
                    }
                });
            } else {
                this.addresses_all.forEach(address => {
                    if (address.id === id) {
                        this.addressesPageContent = address;
                    }
                });
            }
        },

        showHoverLabel() {
            const favorite_markers = document.querySelectorAll(
                ".favorite-marker"
            );
            const hover_label = document.getElementsByClassName("hover-label");

            favorite_markers.forEach((marker, index) => {
                marker.addEventListener("mouseover", () => {
                    hover_label[index].style.display = "flex";
                });

                marker.addEventListener("mouseleave", () => {
                    hover_label[index].style.display = "none";
                });
            });
        },

        markFavoriteAddress() {
            const favorites = document.querySelectorAll(".favorite");
            const names = document.querySelectorAll(".name");

            favorites.forEach((favorite, index) => {
                favorite.addEventListener("click", () => {
                    if (favorite.textContent !== "favorite") {
                        favorite.textContent = "favorite";
                        this.collection_of_favorites.push(this.cityName + '_' + names[index].textContent);
                        this.collection_of_favorites = [...new Set(this.collection_of_favorites)]; //makes array with unique content
                    }
                    else {
                        favorite.textContent = "favorite_border";
                        const removeIndex = this.collection_of_favorites.indexOf(this.cityName + '_' + names[index].textContent);
                        this.collection_of_favorites.splice(removeIndex, 1);
                    }
                });
            });
        },

        showMoreOrLess() {
            const showMore = document.getElementById("show-more");

            showMore.addEventListener("click", () => {
                if (!this.show_more) {
                    this.show_more = true;
                    showMore.textContent = "Show more";
                } else {
                    this.show_more = false;
                    showMore.textContent = "Show less";
                }
            });
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
                    }
                });
            }
        },

        fetchData(addressesItem) {
            setTimeout(() => {
                if (addressesItem === "see all") {
                    fetch(
                        `/api/${this.cityName.toLowerCase()}?service=all&cityName=${
                            this.cityName
                        }`
                    )
                        .then(response => response.json())
                        .then(data => {
                            try {
                                this.addresses_all = [];
                                this.addresses_less = [];
                                this.array_length =
                                    data.attractions.length +
                                    data.hotels.length +
                                    data.restaurants.length;

                                this.array_length <= 9
                                    ? (document.getElementById(
                                          "show-more"
                                      ).style.visibility = "hidden")
                                    : (document.getElementById(
                                          "show-more"
                                      ).style.visibility = "visible");

                                for (
                                    let i = 0;
                                    i < data.attractions.length;
                                    i++
                                ) {
                                    this.addresses_all.push(
                                        data.attractions[i]
                                    );
                                }

                                for (let l = 0; l < 3; l++) {
                                    this.addresses_less.push(
                                        data.attractions[l]
                                    );
                                }

                                for (let i = 0; i < data.hotels.length; i++) {
                                    this.addresses_all.push(data.hotels[i]);
                                }

                                for (let l = 0; l < 3; l++) {
                                    this.addresses_less.push(data.hotels[l]);
                                }

                                for (
                                    let i = 0;
                                    i < data.restaurants.length;
                                    i++
                                ) {
                                    this.addresses_all.push(
                                        data.restaurants[i]
                                    );
                                }

                                for (let l = 0; l < 3; l++) {
                                    this.addresses_less.push(
                                        data.restaurants[l]
                                    );
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        });
                } else {
                    fetch(
                        `/api/${this.cityName.toLowerCase()}?service=${addressesItem}&cityName=${
                            this.cityName
                        }`
                    )
                        .then(response => response.json())
                        .then(data => {
                            try {
                                this.addresses_all = data;
                                this.array_length = data.length;
                                this.addresses_less = [];

                                data.length <= 9
                                    ? (document.getElementById(
                                          "show-more"
                                      ).style.visibility = "hidden")
                                    : (document.getElementById(
                                          "show-more"
                                      ).style.visibility = "visible");

                                for (let l = 0; l < data.length && l < 9; l++) {
                                    this.addresses_less.push(data[l]);
                                }
                            } catch (error) {
                                console.log(error);
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

.hover-label {
    padding: 20px;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    color: rgb(5, 55, 115);
    display: none;
    position: absolute;
    margin: 5px 0 0 45px;
    width: 290px;
    height: 50px;
    background: whitesmoke;
    z-index: 1;
    align-items: center;
    text-align: center;
    justify-content: center;
    box-shadow: 1px 1px 2px #c4c4c4;
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

.favorite-marker {
    padding: 5px;
    margin: 0 5px;
    border: 1px solid rgb(5, 55, 115);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.favorite {
    color: red;
    font-size: 25px;
    font-weight: 100;
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

footer {
    width: 100%;
    height: 60px;
    background: rgb(5, 55, 115);
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-menu {
    color: whitesmoke;
    padding: 0 10px;
}

.footer-menu:hover {
    text-decoration: underline;
}

.footer-menu:first-child {
    border-right: 1px solid whitesmoke;
}

.footer-menu:focus {
    border: none !important;
    box-shadow: none !important;
}

</style>
