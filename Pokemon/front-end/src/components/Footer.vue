<template>
  <div class="github">
    <div class="center">
      <a href="https://github.com/MayDevelops/WebProjects/tree/master/Pokemon">
        <img :src="require('../../public/GitHub-Mark-64px.png')" alt=""/>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.github {
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.github img {
  border-radius: 50%;
  justify-content: center;
}

.center {
  justify-content: center;
  justify-items: center;
  text-align: center;
}
</style>