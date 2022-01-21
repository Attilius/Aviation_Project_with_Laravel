<template>
    <div>
        <div class="info-box-top">
            <h5>{{ infoItem }}</h5>
            <p 
            id="close" 
            class="icon" 
            @click="closeInfoCard"
            >
                ×
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoCardHeader",
    props:["isClickShadow","infoItem"],
    watch: { 
        isClickShadow: function(newValue) { 
        if (newValue) this.closeInfoCard();
        }
    },

    methods: {
        closeInfoCard() {
            document.getElementById("info-card").style.display = "none";
            document.getElementById("shadow").style.display = "none";
            this.onChangeIsClickShadowStatus();
        },

        onChangeIsClickShadowStatus() {
            this.$emit("onChangeIsClickShadowStatus", false);
        }
    }
}
</script>

<style scoped>
#close {
    position: absolute;
    top: 15px;
    right: 25px;
    width: 2rem;
    height: 2rem;
    color: rgb(9, 55, 115);
    font-size: 2rem;
    padding-top: 1px;
    cursor: pointer;
    border: none;
    background: whitesmoke;
    transition: all 0.7s ease 0s;
}

#close:hover {
    background: rgb(9, 55, 115);
    border-radius: 50px;
    color: whitesmoke;
    transition: all 0.8s ease 0s;
}

.info-box-top {
    border-bottom: 1px solid rgb(9, 55, 115);
    padding-bottom: 5px;
}

.info-box-top h5 {
    padding: 0;
    font-weight: 400;
    text-align: center;
    color: rgb(9, 55, 115);
}
</style>