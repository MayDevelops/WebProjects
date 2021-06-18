<template>
  <div class="pokeWrapper">
    <div class="pokes">
      <div class="poke" v-for="poke in poke" :key="poke.id">
        <router-link :to="{ name: 'Poke', params: { id: poke._id }}"><img :src="poke.sprite.normal">
          <div class="pokeName">
            <h1>{{ poke.name.charAt(0).toUpperCase() + poke.name.slice(1) }}</h1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    poke: Array
  },
  methods: {}
}
</script>

<style scoped>
.pokeWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.poke {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.poke img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.pokeName h1 {
  font-size: 16px;
  position: relative;
  z-index: 100;
  top: -20px;
  left: 10px;
}

.pokeName h2 {
  font-size: 14px;
}

.pokeName p {
  margin: 0px;
  font-size: 10px;
}
</style>
