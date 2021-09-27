<template>
    <div class="wrapper">
        <b-row class="content">
            <b-col cols="12" md="5" class="under-left">
                <div class="left">
                    <div class="cover-bg">
                    <b-img :src="'images/A320.png'" fluid alt="Plane"></b-img>
                    <h2 class="mobile-title-top">Make your trip an <b>experience</b></h2>
                    <h1 class="mobile-title-bottom">fly with us</h1>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" md="7" class="right">
                <b-container class="open-page-content">
                    <h2 class="title-top">Make your trip an <b>experience</b></h2>
                    <h1 class="title-bottom">fly with us</h1>
                    <b-form>
                        <label for="from">From</label>
                        <b-form-select name="from" v-model="selected_from" :options="options_from"><i class="fas fa-plane-departure"></i></b-form-select>
                        <label for="to">To</label>
                        <b-form-select name="to" v-model="selected_to" :options="options_to"></b-form-select>
                        <label for="date">Date</label>
                        <b-form-input name="date" type="date"></b-form-input>
                    </b-form>
                </b-container>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
        selected_from: null,
        options_from: [
          { value: null, text: 'Please select your location of departure' },
          { value: 'a', text: 'Budapest' },
          { value: 'b', text: 'London' },
          { value: 'c', text: 'Paris' },
          { value: 'd', text: 'Munich' },
          { value: 'e', text: 'New York' },
        ],
        selected_to: null,
        options_to: [
          { value: null, text: 'Please select your destination' },
          { value: 'a', text: 'Budapest' },
          { value: 'b', text: 'London' },
          { value: 'c', text: 'Paris' },
          { value: 'd', text: 'Munich' },
          { value: 'e', text: 'New York' },
        ]
      }
    },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
.wrapper {
    width: 100%;
    height: 100hv;
    font-family: Poppins;
}

.content {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: rgb(155, 187, 236);
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.under-left {
    height: 100vh;
    width: 40%;
    background: whitesmoke;
    border-right: 10px solid rgb(155, 187, 236);
    border-top-right-radius: 200%;
    border-bottom-right-radius: 1000%;
    padding: 0;
}

.left {
    background: url("../../img/city.jpg");
    height: 100vh;
    width: 90%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
}

.cover-bg {
    background: linear-gradient(135deg, white, rgba(255,255,255, .1), rgba(0, 0, 0, .9));
    height: 100vh;
    width: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
}

.mobile-title-top, .mobile-title-bottom {
    display: none;
}

.right {
    height: 100vh;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.open-page-content {
    width: 80%;
}

.title-top {
    font-size: 3.5rem;
    font-weight: 400;
    color: rgb(9,55,115);
    text-transform: capitalize;
    text-shadow: 2px 2px 5px white;
}

.title-bottom {
    font-size: 4rem;
    font-weight: 500;
    color: rgb(9,55,115);
    text-transform: uppercase;
    text-shadow: 2px 2px 5px white;
}

img {
    height: 424px;
    width: 589px;
    margin-top: 100px;
    margin-left: 180px;
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

    .mobile-title-top, .mobile-title-bottom {
        color: whitesmoke;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px rgb(9,55,115);
    }

    .mobile-title-top {
        text-transform: capitalize;
    }

    .mobile-title-bottom {
        text-transform: uppercase;
    }

    .right {
    padding-right: 0;
    }

    .title-top, .title-bottom{
        display: none;
    }
}
</style>
