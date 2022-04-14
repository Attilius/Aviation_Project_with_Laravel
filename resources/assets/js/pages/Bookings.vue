<template>
    <div class="wrapper">
        <header>
            <h4>Your Bookings</h4>
        </header>
        <div class="container">
            <p v-if="!bookings" id="empty-msg">Currently don't have booking.</p>

            <div class="booking-box">
                <div class="header">
                    <h6>Your Departure Flight</h6>
                    <h5>Paris (PAR) > Montreal (MON)</h5>
                    <p>Monday, April 04, 2022</p>
                </div>
                <div class="bottom">
                    <div class="top">
                        <div class="left-block">
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
                        <div class="right-block">
                            <h4>Price</h4>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="footer-box">
                            <p class="item">LA2222</p>
                        </div>
                        <div>
                            <p class="dots"><span class="big">.</span>...<span class="big">.</span></p>
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

            <div class="btn-group">
                <input v-if="bookings" class="btn-save" type="submit" value="Delete Booking" />
                <router-link class="btn-cancel" to="/">Cancel</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bookings",
    
    data() {
        return{
            bookings: ''
        }
    }
};
</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100%;
    background: rgb(5, 55, 115);
}

header {
    width: 70%;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    padding-top: 10px;
    margin: 0 auto;
}

header h4 {
    color: whitesmoke;
    margin: 0;
}

.container {
    padding: 0;
}

#empty-msg {
    color: whitesmoke;
    margin-top: 20px;
}

.btn-group {
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.btn-save {
    background-color: rebeccapurple;
    color: whitesmoke;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0.25rem;
}

.btn-cancel {
    border: none !important;
    background-color: transparent;
    color: whitesmoke;
    width: 117.38px;
    height: 57.25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-cancel:hover {
    background-color: rebeccapurple;
    border-radius: 0.25rem;
}

.btn-cancel:focus {
    border: none !important;
    box-shadow: none !important;
}

.booking-box {
    height: 300px;
    width: 100%;
    background: whitesmoke;
    margin-top: 15px;
}

.booking-box .header {
    height: 100px;
    width: 100%;
    background-color: lightblue;
}

.booking-box .header h6 {
    text-transform: uppercase;
    color: rgb(5, 55, 115);
    margin: 0;
    padding: 10px 25px;
    font-weight: 600;
    font-size: 1.2rem;
}

.booking-box .header h5 {
    color: royalblue;
    margin: 0;
    padding: 0 25px;
    font-weight: 600;
}

.booking-box .header p {
    color: rgb(5, 55, 115);
    margin: 0;
    padding: 5px 25px;
    font-weight: 600;
}

.bottom {
    height: 175px;
    width: 95%;
    border: 2px solid lightgray;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bottom .top {
    height: 50%;
    width: 100%;
}

.top {
    display: "flex";
}

.bottom .footer {
    height: 45%;
    width: 100%;
    background-color: rgb(237, 237, 237);
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer div {
    padding: auto;
    margin-right: 20px;
}

.time {
    color: rgb(0, 60, 255);
}

.dep, .arr {
    margin: 0;
    margin-right: 10px;
    color: rgb(5, 55, 115);
    font-weight: 500;
    padding-top: 5px;
    display: inline;
}

.arr {
    padding-bottom: 3px;
}

.footer-box p {
    margin: 0;
}

.title {
    color: gray;
}

.item {
    color: rgb(5, 55, 115);
    font-weight: 700;
}

.dots {
    transform: rotate(90deg);
    margin-top: 20px;
    font-size: 1.7rem;
    color: slategray;
    position: relative;
    left: 40px;
    bottom: 3px;
}

.big {
    font-size: 5rem;
    position: relative;
    top: 2.45px;
}

.t, .b {
    display: "flex";
    width: 300px;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto;
}

.tp, .bn {
    display: "flex";
    width: 300px;
    align-items: center;
    justify-content: space-around;
}

.tp {
    margin-top: 10px;
}

.bn {
    margin-bottom: 5px;
}

.tp, .bn, .trip-duration {
    margin-left: 70px;
}

</style>
