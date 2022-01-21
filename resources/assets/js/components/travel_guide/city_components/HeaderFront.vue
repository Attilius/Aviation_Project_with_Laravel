<template>
    <div>
        <div class="head-box">
            <div class="skin">
                <h5>{{ city.country }}</h5>
                <h3>{{ city.name }}</h3>
                <HeaderInformationDatas :city="city" :app="app" />
                <BookingButton :city="city" />
                <Pointer />
            </div>
        </div>
    </div>
</template>

<script>
import HeaderInformationDatas from "../../../components/travel_guide/city_components/HeaderInformationDatas.vue"
import BookingButton from "../../../components/travel_guide/city_components/BookingButton.vue"
import Pointer from "../../../components/travel_guide/city_components/Pointer.vue"
export default {
    name: "HeaderFront",
    props: ["city", "app"],

    components: {
        HeaderInformationDatas,
        BookingButton,
        Pointer,
    }
}
</script>

<style scoped>
.head-box .skin {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: -8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.skin {
    background: rgba(5, 16, 57, 0.5);
}

.head-box h3 {
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 5px;
}
</style>