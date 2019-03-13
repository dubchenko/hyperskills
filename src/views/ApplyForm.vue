<template>
<div>
  <b-card class="apply-form">
    <template slot="header">
      <form-header
        :currentStep="currentStep"
        :isSended="isSended"
        @changeStep="changeStep"
      />
    </template>
    <component
      :is="currentComponent"
    />
    <template slot="footer">
      <form-footer
        :currentStep="currentStep"
        :isApproved="isApproved"
        :isLoading="isLoading"
        :isSended="isSended"
        :isError="isError"
        @changeStep="changeStep"
      />
    </template>
  </b-card>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import FormHeader from '@/components/FormHeader'
import FormFooter from '@/components/FormFooter'

import StepOne from '@/components/StepOne.vue'
import StepTwo from '@/components/StepTwo.vue'
import StepThree from '@/components/StepThree.vue'

export default {
  name: 'ApplyForm',
  components: {
    FormHeader,
    FormFooter,
    StepOne,
    StepTwo,
    StepThree
  },
  computed: {
    ...mapGetters([
      'currentStep',
      'isApproved',
      'isLoading',
      'isSended',
      'isError',
    ]),
    currentComponent() {
			switch (this.currentStep) {
        case 1:
          return 'step-one'
        case 2:
          return 'step-two'
        case 3:
          return 'step-three'
        default:
          return 'step-one'
      }
    },
  },
  methods: {
    ...mapActions([
      'setCurrentStep',
      'setApproved',
      'setLoading',
      'setSended',
      'setError',
    ]),
    changeStep(e)  {
      if (e.isMainButton && this.isApproved && !this.isSended)
        return this.sendForm()

      if (e.isMainButton && this.currentStep == 3 && !this.isSended)
        return this.setApproved(true)

      this.setCurrentStep(e.step)
    },
    sendForm() {
      this.setLoading(true)

      setTimeout(() => {
        let result = Math.random() >= 0.5
        this.setLoading(false)
        result ? this.setSended() : this.handleError()
      }, 3000)
    },
    handleError() {
      this.setError(true)

      setTimeout(() => {
        this.setError(false)
      }, 1500)
    }
  },
}
</script>

<style scoped>
.apply-form {
  width: 684px;
}

.card-header {
  background-color: #FFF;
  text-align: center;
  padding: 45px 20px 40px 20px;
}

.card-body {
  padding: 35px 50px 20px 50px;
}

.card-footer {
  padding: 20px 50px 40px 50px;
  border: 0;
  background-color: #FFF;
}

@media screen and (max-width: 768px) {
  .apply-form {
    width: 100%;
  }

  .card-body {
    padding: 35px 20px 20px 20px;
  }
}
</style>
