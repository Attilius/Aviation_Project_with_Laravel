<template>
    <div class="box">
        <div class="datas">
            <div class="info" v-for="data in datas" :key="data.icon">
                <i
                    id="rotate-90deg"
                    class="material-icons"
                    v-if="data.icon === 'flight'"
                >
                    {{ data.icon }}
                </i>
                <i class="material-icons" v-else>{{ data.icon }} </i>
                <p>{{ data.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderInformationDatas",
    props: [ "app", "city"],

    data() {
        return {
            datas: [
                {
                    icon: "attach_money",
                    text: `${this.city.currency}`
                },
                {
                    icon: "access_time",
                    text: `${this.app.current_time}`
                },
                {
                    icon: "language",
                    text: `${this.city.language}`
                },
                {
                    icon: "flight",
                    text: `${this.city.travelling_time}`
                }
            ]
        };
    }
};
</script>

<style scoped>
.box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.datas {
    width: 25%;
    height: 50px;
    margin-top: 40px;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.info i {
    color: whitesmoke;
}

#rotate-90deg {
    transform: rotate(90deg);
}
</style>
