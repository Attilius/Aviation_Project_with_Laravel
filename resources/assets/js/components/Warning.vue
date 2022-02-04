<template>
    <div>
        <div id="warning-box">
            <div class="warning-header">
                <div class="icon-title">
                    <b-img
                        class="alert-icon"
                        fluid
                        :src="'../images/alert.png'"
                        alt="alert-icon"
                    ></b-img>
                    <h5>warning</h5>
                </div>

                <button id="close-btn" @click="onClickCancel" v-if="!app.user">
                    X
                </button>
                <button id="close-btn" @click="onClick" v-else>X</button>
            </div>

            <br />
            <p id="warning-message" v-if="!app.user">
                You must have been logged in before use this service!
            </p>
            <p v-else-if="wrong_data.state">
                The value could at least 1 or at most 10!
            </p>
            <p id="warning-message" v-else>
                Must have been selected at least one item of insurance before
                submitting!
            </p>
            <div class="btn-group" v-if="!app.user">
                <button
                    style="marginRight: 30px"
                    class="btn"
                    @click="onClickLogin"
                >
                    Login
                </button>
                <button
                    id="cancel-btn"
                    style="marginLeft: 30px"
                    class="btn"
                    @click="onClickCancel"
                >
                    Cancel
                </button>
            </div>
            <button
                style="margin: 10px"
                class="btn"
                @click="inputReset"
                v-else-if="wrong_data.state"
            >
                Ok
            </button>
            <button style="margin: 10px" class="btn" @click="onClick" v-else>
                Ok
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Warning"
};
</script>

<style scoped>

</style>
