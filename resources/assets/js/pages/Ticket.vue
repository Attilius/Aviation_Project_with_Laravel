<template>
    <div>
        <div class="header">
            <h6>Your Departure Flight</h6>
            <h5>{{flight.from}} > {{flight.to}}</h5>
            <p>{{flight.departureDate}}</p>
        </div>
        <div class="bottom">
            <div class="top">
                <div>
                    <div class="tp">
                        <span class="time">{{flight.departureTime}}</span>
                        <p class="dep">{{flight.departureAirport}}</p>
                    </div>
                    <div class="bn">
                        <span class="time">{{flight.arrivalTime}}</span>
                        <p class="arr">{{flight.arrivalAirport}}</p>
                    </div>
                    <p class="title trip-duration">Trip duration: {{flight.tripDuration}}</p>
                </div>
                <div class="price-box">
                    <div class="promotion-box">Special price</div>
                    <h5 class="price">Total price: {{flight.totalPrice}}</h5>
                </div>
            </div>
            <div class="footer">
                <div class="footer-box">
                    <p class="item">{{flight.flightNumber}}</p>
                </div>
                <div>
                    <p class="dots">
                        <span class="big">.</span>...<span class="big">.</span>
                    </p>
                </div>
                <div class="footer-box">
                    <div class="t">
                        <span class="time">{{flight.departureTime}}</span>
                        <p class="dep">Paris, Charles De Gaulle</p>
                    </div>
                    <div class="b">
                        <span class="time">{{flight.arrivalTime}}</span>
                        <p class="arr">Montreal, Metropolitan Area</p>
                    </div>
                </div>
                <div class="footer-box">
                    <p class="title">Operated by</p>
                    <p class="item">{{flight.airlines}}</p>
                </div>
                <div class="footer-box">
                    <p class="title">Aircraft</p>
                    <p class="item">{{flight.airplaneType}}</p>
                </div>
                <div class="footer-box">
                    <p class="title">Class</p>
                    <p class="item">{{flight.cabinClass}}</p>
                </div>
                <div class="footer-box">
                    <p class="title">Passengers</p>
                    <p class="item">{{flight.passengers}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ticket",

    data() {
        return {
            flight: {
                from: "Paris (PAR)",
                to: "Montreal (MON)",
                departureAirport: "Paris (CDG)",
                arrivalAirport: "Montreal (YMA)",
                tripDuration: "08h30",
                totalPrice: "$100",
                departureTime: "2:15 PM",
                arrivalTime: "4:45 PM",
                flightNumber: "LA2222",
                departureDate: "Monday, April 04, 2022",
                cabinClass: "Economy",
                airplaneType: "Airbus A320",
                passengers: "1 Adult",
                airlines: "Lorem Airlines"

            }
        }
    }
};
</script>

<style scoped>
.booking-box .header {
    height: 100px;
    width: 100%;
    background-color: lightblue;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
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

.trip-duration {
    display: inline;
}

.price {
    display: inline;
    float: right;
    margin-right: 100px;
    padding: 15px;
    color: rgb(5, 55, 115);
    position: relative;
    top: -25px;
}

.price-box {
    border: 2px solid rebeccapurple;
    height: 110%;
    width: 50%;
    position: relative;
    top: -82px;
    left: 50%;
}

.promotion-box {
    height: 30%;
    width: 30%;
    background-color: rebeccapurple;
    color: whitesmoke;
    display: flex;
    align-items: center;
    padding-left: 15px;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
}
</style>
