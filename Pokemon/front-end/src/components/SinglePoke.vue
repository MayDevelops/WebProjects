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

        <hr>

        <div v-if="trainer">
          <b-container class="bv-example-row">
            <b-row>
              <b-col><h1 class="pokeButton" @click="add">ADD</h1></b-col>
              <b-col v-if="numTimes > 0"><h1 class="pokeButton" @click="release()">RELEASE</h1></b-col>
            </b-row>
          </b-container>

          <hr>

        </div>
      </div>
      <div class="types">
        <b-table-simple small caption-top responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="2">Types</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <div v-for="type in card.types" v-bind:key="type.id">
                <b-td>{{
                    card.types[type.slot - 1].type.name.charAt(0).toUpperCase() + card.types[type.slot - 1].type.name.slice(1)
                  }}
                </b-td>
              </div>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SinglePoke",
  data() {
    return {
      card: {
        id: 0,
        name: '',
        sprite: {
          normal: '',
          HD: ''
        },
        types: [],
      },
      pokedex: [],
      times: 0,
    }
  },
  computed: {
    trainer() {
      return this.$root.$data.trainer;
    },
    currentPokedex() {
      return this.$root.$data.trainer.pokedexes[this.$root.$data.selector];
    },
    numTimes() {
      let currentDex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex;

      let thisTimes = 0;
      for (let i = 0; i < currentDex.length; i++) {
        if (currentDex[i] === this.$route.params.id) {
          thisTimes++;
        }
      }
      return thisTimes;
    }
  },
  methods: {
    async add() {
      let currentDex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex;
      if (currentDex === undefined) {
        currentDex = [];
      }
      this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex = [...currentDex, this.$route.params.id];
      try {
        await axios.put('/api/trainers/pokedex', {
          user: this.$root.$data.trainer,
          pokedexes: this.$root.$data.trainer.pokedexes
        });
      } catch (error) {
        console.log(error);
      }
    },
    async release() {
      for (let i = 0; i < this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex.length; i++) {
        if (this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex[i] === this.$route.params.id) {
          this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex.splice(i, 1);
          break;
        }
      }

      try {
        await axios.put('/api/trainers/pokedex', {
          user: this.$root.$data.trainer,
          pokedexes: this.$root.$data.trainer.pokedexes
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    try {
      let response = await axios.get("/api/pokes/" + this.$route.params.id);
      this.card.id = response.data.id;
      this.card.name = response.data.name;
      this.card.sprite.normal = response.data.sprite.normal;
      this.card.sprite.HD = response.data.sprite.HD;
      this.card.types = response.data.types;
    } catch (error) {
      this.error = error.response.data.message;
    }
  }
}

</script>

<style scoped>
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

.types {
  padding-left: 50px;
}
</style>
