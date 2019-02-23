<template>
<div class="step_one">
  <h4>Шаг 1: Расскажи нам о своих навыках</h4>
  <skills-levels />
  <div class="skills_list">
    <div v-for="item in skills" class="skill">
      <div class="skill_title">
        <h5>{{ item.title }}</h5>
        <div class="">
          <p v-if="item.score == 1">Не слышала об этом</p>
          <p v-else-if="item.score == 2">Имею представление</p>
          <p v-else-if="item.score == 3">Умею применять</p>
          <p v-else-if="item.score == 4">Отлично разбираюсь</p>
        </div>
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
  }
}
</script>

<style scoped>
.skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
