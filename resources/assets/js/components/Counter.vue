<template>
    <div>
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


</style>