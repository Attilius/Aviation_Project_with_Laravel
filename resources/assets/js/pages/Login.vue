<template>
    <div class="container">
        <div class="alert alert-danger" v-if="errors.length">
            <ul>
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
            </ul>
        </div>
        <b-form @submit.prevent="onSubmit">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="password">
            <input type="submit" value="Login">
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['app'],

    data() {
        return {
            email: "",
            password: "",
            errors: []
        }
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
                }

                this.app.req.post('auth/login', data).then(response => {
                    this.app.user = response.data;
                    this.$router.push(loginPath);
                }).catch(error => {
                    this.errors.push(error.response.data.error);
                });
            }
        }
    } 
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
</style>