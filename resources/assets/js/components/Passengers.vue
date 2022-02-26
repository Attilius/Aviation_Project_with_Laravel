<template>
    <div id="pasengers-box">
        <header>
            <h5>Passengers ({{ newPassengers.length }})</h5>
        </header>
        <div class="select-form-content">
            <div
                :id="passeneger.id"
                class="passenger"
                v-for="passeneger in newPassengers"
                :key="passeneger.id"
            >
                <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                        id="input-passengers-select"
                        type="text"
                        value="Adult"
                        @click="onSelect"
                    />
                    <ul class="select-passengers-list">
                        <li>Baby</li>
                        <li>Child</li>
                        <li>Adult</li>
                        <li>Senior</li>
                    </ul>
                    <label for="icon_prefix" class="active"
                        >Passenger {{ passeneger.number }}</label
                    >
                    <i class="material-icons prefix delete">cancel</i>
                </div>
            </div>

            <b-button
                id="add-passenger-btn"
                class="btn"
                @click="addNewPassenger"
                ><i class="material-icons prefix">add_circle_outline</i> Add a
                passenger</b-button
            >
        </div>
        <footer>
            <b-button class="btn" @click="confirmPassengers">Continue</b-button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Passengers",

    data() {
        return {
            newPassengers: [
                {
                    id: "passenger-1",
                    number: 1
                }
            ]
        };
    },

    methods: {
        onSelect() {
            const select = document.getElementsByClassName(
                "select-passengers-list"
            );
            const selectItems = document.querySelectorAll(
                ".select-passengers-list li"
            );
            const selectInput = document.getElementById(
                "input-passengers-select"
            );
            select[0].style.display = "block";

            selectItems.forEach(item => {
                item.addEventListener("click", () => {
                    selectInput.value = item.textContent;
                    select[0].style.display = "none";
                });
            });
        },

        confirmPassengers() {
            const passengersBox = document.getElementById("pasengers-box");
            passengersBox.style.display = "none";
        },

        addNewPassenger() {
            this.newPassengers.push({
                id: `passenger-${this.newPassengers.length + 1}`,
                number: this.newPassengers.length + 1
            });
            this.setDeleteBtnVisibility();
            this.setDeleteBtnPosition();
        },

        setDeleteBtnVisibility() {
            const deleteBtns = document.getElementsByClassName("delete");

            if (this.newPassengers.length > 1) {
                setTimeout(() => {
                    deleteBtns.forEach(btn => {
                        btn.style.visibility = "visible";
                    });
                }, 1);
            }
        },

        setDeleteBtnPosition() {
            const formContent = document.getElementsByClassName(
                "select-form-content"
            );
            const deleteBtns = document.getElementsByClassName("delete");

            if (this.newPassengers.length > 2) {
                formContent[0].style.overflowY = "scroll";
                setTimeout(() => {
                    deleteBtns.forEach(btn => {
                        btn.style.right = -115 + "px";
                    });
                }, 1);
            }
        }
    }
};
</script>

<style scoped>
#pasengers-box {
    height: 50vh;
    width: 30vw;
    background: whitesmoke;
    box-shadow: 2px 2px 5px #c9c9c9;
    border-radius: 0.25rem;
    position: absolute;
    top: 30%;
    left: 35%;
    display: none;
    flex-direction: column;
    z-index: 11;
}

/*-------- HEADER --------*/

header {
    height: 15%;
    width: 100%;
    position: sticky;
}

header h5 {
    color: rgb(5, 55, 115);
    padding-left: 25px;
    font-weight: 600;
    text-transform: uppercase;
}

/*---------- MAIN CONTENT ----------*/

.select-form-content {
    height: 70%;
    overflow-y: hidden;
    padding: 0.5rem;
}

.passenger {
    width: 90%;
    height: 12vh;
    border: 2px solid #c9c9c9;
    margin: 10px auto;
    padding: 10px;
}

.select-passengers-list {
    width: 20vw;
    height: 120px;
    border: 1px solid #9e9e9e;
    background: whitesmoke;
    margin-left: 45px;
    position: absolute;
    top: 0;
    z-index: 11;
    display: none;
}

.select-passengers-list li {
    padding: 0.25rem;
    cursor: pointer;
}

.select-passengers-list li:hover {
    background: #6a1b9a;
    color: white;
}

#input-passengers-select {
    width: 20vw !important;
    cursor: pointer;
}

.input-field i {
    font-size: 2.5rem;
    color: rgb(5, 55, 115);
}

#add-passenger-btn {
    width: 45%;
    margin: 0 25px;
    background: none;
    color: royalblue;
    border: none;
    box-shadow: none;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
}

#add-passenger-btn i {
    margin-right: 10px;
}

#add-passenger-btn:hover {
    background: royalblue;
    color: whitesmoke;
}

#add-passenger-btn:focus {
    border: none !important;
    box-shadow: none !important;
}

.delete {
    position: absolute;
    top: -20px;
    right: -130px;
    font-size: 1.5rem !important;
    cursor: pointer;
    width: 1.5rem;
    visibility: hidden;
}

/*----- FOOTER -------*/

footer {
    height: 15%;
    width: 100%;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border-top: 1px solid #c9c9c9;
}

.btn {
    background: rebeccapurple;
    color: whitesmoke;
}

@media (max-width: 1350px) {
    #add-passenger-btn {
        width: 55%;
    }
}
</style>
