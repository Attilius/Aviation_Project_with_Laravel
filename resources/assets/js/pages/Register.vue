<template>
    <div class="register-container">
        <div class="skin">
            <div class="alert alert-danger" v-if="errors.length">
                <ul>
                    <li v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>
            <h4>CREATE AN ACCOUNT</h4>
            <b-form @submit.prevent="onSubmit">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="name" />
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" />
                <label for="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                />
                <input type="submit" value="Sign Up" />
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    props: ["app"],

    data() {
        return {
            name: "",
            email: "",
            password: "",
            errors: []
        };
    },

    methods: {
        onSubmit() {
            this.errors = [];

            if (!this.name) {
                this.errors.push("Name is requred!");
            }
            if (!this.email) {
                this.errors.push("Email is requred!");
            }
            if (!this.password) {
                this.errors.push("Password is requred!");
            }

            if (!this.errors.length) {
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                };

                this.app.req
                    .post("auth/register", data)
                    .then(response => {
                        this.app.user = response.data;
                        this.$router.push("/");
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
.register-container {
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
</style>
