<template>
  <div class="photo">
    <SinglePhoto/>
  </div>
</template>


<script>
import SinglePhoto from "@/components/SinglePhoto";
import axios from "axios";

export default {
  name: 'photo',

  components: {SinglePhoto},

  async created() {
    try {
      this.response = await axios.get("/api/photos/" + this.$route.params.id);
      this.$root.$data.photo = this.response.data;
    } catch (error) {
      this.error = error.response.data.message;
    }
  },
  computed: {
    currentPhoto() {
      return this.$root.$data.photo;
    }
  }
}
</script>