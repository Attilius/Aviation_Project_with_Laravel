<template>
    <div class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }}</article>
        <h6 class="logged-out-message">Currently don't logged in or you not have booking*</h6>
        <h6 class="logged-in-without-booking-message">You not have booking*</h6>
    </div>
</template>

<script>
export default {
    name: "CancelledContent",
    props: ['titles', 'text'],
}
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
    height: 300px;
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
    padding: 25px 0;
    margin: 5px auto;
    border-bottom: 1px solid #292b2c;
}

.logged-out-message {
    padding: 15px 30px;
}

.logged-in-without-booking-message {
    display: none;
}

@media(max-width: 768px) {
    .text-content {
        height: 400px;
        position: relative;
        top: -200px;
    }
}

</style>