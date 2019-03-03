<template>
  <div class="form-body">
    <h3 class="step-title">
      Шаг 3:
      {{ isApproved ? 'Подтверди данные и отправить их' : 'Подтверди данные' }}
    </h3>
    <div class="skills-list">
      <div v-for="item in skills" :key="item.slug" class="skill-item py-4">
        <div class="skill-title">
          <h4>{{ item.title }}</h4>
        </div>
        <div class="skill-level">
          <p>{{ levelsTitles[item.score] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import { levelsTitles } from "@/assets/skills.js"

export default {
  name: "StepThree",
  data() {
    return {
      levelsTitles: levelsTitles
    }
  },
  computed: {
    ...mapGetters([
      'skills',
      'isApproved',
    ])
  },
}
</script>

<style scoped>
.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.skill-item:first-child {
  border-top: 1px solid rgba(0, 0, 0, .12);
}

.skill-level p {
  opacity: .5;
}
</style>
