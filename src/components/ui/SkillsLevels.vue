<template>
  <div class="skills-levels">
    <div class="levels">
    </div>
    <div class="labels">
      <p>Не слышал об этом</p>
      <p>Имею представление</p>
      <p>Умею применять</p>
      <p>Отлично разбираюсь</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsLevels"
}
</script>

<style scoped>
.skills-levels {
  max-width: 555px;
}

.levels {
  max-width: 555px;
  height: 27px;
  background: url('../../assets/levels.svg') no-repeat;
  background-position: center;
  background-size: contain;
}

.labels {
  display: flex;
}

.labels p {
  width: 25%;
}

.labels p:first-child {
  text-align: left;
}

.labels p:last-child {
  text-align: right;
}
</style>
