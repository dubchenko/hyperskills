<template>
  <div class="skills-levels pb-3">
    <div class="levels-chart" />
    <div class="levels-titles">
      <p v-for="(title, index) in levelsTitles" :key="index">{{ title }}</p>
    </div>
  </div>
</template>

<script>
import { levelsTitles } from "@/assets/skills.js"

export default {
  name: "SkillsLevels",
  data() {
    return {
      levelsTitles: levelsTitles
    }
  }
}
</script>

<style scoped>
.levels-chart {
  width: 100%;
  margin-bottom: 15px;
  height: 28px;
  background: url('../../assets/levels.svg') no-repeat;
  background-position: center;
  background-size: contain;
}

.levels-titles {
  display: flex;
}

.levels-titles p {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  width: 25%;
}

.levels-titles p:first-child {
  text-align: left;
}

.levels-titles p:last-child {
  text-align: right;
}

@media screen and (max-width: 572px) {
  .skills-levels {
    display: none;
  }
}
</style>
