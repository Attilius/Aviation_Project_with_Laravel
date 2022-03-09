<template>
    <div class="login-container">
        <div class="skin">
            <div class="alert alert-danger" v-if="errors.length">
                <ul>
                    <li v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>
            <div class="login-form">
                <b-img
                    class="logo"
                    :src="'../images/logo.png'"
                    alt="logo"
                ></b-img>
                <b-form id="form" @submit.prevent="onSubmit">
                    <div class="input-field">
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email*</label>
                        <span
                            class="helper-text"
                            data-error="wrong"
                            ></span
                        >
                    </div>
                    <div class="input-field">
                        <input id="password" type="password" class="validate" />
                        <label for="password">Password*</label>
                        <span
                            class="helper-text"
                            data-error="wrong"
                            ></span
                        >
                    </div>
                    <input type="submit" value="Login" />
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

#form .input-field {
    width: 100%;
}
</style>
