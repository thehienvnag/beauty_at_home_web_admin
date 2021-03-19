<template>
  <div class="card card-user">
    <div class="card-image"></div>
    <!---->
    <div class="card-body">
      <div class="author text-center">
        ><img
          src="@/assets/people/Trang.png"
          alt="..."
          class="avatar border-gray"
        />
        <h4 class="title">
          Cao Quỳnh Trang<br />
          <small>@trangcao</small>
        </h4>
      </div>
      <p class="description text-center">
        Site Administrator
      </p>
    </div>
    <div class="card-footer">
      <div class="text-center">
        <button href="#" class="btn btn-simple">
          <i class="fa fa-facebook-square"></i>
        </button>
        <button href="#" class="btn btn-simple">
          <i class="fa fa-twitter"></i>
        </button>
        <button href="#" class="btn btn-simple">
          <i class="fa fa-google-plus-square"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSection",
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
