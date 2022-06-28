<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar">
      <b-navbar-brand href="/">Demo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav v-if="!user">
            <b-nav-item href="/login">LOGIN</b-nav-item>
            <b-nav-item href="/signup">SIGN UP</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-if="user">
            <b-nav-item href="/login" @click.prevent="handleLogout">LOGOUT</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavbarView',
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),

    handleLogout () {
      this.logout()
        .then(_ => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
    background-color: #1565c0;
    height: 64px;
    box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    padding: 0 40px;
}
.navbar-brand{
    font-weight: 500;
}
.navbar-nav .nav-item .nav-link{
    color: #fff;
    font-size: 14px;
    font-weight: 500;
}

#nav-collapse{
    background-color: #1565c0;
    padding: 0px 10px;
}
</style>
