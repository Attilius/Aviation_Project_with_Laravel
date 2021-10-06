<template>
    <div>
        <b-navbar class="navbar" toggleable="lg">
            <b-img class="logo" :src="'images/logo.png'" alt="logo"></b-img>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <ul class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
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
    margin-top: 8px;
}

li {
    list-style: none;
    margin: 0 10px;
}

.select-lang {
    background: rgb(9, 55, 115);
    color: whitesmoke;
    border: none;
    padding-bottom: 3px;
    box-shadow: none;
    margin: 0 10px 0 10px;
}

.select-lang:focus {
    border: none !important;
    box-shadow: none !important;
}

a,
.login {
    text-decoration: none;
    padding: 8px;
    color: whitesmoke;
    border-radius: 3px;
}

a:hover,
.select-lang:hover {
    color: whitesmoke;
    box-shadow: 2px 2px 5px silver;
    border: 1px solid #ced4da;
}

@media (max-width: 974px) {
    .menu {
        flex-direction: column;
    }

    li {
        margin: 10px;
        text-align: center;
    }

}
</style>
