<template>
<div>
  <b-card class="apply-form">
    <template slot="header">
      <form-header
        :currentStep="currentStep"
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
import { mapGetters } from 'vuex';

import FormHeader from '@/components/FormHeader'
import FormFooter from '@/components/FormFooter'

import StepOne from '@/components/StepOne.vue'
import StepTwo from '@/components/StepTwo.vue'
import StepThree from '@/components/StepThree.vue'

export default {
  name: 'home',
  components: {
    FormHeader,
    FormFooter,
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      skills: null,
    }
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
    changeStep(i)  {
      if (this.isSended) {
        return
      }

      if (i.isMainButton && this.isApproved) {
        this.sendForm()
        return
      }

      if (i.isMainButton && this.currentStep == 3) {
        this.$store.commit('setApproved')
      } else {
        this.$store.commit('setCurrentStep', i.step);
      }
    },
    sendForm() {
      this.$store.commit('setLoading', true)
      setTimeout(() => {
        let result = Math.random() >= 0.5
        this.$store.commit('setLoading', false)
        result ? this.$store.commit('setSended') : this.handleError()
      }, 3000)
    },
    handleError() {
      this.$store.commit('setError', true)
      setTimeout(() => {
        this.$store.commit('setError', false)
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
</style>
