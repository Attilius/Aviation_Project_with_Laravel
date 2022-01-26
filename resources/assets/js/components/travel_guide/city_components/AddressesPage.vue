<template>
    <div>
        <div id="addresses-page">
            <!-- Content will be here -->
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
                <h3>Title</h3>
                <h6>label</h6>
            </div>

            
        </div>
    </div>
</template>

<script>
export default {
    name: "AddressesPage",
    props: [""],

    methods: {
        closePage() {
            document.getElementById("addresses-page").style.display = "none";
            this.changeOpenAddressPageState();
        },

        changeOpenAddressPageState() {
            this.$emit("changeOpenAddressPageState", false);
        }
    }
};
</script>

<style scoped>
body {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: hidden;
}

body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

#addresses-page {
    width: 100%;
    height: 100vh;
    background: royalblue;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 11;
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
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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

h3, h6 {
    margin: 0;
}

</style>
