<template>
  <div class="card">
    <!---->
    <div class="card-header"><h4 class="card-title">Edit Profile</h4></div>
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-5">
            <div class="form-group">
              <label class="control-label">
                Full Name
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Full Name"
                class="form-control"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label class="control-label">
                Username
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Username"
                class="form-control"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-4">
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
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label">
                Phone Number
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Phone Number"
                class="form-control"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="control-label">
                Address
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Home Address"
                class="form-control"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">
                City
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="City"
                class="form-control"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">
                Country
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="text"
                placeholder="Country"
                class="form-control"
              />
              <!---->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="control-label">
                Postal Code
              </label>
              <!---->
              <input
                aria-describedby="addon-right addon-left"
                type="number"
                placeholder="ZIP Code"
                class="form-control"
              />
              <!---->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea
                rows="5"
                placeholder="Here can be your description"
                class="form-control border-input"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill float-right">
            Update Profile
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
    <!---->
  </div>
</template>

<script>
export default {
  name: "EditProfile",
};
</script>

<style></style>
