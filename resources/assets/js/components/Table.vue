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
                            @change="
                                onChange(
                                    row.tableDatas.checkbox.model,
                                    row.tableDatas.input.id,
                                    row.tableDatas.checkbox.id
                                )
                            "
                        ></b-form-checkbox>
                    </b-td>
                    <b-td class="add-piece">
                        <template v-if="row.tableDatas.checkbox.model == true">
                            <div class="input-cell">
                                <b-form-input
                                    v-model.number="
                                        row.tableDatas.input.model_number
                                    "
                                    :id="row.tableDatas.input.id"
                                    type="number"
                                    min="1"
                                    max="10"
                                    placeholder="Max 10"
                                    class="piece-input"
                                    @input="
                                        addNumber(
                                            row.tableDatas.input.parameter
                                        )
                                    "
                                ></b-form-input>
                                <b-button
                                    @click="
                                        confirmPiece(
                                            row.tableDatas.checkbox.model,
                                            row.tableDatas.checkbox.id,
                                            row.tableDatas.input.id
                                        )
                                    "
                                    id="btn_"
                                    class="confirm-btn"
                                >
                                    OK
                                </b-button>
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

        <Warning :app="app" :isWrongData="isWrongData" />
        
        <SelectedItemDisplay :form="form" @onChangePieceInForm="updatePieceInForm($event)"/>
        <ServiceSubmit
            :form="form"
            @onCangeFormContent="updateFormContent($event)"
            @onChangeDisplay="updateDisplay($event)"
        />
    </div>
</template>

<script>
import SelectedItemDisplay from "./SelectedItemDisplay.vue";
import ServiceSubmit from "./ServiceSubmit.vue";
import Warning from "./Warning.vue";

export default {
    name: "Table",
    props: ["app", "items", "fields"],
    components: {
        SelectedItemDisplay,
        ServiceSubmit,
        Warning
    },

    data() {
        return {
            newSize: "",
            newPrice: "",
            newPiece: "",
            piece: "",
            state: "",
            isWrongData: false,

            form: [],
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
                            model: this.onChange()
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
                            model: this.onChange()
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
                            model: this.onChange()
                        },
                        input: {
                            id: "third",
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
                            model: this.onChange()
                        },
                        input: {
                            id: "fourth",
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
                            model: this.onChange()
                        },
                        input: {
                            id: "fifth",
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
                            model: this.onChange()
                        },
                        input: {
                            id: "sixth",
                            model_number: this.piece_6,
                            parameter: this.items.sixth
                        }
                    }
                }
            ]
        };
    },

    methods: {
        updateFormContent(updateFormContent) {
            this.form = updateFormContent;
        },

        updateDisplay(updateDisplay) {
            this.$emit("onChangeDisplay", updateDisplay);
        },

        setDisplay(element, property) {
            document.getElementById(element).style.display = property;
        },

        setConfirmBtnVisible(cell_index, property) {
            document.querySelectorAll(".input-cell")[
                cell_index
            ].lastChild.style.visibility = property;
        },

        updatePieceInForm(updatePieceInForm) {
            this.form.forEach((item, index) => {
                if (index === updatePieceInForm[0]) {
                    item.piece = updatePieceInForm[1];
                    item.amount = this.getAmount(updatePieceInForm[1], item.price);
                }
            })
        },

        getAmount(piece, price) {
            return piece * parseInt(price);
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

        inputValueController(inputId, cell_index) {
            const inputValueChecker = e => {
                if (!e.target._value || e.target.valueAsNumber > 10 || !e.target.valueAsNumber) {
                    e.target.value = "";
                    this.isWrongData = true
                    this.setConfirmBtnVisible(cell_index, "hidden");
                    this.setDisplay("warning-box", "flex");
                } else this.setConfirmBtnVisible(cell_index, "visible");
            };

            document.getElementById(inputId).addEventListener("keyup", e => {
                if (e.key !== "Backspace") inputValueChecker(e);
                else this.setConfirmBtnVisible(cell_index, "hidden");
            });

            document.getElementById(inputId).addEventListener("keydown", e => {
                if (e.key === "Backspace") e.target.value = "";
            });

            document.getElementById(inputId).addEventListener("change", e => {
                inputValueChecker(e);
            });
        },

        // third step
        confirmPiece(checkboxModel, checkboxId, inputId) {
            this.setDisplay("open-message", "none");
            this.setDisplay("total", "inline");
            this.setDisplay("item-list", "block");
            this.addNewForm();
            document.getElementById(checkboxId).checked = !checkboxModel;
            document.getElementById(checkboxId).classList.replace("active","used");
            document.getElementById(inputId).value = "";
            document.getElementById(inputId).disabled = true;
            document.getElementsByClassName("confirm-btn").forEach(item => {
                item.style.visibility = "hidden";
            });
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
            this.resetPieces();
        },

        setValue(inputId, input, item, i) {
            this.inputValueController(inputId, i);
            this.piece = input[i].valueAsNumber;
            if (!this.piece) return;
            else this.setDatas(this.piece, item);
            this.state = "checked_" + (i + 1);
        },
        // second step
        addNumber(item) {
            const input = document.querySelectorAll(".piece-input");
            for (let i = 0; i < 6; i++) {
                switch (input[i].id) {
                    case "first":
                        this.setValue("first", input, item, i);
                        break;
                    case "second":
                        this.setValue("second", input, item, i);
                        break;
                    case "third":
                        this.setValue("third", input, item, i);
                        break;
                    case "fourth":
                        this.setValue("fourth", input, item, i);
                        break;
                    case "fifth":
                        this.setValue("fifth", input, item, i);
                        break;
                    case "sixth":
                        this.setValue("sixth", input, item, i);
                        break;
                    default:
                        break;
                }
            }
        },
        // second-(a) step
        setDatas(piece, item) {
            this.newPiece = piece;
            this.newSize = item.size;
            this.newPrice = item.price;
        },
        // first step
        onChange(event, inputId, switchId) {
            if (event) {
                document.getElementById(switchId).classList.add("active");
                document.getElementById(inputId).disabled = false;
                document.getElementById(inputId).value = "";
                this.setActiveSwitch(event);
            }
            
            if(!event) {
                this.setActiveSwitch(event);
            }
            return event;
        },

        setActiveSwitch(e) {
            const switches = document.getElementsByClassName("check-switch");
            switches.forEach(item => {
                if (e && !item.firstChild.classList.contains("active")) {
                    item.firstChild.disabled = true;
                }

                if(!e && !item.firstChild.classList.contains("used")) {
                    item.firstChild.classList.remove("active");
                    item.firstChild.disabled = false;
                } 
            });
        }
    }
};
</script>

<style scoped>
.confirm-btn {
    visibility: hidden;
}

.table-stacked {
    display: none !important;
}

.table {
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    box-shadow: 2px 2px 10px black;
}

#first-row,
#second-row,
#third-row,
#fourth-row,
#fifth-row,
#sixth-row {
    color: rgb(9, 55, 115);
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

td,
th {
    vertical-align: middle;
}

.piece-input {
    width: 100px;
    height: 30px;
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

.add-piece {
    display: flex;
}

input {
    width: 100px !important;
}

.input-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#btn_ {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid #ced4da;
    color: white;
    background: rgb(40, 160, 40);
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    font-size: 10px;
}

.focus {
    background: rgb(9, 55, 115);
    color: white;
    text-align: center;
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
        background: #292b2c;
    }

    .input-cell {
        display: flex;
        justify-content: center;
    }

    #submit-btn {
        margin: 20px auto;
    }
}
</style>
