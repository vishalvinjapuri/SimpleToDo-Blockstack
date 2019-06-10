<template>
  <div class="hello">
    <div>
    <center>
      <h1>Simple To-Do List</h1>
      <p>A decentralized To-do list application built on the <a href="https://blockstack.org" target="_blank">Blockstack platform</a></p>
      <button class="btn btn-default bg-white" @click.prevent="signIn">Sign In With Blockstack</button>
      </center>
    </div>
  </div>
</template>



<script>
import { userSession } from '../userSession'

export default {
  name: 'landing',
  methods: {
    signIn () {
      userSession.redirectToSignIn()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
