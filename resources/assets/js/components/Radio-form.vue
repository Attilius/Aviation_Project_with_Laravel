<template>
  <div>

    <b-form-group label="Stacked radios" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

    <b-form @submit="onSubmit">
            <b-button id="submit-btn" type="submit" variant="primary"
                >Submit</b-button
            >
        </b-form>
  </div>
</template>

<script>
  export default {
      name: "RadioForm",
    data() {
      return {
        selected: 'first',
        form: [],
      
        options: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ]
      }
    },

    methods: {
        onSubmit(event) {
            event.preventDefault();
                alert("Empty form");
        },
    }

  }
</script>