<template>
  <div>
    <section>
      <div class="d-flex justify-content-center align-items-end mt-4">
        <img src="../../assets/logo-color.png" width="80" alt="" />
        <h3 class="text-white font-weight-bold ml-3" style="font-size: 36px">
          Beauty At Home
        </h3>
      </div>
    </section>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0" style="margin-bottom: 100px">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">
                  Hệ thống cung cấp dịch vụ làm đẹp tại nhà
                </h1>
                <p class="lead  text-white">
                  Chúng tôi giúp thợ làm đẹp tự do kết nối đến những khách hàng
                  có nhu cầu dùng dịch vụ tại nhà.
                </p>
              </div>
              <div class="col-lg-6">
                <div class="btn-wrapper text-right">
                  <b-button
                    class="mt-4"
                    variant="success"
                    style="font-size: 20px"
                    @click="this.gotoRegister"
                    >ĐĂNG KÝ TRỞ THÀNH ĐỐI TÁC CỦA CHÚNG TÔI</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/categories/category_v2/category_42d3a600.svg"
                    alt=""
                  />
                  <h6 class="text-primary text-uppercase">
                    Tăng nguồn thu nhập
                  </h6>
                  <p class="description mt-3">
                    Tăng nguồn thu nhập của bạn khi bạn nhận được nhiều đơn dịch
                    vụ hơn.
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/categories/category_v2/category_42889340.svg"
                    alt=""
                  />
                  <h6 class="text-success text-uppercase">
                    Tự chủ về thời gian
                  </h6>
                  <p class="description mt-3">
                    Bạn hoàn toàn tự quyết định thời gian làm việc của mình tùy
                    vào thời gian rảnh.
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <img src="../../assets/benefit.png" alt="" width="80" />
                  <h6 class="text-warning text-uppercase mt-3">
                    MỞ RỘNG NGUỒN KHÁCH HÀNG
                  </h6>
                  <p class="description mt-3">
                    Xây dụng nguồn khách quen thường xuyên sử dụng dịch vụ
                  </p>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    gotoRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/argon.scss";
</style>
