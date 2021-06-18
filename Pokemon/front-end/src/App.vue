<template>
  <div id="app">
    <div v-if="this.$root.$data.trainer">
      <h1 style="margin-left: 15px;">Welcome Pokemon Trainer, {{this.$root.$data.trainer.username}}</h1>
    </div>
    <div v-else>
      <h1>Welcome, please sign in to start training!</h1>
    </div>

        <b-nav tabs>
          <b-nav-item to="/" exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/dashboard" exact-active-class="active">My Pokemon</b-nav-item>
        </b-nav>
    <router-view/>
  </div>
</template>

<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */

body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
}

#header {
  /* Semi-circle */
  margin: 0 1em 1em 0;
  height: 100px;
  width: 200px;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #e74c3c;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: black;
  font-size: 18px;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}
</style>
<script>
export default {
}
</script>