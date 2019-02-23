<template>
  <div class="form_body step_two">
    <h3 class="step_title mb-4">Шаг 2: Расскажи о себе</h3>
    <b-form-textarea
      v-model="text"
      placeholder="Немного обо мне"
      rows="14"
    />
    <div class="text_counter mt-2">
      <p>Длина: {{ textLength }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwo",
  data() {
    return {
      text: '',
    }
  },
  computed: {
    textLength() {
      return this.text.length
    }
  }
}
</script>

<style scoped>
.text_counter {
  text-align: right;
  color: rgba(0, 0, 0, .25);
}
</style>
