<template>
  <div class="container mt-4">
    <h1>Đăng ký thợ làm đẹp tự do</h1>
    <div class="card d-flex" style="width: 500px;">
      <div class="ml-3">
        <div class="social-buttons">
          <b-button
            variant="info mt-3"
            @click="login"
            class="social-button mb-2"
          >
            Kiểm tra trình trạng đăng ký
          </b-button>
        </div>
      </div>
      <div class="ml-3">
        <p v-show="isTrying && !isLoginSuccess" class="text-warning">
          Đơn đăng ký của bạn đang được duyệt!
        </p>
        <p v-show="isLoginSuccess" class="text-success">
          Đơn đăng ký của bạn đã được duyệt thành công!
        </p>
      </div>
    </div>
    <div class="row mt-2">
      <div class="card col-md-6">
        <edit-info />
      </div>
      <div class="col-md-6">
        <image-pick />
      </div>
    </div>
  </div>
</template>
<script>
import EditInfo from "./Components/EditInfo.vue";
import ImagePick from "./Components/ImagePick.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "EditProfile",
  components: {
    EditInfo,
    ImagePick,
  },
  data() {
    return {
      isTrying: false,
    };
  },
  methods: {
    ...mapActions("auth", ["loginWithStore"]),
    async login() {
      this.isTrying = true;
      await this.loginWithStore("WORKER");
    },
  },
  computed: {
    ...mapState("auth", ["isLoginSuccess"]),
  },
};
</script>
