<template>
    <div class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }}</article>
        <RadioForm class="radio-form" />
    </div>
</template>

<script>
import RadioForm from "./Radio-form.vue";
export default {
    name: "ServiceMainContent",
    props: ['titles', 'text'],
    components: {
        RadioForm
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
    height: 500px;
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
    width: 95%;
    margin: 0px auto;
    padding: 25px 0;
    border-bottom: 2px solid #ced4da;
}

#submit-btn {
    background: RebeccaPurple;
    width: 230px;
    height: 40px;
    box-shadow: 2px 2px 5px silver;
    border: 1px solid #ced4da;
    margin-left: 3px;
    color: whitesmoke;
    margin: 30px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

#submit-btn:active {
    box-shadow: none !important;
    background-color: rebeccapurple !important;
    color: whitesmoke !important;
}

#submit-btn:hover {
    color: rebeccapurple;
    background: transparent;
    border: 1px solid rebeccapurple;
    transition: 0.4s ease-in-out 0s;
}

.radio-form {
    padding: 30px;
}

</style>
