<template>
    <div>
        <b-navbar class="navbar" toggleable="lg">
            <b-img class="logo" :src="'../images/logo.png'" alt="logo"></b-img>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <ul class="menu">
                        <li v-for="item in menuItems" :key="item.name">
                            <router-link :to="item.path" v-currentpage>{{
                                item.name
                            }}</router-link>
                        </li>
                        <li>
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {{ app.user ? app.user.name : "Login" }}
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <div v-if="!app.user">
                                    <router-link
                                        to="/login"
                                        class="dropdown-item"
                                        >Login</router-link
                                    >
                                    <router-link
                                        to="/register"
                                        class="dropdown-item"
                                        >Register</router-link
                                    >
                                </div>
                                <a
                                    v-else
                                    @click="logout"
                                    href="javascript:;"
                                    class="dropdown-item"
                                    >Logout</a
                                >
                            </div>
                        </li>
                        <!-- <b-nav-item-dropdown>
                            <template #button-content>
                                <a class="menu-item">
                                    {{ app.user ? app.user.name : "Login" }}
                                </a>
                            </template>
                            <div class="dropdown_menu">
                                <div v-if="!app.user">
                                    <router-link
                                        to="/login"
                                        class="dropdown-item"
                                        >Login</router-link
                                    >
                                    <router-link
                                        to="/register"
                                        class="dropdown-item"
                                        >Register</router-link
                                    >
                                </div>
                                <a
                                    v-else
                                    @click="logout"
                                    href="javascript:;"
                                    class="dropdown-item"
                                    >Logout</a
                                >
                            </div>
                        </b-nav-item-dropdown> -->
                    </ul>
                    <!-- <font-awesome-icon class="icon" :icon="['far', 'user']" /> -->
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

    methods: {
        logout() {
            this.app.req.post("auth/logout").then(() => {
                this.app.user = null;
                this.$router.push("/login");
            });
            this.onClickLogin();
        },

        onClickLogin() {
            this.$emit("onClickLogin", "/");
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

li {
    list-style: none;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.15s all ease-in 0s;
    position: relative;
    z-index: 1;
}

li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    background-color: rebeccapurple;
    transition: 0.15s all ease-in 0s;
}

li:hover::before {
    top: 0;
    bottom: unset;
    height: 100%;
    border-top: 2px solid whitesmoke;
    height: 58.55px;
}

li:hover {
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
    justify-content: center;
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
    background: transparent;
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

.dropdown_menu {
    background-color: rgb(9, 55, 115);
}

#navbarDropdownMenuLink {
    color: whitesmoke;
}

.dropdown-item {
    background: rgb(9, 55, 115);
}

.dropdown-item:hover {
    background: rgb(9, 55, 115);
}

@media (max-width: 974px) {
    .menu {
        flex-direction: column;
        height: 50vh;
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
