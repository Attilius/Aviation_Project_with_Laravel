<template>
    <div class="wrapper">
        <b-row class="content">
            <b-col cols="12" md="5" class="under-left">
                <div class="left">
                    <div class="cover-bg">
                    <b-img :src="'images/A320.png'" fluid alt="Plane"></b-img>
                    <h1 class="mobile-title">Flying with us is fun and safety</h1>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" md="7" class="right">
            </b-col>
        </b-row>
    </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
.wrapper {
    width: 100%;
    height: 100hv;
    font-family: Poppins;
}

.content {
    height: 80vh;
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    background: whitesmoke;
}

.under-left {
    height: 80vh;
    width: 40%;
    background: linear-gradient(90deg, rgb(155, 187, 236),rgb(155, 187, 236), white);
    border-right: 10px solid rgb(155, 187, 236);
    border-top-right-radius: 200%;
    border-bottom-right-radius: 1000%;
}

.left {
    background: url("../../img/city.jpg");
    height: 80vh;
    width: 90%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
}

.cover-bg {
    background: linear-gradient(135deg, white, rgba(255,255,255, .1), rgba(0, 0, 0, .7)) ;
    height: 80vh;
    width: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
}

.mobile-title {
    display: none;
}

.right {
    height: 80vh;
    width: 60%;
}
img {
    height: 424px;
    width: 589px;
    margin-top: 100px;
    margin-left: 180px;
    opacity: 0.9;
}
@media (max-width: 760px){
    img {
        margin-left: 0px;
    }

    .under-left {
    height: 60vh;
    width: 100%;
    padding-right: 0;
    background: none;
    border-right: none;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    }

    .left {
    background: url("../../img/city.jpg");
    height: 60vh;
    width: 100%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    }

    .cover-bg {
    background: linear-gradient(135deg, white, rgba(255,255,255, .1), rgba(0, 0, 0, .7)) ;
    height: 60vh;
    width: 100%;
    border-top-right-radius: 0%;
    border-bottom-right-radius: 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    }

    .mobile-title {
        color: whitesmoke;
        font-weight: 600;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px black;
    }

    .right {
    padding-right: 0;
    }
}
</style>
