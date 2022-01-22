<template>
    <div class="box">
        <p id="discover">Discover</p>
        <div class="pointer" @click="goDown">
            <i id="pointer" class="material-icons">change_history</i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pointer",

    methods: {
        goDown() {
            window.scroll({
                top: 700,
                left: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>

<style scoped>
#discover {
    margin-top: 80px;
}

#pointer {
    font-size: 4rem;
    transform: rotateX(180deg);
}

.pointer {
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    cursor: pointer;
}

@keyframes move {
    from {
        transform: translateY(1rem);
    }
    to {
        transform: translateY(0rem);
    }
}
</style>