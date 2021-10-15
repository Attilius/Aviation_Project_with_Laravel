<template>
    <div class="wrapper">
        <div class="skin">
            
                <div class="slider-1">
                    <div class="slider-1-img">
                        <div class="slider-text">
                            <h3>Premium Comfort</h3>
                        </div>
                    </div>
                </div>

                <div class="slider-2">
                    <div class="slider-2-img">
                        <div class="slider-text">
                            <h3>Premium Comfort</h3>
                        </div>
                    </div>
                </div>
            
                <div class="slider-3">
                    <div class="slider-3-img">
                        <div class="slider-text">
                            <h3>Premium Comfort</h3>
                        </div>
                    </div>
                </div>

                <div class="slider-4">
                    <div class="slider-4-img">
                        <div class="slider-text">
                            <h3>Premium Comfort</h3>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "PremiumComfortContent"
};
</script>

<style scoped>
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    background: url("../../img/airport-bg.jpg");
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden;
}

.skin {
    height: 100%;
    width: 100%;
    background: rgba(9, 55, 115, 0.8);
    overflow: hidden;
}

.slider-1, .slider-2, .slider-3, .slider-4 {
    height: 60vh;
    width: 80%;
    position: absolute;
    top: 61px;
    left: 10%;
    overflow: hidden;
}

.slider-1 {
    animation: slider-1 12s linear infinite;
}

.slider-2 {
    animation: slider-2 12s linear infinite;
}

.slider-3 {
    animation: slider-3 12s linear infinite;
}

.slider-4 {
    animation: slider-4 12s linear infinite;
}

.slider-1-img,  .slider-3-img {
    height: 100%;
    width: 100%;
    animation: zoom-out 3s linear infinite;
}

.slider-2-img, .slider-4-img {
    height: 100%;
    width: 100%;
    animation: zoom-in 3s linear infinite;
} 

.slider-1-img {
    background: url("../../img/comfort-1.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

 .slider-2-img {
     background: url("../../img/comfort-2.jpg");
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
 }

.slider-3-img {
    background: url("../../img/comfort-3.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

 .slider-4-img {
     background: url("../../img/comfort-4.jpg");
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center;
 }

 .slider-text h3 {
     position: absolute;
     top: 100px;
     left: 5%;
     color: rgb(9, 55, 115);
     font-size: 3rem;
     margin-top: 200px;
     width: 28%;
     text-align: center;
     background: rgba(255,255,255,.8);
 }

 @keyframes zoom-in {
     100% {
         width: 110%;
     }
 }

 @keyframes zoom-out {
     0% {
         width: 110%;
     }
 }

 @keyframes slider-1 {
     0% {
         visibility: visible;
     }
     25% {
         visibility: hidden;
     }
     50% {
         visibility: hidden;
     }
     75% {
         visibility: hidden;
     }
     100% {
         visibility: visible;
     }
 }

 @keyframes slider-2 {
     0% {
         visibility: hidden;
     }
     25% {
         visibility: hidden;
     }
     50% {
         visibility: visible;
     }
     75% {
         visibility: hidden;
     }
     100% {
         visibility: hidden;
     }
 }

 @keyframes slider-3 {
     0% {
         visibility: hidden;
     }
     25% {
         visibility: hidden;
     }
     50% {
         visibility: hidden;
     }
     75% {
         visibility: visible;
     }
     100% {
         visibility: hidden;
     }
 }

 @keyframes slider-4 {
     0% {
         visibility: hidden;
     }
     25% {
         visibility: hidden;
     }
     50% {
         visibility: hidden;
     }
     75% {
         visibility: hidden;
     }
     100% {
         visibility: visible;
     }
 }

</style>
