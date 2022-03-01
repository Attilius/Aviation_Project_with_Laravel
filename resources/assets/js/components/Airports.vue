<template>
    <div>
        <ul class="airports">
            <li v-for="airport in airports" :key="airport.id">
                <div class="airport">
                    <i id="rotate-90deg" class="material-icons">flight</i>
                    <div class="data_">
                        <span id="city_"
                            >{{ airport.city + ", " + airport.airport }}
                        </span>
                        <span id="country_"
                            >{{ airport.IATA_code + "-" + airport.country }}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import AirportsDatas from "../../json/airports.json";
export default {
    name: "Airports",

    data() {
        return {
            airports: AirportsDatas.airports
        }
    }
}
</script>

<style scoped>
.airports {
    width: 100%;
    height: 200px;
    background: whitesmoke;
    border: 1px solid grey;
    overflow-y: scroll;
    display: none;
    z-index: 11 !important;
    position: absolute;
    left: 0;
}

.airports li {
    background: whitesmoke;
    height: 50px;
    width: 100%;
    border-top: 1px solid #ced4da;
    cursor: pointer;
}

.airports li:hover {
    background: #ced4da;
}

.airport {
    height: 50px;
    width: 100%;
    display: flex;
}

.airport i {
    width: 50px;
    height: 50px;
    padding: 5px;
}

#rotate-90deg {
    transform: rotate(90deg);
    color: rgb(5, 55, 115);
    display: flex;
    align-items: center;
    justify-content: center;
}

.data_ {
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
}

#city_,
#country_ {
    margin-bottom: 0 !important;
}

#country_ {
    color: rgb(5, 55, 115);
}

</style>
