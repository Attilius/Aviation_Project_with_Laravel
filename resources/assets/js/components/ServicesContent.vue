<template>
    <div class="wrapper">
        <div class="services-header">
            <b-img
                class="services"
                :src="'images/services.jpg'"
                fluid
                alt="Services-image"
            ></b-img>
        </div>
        <b-container class="services-content">
            <div class="service">
                <b-img
                    class="service-img"
                    :src="'images/travel-insurance.jpg'"
                    fluid
                    alt="Services"
                ></b-img>
                <h4>Travel insurance</h4>
                <p>
                    The safety of our passengers is important to us. We give you
                    the option to request the service before you travel, or even
                    at the moment of boarding, so it's just a click away. We
                    take care of the administrative paperwork for you <br>
                    <a class="more" href="/services"
                        >read more <span> <strong> > </strong></span></a
                    >
                </p>
            </div>
            <div class="service">
                <b-img
                    class="service-img"
                    :src="'images/luggage-insurance.jpg'"
                    fluid
                    alt="Services"
                ></b-img>
                <h4>Luggage insurance</h4>
                <p>
                    Carrying luggage is essential when travelling. We provide
                    separate insurance for your luggage. We take care of your
                    personal valuables. In the event of loss, we offer a full
                    refund <br>
                    <a class="more" href="/services"
                        >read more <span> <strong> > </strong></span></a
                    >
                </p>
            </div>
            <div class="service">
                <b-img
                    class="service-img"
                    :src="'images/premium-confort.png'"
                    fluid
                    alt="Services"
                ></b-img>
                <h4>Premium confort</h4>
                <p>
                    If you want extra comfort on a longer journey that crosses
                    continents. Or you want to make your journey more
                    comfortable after a tiring business meeting. We can do that
                    for you too <br>
                    <a class="more" href="/services"
                        >read more <span> <strong> > </strong></span></a
                    >
                </p>
            </div>
            <div class="service">
                <b-img
                    class="service-img"
                    :src="'images/private-jet.jpg'"
                    fluid
                    alt="Services"
                ></b-img>
                <h4>Private jet rent</h4>
                <p>
                    Do you have an urgent and unavoidable trip? Do you need to
                    travel to a special place? Our company offers you the
                    possibility to rent a private jet <br>
                    <a class="more" href="/services"
                        >read more <span> <strong> > </strong></span></a
                    >
                </p>
            </div>
            <div class="service">
                <b-img
                    class="service-img"
                    :src="'images/plane-group.jpg'"
                    fluid
                    alt="Services"
                ></b-img>
                <h4>Group discount</h4>
                <p>
                    Share the experience with your friends. We offer a special
                    discount for groups. Whether it's a team building training
                    or a holiday with a group of friends <br>
                    <a class="more" href="/services"
                        >read more <span> <strong> > </strong></span></a
                    >
                </p>
            </div>
            <div class="service">
                <b-img
                    class="service-img"
                    :src="'images/travel-cancellation.jpg'"
                    fluid
                    alt="Services"
                ></b-img>
                <h4>Booking cancellation</h4>
                <p>
                    Did something unexpected happen before departure? No
                    problem. We understand it. In this case, you can cancel your
                    booking at any time before departure and we will refund the
                    full amount of your booking
                    <a class="more" href="/services"
                        >read more <span> <strong> > </strong></span></a
                    >
                </p>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "ServicesContent"
};
</script>

<style scoped>
.wrapper {
    background: rgb(51, 100, 179);
}

.services-header {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(51, 100, 179);
}

.services-content {
    height: 130vh;
    width: 100%;
    background: whitesmoke;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 2fr);
    padding: 20px;
}

.service {
    width: 100%;
    height: 450px;
    place-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 15px;
}

.service-img {
    margin: 0 auto;
    width: 100%;
    height: 45%;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgb(33, 33, 33);
    cursor: pointer;
}

.service-img:hover {
    box-shadow: none;
}

.service h4::before {
    content: "";
    position: absolute;
    background-color: rebeccapurple;
    width: 20%;
    height: 7px;
    top: 0px;
    left: 0;
}

.service h4 {
    padding: 15px 0 5px;
    position: relative;
    margin-top: 20px;
    color: rgb(9, 55, 115);
    text-transform: capitalize;
    text-shadow: 2px 2px 5px silver;
}

.service p {
    text-align: justify;
    line-height: 1.6rem;
}

.more {
    color: rgb(51, 100, 179);
}

.more:hover {
    color: rebeccapurple;
    text-decoration: none;
}

.more:focus {
    border: none !important;
    box-shadow: none !important;
}

.more span {
    color: rebeccapurple;
    font-size: 18px;
}



</style>
