<template>
<div class="form_footer">
  <div v-if="currentStep !== 1" class="form_footer-left">
    <b-button
      class="button_back"
      @click="changeStep(currentStep - 1)"
      variant="link"
    >
      Назад
    </b-button>
  </div>
  <div :class="{ 'form_footer-right' : currentStep !== 1 }">
    <b-button
      @click="changeStep(currentStep + 1, true)"
      size="lg"
      class="test_button"
      :variant="isSended ? 'success' : 'primary'"
    >
      <span
        class="icon icon-loading"
        v-if="isLoading"
      />
      {{ isSended ? "Отправлено" : (isLoading ? "Отправляем" : (isApproved ? "Отправить" :"Продолжить"))  }}
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
  },
  methods: {
    changeStep(i, isMainButton = false)  {
      this.$emit("changeStep", { 'step': i, 'isMainButton': isMainButton })
    },
  }
}
</script>

<style>
.form_footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form_footer-left {
  flex-grow: 1;
}

.form_footer-right {
  flex-grow: 1.55;
}
</style>
