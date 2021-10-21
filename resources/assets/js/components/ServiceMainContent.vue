<template>
    <div class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }} <strong>{{ important_text }}</strong></article>
       <!-- <b-table class="table-desktop" striped hover responsive :items="items" :fields="fields"></b-table>
        <b-table class="table-mobile" striped hover stacked :items="items" :fields="fields"></b-table> -->
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
    height: 650px;
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
    left: 25px;
    margin-bottom: 20px;
}

h2 {
    padding: 15px 20px 25px 25px;
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

.table-desktop {
    width: 95%;
    margin: 10px auto;
}

.table-mobile {
    display: none !important;
}

#submit-btn {
    background: RebeccaPurple;
    width: 230px;
    height: 40px;
    box-shadow: 2px 2px 5px silver;
    border: 1px solid #ced4da;
    margin-left: 3px;
    color: whitesmoke;
    margin: 25px;
}

#submit-btn:active {
    box-shadow: none;
    background-color: whitesmoke;
    color: RebeccaPurple;
}

@media (max-width: 675px) {
    .table-desktop {
        display: none !important;
    }

    .table-mobile {
        display: block !important;
    }
}

</style>
