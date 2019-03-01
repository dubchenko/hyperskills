<template>
  <div class="score-selector">
    <span
      class="icon icon-minus mr-2"
      :class="{'icon-disabled' : value == 1}"
      @click="setScore(value - 1)"
    />
    <div class="score_levels">
      <template v-for="i in 4">
        <div
          :key="i"
          @mouseover="setHover(i)"
          @mouseleave="resetHover"
          @click="setScore(i)"
          :class="'level level_' + i"
          :active="hoverItem >= i || (value >= i && !hoverItem)"
        />
      </template>
    </div>
    <span
      class="icon icon-plus ml-2"
      :class="{'icon-disabled' : value == 4}"
      @click="setScore(value + 1)"
    />
  </div>
</template>

<script>
export default {
  name: "SkillScore",
  props: {
    value: Number,
    index: Number,
  },
  data() {
    return {
      hoverItem: null,
    }
  },
  methods: {
    setHover(i) {
      this.hoverItem = i
      this.$emit('itemHover', { 'index': this.index, 'item': i })
    },
    resetHover() {
      this.hoverItem = null
      this.$emit('itemHover', { 'index': this.index, 'item': null })
    },
    setScore(i) {
      if (i >= 1 && i <= 4) {
        this.$emit('input', i)
      }
    }
  }
}
</script>

<style scoped>
.score-selector {
  display: flex;
}

.score_levels {
  display: flex;
  align-items: center;
  width: 144px;
}

.level {
  margin: 0 1px;
  background-color: #C4C4C4;
  transition: all .2s ease-in;
  width: 32%;
  height: 10px;
  cursor: pointer;
}

.level_1 {
  width: 4%;
}

.level_1:hover,
.level_1[active] {
  background: #202257;
}

.level_2:hover,
.level_2[active] {
  opacity: .8;
  background: #1EB295;
}

.level_3:hover,
.level_3[active] {
  opacity: .9;
  background: #1EB295;
}

.level_4:hover,
.level_4[active] {
  background: #1EB295;
}
</style>
