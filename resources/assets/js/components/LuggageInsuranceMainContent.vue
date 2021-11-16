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
    background: transparent;
    width: 80%;
    margin: 0 auto 150px;
    position: relative;
}

h2::after {
    content: "";
    position: absolute;
    background-color: lightskyblue;
    width: 20%;
    height: 7px;
    bottom: -10px;
    left: 30px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 5px black;
}

h2 {
    padding: 15px 20px 25px 30px;
    position: relative;
    margin-top: 50px;
    color: whitesmoke;
    text-transform: capitalize;
    text-shadow: 2px 2px 5px black;
    width: 30%;
}

article {
    width: 95%;
    margin: 0px auto;
    padding: 25px 0;
    color: #ced4da;
    border-bottom: 2px solid lightskyblue;
}

@media (max-width: 768px){
    .text-content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 5%;
    }

    article {
        width: 85%;
        margin: 0 30px;
    }
}

</style>
