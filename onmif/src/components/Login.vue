<template>
  <div class="text-center">
    <form class="form-signin" @submit.prevent="handleLogin">
      <img class="mb-4" src="./assets/logo.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Basic local authentication logic
      if (this.email === 'user@example.com' && this.password === 'password') {
        // Logic for successful login
        alert('Login successful');
        // Redirect to dashboard or another page
      } else {
        // Logic for failed login
        alert('Invalid credentials');
      }
    }
  }
}
</script>
