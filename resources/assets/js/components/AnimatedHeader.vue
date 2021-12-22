<template>
    <div>
        <div class="slider-1">
            <div class="slider-1-img" :style="images.first">
                <div class="slider-text">
                    <h3>{{ titles.first }}</h3>
                </div>
            </div>
        </div>

        <div class="slider-2">
            <div class="slider-2-img" :style="images.second">
                <div class="slider-text">
                    <h3>{{ titles.second }}</h3>
                </div>
            </div>
        </div>

        <div class="slider-3">
            <div class="slider-3-img" :style="images.third">
                <div class="slider-text">
                    <h3>{{ titles.first }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AnimatedHeader",
    props: ["titles", "images"],

    data() {
        return {
            sliders: [
                {
                    mainClass: "slider-1",
                    subClass: "slider-1-img",
                    style: this.images.first,
                    title: this.titles.first
                },
                {
                    mainClass: "slider-2",
                    subClass: "slider-2-img",
                    style: this.images.second,
                    title: this.titles.second
                },
                {
                    mainClass: "slider-3",
                    subClass: "slider-3-img",
                    style: this.images.third,
                    title: this.titles.first
                },
                {
                    mainClass: "slider-4",
                    subClass: "slider-4-img",
                    style: this.images.fourth,
                    title: this.titles.second
                }
            ]
        }
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

.slider-1,
.slider-2,
.slider-3,
.slider-4 {
    height: 60vh;
    width: 76%;
    position: absolute;
    top: 80px;
    left: 12%;
    overflow: hidden;
}

.slider-1 {
    animation: slider-1 12s linear infinite;
}

.slider-2 {
    animation: slider-2 12s linear infinite;
}

.slider-3 {
    animation: slider-3 12s linear infinite;
}

.slider-4 {
    animation: slider-4 12s linear infinite;
}

.slider-1-img,
.slider-3-img {
    height: 100%;
    width: 100%;
    animation: zoom-out 3s linear infinite;
}

.slider-2-img,
.slider-4-img {
    height: 100%;
    width: 100%;
    animation: zoom-in 3s linear infinite;
}

.slider-1-img,
.slider-2-img,
.slider-3-img,
.slider-4-img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.slider-text h3 {
    position: absolute;
    top: 100px;
    left: 5%;
    color: rgb(9, 55, 115);
    font-size: 3rem;
    margin-top: 200px;
    width: 28%;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
}

@keyframes zoom-in {
    100% {
        width: 110%;
    }
}

@keyframes zoom-out {
    0% {
        width: 110%;
    }
}

@keyframes slider-1 {
    0% {
        visibility: visible;
    }
    25% {
        visibility: hidden;
    }
    50% {
        visibility: hidden;
    }
    75% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
}

@keyframes slider-2 {
    0% {
        visibility: hidden;
    }
    25% {
        visibility: hidden;
    }
    50% {
        visibility: visible;
    }
    75% {
        visibility: hidden;
    }
    100% {
        visibility: hidden;
    }
}

@keyframes slider-3 {
    0% {
        visibility: hidden;
    }
    25% {
        visibility: hidden;
    }
    50% {
        visibility: hidden;
    }
    75% {
        visibility: visible;
    }
    100% {
        visibility: hidden;
    }
}

@keyframes slider-4 {
    0% {
        visibility: hidden;
    }
    25% {
        visibility: hidden;
    }
    50% {
        visibility: hidden;
    }
    75% {
        visibility: hidden;
    }
    100% {
        visibility: visible;
    }
}
</style>
