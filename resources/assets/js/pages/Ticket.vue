<template>
    <div>
        <div class="header">
            <h6>Your Departure Flight</h6>
            <h5>Paris (PAR) > Montreal (MON)</h5>
            <p>Monday, April 04, 2022</p>
        </div>
        <div class="bottom">
            <div class="top">
                <div>
                    <div class="tp">
                        <span class="time">2:15 PM</span>
                        <p class="dep">Paris (CDG)</p>
                    </div>
                    <div class="bn">
                        <span class="time">4:45 PM</span>
                        <p class="arr">Montreal (YMA)</p>
                    </div>
                    <p class="title trip-duration">Trip duration: 08h30</p>
                </div>
                <div class="price-box">
                    <div class="promotion-box">Special price</div>
                    <h5 class="price">Total price: $100</h5>
                </div>
            </div>
            <div class="footer">
                <div class="footer-box">
                    <p class="item">LA2222</p>
                </div>
                <div>
                    <p class="dots">
                        <span class="big">.</span>...<span class="big">.</span>
                    </p>
                </div>
                <div class="footer-box">
                    <div class="t">
                        <span class="time">2:15 PM</span>
                        <p class="dep">Paris, Charles De Gaulle</p>
                    </div>
                    <div class="b">
                        <span class="time">4:45 PM</span>
                        <p class="arr">Montreal, Metropolitan Area</p>
                    </div>
                </div>
                <div class="footer-box">
                    <p class="title">Operated by</p>
                    <p class="item">Lorem Airlines</p>
                </div>
                <div class="footer-box">
                    <p class="title">Aircraft</p>
                    <p class="item">Airbus A320</p>
                </div>
                <div class="footer-box">
                    <p class="title">Class</p>
                    <p class="item">Economy</p>
                </div>
                <div class="footer-box">
                    <p class="title">Passengers</p>
                    <p class="item">1 Adult</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ticket"
};
</script>

<style scoped></style>
