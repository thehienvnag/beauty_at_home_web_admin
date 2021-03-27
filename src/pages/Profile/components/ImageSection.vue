<template>
  <div class="card card-user">
    <div class="card-image"></div>
    <!---->
    <div class="card-body">
      <div class="author text-center">
        <img :src="avatar" alt="..." class="avatar border-gray" />
        <b-form-file
          v-model="file"
          @input="handleImage"
          ref="file-input"
          class="mt-5 fileButton btn btn-light"
          plain
        ></b-form-file>

        <h4 class="title">
          {{ authState.displayName }}<br />
          <small>@{{ authState.email }}</small>
        </h4>
      </div>
      <p class="description text-center">
        Site Administrator
      </p>
    </div>
    <div class="card-footer">
      <div class="text-center"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ImageSection",
  computed: {
    ...mapState("auth", ["authState"]),
    avatar() {
      if (this.file != null) {
        return URL.createObjectURL(this.file);
      }
      return this.authState.gallery?.images[0]?.imageUrl;
    },
  },
  data: () => {
    return {
      file: null,
    };
  },
  methods: {
    ...mapActions("auth", ["changeProfilePart"]),
    handleImage(file) {
      this.file = file;
      this.changeProfilePart({ file: file });
    },
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
  .fileButton {
    position: absolute;
    top: 210px;
    left: 95px;
    width: 240px;
  }
}
</style>
