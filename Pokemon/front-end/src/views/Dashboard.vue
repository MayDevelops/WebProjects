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
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>
