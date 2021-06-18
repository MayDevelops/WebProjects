<template>
  <div>
    <Slide right>
      <div class="sliderWrapper">
        <!--        <div class="sliderPokedexTitle">-->
        <!--          <span>Pokedexes:</span>-->
        <!--        </div>-->
        <!--        <div class="sliderPokedexes">-->
        <!--          <b-list-group class="listGroup">-->
        <!--            <b-list-group-item class="listGroupItem" button @click="selectPokedex(pokedex.name)"-->
        <!--                               v-for="pokedex in allPokedexes"-->
        <!--                               v-bind:key="pokedex._id">{{ pokedex.name }}-->
        <!--            </b-list-group-item>-->
        <!--          </b-list-group>-->
        <!--        </div>-->

        <!--        <hr>-->

        <!--        <div class="sliderPokedexTitle">-->
        <!--          <span>Create:</span>-->
        <!--          <input v-model="createText" placeholder="Pokedex Name">-->
        <!--          <button type="submit" class="createButton" @click.prevent="createPokedex(createText)">Create-->
        <!--          </button>-->
        <!--        </div>-->

        <!--        <hr>-->

        <!--        <div class="sliderPokedexTitle">-->
        <!--          <span>Rename:</span>-->
        <!--          <input v-model="renameText" placeholder="New Pokedex Name">-->
        <!--          <button type="submit" class="createButton" @click.prevent="renamePokedex(renameText)">Rename-->
        <!--          </button>-->
        <!--        </div>-->

        <!--        <hr>-->

        <!--        <div class="sliderPokedexTitle">-->
        <!--          <span>Delete:</span>-->
        <!--          <br>-->
        <!--          <button type="submit" class="createButton" @click.prevent="deletePokedex()">Delete-->
        <!--          </button>-->
        <!--        </div>-->

        <!--        <div class="menu">-->
        <!--          <h2 class="menuText">Log Out <a @click="logout"><i-->
        <!--              class="fas fa-sign-out-alt hover"></i></a></h2>-->
        <!--        </div>-->

        <b-container class="bv-example-row">
          <b-row>
            <div class="sliderPokedexTitle">
              <span>Pokedexes:</span>
            </div>
          </b-row>
          <b-row>
            <div class="sliderPokedexes">
              <b-list-group class="listGroup">
                <b-list-group-item class="listGroupItem" button @click="selectPokedex(pokedex.name)"
                                   v-for="pokedex in allPokedexes"
                                   v-bind:key="pokedex._id">{{ pokedex.name }}
                </b-list-group-item>
              </b-list-group>
            </div>
          </b-row>
          <hr>
          <b-row>
            <div class="sliderPokedexTitle">
              <span>Create:</span>
              <input v-model="createText" placeholder="Pokedex Name">
              <button type="submit" class="createButton" @click.prevent="createPokedex(createText)">Create
              </button>
            </div>
          </b-row>
          <hr>
          <b-row>
            <div class="sliderPokedexTitle">
              <span>Rename:</span>
              <input v-model="renameText" placeholder="New Pokedex Name">
              <button type="submit" class="createButton" @click.prevent="renamePokedex(renameText)">Rename
              </button>
            </div>
          </b-row>
          <hr>
          <b-row>
            <div class="sliderPokedexTitle">
              <span>Delete:</span>
              <br>
              <button type="submit" class="createButton" @click.prevent="deletePokedex()">Delete
              </button>
            </div>
          </b-row>
          <hr>
          <b-row>
            <div class="menu">
              <h2 class="menuText">Log Out <a @click="logout"><i
                  class="fas fa-sign-out-alt hover"></i></a></h2>
            </div>
          </b-row>
          <b-row>
            <div style="margin-top: 15px;">
              <a href="https://github.com/MayDevelops/WebProjects/tree/master/Pokemon">
                <img :src="require('../../public/GitHub-Mark-64px.png')" alt=""/>
              </a>
            </div>
          </b-row>

        </b-container>


      </div>
    </Slide>


    <h1 class="center">{{ currentPokedexName }}</h1>
    <h1 class="shortBorder"></h1>

  </div>

</template>

<script>
import axios from 'axios';
import {Slide} from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`


export default {
  name: 'PokedexNavigator',
  components: {
    Slide // Register your component
  },
  data() {
    return {
      renameText: '',
      createText: '',
      selectedPokedex: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.trainer;
    },
    currentPokedex() {
      return this.$root.$data.trainer.pokedexes[this.$root.$data.selector].pokedex;
    },
    currentPokedexName() {
      return this.selectedPokedex;
    },
    allPokedexes() {
      return this.$root.$data.trainer.pokedexes;
    }
  },
  methods: {
    async createPokedex(message) {
      let currentDexs = this.$root.$data.trainer.pokedexes;
      const newDex = {
        name: message,
        pokedex: []
      }

      this.$root.$data.trainer.pokedexes = [...currentDexs, newDex];
      try {
        await axios.put('/api/trainers/pokedex', {
          user: this.$root.$data.trainer,
          pokedexes: this.$root.$data.trainer.pokedexes
        });
      } catch (error) {
        console.log(error);
      }
      this.$root.$data.selector = (this.$root.$data.trainer.pokedexes.length) - 1;
      this.selectedPokedex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name;
      this.$emit("syncDex");
      this.createText = '';
    },
    async renamePokedex(message) {

      this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name = message;

      try {
        await axios.put('/api/trainers/pokedex', {
          user: this.$root.$data.trainer,
          pokedexes: this.$root.$data.trainer.pokedexes
        });
      } catch (error) {
        console.log(error);
      }
      this.selectedPokedex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name;
      this.$emit("syncDex");
      this.renameText = '';
    },

    async deletePokedex() {
      for (let i = 0; i < this.$root.$data.trainer.pokedexes.length; i++) {
        if (this.$root.$data.trainer.pokedexes[i].name === this.selectedPokedex) {
          this.$root.$data.trainer.pokedexes.splice(i, 1);
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
      this.$root.$data.selector = 0;
      this.selectedPokedex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name;
      this.$emit("syncDex");

    },
    async selectPokedex(event) {
      //find the pokedex with the matching name as the selected pokedex
      for (let i = 0; i < this.$root.$data.trainer.pokedexes.length; i++) {
        if (event === this.$root.$data.trainer.pokedexes[i].name) {
          this.$root.$data.selector = i;
          this.$emit('syncDex');
          break;
        }
      }
      this.selectedPokedex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name;

    },
    async logout() {
      try {
        await axios.delete("/api/trainers");
        this.$root.$data.trainer = null;
      } catch (error) {
        this.$root.$data.trainer = null;
      }
    },
  },
  async created() {
    try {
      let response = await axios.get('/api/pokedex/' + this.$root.$data.trainer._id);
      this.$root.$data.pokedexes = response.data;
    } catch (error) {
      this.$root.$data.pokedex = null;
    }
    this.selectedPokedex = this.$root.$data.trainer.pokedexes[this.$root.$data.selector].name;
  }
}
</script>

<style>

.center {
  font-size: 3.5em;
  margin-bottom: 0;
  padding-bottom: 0;
  text-align: center;
}

.shortBorder {
  margin-left: 25%;
  border-bottom: 2px solid black;
  width: 50%;
}

.sliderWrapper {
  width: 300px;
  color: #b8b7ad;
  font-size: 20px;
  margin: 0;
}

.sliderPokedexTitle {
  justify-self: left;
  color: #F2921D;
}

.createButton {
  text-align: center;
  width: 50%;
  background: rgba(0, 0, 0, 0.84);
  color: #F2921D;
  border-radius: 10px;
}

.sliderPokedexes {
  background: #373a47;
}

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
}

.bm-burger-bars {
  background-color: #373a47;
}

.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}

.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}

.bm-cross {
  background: #F2921D;

}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

/*Can change the last value to 0.3 to create the grey overlay*/
.bm-overlay {
  background: rgba(0, 0, 0, 0);
}

.bm-item-list {
  color: #b8b7ad;
  font-size: 20px;
  margin: 0;

}

.bm-item-list > * {
  display: inline-block;
  text-decoration: none;
  margin: 0;
  align-content: flex-start;
}

.bm-item-list > * > span {
  font-weight: 700;
  color: white;
}

.menuText {
  font-size: 1.5em;
}

.hover {
  cursor: pointer;
}

.fas {
  font-size: 1em;
}

.fa-sign-out-alt {
  color: #F2921D;
}

.listGroup {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.listGroupItem {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>