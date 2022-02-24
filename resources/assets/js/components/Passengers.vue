<template>
    <div id="pasengers-box">
        <header>
            <h5>Passengers (1)</h5>
        </header>
        <div class="select-form-content">
            <div class="passenger">
                <div class="input-field">
                    <i class="material-icons prefix"
                        >account_circle</i
                    >
                    <input
                        id="input-select"
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
                    <label for="icon_prefix" class="active">Passenger 1</label>
                </div>
            </div>
        </div>
        <footer>
            <b-button class="btn">Continue</b-button>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Passengers",

    methods: {
        onSelect() {
            const select = document.getElementsByClassName("select-passengers-list");
            const selectItems = document.querySelectorAll(".select-passengers-list li");
            const selectInput = document.getElementById("input-select");
            select[0].style.display = "block";
            
            selectItems.forEach(item => {
                item.addEventListener("click", () => {
                    selectInput.value = item.textContent.toUpperCase();
                    select[0].style.display = "none";
                });
            });
        },
    }
};
</script>

<style scoped>
#pasengers-box {
    height: 40vh;
    width: 30vw;
    background: whitesmoke;
    box-shadow: 2px 2px 5px #c9c9c9;
    border-radius: 0.25rem;
    position: absolute;
    top: 30%;
    left: 35%;
    z-index: 11;
    display: none;
}

header {
    height: 5vh;
    width: 100%;
    position: sticky;
}

header h5 {
    color: rgb(5, 55, 115);
    padding-left: 25px;
    font-weight: 600;
    text-transform: uppercase;
}

.select-form-content {
    height: 20vh;
    width: 100%;
}

.passenger {
    width: 90%;
    height: 12vh;
    border: 2px solid #c9c9c9;
    margin: 10px auto;
    padding: 10px;
}

#input-select {
    width: 20vw !important;
}

.select-passengers-list {
    display: none;
}

.input-field i {
    font-size: 2.5rem;
    color: rgb(5, 55, 115);
}

footer {
    height: 15vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    background: rebeccapurple;
    color: whitesmoke;
}
</style>
