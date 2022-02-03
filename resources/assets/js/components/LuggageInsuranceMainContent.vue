<template>
    <div id="content" class="text-content">
        <h2>{{ titles.first }}</h2>
        <article>{{ text }} <strong>{{ important_text }}</strong></article>

        <!-- Success message -->

        <div id="success">
            <h5>Thank you for requesting our service!</h5>
            <a class="link" href="/services">Back</a>
        </div>

        <Table id="table" :items="items" :fields="fields" @changeDisplay="updateDisplay($event)" />
    </div>
</template>

<script>
import Table from "./Table.vue";
export default {
    name: "ServiceMainContent",
    props: ['titles', 'text', 'important_text', 'items', 'fields'],
    components: {
        Table
    },

    mounted() {
        this.setContentHeight();
    },

    methods: {
        updateDisplay(updatedDisplay) {
            document.getElementById("success").style.display = updatedDisplay;
            document.getElementById("table").style.display = "none";
            document.getElementById("content").style.height = "100vh";
            this.changeDisplay();
            if (window.innerWidth > 768) window.scrollTo(0, 500);
            else window.scrollTo(0, 0);
        },

        changeDisplay() {
            this.$emit("changeDisplay", "200vh");
        },

        setContentHeight() {
            const content = document.getElementById("content");

            switch (location.hash) {
                case "#/services/luggage-insurance":
                    if (window.innerWidth > 768) {
                        content.style.height = "780px";
                    }
                break;
            }
        },
    }
};
</script>

<style scoped>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.text-content {
    background: transparent;
    width: 80%;
    margin: 0 auto 150px;
    position: relative;
}

h2::after {
    content: "";
    position: absolute;
    background-color: lightskyblue;
    width: 20%;
    height: 7px;
    bottom: -10px;
    left: 30px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 5px black;
}

h2 {
    padding: 15px 20px 25px 30px;
    position: relative;
    margin-top: 50px;
    color: whitesmoke;
    text-transform: capitalize;
    text-shadow: 2px 2px 5px black;
    width: 30%;
}

article {
    width: 95%;
    margin: 0px auto;
    padding: 25px 0;
    color: #ced4da;
    border-bottom: 2px solid lightskyblue;
}

#success {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: whitesmoke;
}

.link {
    width: 100px;
    height: 30px;
    background: rebeccapurple;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    margin-top: 20px;
    text-decoration: none;
    box-shadow: 2px 2px 5px black;
}

.link:hover {
    border: 1px solid rebeccapurple;
    background: whitesmoke;
    color: rebeccapurple;
}

@media (max-width: 768px){
    .text-content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 5%;
    }

    article {
        width: 85%;
        margin: 0 30px;
    }
}

</style>
