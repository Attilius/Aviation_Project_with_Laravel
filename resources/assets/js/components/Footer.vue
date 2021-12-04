<template>
    <footer>
        <div class="box">
            <div class="logo">
                <b-img
                    class="logo"
                    :src="'../images/logo.png'"
                    alt="logo"
                ></b-img>
            </div>
            <h4 class="footer-title">Notifications</h4>
            <p class="footer-text">Sign up for our newsletter</p>
            <b-form class="newsletter">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                />
                <button class="news-btn">
                    <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'external-link-alt']"
                    />
                </button>
            </b-form>
            <div class="social">
                <font-awesome-icon
                        class="social-icon"
                        :icon="['fab', 'linkedin-in']"
                    />
                <font-awesome-icon
                        class="social-icon"
                        :icon="['fab', 'facebook-f']"
                    />
                <font-awesome-icon
                        class="social-icon"
                        :icon="['fab', 'instagram']"
                    />
                <font-awesome-icon
                        class="social-icon"
                        :icon="['fab', 'twitter']"
                    />
            </div>
        </div>
        <div class="box">
            <h4 class="footer-title">Locations</h4>
            <div class="bottom-menu">
                <div class="bottom1">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="bottom2">
                    <ul>
                        <li>
                            <a href="/services/travel-insurance">Travel insurance</a>
                        </li>
                        <li>
                            <a href="/services/luggage-insurance">Luggage insurance</a>
                        </li>
                        <li>
                            <a href="/services/premium-comfort">Premium comfort</a>
                        </li>
                        <li>
                            <a href="/services/private-jet-rent">Private jet rent</a>
                        </li>
                        <li>
                            <a href="/services/group-discount">Group discount</a>
                        </li>
                        <li>
                            <a href="/services/booking-cancellation">Booking cancellation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="box">
            <h4 class="footer-title">Our partners</h4>
            <ul>
                <li class="partners" v-for="partner in partners" :key="partner">{{ partner }}</li>
            </ul>
        </div>
        <div class="box">
            <h4 class="footer-title">Would you like to booking?</h4>
            <p class="footer-text">
                You can book your flight with us in just a few clicks, and we
                also offer a range of services.
            </p>

            <a id="booking-btn" class="booking-btn" href="/"
                ><font-awesome-icon id="icon_" :icon="['far', 'edit']" />
                Booking now</a>

            <b-img
                class="pay"
                :src="'../images/pay.png'"
                alt="pay"
            ></b-img>

            <div class="copy">
                <span>Site design</span>
                <font-awesome-icon class="icon" :icon="['far', 'copyright']" />
                <span>2021 Attilus</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    data() {
        return {
            partners: [
                "Air Canada",
                "Air France",
                "American Airlines",
                "British Airways",
                "Easy Jet",
                "Emirates",
                "KLM",
                "Lufthansa",
                "Ryanair",
                "Swiss",
                "Turkish Airlines",
                "Wizz Air"
            ]
        }
    },

    mounted() {
        this.setHover();
    },

    methods: {
        setHover() {
            const icon = document.getElementById("icon_");
            const booking_btn = document.getElementById("booking-btn");

            booking_btn.addEventListener("mouseover", () => {
                setTimeout(() => {
                   icon.style.color = "whitesmoke"; 
                }, 150);
            });

            booking_btn.addEventListener("mouseout", () => {
                icon.style.color = "rebeccapurple";
            });
        }
    }
};
</script>

<style scoped>
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}

footer {
    width: 100%;
    height: 50vh;
    background: rgb(9, 55, 115);
    display: flex;
}

.content {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    width: 100%;
    background: transparent;
}

span,
.icon {
    background: rgb(9, 55, 115);
    color: whitesmoke;
    border: none;
    margin: 0 5px;
    height: 90%;
    font-size: 0.8rem;
}

.box {
    height: 90%;
    width: 22%;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.footer-title {
    color: whitesmoke;
    font-weight: 200;
    border-bottom: 1px solid #ced4da;
    padding: 20px 0;
    font-size: 1.2rem;
}

.footer-text {
    color: whitesmoke;
    font-weight: 100;
    padding: 20px 0;
}

#email {
    width: 60%;
    padding: 10px;
}

.newsletter {
    display: flex;
    height: 40px;
    width: 100%;
}

.news-btn {
    height: 40px;
    width: 40px;
    background: rebeccapurple;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
}

.icon {
    background: none;
    border: none;
}

.social-icon {
    background: none;
    border: none;
    font-size: 1.5rem;
    margin: 0 10px;
    color: whitesmoke;
}

.social-icon:hover {
    color: lightskyblue;
}

li {
    list-style: none;
    display: block;
    width: 100%;
    line-height: 30px;
}

a {
    text-decoration: none;
    color: whitesmoke;
    font-size: 0.8rem;
    font-weight: 100;
}
a:hover {
    color: lightskyblue;
}

.bottom1 {
    width: 40%;
}

.bottom2 {
    width: 60%;
}

.bottom-menu {
    display: flex;
}

.logo {
    width: 120px;
    height: 120px;
}

.booking-btn {
    width: 50%;
    height: 50px;
    border: 2px solid rebeccapurple;
    text-align: center;
    padding-top: 12px;
    text-transform: uppercase;
    font-size: 1rem;
    color: whitesmoke;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
}

.booking-btn:hover {
    background: rebeccapurple;
    color: whitesmoke;
    transition: 0.4s ease-in-out 0s;
}

#icon_ {
    color: rebeccapurple;
    font-size: 1.2rem;
}

.copy {
    display: flex;
    margin-top: 20px;
}

p {
    font-size: 0.8rem;
}

.partners {
    font-size: 0.8rem;
    line-height: 20px;
    color: whitesmoke;
    line-height: 22px;
}

ul {
    margin-top: 20px;
}

.pay {
    width: 60%;
    margin-top: 20px;
}

.social {
    display: flex;
    margin: 20px;
    padding: 10px;
}

@media(max-width: 768px) {
    footer {
        flex-direction: column;
        height: 200vh;
    }

    .box {
        width: 70%;
    }

    .newsletter {
        flex-direction: row;
    }

    .booking-btn {
        font-size: 0.8rem;
    }

    p {
        font-size: 0.75rem;
    }
}

</style>
