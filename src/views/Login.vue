<template>
  <div
    class="d-flex justify-content-center align-items-center w-100"
    id="loginpage"
  >
    <form @submit.prevent="handleSubmit" class="col-12 col-sm-6 col-md-4">
      <div class="d-flex justify-content-center">
        <b-icon icon="person-badge-fill" style="zoom:2;"></b-icon>
      </div>

      <div class="floating-label-group mt-5">
        <b-form-input
          type="text"
          id="username"
          class="p-0"
          autocomplete="off"
          autofocus
          required
          v-model="email"
          :state="uservalidation"
        >
        </b-form-input>
        <b-form-invalid-feedback :state="uservalidation">
          Cannot be empty
        </b-form-invalid-feedback>
        <label class="floating-label">User</label>
      </div>

      <div class="floating-label-group mt-5">
        <b-form-input
          type="password"
          id="password"
          class="p-0"
          autocomplete="off"
          autofocus
          required
          v-model="password"
          :state="passvalidation"
        >
        </b-form-input>
        <b-form-invalid-feedback :state="passvalidation">
          Cannot be empty
        </b-form-invalid-feedback>
        <label class="floating-label">Password</label>
      </div>
      <br />
      <div class="d-flex justify-content-center">
        <button class="btn login-btn" v-if="!email || !password" disabled>LOGIN</button>
        <button class="btn login-btn" v-if="email && password">LOGIN</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    uservalidation () {
      return this.email.length > 0
    },
    passvalidation () {
      return this.password.length > 0
    }
  },
  methods: {
    ...mapActions('auth', ['authenticate']),

    handleSubmit () {
      const { email, password, authenticate, $router } = this

      authenticate({ strategy: 'local', email, password }).then((_) => {
        $router.push('/account')
      })
    }
  }
}
</script>

<style scoped>
#loginpage {
  height: calc(100vh - 60px);
}

.floating-label-group {
  position: relative;
  margin-top: 15px;
  margin-bottom: 25px;
}
.floating-label-group .floating-label {
  font-size: 16px;
  color: #1976d2;
  position: absolute;
  pointer-events: none;
  top: 0px;
  left: 0px;
  transition: all 0.3s ease;
}
.floating-label-group .form-control.is-invalid:focus ~ .floating-label {
  top: -15px;
  bottom: 0px;
  left: 0px;
  font-size: 12px;
  opacity: 1;
  color: red;
}
.floating-label-group .form-control.is-invalid ~ .floating-label {
   font-size: 16px;
    color: red;
    position: absolute;
    pointer-events: none;
    top: 0px;
    left: 0px;
    transition: all 0.3s ease;
}

.floating-label-group .form-control.is-valid ~ .floating-label {
  top: -15px;
  bottom: 0px;
  left: 0px;
  font-size: 12px;
  opacity: 1;
  color: #1976d2;
}

.form-control {
  background-color: transparent;
  border: none;
  border-radius: inherit;
  outline: none;
  width: 100%;
  font-size: 1em;
  box-sizing: border-box;
  padding-bottom: 5px;
  border-bottom: 2px solid #797979;
}

.form-control:focus {
  border-bottom: solid 2px #1976d2;
  transition: 1s;
  -webkit-box-shadow: none !important;
}

.form-control.is-valid, .form-control.is-valid:focus{
  background: none;
  border-color: #1976d2
}

.form-control.is-invalid{
  background: none;
}

.form-control.is-invalid:focus{
  background: none;
}

.login-btn{
  background-color: #f5f5f5;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  color: rgba(0,0,0,.87);
  padding: 0 16px;
  min-width: 88px;
  font-weight: 500;
  margin: 6px 8px;
  height: 36px;
  border-radius: 2px;
}
</style>
