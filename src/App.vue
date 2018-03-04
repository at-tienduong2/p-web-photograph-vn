<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button class="btn btn-primary" @click="test">12312</button>
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import * as types from './store/types'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      test: types.TEST
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
