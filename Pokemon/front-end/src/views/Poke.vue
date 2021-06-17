<template>
  <div class="photo">
    <SinglePoke/>
  </div>
</template>


<script>
import axios from "axios";
import SinglePoke from "@/components/SinglePoke";

export default {
  name: 'poke',

  components: {SinglePoke},

  async created() {
    try {
      this.response = await axios.get("/api/pokes/" + this.$route.params.id);
      this.$root.$data.cards = this.response.data;
    } catch (error) {
      this.error = error.response.data.message;
    }
  },
  computed: {
    currentPhoto() {
      return this.$root.$data.cards;
    }
  }
}
</script>