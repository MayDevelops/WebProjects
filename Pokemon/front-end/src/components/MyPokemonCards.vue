<template>
  <div class="main">
    <div class="menu">
      <h2><strong>Log Out - </strong> {{ user.firstName }} {{ user.lastName }} <a @click="logout"><i
          class="fas fa-sign-out-alt hover"></i></a></h2>
    </div>
    <pokemon-gallery :cards="cards"/>
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
      cards: [],
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
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getPhotos() {
      try {
        this.response = await axios.get("/api/photos");
        this.cards = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
  created() {
    this.getPhotos();
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