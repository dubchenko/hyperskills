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
    <step-one v-if="currentStep == 1" />
    <step-two v-if="currentStep == 2" />
    <step-three v-if="currentStep == 3" />
    <template slot="footer">
      <b-button class="button_back" v-if="currentStep !== 1" @click="changeStep(currentStep - 1)" variant="link">Назад</b-button>
      <b-button @click="changeStep(currentStep + 1)" size="lg" variant="primary">Продолжить</b-button>
    </template>
  </b-card>
</div>
</template>

<script>
import FormHeader from '@/components/FormHeader'

import StepOne from '@/components/StepOne.vue'
import StepTwo from '@/components/StepTwo.vue'
import StepThree from '@/components/StepThree.vue'

export default {
  name: 'home',
  components: {
    FormHeader,
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
			return this.$store.getters.currentTab;
    }
  },
  methods: {
    save() {
      this.$store.commit('setUserSkills', this.skills)
    },
    changeStep(i)  {
      this.$store.commit('setCurrentTab', i);
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
  text-align: center;
  padding: 20px 50px 40px 50px;
  border: 0;
  background-color: #FFF;
}
</style>
