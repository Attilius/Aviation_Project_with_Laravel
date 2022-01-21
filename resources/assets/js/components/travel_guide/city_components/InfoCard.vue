<template>
    <div>
        <div id="info-card" class="info-card">
            <InfoCardHeader
                :isClickShadow="isClickShadow"
                :infoItem="infoItem"
                @onChangeIsClickShadowStatus="updateIsClickShadowStatus($event)"
            />
            <InfoCardContent 
                :infoItem="infoItem" 
                :city="city" 
            />
        </div>
    </div>
</template>

<script>
import InfoCardHeader from "../../../components/travel_guide/city_components/InfoCardHeader.vue";
import InfoCardContent from "../../../components/travel_guide/city_components/InfoCardContent.vue";
export default {
    name: "InfoCard",
    props: ["isClickShadow", "infoItem", "city"],

    components: {
        InfoCardHeader,
        InfoCardContent
    },

    mounted() {
        this.updateIsClickShadowStatus();
    },

    methods: {
        updateIsClickShadowStatus(updateIsClickShadowStatus) {
            this.$emit("onChangeIsClickShadowStatus", updateIsClickShadowStatus)
        }
    }
}
</script>

<style scoped>
.info-card {
    height: 600px;
    width: 800px;
    background: whitesmoke;
    position: fixed;
    top: 15%;
    left: 25%;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    z-index: 11;
}
</style>
