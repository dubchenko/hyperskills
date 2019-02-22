<template>
<div>
  <b-card no-body>
    <b-tabs small card v-model="currentTab">
      <b-tab title="General">
        <div v-for="item in skills" class="">
          {{ item.title }}
          <input v-model="item.score">
        </div>
      </b-tab>
      <button @click="save">Save</button>
      <b-tab title="Edit profile">
        <!-- <b-form-textarea
          v-model="text"
          placeholder="Enter something"
          rows="3"
          max-rows="6"
        /> -->
      </b-tab>
      <b-tab title="Info">I'm the last tab</b-tab>
    </b-tabs>
  </b-card>
  <div class="text-center">
    <b-button-group class="mt-2">
      <b-button @click="currentTab--">Previous</b-button>
      <b-button @click="currentTab++">Next</b-button>
    </b-button-group>
    <div class="text-muted">Current Tab: {{ currentTab }}</div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      skills: null
    }
  },
  computed: {
    currentTab: {
      get: function() {
				return this.$store.getters.currentTab;
			},
			set: function(value) {
				this.$store.commit('setCurrentTab', value);
			},
    }
  },
  mounted() {
    fetch('/data/skills.json')
      .then(r => r.json())
      .then(json => {
        this.getSkills(json)
      })
  },
  methods: {
    getSkills(userSkills) {
      if (this.$store.state.userSkills) {
        this.skills = this.$store.state.userSkills
      } else {
        this.skills = userSkills
      }
    },
    save() {
      this.$store.commit('setUserSkills', this.skills)
    }
  },
}
</script>
