<template>
  <div class="hero">
    <div class="heroBox">
      <img :src="photo.path">
      <div class="photoInfo">
        <p class="photoTitle">{{ photo.title }} - {{ photo.description }}</p>
        <p class="photoName">{{ user.username }}</p>
      </div>
      <p class="photoDate">{{ formatDate(photo.created) }}</p>

      <div v-if="loggedInUser">
        <form class="pure-form" @submit.prevent="addTicket">
          <legend>Describe your problem for us.</legend>
          <fieldset>
            <textarea v-model="comment"></textarea>
            <br/>
            <button @click="cancelCreating" class="pure-button space-right">Cancel</button>
            <button class="pure-button pure-button-primary" type="submit">Submit</button>
          </fieldset>
        </form>
        <div v-for="ticket in tickets">
          <div class="ticket">
            <div class="problem">
              <h3><label>{{ ticket.user }}</label> - {{ time(ticket.created) }}</h3>
              <p>{{ ticket.comment }}</p>
              <!--              <p v-if="ticket.response"><i>{{ ticket.response }}</i></p>-->
              <!--              <p v-else><i>No response yet</i></p>-->
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<!--
Right now I can't get the root photo information to load initially when the component is
initialized. I'm trying to get the root photo info before the component is fully loaded so I can send that to the
back end api and make the request.

{PHOTO_ID} -> API -> QUERY THE DB FOR ALL PHOTOS WITH THIS ID ->
TICKETS ARE DISPLAYED TO USER FOR ONLY THIS PHOTO <- RETURNED COMMENTS ARE ASSIGNED TO "TICKETS"(for now...) <- ARRAY OF COMMENTS RETURNED FROM API <-


Currently the initial photo id is always null?
-->

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
      tickets: []
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
      console.log(this.$root.$data.photo);
      try {
        let response = await axios.get("/api/comments/" + this.currentPhoto._id);
        console.log(response.data);
        this.tickets = response.data;
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
    },
    async addTicket() {
      try {
        await axios.post("/api/comments", {
          user: (this.loggedInUser.firstName + " " + this.loggedInUser.lastName),
          photo: this.photo,
          comment: this.comment,
        });
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
</style>