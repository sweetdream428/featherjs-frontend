<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!user" to="/login">Login</router-link>
      <router-link v-if="user" to="/account">Account</router-link><span v-if="user"> | </span>
      <a v-if="user" @click.prevent="handleLogout" href="#">Logout</a>
    </div> -->
    <NavbarVue />
    <router-view/>
  </div>
</template>

<script>
import NavbarVue from './layouts/Navbar.vue'

export default {
  name: 'app',
  components: {
    NavbarVue
  }
}
</script>

<style>

</style>
