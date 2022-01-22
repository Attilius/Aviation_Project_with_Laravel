<template>
    <div>
        <video
            id="video"
            :src="city.header_video"
            :poster="city.header_video_poster"
            autoplay
            loop
            playsinline
            muted
        ></video>
    </div>
</template>

<script>
export default {
    name: "VideoBackground",
    props: ["city"],
}
</script>

<style scoped>
#video {
    object-fit: cover;
    width: 100%;
    height: 92vh;
    top: 0;
    left: 0;
}
</style>