<template>
    <div>
        <div class="selected-item">
            <p id="open-message">You have not selected any item yet*</p>
            <fieldset id="item-list">
                <legend>Selected item(s)</legend>
                <ul id="list">
                    <li :id="item.state" v-for="item in form" :key="item.size">
                        {{ item.size }} {{ item.price }} x {{ item.piece }} =>
                        <strong>{{ item.amount }} €</strong>
                        <button @click="clk" class="btn edit">
                            Edit
                        </button>
                        <button @click="clk" class="btn delete">
                            Delete
                        </button>
                    </li>
                </ul>
                <h5 id="total">Total amount: {{ getTotalAmount() }} €</h5>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    name: "SelectedItemDisplay",
    props: ["form"],
    watch: {
        form: function(newVal) {
            if (!newVal.length) {
                this.setOpenState();

                document.getElementsByClassName("check-switch").forEach(item => {
                    item.firstChild.disabled = false;
                });
            }
        }
    },

    mounted() {
        if (!this.form.length) {
            this.setOpenState();
        }
    },

    methods: {
        getTotalAmount() {
            let totalAmount = 0;
            this.form.forEach(item => {
                totalAmount += item.amount;
            });
            return totalAmount;
        },

        clk(e) {
            /*console.log(e.target.innerText)
            if (e.target.innerText === "DELETE") {
                console.log("delete")
            }
            if (e.target.innerText === "EDIT") {
                console.log("edit")
            }*/
            this.form.forEach((item, index) => {
                if(e.target.parentElement.id === item.state && e.target.innerText === "DELETE") {
                    this.form.splice(index, 1);
                }

                if(e.target.parentElement.id === item.state && e.target.innerText === "EDIT") {
                    console.log(e.target.parentElement.id, "=> update");
                }
            });
        },

        setOpenState() {
            this.setDisplay("open-message", "inline");
            this.setDisplay("total", "none");
            this.setDisplay("item-list", "none");
        },

        setDisplay(element, property) {
            document.getElementById(element).style.display = property;
        },

        setIdAttribute(index, btnIndex, attrValue) {
            document
                .getElementById("list")
                .children[index].children[btnIndex].setAttribute(
                    "id",
                    attrValue
                );
        },

        updatePiece(newPiece, size) {
            this.form.forEach(item => {
                if (item.size === size) {
                    item.piece = newPiece;
                    item.amount = this.getAmount(newPiece, item.price);
                    this.newPiece = 0;
                    this.newSize = "";
                }
            });
        }
    }
};
</script>

<style scoped>
.selected-item {
    padding-top: 25px;
    width: 95%;
    margin: 0 auto;
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

#open-message {
    color: #ced4da;
}

.btn {
    background: none;
    border: none;
    height: 20px;
    width: 40px;
    margin-left: 10px;
    font-size: 0.6rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
}

.edit {
    background: rgb(40, 160, 40);
    color: whitesmoke;
}

.delete {
    background: red;
    color: whitesmoke;
}

.btn:focus {
    box-shadow: none !important;
    border: none !important;
}

li {
    display: flex;
}

#total {
    width: 230px;
    background: lightskyblue;
    color: rgb(9, 55, 115);
    padding: 10px;
    margin-bottom: 10px;
}
</style>
