<template>
    <div>
        <div class="content-header">
            <div class="color-box">
                <h1>Aviation is our passion</h1>
                <b-img
                    class="B737"
                    :src="'images/B737.png'"
                    fluid
                    alt="Plane"
                ></b-img>
            </div>
        </div>
        <div class="content">
            <b-container class="main-content">
                <b-row class="top">
                    <b-img
                        class="office"
                        :src="'images/office.jpg'"
                        fluid
                        alt="Office"
                    ></b-img>
                    <b-col class="text-content">
                        <h3>About us</h3>
                        <article>
                            Our company is the result of a recently formed
                            airline partnership. Initially, we only supported
                            our market-leading peers by providing ancillary
                            flights. We now offer our own routes to customers
                            who want to travel. We also operate charter flights
                            to many destinations around the world. We work with
                            our colleagues on a daily basis to provide a
                            tailor-made solution for each of our customers.
                            Whether it's a business trip or a holiday, all you
                            need to do is choose a destination and a date, leave
                            the rest to us!
                        </article>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutContent"
};
</script>

<style scoped>
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins;
}

.content-header {
    height: 40vh;
    width: 100%;
    background-color: whitesmoke;
}

.color-box {
    height: 40vh;
    width: 100%;
    background: linear-gradient(180deg, rgb(9, 55, 115), rgb(51, 100, 179));
    border-bottom-right-radius: 80%;
    display: flex;
    justify-content: space-around;
}

h1 {
    color: whitesmoke;
    text-shadow: 2px 2px 5px silver;
    padding: 40px 50px;
    display: block;
    width: 400px;
    font-size: 3rem;
}

h3 {
    color: rgb(9, 55, 115);
    text-shadow: 2px 2px 5px silver;
    margin-bottom: 10px;
}

.content {
    width: 100%;
    height: 100vh;
    background-color: rgb(51, 100, 179);
    display: flex;
    justify-content: flex-end;
}

.top {
    border-bottom: 1px solid silver;
    background-color: whitesmoke;
    padding: 25px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    justify-content: space-between;
    position: relative;
    right: 150px;
    width: 113.2%;
}

.office {
    width: 20%;
    margin-right: 55px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

article {
    line-height: 1.7rem;
    text-align: justify;
}

.text-content {
    margin-right: 50px;
}

@media (max-width: 1350px) {
    .top {
    border-bottom: 1px solid silver;
    background-color: whitesmoke;
    padding: 25px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    display: flex;
    justify-content: space-between;
    position: relative;
    right: 0;
    width: 100%;
}
}

@media (max-width: 1200px) {
    .content-header,
    .color-box {
        height: 20%;
    }

    .color-box {
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        padding: 20px;
        display: inline;
        text-align: center;
        width: 100%;
    }

    .B737 {
        width: 90%;
        margin: 0 auto;
    }

    .office {
        display: none;
    }

    .top {
        position: absolute;
    }

    .text-content {
    margin-right: 0;
}
}

@media (max-width: 900px) {
    h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 750px) {
    h1 {
        font-size: 2rem;
    }
}

@media (max-width: 576px) {
    h1 {
        font-size: 1rem;
    }
}
</style>
