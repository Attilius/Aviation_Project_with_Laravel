<template>
    <div>
        <Header
            class="header"
            :app="app"
            @onClickLogin="updateLoginPath($event)"
        />
        <div class="content">
            <div class="shadow">
                <h1>Sorry! This page is not found...</h1>
                <router-link class="btn" to="/">Back to Homepage</router-link>
            </div>
        </div>
        <Footer :app="app" />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "PageNotFound",
    props: ["app"],

    components: {
        Header,
        Footer
    },

    mounted() {
        window.scroll({
            top: 0,
            left: 0
        });
    }
};
</script>

<style scoped>
.header {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 11;
}

.content {
    height: 100vh;
    width: 100%;
    background-image: url("/images/page-not-found_bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.shadow {
    height: 100vh;
    width: 100%;
    background: rgba(1, 1, 1, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.shadow h1 {
    color: whitesmoke;
}

.shadow .btn {
    background: rebeccapurple;
    transition: all 0.5s ease 0s;
}

.shadow .btn:hover {
    background: whitesmoke;
    color: rebeccapurple;
    transition: all 0.5s ease 0s;
}

@media(max-width: 992px) {
    .shadow h1 {
        font-size: 3rem;
    }
}
</style>
