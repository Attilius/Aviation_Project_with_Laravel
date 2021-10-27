<template>
    <div>
        <b-navbar class="navbar" toggleable="lg">
            <b-img class="logo" :src="'../images/logo.png'" alt="logo"></b-img>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <ul class="menu">
                        <li><a v-currentpage href="/">Home</a></li>
                        <li><a v-currentpage href="/about">About</a></li>
                        <li><a v-currentpage href="/services">Services</a></li>
                        <li><a v-currentpage href="/contact">Contact</a></li>
                        <li>
                            <select class="select-lang" name="lang">
                                <option value="EN">EN</option>
                                <option value="HU">HU</option>
                                <option value="FR">FR</option>
                                <option value="DE">DE</option>
                            </select>
                        </li>
                        <li>
                            <b-link class="login" href="/">Login</b-link>
                        </li>
                    </ul>

                    <!-- <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">HU</b-dropdown-item>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">FR</b-dropdown-item>
                        <b-dropdown-item href="#">DE</b-dropdown-item>
                    </b-nav-item-dropdown> -->

                    <!-- <b-nav-item-dropdown text="Login" right>
                        // Using 'button-content' slot 
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar"
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
    margin: 0;
}

.menu {
    display: flex;
    height: 60.55px;
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

li:hover .select-lang:focus{
    background-color: rebeccapurple;
}

li:hover .select-lang {
    background-color: rebeccapurple;
    transition: 0.1s all ease-out 0s;
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

li:hover .select-lang:focus{
    background-color: transparent;
}

}
</style>
