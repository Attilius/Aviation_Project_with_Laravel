<template>
    <div>
        <div class="selected-item">
            <p id="open-message">You have not selected any item yet*</p>
            <fieldset id="item-list">
                <legend>Selected item(s)</legend>
                <ul id="list">
                    <li v-for="item in form" :key="item.size">
                        {{ item.size }} {{ item.price }} x {{ item.piece }} =>
                        <strong>{{ item.amount }} €</strong>
                        <button @click="clke" class="icon edit">
                            <font-awesome-icon :icon="['far', 'edit']" />
                        </button>
                        <button @click="clkd" class="icon delete">
                            <font-awesome-icon :icon="['fas', 'eraser']" />
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
            if (newVal.length) {
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

        clke(e) {
            let piece = 2;
            for (let i = 0; i < this.form.length; i++) {
                this.setIdAttribute(i, 1, this.form[i].state + "edit");
            }
            const children = document.getElementById("list").childNodes;

            children.forEach(child => {
                this.identifyTheButton(e, children, child, "edit", piece);
            });
        },

        clkd(e) {
            e.target.parentElement.setAttribute("id", "del6")
            console.dir(e.target.parentElement.id)
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

        identifyTheButton(event, children, child, identifyString, piece) {
            for (let i = 0; i < children.length; i++) {
                if (
                    event.target.parentElement.id ===
                        this.form[i].state + identifyString &&
                    child.innerText.split(" ")[0] ===
                        this.form[i].size.split(" ")[0]
                ) {
                    if (identifyString === "edit")
                        this.updatePiece(piece, this.form[i].size);
                    else this.destroyItem(this.form[i]);
                }
            }
        },

        destroyItem(item) {
            let index;
            index = this.form.indexOf(item);
            this.form.splice(index, 1);
            if (!this.form.length) {
                this.setOpenState();
            }
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

.icon {
    background: none;
    border: none;
    height: 20px;
    width: 20px;
    margin-left: 10px;
    font-size: 1.1rem;
}

.edit {
    color: rgb(40, 160, 40);
}

.delete {
    color: red;
}

.icon:focus {
    box-shadow: none !important;
    border: none !important;
}

.icon:active {
    font-size: 1rem;
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
