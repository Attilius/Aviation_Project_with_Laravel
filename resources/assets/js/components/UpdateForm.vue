<template>
    <div id="update-form">
        <h5>Update number of piece</h5>
        <b-form-select
            id="select"
            class="select"
            v-model="selected"
            :options="options"
        ></b-form-select>
        <b-button id="confirm-btn" @click="confirmPiece">Confirm</b-button>
        <button class="cancel" @click="cancelUpdateForm">X</button>
    </div>
</template>

<script>
export default {
    name: "UpdateForm",
    props: ["form", "updateId"],
    watch: {
        updateId: function(newValue) {
            const input = document.getElementById("select");
            const confirmBtn = document.getElementById("confirm-btn");

            if (newValue && !input.value) {
                confirmBtn.classList.add("confirm-btn-disabled");
                confirmBtn.disabled = true;
            }

            input.addEventListener("change", e => {
                if (newValue && e.target.value) {
                    confirmBtn.classList.remove("confirm-btn-disabled");
                    confirmBtn.disabled = false;
                }

                if (newValue && !e.target.value) {
                    confirmBtn.classList.add("confirm-btn-disabled");
                    confirmBtn.disabled = true;
                }
            });
        }
    },

    data() {
        return {
            selected: null,
            options: [
                { value: null, text: "Please select a number" },
                { value: 1, text: "1" },
                { value: 2, text: "2" },
                { value: 3, text: "3" },
                { value: 4, text: "4" },
                { value: 5, text: "5" },
                { value: 6, text: "6" },
                { value: 7, text: "7" },
                { value: 8, text: "8" },
                { value: 9, text: "9" },
                { value: 10, text: "10" }
            ]
        };
    },

    methods: {
        cancelUpdateForm() {
            document.getElementById("update-form").style.display = "none";
        },

        confirmPiece() {
            const newPiece = document.getElementById("select").value;
            this.updatePiece(this.updateId, newPiece);
            this.cancelUpdateForm();
        },

        updatePiece(param, newPiece) {
            this.form.forEach((item, index) => {
                if (param === item.state) {
                    this.onChangePieceInForm(index, newPiece);
                    this.onChangeUpdateState();
                }
            });
        },

        onChangePieceInForm(index, newPiece) {
            this.$emit("onChangePieceInForm", [index, newPiece]);
        },

        onChangeUpdateState() {
            this.$emit("onChangeUpdateState", false)
        }
    }
};
</script>

<style scoped>
#update-form {
    width: 400px;
    height: 200px;
    background: rgb(51, 100, 179);
    color: whitesmoke;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px black;
    border-radius: 5px;
    position: absolute;
    top: 900px;
    left: 400px;
    z-index: 11;
}

.select {
    width: 50%;
    margin: 10px;
}

#confirm-btn {
    background: RebeccaPurple;
    width: 90px;
    height: 30px;
    box-shadow: 2px 2px 5px black;
    border: none;
    margin-left: 3px;
    color: whitesmoke;
    margin: 30px;
    font-size: 1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

#confirm-btn:active {
    box-shadow: none !important;
    background-color: rebeccapurple !important;
    color: whitesmoke !important;
}

#confirm-btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
    transition: 0.4s ease-in-out 0s;
}

.confirm-btn-enabled:hover {
    color: rebeccapurple;
    background: whitesmoke !important;
    border: 1px solid rebeccapurple;
    box-shadow: none !important;
    transition: 0.4s ease-in-out 0s;
}

.confirm-btn-enabled:active {
    color: rebeccapurple;
    background: whitesmoke;
}

.confirm-btn-disabled,
.confirm-btn-disabled:hover {
    background: rebeccapurple !important;
    color: whitesmoke !important;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
    border-radius: 0.25rem;
    margin: 10px;
    width: 90px;
    height: 30px;
}

.cancel {
    height: 25px;
    width: 25px;
    background: red;
    color: whitesmoke;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.25rem;
}

.cancel:active {
    height: 24px;
    width: 24px;
}

.cancel:focus,
.confirm-btn:focus {
    box-shadow: none !important;
    border: none !important;
}
</style>
