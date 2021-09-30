<template>
    <footer>
        <div class="content">
            <span>Site design</span>
            <font-awesome-icon class="icon" :icon="['far', 'copyright']" />
            <span>2021 Attilus</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style scoped>
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

footer {
    width: 100%;
    height: 5vh;
    background: rgb(9, 55, 115);
    display: flex;
    align-items: center;
    text-align: center;
}

.content {
    display: flex;
    height: auto;
    background: transparent;
    justify-content: center;
    align-items: center;
}

span,
.icon {
    background: rgb(9, 55, 115);
    color: whitesmoke;
    border: none;
    margin: 0 5px;
    height: 90%;
}
</style>
