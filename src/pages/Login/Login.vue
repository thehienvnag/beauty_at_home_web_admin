<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <AppLogo/>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Admin Dashboard</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" ref="email" required type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" ref="password" required type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Login</b-button>
          <p class="widget-auth-info">or sign in with</p>
          <div class="social-buttons">
            <b-button variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
          </div>
        </form>
        <router-link class="d-block text-center" to="login">Forget your password?</router-link>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2021 &copy; Beauty At Home 
    </footer>
  </div>
</template>

<script>

import Widget from '@/components/Widget/Widget';
import AppLogo from '../../components/Utils/AppLogo.vue';

export default {
  name: 'LoginPage',
  components: { Widget, AppLogo },
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    login() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (email.length !== 0 && password.length !== 0) {
        window.localStorage.setItem('authenticated', true);
        this.$router.push('admin/dashboard');
      }
    },
  },
  created() {
  },
};
</script>

<style src="./Login.scss" lang="scss" scoped />
