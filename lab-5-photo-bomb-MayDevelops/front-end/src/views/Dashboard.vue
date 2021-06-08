<template>
  <div class="dashboard">
    <MyPhotos v-if="user"/>
    <Login v-else/>
    <Footer />
  </div>
</template>

<script>
import MyPhotos from '@/components/MyPhotos.vue';
import Login from '@/components/Login.vue';
import axios from 'axios';
import Footer from "@/components/Footer";

export default {
  name: 'dashboard',
  components: {
    Footer,
    MyPhotos,
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

<style scoped>
.dashboard {
  padding-top: 10px;
}
</style>