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

import { levelsTitles } from "@/assets/skills"

import { mapActions } from "vuex"

export default {
  name: "StepOne",
  components: {
    SkillsLevels,
    SkillScore,
  },
  data() {
    return {
      skills: JSON.parse(JSON.stringify(this.$store.getters.skills)),
      hoveredSkill: {},
      levelsTitles: levelsTitles
    }
  },
  mounted() {
    this.loadSkills()

    this.subscribe = this.$store.subscribeAction(action => {
      if (action.type === 'setCurrentStep')
        if (JSON.stringify(this.$store.getters.skills) !== JSON.stringify(this.skills))
          this.setSkills(this.skills)
    })
  },
  beforeDestroy() {
    this.subscribe()
  },
  methods: {
    ...mapActions([
      'setSkills'
    ]),
    loadSkills() {
      fetch('data/skills.json')
        .then(r => r.json())
        .then(json => {
          const skillsMap = json.reduce((obj, item) => {
            obj[item.slug] = item
            return obj
          }, {})

          if (Object.keys(this.skills).length)
            return this.skills = Object.assign(skillsMap, this.skills)

          this.skills = skillsMap
        })
    },
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
