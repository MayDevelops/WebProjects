<template>
  <div>
    <input v-model="message" placeholder="Pokedex Name">
    <button type="submit" class="pure-button pure-button-primary" @click.prevent="createPokedex(message)">Submit
    </button>


    <select @change="selectPokedex()" v-model="selectedPokedex">
      <option disabled value="">Please select one</option>
      <option v-for="pokedex in this.$root.$data.trainer.pokedexes" v-bind:key="pokedex._id">{{ pokedex.name }}</option>
    </select>
    <span>Selected Pokedex: {{ currentPokedexName }}</span>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'PokedexNavigator',
  data() {
    return {
      message: '',
      selectedPokedex: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.trainer;
    },
    currentPokedex() {
      return this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex;
    },
    currentPokedexName() {
      return this.selectedPokedex;
    }
  },
  methods: {
    async createPokedex(message) {
      let currentDexs = this.$root.$data.trainer.pokedexes;
      const newDex = {
        name: message,
        pokedex: []
      }

      this.$root.$data.trainer.pokedexes = [...currentDexs, newDex];
      try {
        await axios.put('/api/trainers/pokedex', {
          user: this.$root.$data.trainer,
          pokedexes: this.$root.$data.trainer.pokedexes
        });
      } catch (error) {
        console.log(error);
      }
      this.$emit("syncDex");
    },
    async selectPokedex() {
      //find the pokedex with the matching name as the selected pokedex
      for (let i = 0; i < this.$root.$data.trainer.pokedexes.length; i++) {
        if (this.selectedPokedex === this.$root.$data.trainer.pokedexes[i].name) {
          this.$root.$data.selector = i;
          this.$emit('syncDex');
          break;
        }
      }
    },
  },
  async created() {
    try {
      let response = await axios.get('/api/pokedex/' + this.$root.$data.trainer._id);
      this.$root.$data.pokedexes = response.data;
    } catch (error) {
      this.$root.$data.pokedex = null;
    }

    this.selectedPokedex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name;
  }
}
</script>

<style>

</style>