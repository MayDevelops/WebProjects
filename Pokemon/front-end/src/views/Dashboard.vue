<template>
  <div class="dashboard">
    <MyPokemon v-if="user"/>
    <Login v-else/>
  </div>
</template>

<script>
import MyPokemon from "@/components/MyPokemon";
import Login from "@/components/Login";
import axios from "axios";

export default {
  name: 'dashboard',
  components: {
    MyPokemon,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/trainers');
      this.$root.$data.trainer = response.data.user;
    } catch (error) {
      this.$root.$data.trainer = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.trainer;
    }
  }
}
</script>
