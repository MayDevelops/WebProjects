<template>
  <div class="home">
    <p v-if="error">{{ error }}</p>
    <template v-if="cards.length > 0">
      <pokemon-gallery :cards="cards"/>
    </template>
    <template v-else>
      <p>Please Create an Account or Login to Train Your Pokemon!</p>
    </template>


  </div>
</template>

<script>
import axios from 'axios';
import PokemonGallery from "@/components/PokemonGallery";

export default {
  name: 'Home',
  components: {
    PokemonGallery,
  },
  data() {
    return {
      cards: [],
      error: '',
    }
  },
   created() {
    //this.POPULATE_INITIAL_DATABASE();
    this.getCards();
  },
  methods: {
    POPULATE_INITIAL_DATABASE: async function () {
      this.cards = [];

      for (let i = 1; i <= 6; i++) {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
        let card = response.data;
        const poke = {
          abilities: card.abilities,
          id: card.id,
          name: card.name,
          sprite: {
            normal: card.sprites.front_default,
            HD: card.sprites.other.dream_world.front_default,
          },
          types: card.types,
        }

        await axios.post("/api/pokes", poke);
      }



    },
    async getCards() {
      try {
        //edit this for only cards of the trainer?!
        let response = await axios.get("/api/pokes/all");
        this.cards = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>
