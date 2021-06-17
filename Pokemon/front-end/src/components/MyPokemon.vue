<template>
  <div class="main">
    <div class="menu">
      <h2><strong>Log Out - </strong> {{ user.firstName }} {{ user.lastName }} <a @click="logout"><i
          class="fas fa-sign-out-alt hover"></i></a></h2>
    </div>

    <PokedexNavigator v-on:syncDex="sync"/>

    <pokemon-gallery :cards="myPokedex"/>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonGallery from "@/components/PokemonGallery";
import PokedexNavigator from "@/components/PokedexNavigator";

export default {
  name: 'MyPokemon',
  components: {
    PokemonGallery,
    PokedexNavigator
  },
  data() {
    return {
      show: false,
      myPokedex: [],
      error: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.trainer;
    },
    currentPokedex() {
      return this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex;
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/trainers");
        this.$root.$data.trainer = null;
      } catch (error) {
        this.$root.$data.trainer = null;
      }
    },
    async sync() {
      if (this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex.length === 0) {
        this.myPokedex = [];
        return;
      }

      let tempCards = [];
      for (let i = 0; i < this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex.length; i++) {
        try {
          let response = await axios.get("/api/pokes/" + this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex[i]);
          tempCards.push(response.data);
        } catch (error) {
          this.error = error.response.data.message;
        }
        this.myPokedex = tempCards;
      }
      console.log('Current Pokedex Name: ' + this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name);

    }
  },
  async created() {
    console.log('Current Pokedex Name: ' + this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name);
    for (let i = 0; i < this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex.length; i++) {
      try {
        let response = await axios.get("/api/pokes/" + this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex[i]);
        this.myPokedex.push(response.data);
      } catch (error) {
        this.error = error.response.data.message;
      }
    }
  },
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}

.hover {
  cursor: pointer;
}
</style>