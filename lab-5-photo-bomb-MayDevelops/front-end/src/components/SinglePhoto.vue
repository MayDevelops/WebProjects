<template>
  <div class="hero">
    <div class="heroBox">
      <img :src="photo.path">
      <div class="photoInfo">
        <p class="photoTitle">{{ photo.title }} - {{photo.description}}</p>
        <p class="photoName">{{ user.username }}</p>
      </div>
      <p class="photoDate">{{ formatDate(photo.created) }}</p>




    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";

export default {
  name: "SinglePhoto",
  data() {
    return {
      photo: Object,
      user: Object,
      error: ''
    }
  },
  methods: {
    async getPhoto() {
      try {
        this.response = await axios.get("/api/photos/" + this.$route.params.id);
        this.photo = this.response.data;
        this.user = this.response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    formatDate(date) {
      return moment(date).format('MMMM d YYYY');
    }
  },
  created() {
    this.getPhoto();
  }
}

</script>

<style scoped>
.space-above {
  margin-top: 50px;
}

h1 {
  font-size: 28px;
  /*noinspection CssInvalidPropertyValue*/
  font-variant: capitalize;
  color: black;
}

.hero {
  padding: 120px;
  display: flex;
  justify-content: center;
}

.heroBox {
  text-align: center;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
</style>