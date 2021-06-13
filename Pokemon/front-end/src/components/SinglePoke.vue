<template>
  <div class="hero">
    <div class="heroBox">
      <img :src="card.sprite.HD" alt="">
      <div class="photoInfo">
        <p>card name: {{ card.name }}</p>
      </div>

      <hr>

      <div v-if="loggedInUser">
        <h1>{{loggedInUser.username}}</h1>
        <h1>{{currentPokedex}}</h1>
        <h1 @click="add()">ADD</h1>
        <h1 @click="release()">RELEASE</h1>


      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SinglePhoto",
  data() {
    return {
      card: {
        trainer: '',
        abilities: [],
        id: 0,
        name: '',
        sprite: {
          normal: '',
          HD: ''
        },
        types: [],
      },
      pokedex: []
    }
  },
  methods: {
    async getPokes() {
      try {
        this.response = await axios.get("/api/pokes/" + this.$route.params.id);
        this.card.trainer = this.response.data.trainer;
        this.card.abilities = this.response.data.abilities;
        this.card.id = this.response.data.id;
        this.card.name = this.response.data.name;
        this.card.sprite.normal = this.response.data.sprite.normal;
        this.card.sprite.HD = this.response.data.sprite.HD;
        this.card.types = this.response.data.types;

      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async getTrainer() {
      try {
        let response = await axios.get('/api/trainers');
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },

    async getPokedex() {
      try {
        let response = await axios.get('/api/comments/' + this.$root.$data.user._id);
        this.$root.$data.pokedex = response.data[0].pokedex;
      } catch (error) {
        this.$root.$data.pokedex = null;
      }
    },
    async add() {
      let cards = this.currentPokedex;
      cards.push(this.$route.params.id);
      try {
        await axios.put('/api/comments/' + this.$route.params.id, {
          user: this.$root.$data.user,
          pokedex: cards
        });
        this.$root.$data.pokedex = cards;

      } catch (error) {
        console.log(error);
      }
    },
    async release() {
      console.log('user: ' + this.$root.$data.user._id);
      console.log('id: ' + this.$route.params.id);
      let cards = this.currentPokedex;
      console.log(cards.length);

      for(let i = 0; i < cards.length; i++) {
        if(cards[i] === this.$route.params.id) {
          console.log('deleting ' + this.$route.params.id + ' with ' + cards[i]);
          cards.splice(i,1);
          break;
        }
      }

      try {
        await axios.put('/api/comments/' + this.$route.params.id, {
          user: this.$root.$data.user,
          pokedex: cards
        });
        this.$root.$data.pokedex = cards;

      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    loggedInUser() {
      return this.$root.$data.user;
    },
    currentPokedex() {
      return this.$root.$data.pokedex;
    }
  },
  created() {
    this.getPokes();
    this.getTrainer();
    this.getPokedex();
  },

}

</script>

<style scoped>
/*.space-above {*/
/*  margin-top: 50px;*/
/*}*/

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

/*.error {*/
/*  margin-top: 10px;*/
/*  display: inline;*/
/*  padding: 5px 20px;*/
/*  border-radius: 30px;*/
/*  font-size: 10px;*/
/*  background-color: #d9534f;*/
/*  color: #fff;*/
/*}*/

.photoInfo {
  font-size: larger;
}
</style>
