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
    this.POPULATE_INITIAL_DATABASE();
  },
  methods: {
    POPULATE_INITIAL_DATABASE: async function () {
      this.cards = [];
      let cards = this.cards;

      for (let i = 1; i <= 6; i++) {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
        let card = response.data;
        cards.push(card);
      }
      console.log('Finished populating CARDS array with length: ' + cards.length);
      console.log('Pushing CARDS array into the Mongo DB...');

      for (let j = 0; j < cards.length; j++) {
        const formData = new FormData();

        formData.append('abilities', cards[j].abilities);
        formData.append('id', cards[j].id);
        formData.append('moves', cards[j].moves);
        formData.append('name', cards[j].name);
        formData.append('sprites', cards[j].sprites);
        formData.append('stats', cards[j].stats);
        formData.append('types', cards[j].types);
        await axios.post("/api/photos", formData);


      }


    },
    async getCards() {
      try {
        //edit this for only cards of the trainer?!
        let response = await axios.get("/api/cards/all");
        this.cards = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>
