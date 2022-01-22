<template>
    <div>
        <div id="video-player" v-if="isPlay">
            <video id="video_" 
                   :src="city.video" 
                   autoplay 
                   playsinline>
            </video>
            <i id="close_btn" 
               class="material-icons" 
               @click="closePlayer"
            >
            clear
            </i>
        </div>
        <div id="video-player" v-else></div>
    </div>
</template>

<script>
export default {
    name: "VideoPlayer",
    props: ["isPlay","city"],

    methods: {
        closePlayer() {
            const videoPlayer = document.getElementById("video-player");
            videoPlayer.style.display = "none";
            this.onChangeIsPlayStatus();
        },

        onChangeIsPlayStatus() {
            this.$emit("onChangeIsPlayStatus", false);
        },
    }
}
</script>

<style scoped>
#video-player {
    width: 100%;
    height: 100vh;
    background: whitesmoke;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 11;
}

#video_ {
    height: 70%;
    width: 60%;
}

#close_btn {
    color: rgb(9, 55, 115);
    font-size: 3rem;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    top: 100px;
    right: 100px;
    transition: all 0.7s ease 0s;
}

#close_btn:hover {
    background: rgb(9, 55, 115);
    border-radius: 50px;
    color: whitesmoke;
    transition: all 0.8s ease 0s;
}
</style>
