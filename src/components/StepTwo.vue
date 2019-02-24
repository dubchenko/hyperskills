<template>
  <div class="form-body">
    <h3 class="step-title">Шаг 2: Расскажи о себе</h3>
    <b-form-textarea
      v-model="biography"
      placeholder="Немного обо мне"
      rows="14"
    />
    <div class="text-counter mt-2">
      <p>Длина: {{ textLength }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwo",
  data() {
    return {
      biography: this.$store.getters.biography,
    }
  },
  computed: {
    textLength() {
      return this.biography.length
    }
  },
  mounted() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'setCurrentStep')
        this.$store.commit('setBiography', this.biography)
    });
  },
}
</script>

<style scoped>
.form-control {
    padding: 25px;
}

.text-counter {
  text-align: right;
  color: rgba(0, 0, 0, .25);
}
</style>
