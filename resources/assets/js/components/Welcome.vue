<template>
    <div class="wrapper">
        <b-row class="content">
            <b-col cols="12" md="5" class="under-left">
                <div class="left">
                    <div class="cover-bg">
                        <b-img
                            :src="'images/A320.png'"
                            fluid
                            alt="Plane"
                        ></b-img>
                        <h2 class="mobile-title-top">
                            Make your trip an <b>experience</b>
                        </h2>
                        <h1 class="mobile-title-bottom">fly with us</h1>
                    </div>
                </div>
            </b-col>
            <b-col cols="12" md="7" class="right">
                <b-container class="open-page-content">
                    <h2 class="title-top">
                        Make your trip an <b>experience</b>
                    </h2>
                    <h1 class="title-bottom">fly with us</h1>
                    <b-form>
                        <div class="input-column">
                            <label for="from">From</label>
                            <div class="form-icon">
                                <div class="icon">
                                    <font-awesome-icon
                                        :icon="['fas', 'plane-departure']"
                                    />
                                </div>
                                <b-form-select
                                    class="select"
                                    name="from"
                                    v-model="selected_from"
                                    :options="options_from"
                                ></b-form-select>
                            </div>
                        </div>

                        <div class="input-column">
                            <label for="to">To</label>
                            <div class="form-icon">
                                <div class="icon">
                                    <font-awesome-icon
                                        :icon="['fas', 'plane-arrival']"
                                    />
                                </div>
                                <b-form-select
                                    class="select"
                                    name="to"
                                    v-model="selected_to"
                                    :options="options_to"
                                ></b-form-select>
                            </div>
                        </div>

                        <div class="input-column">
                            <label for="date">Date</label>
                            <b-form-input
                                class="input"
                                name="date"
                                type="date"
                            ></b-form-input>
                        </div>
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
                { value: null, text: "Please select" },
                { value: "a", text: "Budapest" },
                { value: "b", text: "London" },
                { value: "c", text: "Paris" },
                { value: "d", text: "Munich" },
                { value: "e", text: "New York" }
            ],
            selected_to: null,
            options_to: [
                { value: null, text: "Please select" },
                { value: "a", text: "Budapest" },
                { value: "b", text: "London" },
                { value: "c", text: "Paris" },
                { value: "d", text: "Munich" },
                { value: "e", text: "New York" }
            ]
        };
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
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
    background: linear-gradient(
        135deg,
        white,
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.9)
    );
    height: 100vh;
    width: 100%;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 500%;
}

.mobile-title-top,
.mobile-title-bottom {
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
    color: rgb(9, 55, 115);
    text-transform: capitalize;
    text-shadow: 2px 2px 5px white;
}

.title-bottom {
    font-size: 4rem;
    font-weight: 500;
    color: rgb(9, 55, 115);
    text-transform: uppercase;
    text-shadow: 2px 2px 5px white;
}

form {
    display: flex;
}

.select {
    width: 150px;
    border-left: none !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}

.select:focus {
    outline-style: none !important;
}

.input {
    width: 190px;
}

.input-column {
    display: flex;
    flex-direction: column;
}

.icon {
    width: 38px;
    height: 38px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ced4da;
    border-left: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
}

.form-icon {
    display: flex;
    width: 200px;
}

img {
    height: 424px;
    width: 589px;
    margin-top: 100px;
    margin-left: 180px;
}

@media (max-width: 760px) {
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
        background: linear-gradient(
            135deg,
            white,
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 0.7)
        );
        height: 60vh;
        width: 100%;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .mobile-title-top,
    .mobile-title-bottom {
        color: whitesmoke;
        font-weight: 500;
        display: inline-block;
        text-align: center;
        text-shadow: 1px 1px rgb(9, 55, 115);
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

    .title-top,
    .title-bottom {
        display: none;
    }
}
</style>
