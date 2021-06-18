<template>
  <div class="home">
    <h1>All Pokemon</h1>
    <div class="pokeWrapper">
      <div class="search">
        <form class="pure-form">
          <img :src="image" style="width: 45px; height: 45px; margin-right: 10px;">
          <i class="fas"></i><input placeholder="Find a Pokemon" v-model="searchText"/>
        </form>
      </div>
    </div>
    <p v-if="error">{{ error }}</p>
    <template v-if="cards.length > 0">
      <PokemonGallery :poke="pokes"/>
    </template>
    <template v-else>
      <p>Please Create an Account or Login to Train Your Pokemon!</p>
    </template>


  </div>
</template>

<script>
import axios from 'axios';
import PokemonGallery from "@/components/PokemonGallery";
import image from "../assets/pokeball.png"

export default {
  name: 'Home',
  components: {
    PokemonGallery,
  },
  data() {
    return {
      image: image,
      cards: [],
      error: '',
      searchText: '',

    }
  },
  computed: {
    pokes() {
      return this.cards.filter(product => product.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    },
  },
  created() {
    //this.POPULATE_INITIAL_DATABASE();
    this.getCards();
  },
  methods: {
    POPULATE_INITIAL_DATABASE: async function () {
      this.cards = [];

      for (let i = 7; i <= 9; i++) {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
        let card = response.data;
        const poke = {
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

