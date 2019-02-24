<template>
  <div class="form-header">
    <h1>Вступительное испытание</h1>
    <div class="mt-4">
      <template v-for="i in 3">
        <b-button
          :key="i"
          @click="changeStep(i)"
          class="header-nav-button"
          :variant="(currentStep == i) ? 'primary' : 'link'"
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
      this.$emit('changeStep', { 'step': i })
    }
  }
}
</script>

<style scoped>
.header-nav-button {
  margin-right: 15px;
}

.header-nav-button:last-child {
  margin-right: 0px;
}
</style>
