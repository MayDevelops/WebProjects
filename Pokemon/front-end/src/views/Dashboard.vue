<template>
  <div class="dashboard">
    <MyPokemonCards v-if="user"/>
    <Login v-else/>
  </div>
</template>

<script>
import MyPokemonCards from "@/components/MyPokemonCards";
import Login from "@/components/Login";
import axios from "axios";

export default {
  name: 'dashboard',
  components: {
    MyPokemonCards,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/trainers');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }

    try {
      let response = await axios.get('/api/comments/' + this.$root.$data.user._id);
      this.$root.$data.pokedex = response.data[0].pokedex;
    } catch (error) {
      this.$root.$data.pokedex = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
