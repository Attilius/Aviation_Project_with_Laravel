<template>
    <div>
        <b-navbar class="navbar" toggleable="lg">
            <b-img class="logo" :src="'../images/logo.png'" alt="logo"></b-img>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <ul class="menu">
                        <li
                            class="menu-item"
                            v-for="item in menuItems"
                            :key="item.name"
                        >
                            <router-link :to="item.path" v-currentpage>{{
                                item.name
                            }}</router-link>
                        </li>
                        <li class="menu-item" v-if="!app.user">
                            <router-link to="/login" @click="onLogin">Login</router-link>
                        </li>
                        <li class="menu-item" v-if="!app.user">
                            <router-link to="/register">Register</router-link>
                        </li>
                        <li
                            v-else
                            id="dropdown"
                            class="nav-item dropdown menu-item"
                        >
                            <a
                                class="nav-link dropdown-toggle d-flex align-items-center"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {{ app.user.name }}
                                <img
                                    :src="'images/attilius.jpg'"
                                    class="rounded-circle"
                                    height="30"
                                    alt="Portrait of user"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                id="dropdown-menu"
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <router-link :app="app" class="dropdown-item" to="/profile">My profile</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/bookings">Bookings</router-link>
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="javascript:;"
                                        @click="logout"
                                        >Logout</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["app"],

    data() {
        return {
            menuItems: [
                {
                    name: "Home",
                    path: "/"
                },
                {
                    name: "About",
                    path: "/about"
                },
                {
                    name: "Services",
                    path: "/services"
                },
                {
                    name: "Contact",
                    path: "/contact"
                }
            ]
        };
    },

    mounted() {
        const dropdownMenu = document.getElementById("dropdown-menu");
        const dropdown = document.getElementById("dropdown");

        if ((dropdownMenu, dropdown)) {
            dropdownMenu.addEventListener("mouseleave", () => {
                dropdownMenu.classList.remove("show");
            });

            dropdown.addEventListener("mouseover", () => {
                dropdownMenu.classList.add("show");
            });

            dropdown.addEventListener("mouseleave", () => {
                dropdownMenu.classList.remove("show");
            });
        }
    },

    methods: {
        logout() {
            const path = location.hash.split("#")[1];
            this.app.req.post("auth/logout").then(() => {
                this.app.user = null;
            });
            this.onClickLogin(path);
        },

        onLogin() {
            const path = location.hash.split("#")[1];
            this.onClickLogin(path);
        },

        onClickLogin(path) {
            this.$emit("onClickLogin", path);
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

.nav-link:focus,
.dropdown-toggle:focus {
    border: none !important;
    box-shadow: none !important;
}

.navbar {
    background: rgb(9, 55, 115) !important;
    height: 8vh;
    z-index: 1;
    box-shadow: none;
}

#nav-collapse {
    background: rgb(9, 55, 115);
}

.logo {
    height: 50px;
    width: 61px;
    margin: 0 0 0 50px;
}

.menu {
    display: flex;
    height: 60.55px;
    margin-right: 70px;
}

a:hover {
    background: none;
}

.menu-item {
    list-style: none;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.2s all ease-in 0s;
    position: relative;
    z-index: 1;
}

.menu-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    background-color: rebeccapurple;
    transition: 0.2s all ease-in-out 0s;
}

.menu-item:hover::before {
    top: 0;
    bottom: unset;
    height: 100%;
    border-top: 2px solid whitesmoke;
    height: 58.55px;
}

.menu-item:hover {
    background-color: rebeccapurple;
}

.active {
    color: lightskyblue;
}

a,
.login {
    text-decoration: none;
    color: whitesmoke;
    height: 100%;
}

a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

a:hover {
    color: whitesmoke;
}

a:focus {
    border: none !important;
    box-shadow: none !important;
}

.dropdown-item {
    width: 100%;
    height: 100%;
    color: black;
    padding-left: 15px;
}

.dropdown-item:hover {
    background: #ced4da;
    color: rgb(5, 55, 115);
}

.icon {
    background: transparent;
    color: whitesmoke;
    border: 2px solid whitesmoke;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    padding: 5px;
    position: absolute;
    top: 15px;
    right: 35px;
}

.menu-item {
    display: inline;
}

.dropdown-menu {
    border: 1px solid #9e9e9e;
}

.dropdown-menu li {
    background: whitesmoke;
    height: 40px;
    width: 100%;
}

.dropdown-menu li .dropdown-item {
    height: 40px;
}

#navbarDropdownMenuLink {
    color: whitesmoke;
}

#navbarDropdownMenuLink img {
    margin: 0 5px;
}

@media (max-width: 974px) {
    a {
        justify-content: center;
    }

    .menu {
        flex-direction: column;
        height: 50vh;
        width: 100%;
    }

    li {
        margin: 10px;
        text-align: center;
    }

    li:hover::before {
        top: 0;
        bottom: unset;
        height: 0;
        border-top: none;
        height: 0;
    }

    li:hover {
        background: transparent;
    }

    .navbar-light .navbar-toggler {
        color: white !important;
    }
}
</style>
