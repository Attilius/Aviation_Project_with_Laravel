<template>
    <div>
        <b-table-simple
            stacked="md"
            striped
            hover
            :fields="fields"
            class="table"
        >
            <b-thead>
                <b-tr>
                    <b-th
                        class="t-head"
                        v-for="field in fields"
                        :key="field.key"
                        >{{ field.key }}</b-th
                    >
                </b-tr>
            </b-thead>
            <b-tbody class="t-body">
                <b-tr v-for="row in tableRows" :key="row.id" :id="row.id">
                    <b-td>{{ row.tableDatas.size }}</b-td>
                    <b-td>{{ row.tableDatas.height }}</b-td>
                    <b-td>{{ row.tableDatas.width }}</b-td>
                    <b-td>{{ row.tableDatas.depth }}</b-td>
                    <b-td>{{ row.tableDatas.capacity }}</b-td>
                    <b-td class="focus">{{ row.tableDatas.price }}</b-td>
                    <b-td>
                        <b-form-checkbox
                            :id="row.tableDatas.checkbox.id"
                            v-model="row.tableDatas.checkbox.model"
                            name="check-button"
                            switch
                            size="lg"
                            class="check-switch"
                            @change="onChange(row.tableDatas.checkbox.model)"
                        ></b-form-checkbox>
                    </b-td>
                    <b-td class="add-piece">
                        <template v-if="row.tableDatas.checkbox.model == true">
                            <div class="input-cell">
                                <b-form-input
                                    v-model.number="row.tableDatas.input.model_number"
                                    :id="row.tableDatas.input.id"
                                    type="number"
                                    min="1"
                                    max="10"
                                    placeholder="Max 10"
                                    class="piece-input"
                                    @input="addNumber(row.tableDatas.input.parameter)"
                                ></b-form-input>
                                <button @click="confirmPiece" class="btn">
                                    OK
                                </button>
                            </div>
                        </template>

                        <template v-else>
                            <div class="input-cell">
                                <b-form-input
                                type="number"
                                placeholder="Max 10"
                                class="piece-input"
                                disabled
                            ></b-form-input>
                            </div>
                        </template>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>

        <div class="selected-item">
            <p id="open-message">You have not selected any item yet*</p>
            <fieldset id="item-list">
                <legend>Selected item(s)</legend>
                <ul>
                    <li v-for="item in form" :key="item.size">
                        {{ item.size }} {{ item.price }} × {{ item.piece }} =>
                        <strong>{{ item.amount }} €</strong>
                    </li>
                </ul>
                <h5 id="total">Total amount: {{ getTotalAmount() }} €</h5>
            </fieldset>
        </div>

        <b-form @submit="onSubmit">
            <b-button id="submit-btn" type="submit" variant="primary"
                @click="changeDisplay">Submit</b-button
            >
        </b-form>
    </div>
</template>

<script>
export default {
    name: "Table",
    props: ["items", "fields"],
    data() {
        return {
            newSize: "",
            newPrice: "",
            newPiece: "",
            state: "",

            form: [],

            counter: 0,

            piece_1: "",
            piece_2: "",
            piece_3: "",
            piece_4: "",
            piece_5: "",
            piece_6: "",

            checked_1: false,
            checked_2: false,
            checked_3: false,
            checked_4: false,
            checked_5: false,
            checked_6: false,

            tableRows: [
                {
                    id: "first-row",
                    tableDatas: {
                        size: this.items.first.size,
                        height: this.items.first.height,
                        width: this.items.first.width,
                        depth: this.items.first.depth,
                        capacity: this.items.first.capacity,
                        price: this.items.first.price,
                        checkbox: {
                            id: "checkbox-1",
                            model: this.checked_1, 
                        },
                        input: {
                            id: "first",
                            model_number: this.piece_1,
                            parameter: this.items.first
                        }
                    }
                },
                {
                    id: "second-row",
                    tableDatas: {
                        size: this.items.second.size,
                        height: this.items.second.height,
                        width: this.items.second.width,
                        depth: this.items.second.depth,
                        capacity: this.items.second.capacity,
                        price: this.items.second.price,
                        checkbox: {
                            id: "checkbox-2",
                            model: this.checked_2, 
                        },
                        input: {
                            id: "second",
                            model_number: this.piece_2,
                            parameter: this.items.second
                        }
                    }
                },
                {
                    id: "third-row",
                    tableDatas: {
                        size: this.items.third.size,
                        height: this.items.third.height,
                        width: this.items.third.width,
                        depth: this.items.third.depth,
                        capacity: this.items.third.capacity,
                        price: this.items.third.price,
                        checkbox: {
                            id: "checkbox-3",
                            model: this.checked_3, 
                        },
                        input: {
                            model_number: this.piece_3,
                            parameter: this.items.third
                        }
                    }
                },
                {
                    id: "fourth-row",
                    tableDatas: {
                        size: this.items.fourth.size,
                        height: this.items.fourth.height,
                        width: this.items.fourth.width,
                        depth: this.items.fourth.depth,
                        capacity: this.items.fourth.capacity,
                        price: this.items.fourth.price,
                        checkbox: {
                            id: "checkbox-4",
                            model: this.checked_4, 
                        },
                        input: {
                            model_number: this.piece_4,
                            parameter: this.items.fourth
                        }
                    }
                },
                {
                    id: "fifth-row",
                    tableDatas: {
                        size: this.items.fifth.size,
                        height: this.items.fifth.height,
                        width: this.items.fifth.width,
                        depth: this.items.fifth.depth,
                        capacity: this.items.fifth.capacity,
                        price: this.items.fifth.price,
                        checkbox: {
                            id: "checkbox-5",
                            model: this.checked_5, 
                        },
                        input: {
                            model_number: this.piece_5,
                            parameter: this.items.fifth
                        }
                    }
                },
                {
                    id: "sixth-row",
                    tableDatas: {
                        size: this.items.sixth.size,
                        height: this.items.sixth.height,
                        width: this.items.sixth.width,
                        depth: this.items.sixth.depth,
                        capacity: this.items.sixth.capacity,
                        price: this.items.sixth.price,
                        checkbox: {
                            id: "checkbox-6",
                            model: this.checked_6, 
                        },
                        input: {
                            model_number: this.piece_6,
                            parameter: this.items.sixth
                        }
                    }
                },
            ]
        };
    },

    methods: {
        changeDisplay() {
            this.$emit("changeDisplay", "flex");
        },

        getAmount(piece, price) {
            return piece * parseInt(price);
        },

        getTotalAmount() {
            let totalAmount = 0;
            this.form.forEach(item => {
                totalAmount += item.amount;
            });
            return totalAmount;
        },

        deleteItem() {
            if (this.form.length === 1) {
                this.form = [];
            } else {
                this.form.forEach(item => {
                    let index;
                    if (
                        item.size === "Small Cabin suitcase" &&
                        !this.checked_1
                    ) {
                        index = this.form.indexOf(item);
                        this.form.splice(index, 1);
                    }
                    if (
                        item.size === "Large Cabin Suitcase" &&
                        !this.checked_2
                    ) {
                        index = this.form.indexOf(item);
                        this.form.splice(index, 1);
                    }
                    if (
                        item.size === "X-large Cabin Suitcase" &&
                        !this.checked_3
                    ) {
                        index = this.form.indexOf(item);
                        this.form.splice(index, 1);
                    }
                    if (item.size === "Medium Suitcase" && !this.checked_4) {
                        index = this.form.indexOf(item);
                        this.form.splice(index, 1);
                    }
                    if (item.size === "Large Suitcase" && !this.checked_5) {
                        index = this.form.indexOf(item);
                        this.form.splice(index, 1);
                    }
                    if (item.size === "X-Large Suitcase" && !this.checked_6) {
                        index = this.form.indexOf(item);
                        this.form.splice(index, 1);
                    }
                });
            }
        },

        resetPieces() {
            this.piece_1 = "";
            this.piece_2 = "";
            this.piece_3 = "";
            this.piece_4 = "";
            this.piece_5 = "";
            this.piece_6 = "";
        },

        resetCheckSwitchStates() {
            this.checked_1 = false;
            this.checked_2 = false;
            this.checked_3 = false;
            this.checked_4 = false;
            this.checked_5 = false;
            this.checked_6 = false;
        },

        setOpenState() {
            document.getElementById("open-message").style.display = "inline";
            document.getElementById("total").style.display = "none";
            document.getElementById("item-list").style.display = "none";
        },

        // third step
        confirmPiece() {
            document.getElementById("open-message").style.display = "none";
            document.getElementById("total").style.display = "inline";
            document.getElementById("item-list").style.display = "block";
            if (this.newPiece == "") {
                alert("Missing data!");
                this.newPrice = 0;
                this.setOpenState();
            }
            if (this.counter < 1) {
                this.addNewForm();
                this.counter++;
            } else {
                this.updatePiece();
                this.newPiece = "";
            }
        },
        // third-(b) step
        updatePiece() {
            this.resetPieces();
            this.form.forEach(item => {
                if (item.size == this.newSize) {
                    item.piece = this.newPiece;
                    item.amount = this.getAmount(this.newPiece, item.price);
                    this.newPiece = "";
                    this.counter++;
                }
            });
            this.resetPieces();
        },
        // third-(a) step
        addNewForm() {
            this.form.push({
                size: this.newSize,
                price: this.newPrice,
                piece: this.newPiece,
                amount: this.getAmount(this.newPiece, this.newPrice),
                state: this.state
            });
            this.newPiece = "";
            this.resetPieces();
        },

        onSubmit(event) {
            event.preventDefault();
            if (this.form.length < 1) {
                document.getElementById("open-message").style.display =
                    "inline";
                alert("Empty form");
            } else {
                this.form.forEach(element => {
                    delete element.state;
                });
                this.resetCheckSwitchStates();
                document.getElementById("open-message").style.display = "none";
                document.getElementById("total").style.display = "none";
                document.getElementById("item-list").style.display = "none";
                alert(JSON.stringify(this.form));
                this.form = [];
            }
        },
        // second step
        addNumber(item) {
            const input = document.querySelectorAll(".piece-input");
            for (let i = 0; i < 6; i++) {
                switch (input[i].id) {
                    case "first":
                        this.piece_1 = input[0].valueAsNumber;
                        this.setForm(this.piece_1, item);
                        this.state = "checked_" + (i + 1);
                        break;
                    case "second":
                        this.piece_2 = input[1].valueAsNumber;
                        this.setForm(this.piece_2, item);
                        this.state = "checked_" + (i + 1);
                        break;
                    case "third":
                        this.piece_3 = input[2].valueAsNumber;
                        this.setForm(this.piece_3, item);
                        this.state = "checked_" + (i + 1);
                        break;
                    case "fourth":
                        this.piece_4 = input[3].valueAsNumber;
                        this.setForm(this.piece_4, item);
                        this.state = "checked_" + (i + 1);
                        break;
                    case "fifth":
                        this.piece_5 = input[4].valueAsNumber;
                        this.setForm(this.piece_5, item);
                        this.state = "checked_" + (i + 1);
                        break;
                    case "sixth":
                        this.piece_6 = input[5].valueAsNumber;
                        this.setForm(this.piece_6, item);
                        this.state = "checked_" + (i + 1);
                        break;
                    default:
                        break;
                }
            }
        },
        // second-(a) step
        setForm(piece, item) {
            if (piece > 0) {
                this.newPiece = piece;
                this.newSize = item.size;
                this.newPrice = item.price;
            }

            if (piece > 10) {
                alert("Too much");
                this.newPiece = "";
            }
        },
        // first step
        onChange(event) {
            event = event;
            this.counter = 0;
            this.newPiece = "";
            this.resetPieces();
            if (!event && this.form.length > 0) {
                this.deleteItem();
            }
            if (this.form.length === 0) this.setOpenState();
        }
    }
};
</script>

<style scoped>
.table-stacked {
    display: none !important;
}

.table,
.selected-item {
    width: 95%;
    margin: 0 auto;
}

.table{
    margin-top: 30px;
    box-shadow: 2px 2px 10px black;
}

#first-row ,
#second-row ,
#third-row ,
#fourth-row ,
#fifth-row ,
#sixth-row {
    color: rgb(9, 55, 115);
}

.selected-item {
    padding-top: 25px;
}

.selected-item ul {
    padding: 25px 0;
}

.selected-item li {
    list-style: none;
    margin-left: 10px;
    color: whitesmoke;
}

.selected-item fieldset {
    padding-bottom: 10px;
    box-shadow: 3px 3px 9px black;
    background: linear-gradient(135deg, rgb(9, 55, 115), rgb(51, 100, 179));
}

.selected-item legend {
    text-align: center;
    border: 1px solid lightskyblue;
    background: lightskyblue;
    color: rgb(9, 55, 115);
    font-size: 20px;
    width: 200px;
}

.t-head {
    text-transform: capitalize;
    color: whitesmoke;
    border: none;
    background: rgb(9, 55, 115);
}

.t-body {
    background: lightskyblue;
}

.check-switch {
    z-index: 0;
}

.piece-input {
    width: 100px;
    height: 30px;
}

#submit-btn {
    background: RebeccaPurple;
    width: 230px;
    height: 40px;
    box-shadow: 2px 2px 5px black;
    border: none;
    margin-left: 3px;
    color: whitesmoke;
    margin: 30px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

#submit-btn:active {
    box-shadow: none !important;
    background-color: rebeccapurple !important;
    color: whitesmoke !important;
}

#submit-btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
    transition: 0.4s ease-in-out 0s;
}

.input-disabled {
    display: none;
}

.input-enabled,
#total,
#item-list,
#success-message {
    display: none;
}

#total {
    width: 230px;
    background: lightskyblue;
    color: rgb(9, 55, 115);
    padding: 10px;
    margin-bottom: 10px;
}

.add-piece {
    display: flex;
}

.input-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.btn {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid #ced4da;
    color: white;
    background: rgb(40, 160, 40);
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 10px;
}

.focus {
    background: rgb(9, 55, 115);
    color: white;
    text-align: center;
}

#open-message {
    color: #ced4da;
}

@media (max-width: 768px) {
    #first-row,
    #second-row,
    #third-row,
    #fourth-row,
    #fifth-row,
    #sixth-row {
        text-align: center;
    }

    .piece-input {
        display: flex;
        justify-content: space-around;
    }

    .focus {
        background: transparent;
        color: #292b2c;
        font-weight: 700;
    }

    .add-piece {
        background: rgb(9, 55, 115);
    }

    .input-cell {
        display: flex;
        justify-content: center;
    }

    #submit-btn {
        margin: 20px auto;
    }

    table {
        width: 85% !important;
    }


}
</style>
