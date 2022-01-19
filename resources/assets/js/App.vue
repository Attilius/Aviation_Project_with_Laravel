<template>
    <div>
        <spinner :app="app" v-if="loading"></spinner>
        <div v-else-if="initiated">
            <router-view :app="app" @onClickLogin="updateLoginPath($event)" />
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name: "app",

    data() {
        return {
            app: this,
            user: null,
            loading: false,
            initiated: false,
            req: axios.create({
                baseUrl: BASE_URL
            }),
            loginPath: "/"
        };
    },

    mounted() {
        M.AutoInit()
        this.init();
    },

    methods: {
        init() {
            this.loading = true;

            this.req.get("auth/init").then(response => {
                this.user = response.data.user;
                this.loading = false;
                this.initiated = true;
            });
        },

        updateLoginPath(updateLoginPath) {
            this.loginPath = updateLoginPath;
        }
    }
};
</script>

<style scoped>
 
</style>
