<template>
  <div class="form_body step_three">
    <h3 class="step_title mb-5">Шаг 3: Подтверди данные</h3>
    <div class="skills_list">
      <div v-for="item in skills" class="skill py-4">
        <div class="skill_title">
          <h4>{{ item.title }}</h4>
        </div>
        <div class="skill_level">
          <template class="">
            <p v-if="item.score == 1">Не слышала об этом</p>
            <p v-else-if="item.score == 2">Имею представление</p>
            <p v-else-if="item.score == 3">Умею применять</p>
            <p v-else-if="item.score == 4">Отлично разбираюсь</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepThree",
  computed: {
    skills() {
			return this.$store.getters.userSkills;
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
</style>
