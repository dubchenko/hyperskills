<template>
<div class="form_body step_one">
  <h3 class="step_title mb-4">Шаг 1: Расскажи нам о своих навыках</h3>
  <skills-levels />
  <div class="skills_list">
    <div v-for="item in skills" class="skill py-3">
      <div class="skill_title">
        <h4>{{ item.title }}</h4>
        <template class="">
          <p v-if="item.score == 1">Не слышал об этом</p>
          <p v-else-if="item.score == 2">Имею представление</p>
          <p v-else-if="item.score == 3">Умею применять</p>
          <p v-else-if="item.score == 4">Отлично разбираюсь</p>
        </template>
      </div>
      <div class="skill_level">
        <skill-score v-model="item.score" :item="item" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SkillsLevels from "./ui/SkillsLevels"
import SkillScore from "./ui/SkillScore"

export default {
  name: "StepOne",
  components: {
    SkillsLevels,
    SkillScore,
  },
  data() {
    return {
      skills: null,
    }
  },
  mounted() {
    fetch('/data/skills.json')
      .then(r => r.json())
      .then(json => {
        this.$store.state.userSkills ? this.skills = this.$store.state.userSkills : this.skills = json
      })

    this.$store.subscribe(mutation => {
      if (mutation.type === 'setCurrentStep')
        if (this.$store.getters.userSkills !== this.skills)
          this.$store.commit('setUserSkills', this.skills)

    });
  },
}
</script>

<style scoped>
p {
  color: rgba(0, 0, 0, 0.5);
}

.skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}
</style>
