<template>
    <div>
        <Header class="header" />
        <div class="wrapper">
            <div class="skin">
                <AnimatedHeader class="animated-header" :titles="titles" :images="images" />
                <ServicesMainContent
                    :titles="titles"
                    :text="text"
                    :radio_datas="radio_datas"
                    :label="label"
                    :message="message"
                />
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
    name: "Group_discount",
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
                }
            },
            text:
                "Share the experience with your friends. We offer a special discount for groups. Whether it's a team building training or a holiday with a group of friends.",

            radio_datas: [
                {
                    text: "Family (5-9 person) - 5%",
                    value: 5
                },
                {
                    text: "Small group (10-14 person) - 10%",
                    value: 10
                },
                {
                    text: "Medium group (15-20 person) - 15%",
                    value: 15
                },
                {
                    text: "Large group (21-25 person) - 20%",
                    value: 20
                },
                {
                    text: "X-Large group (more than 25 person) - 25%",
                    value: 25
                }
            ],

            label: "discount",

            message: ["You get", "% discount from the full price of ticket."]
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
    height: 150vh;
    width: 100%;
}

.skin {
    height: 150vh;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

@media(max-width: 768px) {
    .animated-header {
        display: none;
    }
}
</style>
