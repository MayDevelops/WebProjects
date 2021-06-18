<template>
  <div class="loginPage">
    <div class="loginElements">


      <div v-if="!registerUser">

        <b-card
            border-variant="primary"
            header="Login"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
        >
          <input placeholder="username" v-model="usernameLogin">
          <input type="password" placeholder="password" v-model="passwordLogin">
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
        </b-card>
        <span @click="registerUser = !registerUser" v-if="!registerUser" class="pure-form">Register Here</span>
      </div>

      <div v-if="registerUser">

        <b-card
            border-variant="primary"
            header="Register"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
        >
          <input placeholder="username" v-model="username">
          <input type="password" placeholder="password" v-model="password">
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Register</button>
        </b-card>
        <span @click="registerUser = !registerUser" v-if="registerUser" class="pure-form">Login Here</span>

      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      registerUser: false,
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    }
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.username || !this.password)
        return;
      try {
        let trainerResponse = await axios.post('/api/trainers', {
          username: this.username,
          password: this.password,
        });
        this.$root.$data.trainer = trainerResponse.data.trainer;

      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.trainer = null;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let trainerResponse = await axios.post('/api/trainers/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.trainer = trainerResponse.data.trainer;

      } catch (error) {
        console.log(error);

        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.trainer = null;
      }
    },
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
}

.loginPage {
  padding: 120px;
  display: flex;
  justify-content: center;
}

.loginElements {
  text-align: center;
}

.loginPage form {
  font-size: 14px;
}

.loginPage form legend {
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