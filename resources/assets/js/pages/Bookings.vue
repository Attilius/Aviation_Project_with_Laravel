<template>
    <div class="wrapper">
        <header>
            <h4>Your Bookings</h4>
        </header>
        <div class="container">
            <p v-if="!bookings" id="empty-msg">Currently don't have booking.</p>

            <div class="booking-box"></div>

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
</style>
