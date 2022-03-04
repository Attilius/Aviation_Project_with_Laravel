<template>
    <div class="box">
        <button class="btn">
            <i id="rotate-90deg" class="material-icons">flight</i>
            {{ city.name }} ({{ city.city_code }})
            <i id="rotate-90deg" class="material-icons">expand_less</i>
        </button>
    </div>
</template>

<script>
export default {
    name: "BookingButton",
    props: ["city"]
}
</script>

<style scoped>
.box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    background: rebeccapurple;
    height: 50px;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    border-radius: 0.25rem;
}

.btn:hover {
    color: whitesmoke;
}

.btn i {
    color: whitesmoke;
}

#rotate-90deg {
    transform: rotate(90deg);
}
</style>