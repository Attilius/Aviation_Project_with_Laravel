<template>
    <div>
        <div class="top">
            <VideoBackground :city="city" />
            <HeaderFront :city="city" :app="app" />
        </div>
    </div>
</template>

<script>
import VideoBackground from "../../../components/travel_guide/city_components/VideoBackground.vue"
import HeaderFront from "../../../components/travel_guide/city_components/HeaderFront.vue"
export default {
    name: "Header",
    props: ["city", "app"],

    components: {
        VideoBackground,
        HeaderFront,
    }
}
</script>

<style scoped>
.top {
    color: whitesmoke;
    width: 100%;
    height: 100vh;
    position: relative;
    top: 4rem;
}
</style>