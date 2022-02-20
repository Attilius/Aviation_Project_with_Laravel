<template>
    <div>
        <spinner :app="app" v-if="loading"></spinner>
        <div v-else-if="initiated">
            <router-view
                :app="app"
                @onClickLogin="updateLoginPath($event)"
                @onChangePageContent="updatePageContent($event)"
                @onChangeAreaAndLocation="udateAreaAndLocation($event)"
            />
        </div>
    </div>
</template>

<script>
import M from "materialize-css";
export default {
    name: "app",

    data() {
        return {
            app: this,
            user: null,
            loading: false,
            initiated: false,
            req: axios.create({
                baseUrl: BASE_URL
            }),
            loginPath: "/",
            current_time: "",
            current_year: "",
            area: "Europe",
            location: "Budapest",

            cards: [
                {
                    id: "athens",
                    country: "greece",
                    city: "athens",
                    price: "150 €*",
                    area: "Europe",
                    location: "Athens"
                },
                {
                    id: "barcelona",
                    country: "spain",
                    city: "barcelona",
                    price: "160 €*",
                    area: "Europe",
                    location: "Madrid"
                },
                {
                    id: "cairo",
                    country: "egypt",
                    city: "cairo",
                    price: "935 €*",
                    area: "Africa",
                    location: "Cairo"
                },
                {
                    id: "istanbul",
                    country: "turkey",
                    city: "istanbul",
                    price: "180 €*",
                    area: "Europe",
                    location: "Istanbul"
                },
                {
                    id: "lisbon",
                    country: "portugal",
                    city: "lisbon",
                    price: "160 €*",
                    area: "Europe",
                    location: "Lisbon"
                },
                {
                    id: "london",
                    country: "united kingdom",
                    city: "london",
                    price: "159 €*",
                    area: "Europe",
                    location: "London"
                },
                {
                    id: "montreal",
                    country: "canada",
                    city: "montreal",
                    price: "535 €*",
                    area: "America",
                    location: "Toronto"
                },
                {
                    id: "munich",
                    country: "germany",
                    city: "munich",
                    price: "170 €*",
                    area: "Europe",
                    location: "Berlin"
                },
                {
                    id: "new-york",
                    country: "united states of america",
                    city: "new york",
                    price: "497 €*",
                    area: "America",
                    location: "New_York"
                },
                {
                    id: "paris",
                    country: "france",
                    city: "paris",
                    price: "100 €*",
                    area: "Europe",
                    location: "Paris"
                },
                {
                    id: "rome",
                    country: "italy",
                    city: "rome",
                    price: "160 €*",
                    area: "Europe",
                    location: "Rome"
                },
                {
                    id: "zurich",
                    country: "switzerland",
                    city: "zurich",
                    price: "165 €*",
                    area: "Europe",
                    location: "Zurich"
                }
            ]
        };
    },

    mounted() {
        M.AutoInit();
        this.init();
        this.setCurrent_year();

        if (location.reload) {
            this.cards.forEach(card => {
                if (location.hash.split("/")[2] === card.id) {
                    try {
                       this.setCurrent_time(card.area, card.location); 
                    } catch (error) {
                        console.log(error)
                    }
                }
            });
        }
    },

    methods: {
        init() {
            this.loading = true;

            this.req.get("auth/init").then(response => {
                this.user = response.data.user;
                this.loading = false;
                this.initiated = true;
            });
        },

        updateLoginPath(updateLoginPath) {
            this.loginPath = updateLoginPath;
        },

        udateAreaAndLocation(udateAreaAndLocation) {
            this.area = udateAreaAndLocation[0];
            this.location = udateAreaAndLocation[1];
            this.setCurrent_time(this.area, this.location);
        },

        updatePageContent(updatePageContent) {
            setTimeout(() => {
                location.hash = `#/travel-guide/${updatePageContent}`;
            }, 600);
        },

        setCurrent_time(area, location) {
            try {
                fetch(`/api/?area=${area}&location=${location}`)
                        .then(response => response.json())
                        .then(data => {
                            try {
                                this.current_time = data.data;
                            } catch (error) {
                                console.log(error);
                            }
                        });
            } catch (error) {
                console.log(error);
            }
        },

        setCurrent_year() {
            const today = new Date();
            this.current_year = today.getFullYear();
        }
    }
};
</script>

<style scoped></style>
