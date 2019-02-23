<template>
  <div class="form_header">
    <h1>Вступительное испытание</h1>
    <div class="mt-4">
      <template v-for="i in 3">
        <b-button
          @click="changeStep(i)"
          class="nav_button"
          :variant="(currentStep == i) ? 'primary' : 'light'"
        >шаг {{ i }}</b-button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
  props: {
    currentStep: Number,
  },
  methods: {
    changeStep(i) {
      this.$emit('changeStep', i)
    }
  }
}
</script>

<style scoped>
.form_header {
  padding: 45px 0 40px 0;
  text-align: center;
}

.nav_button {
  margin-right: 15px;
}

.nav_button:last-child {
  margin-right: 0px;
}
</style>
