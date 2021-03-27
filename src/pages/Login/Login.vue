<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <AppLogo />
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Admin Dashboard</h3>"
        customHeader
      >
        <p class="widget-auth-info">
          Use your email to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert
            class="alert-sm"
            variant="danger"
            :show="tryLogin && !isLoginSuccess"
          >
            Tài khoản đăng nhập không hợp lệ, vui lòng sử dụng tài khoản khác!
          </b-alert>

          <div class="social-buttons">
            <b-button
              variant="primary"
              @click="login"
              class="social-button mb-2"
            >
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      2021 &copy; Beauty At Home
    </footer>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import AppLogo from "../../components/Utils/AppLogo.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginPage",
  components: { Widget, AppLogo },
  methods: {
    ...mapActions("auth", ["loginWithStore"]),
    async login() {
      await this.loginWithStore();
      console.log("//////////////" + this.isLoginSuccess);
      if (this.isLoginSuccess) {
        this.$router.push("/admin");
      } else {
        this.tryLogin = true;
      }
    },
  },
  data() {
    return {
      errorMessage: null,
      tryLogin: false,
    };
  },
  created() {},
  computed: {
    ...mapState("auth", ["isLoginSuccess"]),
  },
};
</script>

<style src="./Login.scss" lang="scss" scoped />
