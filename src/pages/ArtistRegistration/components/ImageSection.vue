<template>
  <div class="card card-user">
    <div class="card-image"></div>
    <!---->
    <div class="card-body">
      <div class="author text-center">
        <vue-upload-multiple-image
          style="margin-left: 60px;"
          :data-images="images"
          :multiple="false"
        ></vue-upload-multiple-image>
        <!-- <img
          src="@/assets/people/Trang.png"
          alt="..."
          class="avatar border-gray"
        /> -->
        <h4 class="title">{{ currentWorker.displayName }}<br /></h4>
        <small>Ảnh cá nhân</small>
      </div>
    </div>
    <div class="card-footer"></div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import { mapState } from "vuex";

export default {
  name: "ImageSection",
  data() {
    return {};
  },
  computed: {
    ...mapState("worker", ["currentWorker"]),
    images() {
      if (this.currentWorker && this.currentWorker.gallery) {
        return this.currentWorker?.gallery?.images
          ?.filter((img) => img.description === "customer-avatar")
          .map((img, i) => {
            const isDefault = i === 0;
            return {
              path: img.imageUrl,
              default: isDefault,
            };
          });
      }
    },
  },
  components: {
    VueUploadMultipleImage,
  },
};
</script>

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
