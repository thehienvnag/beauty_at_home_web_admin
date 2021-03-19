<template>
  <div class="container mt-4">
    <h1>Đăng ký thợ làm đẹp tự do</h1>
    <div class="row mt-2">
      <div class="card col-md-6">
        <edit-info/>
      </div>
      <div class="col-md-6">
        <image-pick/>
      </div>
    </div>
  </div>
</template>
<script>
import EditInfo from './Components/EditInfo.vue';
import ImagePick from './Components/ImagePick.vue';
export default {
  name: "EditProfile",
  components: {
    EditInfo,
    ImagePick
  },
};
</script>
