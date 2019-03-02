<template>
<div class="form-footer">
  <div v-if="currentStep !== 1" class="form-footer_left">
    <b-button
      class="button_back"
      @click="changeStep(currentStep - 1)"
      variant="link"
    >
      Назад
    </b-button>
  </div>
  <div :class="{ 'form-footer_right' : (currentStep !== 1) }">
    <b-button
      @click="changeStep(currentStep + 1, true)"
      size="lg"
      class="test_button"
      :variant="isError ? 'danger' : (isSended ? 'success' : 'primary')"
    >
      <span
        class="icon icon-loading"
        v-if="isLoading"
      />
      {{ buttonText }}
    </b-button>
  </div>
</div>
</template>

<script>
export default {
  name: "FormFooter",
  props: {
    currentStep: Number,
    isApproved: Boolean,
    isLoading: Boolean,
    isSended: Boolean,
    isError: Boolean,
  },
  methods: {
    changeStep(i, isMainButton = false)  {
      this.$emit("changeStep", { 'step': i, 'isMainButton': isMainButton })
    },
  },
  computed: {
    buttonText() {
      if (this.isError)
        return "Ошибка"
      if (this.isSended)
        return "Отправлено"
      if (this.isLoading)
        return "Отправляем"
      if (this.isApproved)
        return "Отправить"
      return "Продолжить"
    }
  }
}
</script>

<style>
.form-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-footer_left {
  flex-grow: 1;
}

.form-footer_right {
  flex-grow: 1.55;
}
</style>
