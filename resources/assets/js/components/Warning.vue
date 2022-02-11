<template>
    <div>
        <div id="shadow"></div>
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
            <p v-else-if="isWrongData">
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
                v-else-if="isWrongData"
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
    name: "Warning",
    props: ["app", "isWrongData"],

    methods: {
        onClick() {
            this.setDisplay("warning-box", "none");
            /*document.getElementById("insurances").style.border =
                "2px solid gold";
            document.getElementById("insurances").style.borderRadius =
                "0.25rem";*/
        },

        onClickCancel() {
            this.setDisplay("warning-box", "none");
        },

        onClickLogin() {
            const path = location.hash.split("#");
            this.$emit("onClickLogin", path[1]);
            this.$router.push("/login");
        },

        inputReset() {
            this.onClickCancel();
            document.querySelectorAll(".input-cell").forEach((item, index) => {
                if (!item.firstChild.disabled) {
                    this.setConfirmBtnVisible(index, "hidden");
                }
            });
        },

        setDisplay(element, property) {
            document.getElementById(element).style.display = property;
        },

        setConfirmBtnVisible(cell_index, property) {
            document.querySelectorAll(".input-cell")[
                cell_index
            ].lastChild.style.visibility = property;
        }
    }
};
</script>

<style scoped>
#shadow {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(1, 1, 1, 0.6);
    z-index: 1;
    display: none;
}

/* Warning box */

#warning-box {
    background: whitesmoke;
    color: rgb(9, 55, 115);
    border-radius: 0.25rem;
    box-shadow: 2px 2px 5px black;
    width: 400px;
    height: 200px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: 3;
}

.alert-icon {
    width: 35px;
    height: 35px;
}

#warning-message {
    padding: 20px;
}

.warning-header {
    width: 100%;
    height: 40px;
    background: rgb(250, 230, 100);
    border-radius: 0.25rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
}

.icon-title {
    display: flex;
    justify-content: flex-start;
    margin: auto 10px;
    height: 40px;
    align-items: center;
}

.icon-title h5 {
    text-transform: uppercase;
    margin: auto 10px;
}

#close-btn {
    height: 25px;
    width: 25px;
    border-radius: 50px;
    color: whitesmoke;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 0 0 0;
    border: none;
    margin: auto 10px;
    font-weight: 700;
}

#close-btn:focus {
    box-shadow: none !important;
    border: none !important;
}

.btn-group {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
}
</style>
