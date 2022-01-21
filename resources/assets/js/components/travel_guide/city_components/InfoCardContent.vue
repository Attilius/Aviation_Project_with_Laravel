<template>
    <div class="card-content">
        <div
            class="info-box-content"
            v-if="infoItem == `Getting around in ${city.name}`"
        >
            <iframe
                :src="city.map"
                width="700"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoCardContent",
    props: ["infoItem", "city"],
}
</script>

<style scoped>
.card-content{
    margin:auto 0;
}

.info-box-content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>