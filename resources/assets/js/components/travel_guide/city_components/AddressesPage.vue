<template>
    <div>
        <div id="addresses-page">
            <nav>
                <b-img
                    class="logo"
                    :src="'../images/logo.png'"
                    alt="logo"
                ></b-img>
                <p>Travel Guide</p>

                <i id="close_btn" class="material-icons" @click="closePage">
                    clear
                </i>
            </nav>
            <div class="title">
                <h3>{{ addressesPageContent.name }}</h3>
                <h6>{{ addressesPageContent.label }}</h6>
            </div>
            <div class="content-container">
                <!--  <b-img class="img" :src="addressesPageContent.image" fluid alt="Responsive image"></b-img>-->
                <div
                    id="img"
                    class="img"
                    :style="{
                        backgroundImage: `url(${addressesPageContent.image})`
                    }"
                ></div>
                <div id="text-content">
                    <h5>Subtitle for this addresses</h5>
                    <article>
                        {{ addressesPageContent.description }}
                    </article>
                    <div class="contanct-datas">
                        <h6 v-if="addressesPageContent.address">
                            <b>Address: </b>{{ addressesPageContent.address }}
                        </h6>
                        <h6 v-if="addressesPageContent.tel">
                            <b>Phone: </b>{{ addressesPageContent.tel }}
                        </h6>
                        <h6 v-if="addressesPageContent.web">
                            <b>Website: </b
                            ><a :href="url">{{ addressesPageContent.web }}</a>
                        </h6>
                        <h6 v-if="addressesPageContent.email">
                            <b>E-mail: </b>{{ addressesPageContent.email }}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddressesPage",
    props: ["addressesPageContent"],

    data() {
        return {
            url: ""
        };
    },

    mounted() {
        this.setRenderPosition();
        this.setUrl();
        this.setContentWidth();
    },

    methods: {
        setContentWidth() {
            const imgWidth = this.addressesPageContent.image.split('&')[4].split("=")[1];
            const imageBox = document.getElementById("img");
            const textBox = document.getElementById("text-content");

            textBox.style.width = imgWidth + "px";
            imageBox.style.width = imgWidth + "px";
        },
        setUrl() {
            this.url = location.hash;
        },

        closePage() {
            this.changeOpenAddressPageState();
        },

        changeOpenAddressPageState() {
            this.$emit("changeOpenAddressPageState", false);
        },

        setRenderPosition() {
            window.scroll({
                top: 0,
                left: 0
            });
        }
    }
};
</script>

<style scoped>
#addresses-page {
    width: 100%;
    height: 100%;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
}

#close_btn {
    color: rgb(9, 55, 115);
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.7s ease 0s;
    position: absolute;
    right: 20px;
}

#close_btn:hover {
    background: rgb(9, 55, 115);
    border-radius: 50px;
    color: whitesmoke;
    transition: all 0.8s ease 0s;
}

.material-icons {
    height: 28px !important;
    width: 28px !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav {
    width: 100%;
    height: 60px;
    background: whitesmoke;
    color: rgb(9, 55, 115);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

nav p {
    padding-top: 15px;
}

.logo {
    height: 50px;
    width: 61px;
}

.title {
    width: 100%;
    height: 100px;
    background: whitesmoke;
    color: rgb(9, 55, 115);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 60px;
    left: 0;
}

h3,
h6 {
    margin: 0;
}

.title h6 {
    text-transform: uppercase;
    margin-top: 15px;
}

.content-container {
    width: 85%;
    height: 120vh;
}

.img {
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
}

#text-content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

article {
    text-align: justify;
}

.contanct-datas {
    margin-top: 50px;
}

.contanct-datas h6 {
    margin: 15px 0;
}

h5 {
    color: rgb(9, 55, 115);
    padding: 5px 0;
}

a:focus {
    border: none !important;
    box-shadow: none !important;
}

</style>
