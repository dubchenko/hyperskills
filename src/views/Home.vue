<template>
<div>
  <!-- <SkillsLevels /> -->
  <b-card class="apply_form">
    <template slot="header">
      <form-header
        :currentStep="currentStep"
        @changeStep="changeStep"
      />
    </template>
    <!-- <component
      is="step-one"
    /> -->
    <step-one v-if="currentStep == 1" />
    <step-two v-if="currentStep == 2" />
    <step-three v-if="currentStep == 3" />
    <template slot="footer">
      <form-footer
        :currentStep="currentStep"
        :isApproved="isApproved"
        :isLoading="isLoading"
        :isSended="isSended"
        @changeStep="changeStep"
      />
    </template>
  </b-card>
</div>
</template>

<script>
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
    currentStep() {
			return this.$store.getters.currentStep;
    },
    isApproved() {
      return this.$store.getters.isApproved;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    isSended() {
      return this.$store.getters.isSended;
    }
  },
  methods: {
    save() {
      this.$store.commit('setUserSkills', this.skills)
    },
    changeStep(i)  {
      if (i.isMainButton && this.isApproved) {
        this.sendForm()
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
        this.$store.commit('setLoading', false)
        this.$store.commit('setSended')
      }, 5000)
    }
  },
}
</script>

<style scoped>
.apply_form {
  min-width: 684px;
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
