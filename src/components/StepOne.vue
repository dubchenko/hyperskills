<template>
<div class="form-body">
  <h3 class="step-title">Шаг 1: Расскажи нам о своих навыках</h3>
  <skills-levels />
  <div class="skills-list">
    <div v-for="(item, index) in skills" :key="item.slug" class="skill-item py-3">
      <div class="skill-title">
        <h4>{{ item.title }}</h4>
        <p>{{ levelsTitles[hoveredSkill[index]] || levelsTitles[item.score] }}</p>
      </div>
      <div class="skill-score">
        <skill-score
          v-model="item.score"
          :index="index"
          @itemHover="itemHover"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SkillsLevels from "./ui/SkillsLevels"
import SkillScore from "./ui/SkillScore"

import { levelsTitles } from "@/assets/skills.js"

export default {
  name: "StepOne",
  components: {
    SkillsLevels,
    SkillScore,
  },
  data() {
    return {
      skills: null,
      hoveredSkill: {},
      levelsTitles: levelsTitles
    }
  },
  mounted() {
    fetch('data/skills.json')
      .then(r => r.json())
      .then(json => {
        this.$store.getters.skills ? this.skills = this.$store.getters.skills : this.skills = json
      })

    this.$store.subscribe(mutation => {
      if (mutation.type === 'setCurrentStep')
        if (this.$store.getters.skills !== this.skills)
          this.$store.commit('setSkills', this.skills)
    });
  },
  methods: {
    itemHover(i) {
      i.item ? this.$set(this.hoveredSkill, i.index, i.item) : this.hoveredSkill = {}
    }
  }
}
</script>

<style scoped>
.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.skill-item:last-child {
  border-bottom: none;
}

.skill-title p {
  color: rgba(0, 0, 0, 0.5);
}
</style>
