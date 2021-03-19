<template>
  <div class="card card-user">
    <div class="card-image"></div>
    <!---->
    <div class="card-body">
      <div class="author text-center">
        <vue-upload-multiple-image
          style="margin-left: 150px;"
          :data-images="images2"
          :multiple="false"
        ></vue-upload-multiple-image>
        <!-- <img
          src="@/assets/people/Trang.png"
          alt="..."
          class="avatar border-gray"
        /> -->
        <small>Ảnh cá nhân</small>
      </div>
    </div>
    <div class="card-footer"></div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary btn-fill mt-4 mb-4">
        ĐĂNG KÝ THÔNG TIN
      </button>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import Multiselect from "vue-multiselect";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "Image",
  data() {
    return {
      images: [],
      images2: [],
      selected: [],
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
