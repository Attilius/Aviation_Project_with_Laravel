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
            let speed = 2;
            let interval = speed * 2;
            let id = setInterval(function() {
                window.scrollBy(0, 1);
                if (window.scrollY == 700) {
                    clearInterval(id);
                }
            }, interval);
        }
    }
};
</script>

<style scoped>
#discover {
    margin-top: 80px;
}

#pointer {
    font-size: 4rem;
    transform: rotateX(180deg);
    color: whitesmoke;
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
