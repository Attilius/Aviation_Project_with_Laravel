<template>
    <div>
        <div class="wrapper">
            <Header id="header" class="header" />
            <div class="content_">
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
                                        @click="openPopup1"
                                    />
                                    <font-awesome-icon
                                        id="twitter"
                                        class="social-icon"
                                        :icon="['fab', 'twitter']"
                                        @click="openPopup2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <h3>Discover all over the world with us</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/travel_guide/TravelGuideHeader.vue";
export default {
    name: "TravelGuide",
    components: {
        Header,
    },

    data() {
        return {
            popupWindow: {
                url: "",
                name: "",
                positionAndSize: ""
            },
        };
    },

    methods: {
        setPopup(url, name, settings) {
            this.popupWindow.url = url;
            this.popupWindow.name = name;
            this.popupWindow.positionAndSize = settings;
        },

        openPopup1() {
            this.setPopup(
                "https://facebook.com/",
                "Facebook",
                "left=500,top=300,width=500,height=320"
            );
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
                this.popupWindow.name,
                this.popupWindow.positionAndSize
            );
        },

        goDown() {
            window.scroll({
                top: 1000,
                left: 0,
                behavior: "smooth"
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
    text-decoration: underline;
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

.main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main h3 {
    color: rgb(5, 55, 115);
    text-shadow: 2px 2px 5px silver;
}
</style>
