<template>
  <div class="hero">
    <div class="heroBox">
      <img :src="photo.path">
      <div class="photoInfo">
        <p class="photoTitle"><strong>{{ photo.title }}</strong> - <i>{{ photo.description }}</i></p>
        <p class="photoName">{{ user.username }} - {{ formatDate(photo.created) }}</p>
      </div>

      <hr>

      <div v-if="loggedInUser">
        <form class="pure-form" @submit.prevent>
          <legend>Leave a comment</legend>
          <fieldset>
            <textarea v-model="comment"></textarea>
            <br/>
            <button @click="cancelCreating" class="pure-button space-right">Cancel</button>
            <button @click="addTicket" class="pure-button pure-button-primary" type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
      <div v-for="comment in comments">
        <div class="ticket">
          <div class="problem">
            <h3><label>{{ comment.user }}</label> - {{ time(comment.created) }}</h3>
            <p>"{{ comment.comment }}"</p>
          </div>
        </div>
      </div>


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
      error: '',
      comment: '',
      creating: false,
      comments: []
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
    async getUser() {
      try {
        let response = await axios.get('/api/users');
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    formatDate(date) {
      return moment(date).format('MMMM d YYYY');
    },
    async getTickets() {
      try {
        let response = await axios.get("/api/comments/" + this.$route.params.id);
        this.comments = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    time(d) {
      return moment(d).format('MMMM D YYYY');
    },
    setCreating() {
      this.creating = true;
    },
    cancelCreating() {
      this.creating = false;
      this.comment = '';
    },
    async addTicket() {
      try {
        await axios.post("/api/comments", {
          user: (this.loggedInUser.firstName + " " + this.loggedInUser.lastName),
          photo: this.photo,
          comment: this.comment,
        });
        this.comment = '';
        this.creating = false;
        this.getTickets();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    loggedInUser() {
      return this.$root.$data.user;
    },
    currentPhoto() {
      return this.$root.$data.photo;
    }
  },
  created() {
    this.getPhoto();
    this.getUser();
    this.getTickets();
  },

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

.photoInfo {
  font-size: larger;
}
</style>