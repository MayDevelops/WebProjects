<template>
  <div>
    <section class="pokemon-gallery">
      <div class="image" v-for="card in cards" v-bind:key="card._id">
        <router-link :to="{ name: 'Photo', params: { id: card._id }}"><img :src="card.sprite.normal">
          <div class="photoInfo">
            <p class="photoTitle">{{ card.name }}</p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'PokemonGallery',
  props: {
    cards: Array
  },
  methods: {

  }
}
</script>

<style scoped>
.photoInfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
}

.photoInfo p {
  margin: 0px;
}

.photoDate {
  font-size: 0.7em;
  font-weight: normal;
}

p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.pokemon-gallery {
  column-gap: 1em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .pokemon-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .pokemon-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .pokemon-gallery {
    column-count: 2;
  }
}
</style>