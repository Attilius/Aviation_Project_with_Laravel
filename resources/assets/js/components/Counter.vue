<template>
    <div class="counter-box">
        <font-awesome-icon class="icon" :icon="counter_data.icon" />
        <div class="counter">{{ counter_function }}+</div>
        <h3>{{ counter_data.title }}</h3>
    </div>
</template>

<script>
export default {
    name: "Counter",
    props: ["counter_data", "counter_function"]
}
</script>

<style scoped>
.counter-box {
    width: 250px;
}
.counter {
    margin: 10px 20px;
    background: transparent !important;
}

.icon {
    font-size: 2.5rem;
    background-color: transparent;
    border: none;
    margin: 0 auto;
}

.counter {
    font-size: 2rem;
}

.counters .container h3 {
    color: whitesmoke;
    font-size: 1.2rem;
}

@media(max-width:1111px) {
    .test {
        width: 200px;
    }
}

@media(max-width:570px) {
    .test {
        margin: 0 auto;
    }
}
</style>