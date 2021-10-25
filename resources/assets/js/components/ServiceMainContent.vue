<template>
    <div class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }} <strong>{{ important_text }}</strong></article>
        <Table :items="items" :fields="fields" />
    </div>
</template>

<script>
import Table from "./Table.vue";
export default {
    name: "ServiceMainContent",
    props: ['titles', 'text', 'important_text', 'items', 'fields'],
    components: {
        Table
    }
};
</script>

<style scoped>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.text-content {
    background: whitesmoke;
    width: 80%;
    height: 1030px;
    margin: 0 auto;
    position: relative;
    top: 90px;
}

h2::after {
    content: "";
    position: absolute;
    background-color: rebeccapurple;
    width: 20%;
    height: 7px;
    bottom: -10px;
    left: 30px;
    margin-bottom: 20px;
}

h2 {
    padding: 15px 20px 25px 30px;
    position: relative;
    margin-top: 20px;
    color: rgb(9, 55, 115);
    text-transform: capitalize;
    text-shadow: 2px 2px 5px silver;
    width: 30%;
}

article {
    padding: 25px;
    margin: 5px;
}

@media (max-width: 750px){
    .text-content {
        height: 440vh;
        top: -100px
    }
}

</style>
