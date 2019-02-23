<template>
  <div class="skills-levels pb-3">
    <div class="levels" />
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

}

.levels {
  width: 100%;
  margin-bottom: 15px;
  height: 27px;
  background: url('../../assets/levels.svg') no-repeat;
  background-position: center;
  background-size: contain;
}

.labels {
  display: flex;
}

.labels p {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  width: 25%;
}

.labels p:first-child {
  text-align: left;
}

.labels p:last-child {
  text-align: right;
}
</style>
