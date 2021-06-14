<template>
  <div>
    <div class="title">
      <div class="heroBox">
        <div class="pokeTitle">
          <span>{{ card.name.charAt(0).toUpperCase() + card.name.slice(1) }}</span>
        </div>
      </div>
    </div>
    <div class="hero">
      <div class="heroBox">
        <img :src="card.sprite.HD" alt="">
        <div class="photoInfo">

        </div>

        <hr>

        <div v-if="loggedInUser">
          <b-container class="bv-example-row">
            <b-row>
              <b-col><h1 class="pokeButton" @click="add()">ADD</h1></b-col>
              <b-col v-if="numTimes > 0"><h1 class="pokeButton" @click="release()">RELEASE</h1></b-col>
            </b-row>
          </b-container>

<!--          <h2>Times in deck: {{ numTimes }}</h2>-->


        </div>
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
      pokedex: [],
      times: 0
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
        let response = await axios.get('/api/pokedex/' + this.$root.$data.user._id);
        this.$root.$data.pokedex = response.data[0].pokedex;
      } catch (error) {
        this.$root.$data.pokedex = null;
      }
    },
    async add() {
      let cards = this.currentPokedex;
      cards.push(this.$route.params.id);
      try {
        await axios.put('/api/pokedex/' + this.$route.params.id, {
          user: this.$root.$data.user,
          pokedex: cards
        });
        this.$root.$data.pokedex = cards;

      } catch (error) {
        console.log(error);
      }
    },
    async release() {
      let cards = this.currentPokedex;

      for (let i = 0; i < cards.length; i++) {
        if (cards[i] === this.$route.params.id) {
          cards.splice(i, 1);
          break;
        }
      }

      try {
        await axios.put('/api/pokedex/' + this.$route.params.id, {
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
    },
    numTimes() {
      let cards = this.currentPokedex;
      let thisTimes = 0;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i] === this.$route.params.id) {
          thisTimes++;
        }
      }
      return thisTimes;
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
  padding: 100px;
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

.title {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.pokeTitle {
  font-size: 40px;
  font-weight: bold;
}

.pokeButton:hover {
  cursor: pointer;
}
</style>
