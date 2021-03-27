<template>
  <div class="card card-user">
    <div class="card-image"></div>
    <!---->
    <div class="card-body">
      <div class="author text-center">
        <vue-upload-multiple-image
          style="margin-left: 140px"
          idUpload="avatar"
          @edit-image="changeImage"
          @upload-success="changeImage"
          @before-remove="beforeRemove"
        ></vue-upload-multiple-image>
        <p>Ảnh cá nhân <span class="text-danger">(*)</span></p>
      </div>
    </div>
    <div class="card-footer"></div>
    <div class="text-center">
      <button
        :disabled="isLoading"
        @click="handleRegister"
        class="btn btn-primary btn-fill mt-4 mb-4"
      >
        ĐĂNG KÝ THÔNG TIN
      </button>
    </div>
    <div v-show="isLoading" class="row ml-5 align-items-center pb-3">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
      <h5 class="my-0 ml-3">Thông tin đăng ký của bạn đang được gửi đi</h5>
    </div>

    <div v-show="isSuccess" class="row ml-3 align-items-center pb-3">
      <b-alert show variant="success" class="pl-0 pr-2">
        <h6 class="my-0 ml-3">
          <i
            class="fa fa-check text-white"
            aria-hidden="true"
            style="font-size: 19px;"
          ></i>
          Thông tin của bạn đã được gửi đến ADMIN để xác nhận đăng ký,
        </h6>
      </b-alert>
      <p>
        Vui lòng kiểm tra tài khoản Gmail đã đăng ký để bắt đầu sử dụng
      </p>
    </div>

    <div v-show="errors && errors.length">
      <ul id="example-1">
        <li
          class="text-danger ml-5"
          v-for="(item, index) in errors"
          :key="index"
        >
          (*) {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { postFormData } from "../../../utils/utils";
import { mapActions, mapState } from "vuex";
import Widget from "@/components/Widget/Widget";
import Multiselect from "vue-multiselect";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "Image",
  data() {
    return {
      isSuccess: false,
      isLoading: false,
      errors: [],
      options: [
        { name: "Makeup - Trang điểm", language: "JavaScript" },
        { name: "Waxing", language: "Ruby" },
        { name: "Nails - Làm móng", language: "Ruby" },
        { name: "Phun xăm thẩm mỹ", language: "JavaScript" },
        { name: "Chăm sóc & cắt tóc", language: "Ruby" },
        { name: "Chăm sóc da", language: "Ruby" },
        { name: "Massage", language: "Ruby" },
      ],
    };
  },
  computed: {
    ...mapState("form", ["formData", "isFormData"]),
  },
  methods: {
    ...mapActions("form", ["handleImage"]),
    beforeRemove(index, done, fileList) {
      done();
      this.handleImage(["imagesAvatar", fileList]);
    },
    changeImage(formData, index, fileList) {
      this.handleImage(["imagesAvatar", fileList]);
    },
    async handleRegister() {
      this.errors = [];
      console.log(this.formData);

      const displayName = this.formData?.displayName;
      const phone = this.formData?.phone;
      const address = this.formData?.address;
      const imagesAvatar = this.formData?.imagesAvatar;
      const imagesCertificates = this.formData?.imagesCertificates;

      if (!displayName || displayName.length < 5) {
        this.errors.push("Thông tin họ và tên phải có ít nhất 5 ký tự");
      }
      if (!phone || phone.length < 10) {
        this.errors.push("Thông tin số điện thoại phải có ít nhất 10 ký tự");
      }
      if (!address) {
        this.errors.push("Thông tin địa chỉ bắt buộc phải có");
      }
      if (!imagesCertificates || imagesCertificates.length == 0) {
        this.errors.push("Ảnh về chứng về làm đẹp hoặc giải thưởng phải có");
      }
      if (!imagesAvatar || imagesAvatar.length == 0) {
        this.errors.push("Ảnh đại diện phải có");
      }
      if (!this.errors.length) {
        try {
          this.errors = [];
          this.isLoading = true;
          this.isSuccess = false;
          await postFormData(this.formData, "auth/register");
          this.isSuccess = true;
        } catch (error) {
          this.errors.push("Email đã tồn tại trên hệ thống!");
        }
      }
      this.isLoading = false;
    },
  },

  components: {
    Multiselect,
    VueUploadMultipleImage,
    Widget,
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.card-image {
  height: 80px;
  background-color: #eaf0f6;
}
.author {
  .avatar {
    width: 124px;
    height: 124px;
    border: 5px solid #fff;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 15px;
    border-radius: 50%;
  }
  .title {
    margin-top: 70px;
  }
}
</style>
