<template>
<div>
  <!-- <SkillsLevels /> -->
  <b-card class="test">
    <template slot="header">
      <form-header
        :currentStep="currentStep"
        @changeStep="changeStep"
      />
    </template>
    <step-one v-if="currentStep == 1" />
    <step-two v-if="currentStep == 2" />
    <step-three v-if="currentStep == 3" />
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>

<script>
// @ is an alias to /src
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
.test {
  min-width: 684px;
}

.card-header {
  background-color: #FFF;
  border-bottom: 1px solid rgba(0, 0, 0, .25);
}
</style>
