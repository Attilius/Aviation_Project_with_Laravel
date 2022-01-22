<template>
    <div>
        <h5 class="information-title">Public interest information about {{ city.name }}</h5>
         <div class="information-container">
            <div class="info_" 
                v-for="info in informations" 
                :key="info.icon">
                <span class="material-icons">{{ info.icon }}</span>
                <span class="text">{{ info.title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PublicInformations",
    props: ["city"],

    data() {
        return {
            informations: [
                {
                    icon: "local_pharmacy",
                    title: "Medical information"
                },
                {
                    icon: "emoji_objects",
                    title: "Useful knowledge"
                },
                {
                    icon: "event",
                    title: "Holidays and festivals in " + `${this.city.name}`
                },
                {
                    icon: "wb_sunny",
                    title: "Climate and weather in " + `${this.city.name}`
                },
                {
                    icon: "currency_exchange",
                    title: "Currency and exchange rates"
                },
                {
                    icon: "account_balance",
                    title: "Consulate office"
                },
                {
                    icon: "info",
                    title: "Visitor information"
                },
                {
                    icon: "connecting_airports",
                    title: `${this.city.name}` + " International Airports"
                },
                {
                    icon: "transfer_within_a_station",
                    title: "Getting around in " + `${this.city.name}`
                }
            ]
        }
    }
}
</script>

<style scoped>
.information-title {
    text-align: center;
    text-transform: uppercase;
    color: rgb(5, 55, 115);
    text-shadow: 2px 2px 5px silver;
    padding: 25px 0 15px 0;
    font-weight: 600;
}

.information-container {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
}

.information-container .material-icons {
    color: #0984e3;
}

.info_ {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 0;
}

.info_ .text {
    font-weight: 500;
    margin-left: 10px;
    cursor: pointer;
}

.text:hover {
    color: #0984e3;
}

</style>