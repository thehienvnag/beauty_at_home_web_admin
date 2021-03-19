<template>
  <div class="card card-user">
    <div class="card-image"></div>
    <!---->
    <div class="card-body">
      <div class="author text-center">
        <vue-upload-multiple-image
          style="margin-left: 60px;"
          @upload-success="uploadImageSuccess"
          @before-remove="beforeRemove"
          @edit-image="editImage"
          :data-images="images"
          :multiple="false"
        ></vue-upload-multiple-image>
        <!-- <img
          src="@/assets/people/Trang.png"
          alt="..."
          class="avatar border-gray"
        /> -->
        <h4 class="title">Cao Quỳnh Trang<br /></h4>
        <small>Ảnh cá nhân</small>
      </div>
    </div>
    <div class="card-footer"></div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "ImageSection",
  data() {
    return {
      images: [
        {
          path:
            "https://shopee.vn/blog/wp-content/uploads/2019/01/c%C3%A1ch-trang-%C4%91i%E1%BB%83m-cho-d%C3%A2n-c%C3%B4ng-s%E1%BB%9F-e1546570756464.jpg",
          default: 1,
          highlight: 1,
          caption: "caption to display. receive", // Optional
        },
      ],
    };
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
