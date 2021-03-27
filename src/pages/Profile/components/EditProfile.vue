<template>
  <div class="card">
    <!---->
    <div class="card-header"><h4 class="card-title">Edit Profile</h4></div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">Họ và tên</label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Full Name"
                class="form-control"
                :value="authState.displayName"
                @input="(e) => changePart(e, 'displayName')"
              />
              <!---->
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">
                Email
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="email"
                placeholder="Email"
                class="form-control"
                :value="authState.email"
                :disabled="true"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label">
                Số điện thoại
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Phone Number"
                class="form-control"
                :value="authState.phone"
                @input="(e) => changePart(e, 'phone')"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label">
                Địa chỉ
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Home Address"
                class="form-control"
                :value="address"
                :disabled="true"
                @input="(e) => changePart(e, 'address')"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="text-center">
          <button
            type="button"
            @click="handleUpdate"
            class="btn btn-info btn-fill float-right"
          >
            Cập nhật thông tin
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
    <!---->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "EditProfile",
  computed: {
    ...mapState("auth", ["authState"]),
    avatar() {
      return this.authState.gallery?.images[0]?.imageUrl;
    },
    address() {
      return this.authState.addresses[0]?.location;
    },
  },
  methods: {
    ...mapActions("auth", ["changeProfilePart", "changeProfile"]),
    changePart(e, name) {
      const value = e.target.value;
      this.changeProfilePart({ [name]: value });
    },
    handleUpdate() {
      console.log("update");
      this.changeProfile();
    },
  },
};
</script>

<style></style>
