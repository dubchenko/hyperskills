<template>
  <div class="skill_levels">
    <!-- <button
      :disabled="value == 1"
      @click="setScore(value - 1)"
    >-</button> -->
    <template v-for="i in 4">
      <div
        @mouseover="setHover(i)"
        @mouseleave="resetHover"
        @click="setScore(i)"
        :class="['level level_' + i, (value >= i || hoverItem >= i) && ('level_' + i + '_active')]"
      />
    </template>
    <!-- <button
      :disabled="value == 4"
      @click="setScore(value + 1)"
    >+</button> -->
  </div>
</template>

<script>
export default {
  name: "SkillScore",
  props: {
    value: Number,
  },
  data() {
    return {
      hoverItem: null,
    }
  },
  methods: {
    setHover(i) {
      this.hoverItem = i
    },
    resetHover() {
      this.hoverItem = null
    },
    setScore(i) {
      this.$emit('input', i)
    }
  }
}
</script>

<style scoped>
.skill_levels {
  display: flex;
  width: 144px;
}

.level {
  margin: 0 1px;
  background-color: #C4C4C4;
  width: 32%;
  height: 10px;
}

.level_1 {
  width: 4%;
}

.level_1:hover,
.level_1_active {
  background: #202257;
}

.level_2:hover,
.level_2_active {
  opacity: .8;
  background: #1EB295;
}

.level_3:hover,
.level_3_active {
  opacity: .9;
  background: #1EB295;
}

.level_4:hover,
.level_4_active {
  background: #1EB295;
}
</style>
