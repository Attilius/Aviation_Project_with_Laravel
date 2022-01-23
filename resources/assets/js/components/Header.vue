<template>
    <div>
        <b-navbar class="navbar" toggleable="lg">
            <b-img class="logo" :src="'../images/logo.png'" alt="logo"></b-img>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <ul class="menu">
                        <li>
                            <router-link to="/" v-currentpage>Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about" v-currentpage>About</router-link>
                        </li>
                        <li>
                            <router-link to="/services" v-currentpage>Services</router-link>
                        </li>
                        <li>
                            <router-link to="/contact" v-currentpage>Contact</router-link>
                        </li>
                        <b-nav-item-dropdown>
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
                        </b-nav-item-dropdown>
                    </ul>
                    <font-awesome-icon class="icon" :icon="['far', 'user']" />
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
        return {};
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

.navbar {
    background: rgb(9, 55, 115) !important;
    height: 8vh;
    z-index: 1;
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

li:hover,
.dropdown-item:hover {
    background-color: rebeccapurple;
}

.active {
    color: lightskyblue;
}

.select-lang {
    background: rgb(9, 55, 115);
    color: whitesmoke;
    border: none;
    padding-bottom: 3px;
    box-shadow: none;
}

.select-lang:focus {
    border: none !important;
    box-shadow: none !important;
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

a:hover,
.select-lang:hover {
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

@media (max-width: 974px) {
    .menu {
        flex-direction: column;
        height: 300px;
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

    li:hover .select-lang:focus {
        background: rgb(9, 55, 115);
    }

    li:hover .select-lang {
        background-color: transparent;
    }

    .navbar-light .navbar-toggler {
        color: white !important;
    }
}
</style>
