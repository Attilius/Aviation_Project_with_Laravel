<template>
    <footer>
        <div class="box">
            <div class="logo">
                <b-img class="logo" :src="'../images/logo.png'" alt="logo"></b-img>
            </div>
            <h5 class="footer-title">Subscribe to our newsletter</h5>
            <input type="email" name="email" id="email" placeholder="Enter your email">
        </div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
       <!-- <div class="content">
            <span>Site design</span>
            <font-awesome-icon class="icon" :icon="['far', 'copyright']" />
            <span>2021 Attilus</span>
        </div> -->
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style scoped>
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}

footer {
    width: 100%;
    height: 50vh;
    background: rgb(9, 55, 115);
    display: flex;
}

.content {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    width: 100%;
    background: transparent;
}

span,
.icon {
    background: rgb(9, 55, 115);
    color: whitesmoke;
    border: none;
    margin: 0 5px;
    height: 90%;
}

.box {
    height: 90%;
    width: 22%;
    border: 1px solid whitesmoke;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-title {
    color: whitesmoke;
    text-align: center;
}

#email {
    width: 60%;
    padding: 10px;
}

</style>
