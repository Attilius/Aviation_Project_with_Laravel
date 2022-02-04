<template>
    <div>
        <b-form @submit="onSubmit">
            <b-button
                id="submit-btn"
                type="submit"
                variant="primary"
                @click="onChangeDisplay"
                >Submit</b-button
            >
        </b-form>
    </div>
</template>

<script>
export default {
    name: "ServiceSubmit",
    props: ["form"],

watch: { 
    form: function(newVal) {
      if (newVal) {
          this.submitBtnController();
      }
    }
  },

  mounted() {
      this.submitBtnController()
  },

    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.form.forEach(element => {
                delete element.state;
            });
            alert(JSON.stringify(this.form));
            this.onCangeFormContent();
        },

        submitBtnController() {
            const submitBtn = document.getElementById("submit-btn");
            if (!this.form.length) {
                submitBtn.disabled = true;
                submitBtn.classList.add("submit-btn-disabled");
            } else {
                submitBtn.disabled = false;
                submitBtn.classList.replace(
                    "submit-btn-disabled",
                    "submit-btn-enabled"
                );
            }
        },

        onChangeDisplay() {
            this.$emit("onChangeDisplay", "flex");
        },

        onCangeFormContent() {
            this.$emit("onCangeFormContent", []);
        }
    }
};
</script>

<style scoped>
.btn {
    height: 30px;
    width: 100px;
    color: whitesmoke;
    background: rebeccapurple;
    box-shadow: 1px 1px 5px black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.btn:hover {
    color: rebeccapurple;
    background: whitesmoke;
    border: 1px solid rebeccapurple;
    box-shadow: none;
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

.submit-btn-disabled {
    margin: 20px 30px;
    background: rebeccapurple;
    color: whitesmoke;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
}
.submit-btn-disabled:hover {
    background: rebeccapurple !important;
    color: whitesmoke !important;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
}

.submit-btn-enabled {
    margin: 20px 30px;
    border: none;
    box-shadow: 2px 2px 5px black !important;
    border: 1px solid rebeccapurple !important;
    transition: all 0.3s ease;
}

.submit-btn-enabled:hover {
    color: rebeccapurple;
    background: whitesmoke !important;
    border: 1px solid rebeccapurple;
    box-shadow: none !important;
    transition: 0.4s ease-in-out 0s;
}
</style>
