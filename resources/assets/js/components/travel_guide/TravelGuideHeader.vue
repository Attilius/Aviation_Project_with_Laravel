<template>
    <div>
        <b-navbar id="navbar" class="navbar" toggleable="lg">
            <div class="left_">
                   <font-awesome-icon id="icon-menu" class="icon" :icon="['fas', 'bars']" @click="openMenu" />
                   <div id="menu" class="sideMenu">
                       <div class="menu-header">
                           <div class="logo-and-title">
                               <b-img
                                class="logo"
                                :src="'../images/logo.png'"
                                alt="logo"
                            ></b-img>
                            <p>Travel Guide</p>
                           </div>
                           
                            <p id="close" class="icon" @click="closeMenu">×</p>
                       </div>
                       <div class="menu-body">
                           <div id="tgr" class="travel-guide-routes">
                               <router-link class="router" to="/travel-guide" v-currentpage>Travel Guide</router-link>
                               <router-link class="router" to="/travel-guide" v-currentpage>Where to go?</router-link>
                               <router-link class="router" to="/travel-guide" v-currentpage>Search a destination</router-link>
                               <router-link class="router" to="/travel-guide" v-currentpage>Map of destination</router-link>
                           </div>
                           <div class="lorem-arlines-routes">
                               <router-link class="router" to="/" v-currentpage>Lorem Airlines website</router-link>
                               <router-link class="router" to="/" v-currentpage>My account</router-link>
                               <router-link class="router" to="/" v-currentpage>My bookings</router-link>
                               <router-link class="router" to="/contact" v-currentpage>Contact us</router-link>
                           </div>
                       </div>
                   </div>
            </div>
            <div class="center_">
                <b-img
                    class="logo"
                    :src="'../images/logo.png'"
                    alt="logo"
                ></b-img>
                <p>Travel Guide</p>
            </div>
            <div class="right_">
                <font-awesome-icon id="icon-search" class="icon" :icon="['fas', 'search']" />
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: ["app"],

    data() {
        return {};
    },

    mounted() {
        this.watchScroll();
        this.renderPage();

    },

    methods: {
        watchScroll() {
            const navbar = document.getElementById("navbar");
            const icons = document.querySelectorAll("#icon");
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    navbar.style.border = "none";
                    navbar.style.background = "rgb(9,55,115)";
                    navbar.style.color = "whitesmoke";
                    this.setColorAndHover(icons, "whitesmoke", "lightskyblue");
                } else {
                    navbar.style.borderBottom = "1px solid whitesmoke";
                    navbar.style.background = "transparent";
                    navbar.style.color = "whitesmoke";
                    this.setColorAndHover(icons, "whitesmoke", "lightskyblue");
                }
                
            });
        },

        setColorAndHover(icons, color1, color2) {
            icons.forEach(icon => {
                icon.style.color = color1;
                icon.addEventListener("mouseover", () => {
                    icon.style.color = color2;
                });
                icon.addEventListener("mouseleave", () => {
                    icon.style.color = color1;
                });
            });
        },

        openMenu() {
            document.getElementById("menu").style.left = "0px";
        },

        closeMenu() {
            document.getElementById("menu").style.left = "-300px";
        },

        renderPage() {
            const menuItems = document.getElementById("tgr");
            
            menuItems.childNodes.forEach(child => {
                child.addEventListener("click", () => {
                   if (child.hash.split("/")[1] === this.createUri(child.text)) {
                    location.reload();
                } 
                });
            });
        },

        createUri(parameter) {
            let text = parameter;
            text = text.toLowerCase();
            const textArr = text.split(" ");
            let uri = textArr.join("-");
            return uri;
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

.navbar {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    padding: 0 60px;
    height: 8vh;
    z-index: 1;
    transition: all .6s;
}

.logo {
    height: 50px;
    width: 61px;
}

.left_ {
    width: 33%;
    display: flex;
    justify-content: flex-start;
    display: flex;
    align-items: center;
}

.logo-and-title {
    display: flex;
    position: relative;
    top: 0;
    left: 0;
}

.logo-and-title p {
    color: rgb(9,55,115);
}

.sideMenu {
    width: 300px;
    height: 100vh;
    background: whitesmoke;
    position: fixed;
    top: 0;
    left: -300px;
    display: flex;
    flex-direction: column;
    z-index: 11;
    overflow-x: hidden;
    transition: all .5s;
}

#close {
    position: absolute;
    top: 15px;
    right: 25px;
    width: 2rem;
    height: 2rem;
    color: rgb(9,55,115);
    font-size: 2rem;
    padding-top: 1px;
    cursor: pointer;
    transition: all .7s ease 0s;
}

#close:hover {
    background: rgb(9,55,115);
    border-radius: 50px;
    color: whitesmoke;
    transition: all .8s ease 0s;
}

.menu-header {
    height: 8vh;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(9,55,115);
}

.center_ {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right_ {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.icon {
    color: whitesmoke;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    cursor: pointer;
}

.icon:hover {
    color: lightskyblue;
}

.menu-body {
    height: 100%;
    width: 100%;
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.travel-guide-routes, .lorem-arlines-routes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.travel-guide-routes .router, .lorem-arlines-routes .router {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    color: rgb(9,55,115);
    font-weight: 300;
    font-size: 18px;
    padding-left: 25px
}

.travel-guide-routes {
    margin: 10px 0 100px 0;
}

.travel-guide-routes .router:hover, 
.lorem-arlines-routes .router:hover {
    background: rebeccapurple;
    color: whitesmoke;
}

</style>
