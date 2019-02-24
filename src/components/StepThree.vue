<template>
  <div class="form_body step_three">
    <h3 class="step_title mb-5">
      Шаг 3:
      {{ isApproved ? 'Подтверди данные и отправить их' : 'Подтверди данные' }}
    </h3>
    <div class="skills_list">
      <div v-for="item in skills" :key="item.slug" class="skill py-4">
        <div class="skill_title">
          <h4>{{ item.title }}</h4>
        </div>
        <div class="skill_level">
          <p>{{ levelsTitles[item.score] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { levelsTitles } from "@/assets/skills.js"

export default {
  name: "StepThree",
  data() {
    return {
      levelsTitles: levelsTitles
    }
  },
  computed: {
    skills() {
			return this.$store.getters.userSkills;
    },
    isApproved() {
      return this.$store.getters.isApproved;
    }
  },
}
</script>

<style>
.skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.skill:first-child {
  border-top: 1px solid rgba(0, 0, 0, .12);
}

.skill_level p {
  opacity: .5;
}
</style>
