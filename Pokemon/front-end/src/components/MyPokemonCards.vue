<template>
  <div class="main">
    <div class="menu">
      <h2><strong>Log Out - </strong> {{ user.firstName }} {{ user.lastName }} <a @click="logout"><i
          class="fas fa-sign-out-alt hover"></i></a></h2>
    </div>
    <pokemon-gallery :cards="myPokedex"/>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonGallery from "@/components/PokemonGallery";

export default {
  name: 'MyPhotos',
  components: {
    PokemonGallery
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
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/trainers");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getPokedex() {
      if (this.$root.$data.pokedex) {
        for (let i = 0; i < this.$root.$data.pokedex.length; i++) {
          try {
            let response = await axios.get("/api/pokes/" + this.$root.$data.pokedex[i]);
            this.myPokedex.push(response.data);
          } catch (error) {
            this.error = error.response.data.message;
          }
        }
      }
    },
  },
  async created() {
    try {
      let response = await axios.get('/api/pokedex/' + this.$root.$data.user._id);
      this.$root.$data.pokedex = response.data[0].pokedex;
    } catch (error) {
      this.$root.$data.pokedex = null;
    }

    this.getPokedex();

  }
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