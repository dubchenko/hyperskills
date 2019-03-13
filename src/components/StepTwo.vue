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
import { mapActions } from "vuex"

export default {
  name: "StepTwo",
  data() {
    return {
      biography: this.$store.getters.biography,
    }
  },
  computed: {
    textLength() {
      return this.biography.replace(/\s/g, "").length
    }
  },
  mounted() {
    this.subscribe = this.$store.subscribeAction(action => {
      if (action.type === 'setCurrentStep')
        if (this.$store.getters.biography !== this.biography)
          this.setBiography(this.biography)
    })
  },
  beforeDestroy() {
    this.subscribe()
  },
  methods: {
    ...mapActions([
      'setBiography'
    ]),
  }
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
