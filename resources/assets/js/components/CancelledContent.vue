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
    background: transparent;
    width: 80%;
    height: 53vh;
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

.logged-out-message {
    padding: 15px 30px;
    color: #ced4da;
}

.logged-in-without-booking-message {
    display: none;
}

@media(max-width: 768px) {
    .text-content {
        height: 100%;
        top: 0;
        width: 100%;
    }

    article {
        width: 85%;
        margin: 0 30px;
    }
}

</style>