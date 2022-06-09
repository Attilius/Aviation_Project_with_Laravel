<template>
    <div>
        <div class="wrapper">
            <Header id="header" class="header" />
            <div id="content" class="content_">
                <div class="skin">
                    <div class="head-content">
                        <h2 class="title">Explore the world with us</h2>
                        <div class="bottom-line">
                            <router-link
                                to="/travel-guide/new-york"
                                class="link"
                                ><strong>New York</strong>, city of the empire
                                state</router-link
                            >
                            <div class="pointer" @click="goDown">
                                <i class="material-icons">change_history</i>
                            </div>
                            <div class="share">
                                <div id="share" class="social">
                                    <h6 id="share_">Share</h6>
                                    <font-awesome-icon
                                        id="facebook"
                                        class="social-icon"
                                        :icon="['fab', 'facebook-f']"
                                    />
                                    <font-awesome-icon
                                        id="twitter"
                                        class="social-icon"
                                        :icon="['fab', 'twitter']"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Discover all over the world with us</h3>
            <div class="main">
                <div
                    v-for="card in app.cards"
                    :key="card.id"
                    :id="card.id"
                    class="card"
                    @click="
                        onChangePageContent(card.id),
                            onChangeAreaAndLocation([card.area, card.location])
                    "
                >
                    <div class="skin-cover">
                        <h6>{{ card.country }}</h6>
                        <h5>{{ card.city }}</h5>
                    </div>
                </div>
            </div>
            <footer>
                <router-link class="footer-menu" to="/"
                    >Lorem Airlines</router-link
                >
            </footer>
        </div>
    </div>
</template>

<script>
import Header from "../components/travel_guide/TravelGuideHeader.vue";
export default {
    name: "TravelGuide",
    props: ["app"],
    components: {
        Header
    },

    data() {
        return {
            popupWindow: {
                url: "",
                name: "",
                positionAndSize: ""
            }
        };
    },

    mounted() {
        this.scrollPage(0, 0);
        this.randomBackground();

        const socialIcons = document.querySelectorAll('.social-icon');

        socialIcons.forEach(item => {
            item.addEventListener("click", () => {
                if(item.id === 'facebook') {
                    this.setPopup("https://facebook.com/","Facebook");
                    this.openPopup();
                }
                if(item.id === 'twitter') {
                    this.setPopup("https://twitter.com/","Twitter");
                    this.openPopup();
                }
            });
        });
    },

    methods: {
        randomBackground() {
            const cities = [
                "athens.jpg",
                "barcelona.jpg",
                "cairo.png",
                "istanbul.jpg",
                "lisbon.png",
                "london.jpeg",
                "montreal.jpg",
                "munich.jpg",
                "new-york.jpg",
                "paris.jpg",
                "rome.jpg",
                "zurich.jpg"
            ];
            const index = Math.floor(Math.random() * cities.length);

            //document.getElementById('content').style.backgroundImage = `url('../../img/${cities[index]}')`;
        },

        onChangeAreaAndLocation([cardArea, cardLocation]) {
            this.$emit("onChangeAreaAndLocation", [cardArea, cardLocation]);
        },

        onChangePageContent(cardId) {
            this.$emit("onChangePageContent", cardId);
        },

        setPopup(url, name, settings = "left=500,top=300,width=500,height=320") {
            this.popupWindow.url = url;
            this.popupWindow.name = name;
            this.popupWindow.positionAndSize = settings;
        },

        openPopup() {
            window.open(
                this.popupWindow.url,
                this.popupWindow.name,
                this.popupWindow.positionAndSize
            );
        },

        openPopup2() {
            this.setPopup(
                "https://twitter.com/",
                "Twitter",
                "left=500,top=300,width=500,height=320"
            );
            window.open(
                this.popupWindow.url,
                this.popupWindow.name
            );
        },

        goDown() {
            let speed = 2;
            let interval = speed * 2;
            let id = setInterval(function() {
                window.scrollBy(0, 1);
                if (window.scrollY == 700) {
                    clearInterval(id);
                }
            }, interval);
        },

        scrollPage(positionY, positionX) {
            window.scroll({
                top: positionY,
                left: positionX
            });
        }
    }
};
</script>

<style scoped>
.header {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 11;
}

.wrapper {
    height: 200vh;
    width: 81%;
    margin: 0 auto;
}

.content_ {
    width: 100%;
    height: 100vh;
    background: url("../../img/new-york.jpg");
    background-size: cover;
    background-position: top;
    margin: 0 auto;
    transform: translateY(-8vh);
}

.skin {
    width: 100%;
    height: 100vh;
    background: rgba(5, 16, 57, 0.6);
}

.head-content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: whitesmoke;
    text-shadow: 0 2px black;
}

.title {
    padding-top: 300px;
}

.bottom-line {
    width: 100%;
    padding: 0 60px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.link {
    color: whitesmoke;
    width: 45%;
}

.link:hover {
    width: 21.5%;
    margin-right: 23.5%;
    border-bottom: 1px solid whitesmoke;
}

.share {
    width: 45%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.social {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.social-icon {
    font-size: 1.5rem;
    cursor: pointer;
}

.social-icon:hover {
    color: rgb(43, 123, 223);
}

.social-icon:active {
    font-size: 1.4rem;
}

.material-icons {
    font-size: 4rem;
    transform: rotateX(180deg);
}

.pointer {
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    cursor: pointer;
}

@keyframes move {
    from {
        transform: translateY(1rem);
    }
    to {
        transform: translateY(0rem);
    }
}

.pointer i {
    color: whitesmoke;
}

.main {
    height: 100vh;
    width: 100%;
    background: whitesmoke;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    grid-gap: 20px;
    padding: 50px auto;
}

h3 {
    color: rgb(5, 55, 115);
    text-shadow: 2px 2px 5px silver;
    text-align: center;
}

footer {
    width: 100%;
    height: 60px;
    background: rgb(5, 55, 115);
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: -320px;
}

.footer-menu {
    color: whitesmoke;
    padding: 0 10px;
}

.footer-menu:hover {
    text-decoration: underline;
}

.footer-menu:focus {
    border: none !important;
    box-shadow: none !important;
}
</style>
