<template>
    <div class="wrapper">
        <div class="content container-sm">
            <div class="under-left">
                <div class="left">
                <img :src="'images/A320.png'" />
                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 100%;
    height: 100hv;
}
.content {
    height: 80vh;
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    border: 2px solid rgb(155, 187, 236);
}
.under-left {
    height: 80vh;
    width: 40%;
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
.right {
    height: 80vh;
    width: 60%;
}
img {
    height: 424px;
    width: 589px;
    margin-left: 250px;
}
</style>
