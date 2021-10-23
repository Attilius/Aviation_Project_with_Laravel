<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader :titles="titles" :images="images" />
                <ServicesMainContent :titles="titles" :text="text" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "./Header.vue";
import AnimatedHeader from "./AnimatedHeader.vue";
import ServicesMainContent from "./ServicesMainContent.vue";
import Footer from "./Footer.vue";
export default {
    name: "Premium_comfort",
    components: {
        Header,
        AnimatedHeader,
        ServicesMainContent,
        Footer
    },

    data() {
        return {
            titles: {
                first: "Group discount",
                second: "Share with friends"
            },
            images: {
                first: {
                    backgroundImage: `url(${require("../../img/group-1.jpg")})`
                },
                second: {
                    backgroundImage: `url(${require("../../img/group-2.jpg")})`
                },
                third: {
                    backgroundImage: `url(${require("../../img/group-3.jpg")})`
                },
                fourth: {
                    backgroundImage: `url(${require("../../img/group-4.jpg")})`
                },
            },
            text: "Share the experience with your friends. We offer a special discount for groups. Whether it's a team building training or a holiday with a group of friends."
        };
    }
};
</script>

<style scoped>
.header {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        z-index: 1;
    }

.wrapper {
    background: url("../../img/airport-bg.jpg");
    background-size: cover;
    height: 100vh;
    width: 100%;
}

.skin {
    height: 100vh;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>