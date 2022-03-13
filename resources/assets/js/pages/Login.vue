<template>
    <div class="login-container">
        <nav>
            <router-link class="back-link" to="/">
                <i class="material-icons">chevron_left</i> Back to home page
            </router-link>
        </nav>
        <div class="skin">
            <h4>Login</h4>
            <div class="login-form">
                <b-img
                    class="logo"
                    :src="'../images/logo.png'"
                    alt="logo"
                ></b-img>
                <b-form id="form" @submit.prevent="onSubmit">
                    <div class="input-field">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            class="validate"
                            v-model="email"
                        />
                        <label for="email">Email</label>
                        <span
                            v-if="!email && errors.length"
                            class="helper-text"
                            >Email is requred!</span
                        >
                    </div>
                    <div class="input-field">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            class="validate"
                            v-model="password"
                        />
                        <label for="password">Password</label>
                        <span
                            v-if="!password && errors.length"
                            class="helper-text"
                            >Password is requred!</span
                        >
                    </div>
                    <input id="submit" type="submit" value="Login" />
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    props: ["app"],

    data() {
        return {
            email: "",
            password: "",
            errors: []
        };
    },

    methods: {
        onSubmit() {
            this.errors = [];
            let loginPath = this.app.loginPath;

            if (!this.email) {
                this.errors.push("Email is requred!");
            }
            if (!this.password) {
                this.errors.push("Password is requred!");
            }

            if (!this.errors.length) {
                const data = {
                    email: this.email,
                    password: this.password
                };

                this.app.req
                    .post("auth/login", data)
                    .then(response => {
                        this.app.user = response.data;
                        this.$router.push(loginPath);
                    })
                    .catch(error => {
                        this.errors.push(error.response.data.error);
                    });
            }
        }
    }
};
</script>

<style scoped>
.login-container {
    background-image: url("../../img/login-register_bg.jpg");
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100%;
}

.skin {
    height: 100vh;
    width: 100%;
    background: rgba(1, 1, 1, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.skin h4 {
    color: whitesmoke;
}

nav {
    width: 100%;
    height: 40px;
    background-color: rgba(5, 55, 115);
    position: absolute;
    top: 0;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav i {
    color: whitesmoke;
}

.back-link {
    height: 40px;
    width: 13%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-link:hover {
    color: whitesmoke;
    justify-content: space-between;
}

.back-link:focus {
    border: none !important;
    box-shadow: none !important;
}

.login-form {
    height: 60%;
    width: 30%;
    border: 1px solid whitesmoke;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(5, 55, 115, 0.7);
}

.logo {
    height: 150px;
    width: 150px;
}

#form {
    width: 80%;
}

#form .input-field {
    width: 100%;
    color: whitesmoke;
}

#form .input-field input {
    color: whitesmoke;
}

.helper-text {
    color: red;
}

#submit {
    height: 3em;
    width: 8em;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    margin: auto;
    background: rebeccapurple;
    color: whitesmoke;
    box-shadow: none;
    border: none;
}

</style>
