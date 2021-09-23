<template>
    <div class="wrapper">
        <div class="content">
            <div class="under-left">
                <div class="left">
                    <b-img v-bind="mainProps" :src="'images/A320.png'"></b-img>>
                </div>
            </div>
            <div class="right">
                <h1>FLY WITH US</h1>
                <b-form inline>
                    <label class="sr-only" for="inline-form-input-name"
                        >Name</label
                    >
                    <b-form-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Jane Doe"
                    ></b-form-input>

                    <label class="sr-only" for="inline-form-input-username"
                        >Username</label
                    >
                    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-form-input
                            id="inline-form-input-username"
                            placeholder="Username"
                        ></b-form-input>
                    </b-input-group>

                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                        >Remember me</b-form-checkbox
                    >

                    <b-button variant="primary">Save</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        mainProps: { class: 'm1 m2 m3 m4 m5'}
      }
    }
  }
</script>

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
    background: whitesmoke;
}
.under-left {
    height: 80vh;
    width: 40%;
    background: linear-gradient(180deg, white, skyblue, white);
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
