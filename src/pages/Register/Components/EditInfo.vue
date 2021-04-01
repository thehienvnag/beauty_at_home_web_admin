<template>
  <div class="card-body">
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label">
              Họ tên <span class="text-danger">(*)</span>
            </label>
            <!---->
            <input
              aria-describedby="addon-right addon-left"
              type="text"
              placeholder="Họ và tên"
              class="form-control"
              @input="(e) => useInput(e, ['displayName', handleInput])"
            />
            <!---->
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="control-label">
              Email <span class="text-danger">(*)</span>
            </label>
            <!---->
            <input
              aria-describedby="addon-right addon-left"
              type="email"
              placeholder="Địa chỉ email của bạn"
              class="form-control"
              @input="(e) => useInput(e, ['email', handleInput])"
            />
            <!---->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Số điện thoại <span class="text-danger">(*)</span>
            </label>
            <!---->
            <input
              aria-describedby="addon-right addon-left"
              type="text"
              placeholder="Số điện thoại của bạn"
              class="form-control"
              @input="(e) => useInput(e, ['phone', handleInput])"
            />
            <!---->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label class="control-label">
              Địa chỉ <span class="text-danger">(*)</span>
            </label>
            <!---->
            <!-- <place-autocomplete-field
              @input="handleAddress"
              v-model="addressField"
              name="addressField"
              placeholder="Địa chỉ của bạn"
              api-key="AIzaSyAXVUp_RevD3-IcQmTGBdVR4bmfw7WnzC8"
              v-place-autofill:street.short.query="addressField"
            >
              ></place-autocomplete-field
            > -->
            <input
              aria-describedby="addon-right addon-left"
              type="text"
              placeholder="Địa chỉ của bạn"
              class="form-control"
              @input="(e) => useInput(e, ['address', handleInput])"
            />
            <!---->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label class="control-label">
            Chứng chỉ học nghề hoặc giải thưởng
            <span class="text-danger">(*)</span>
          </label>
          <vue-upload-multiple-image
            idUpload="certificates"
            @edit-image="changeImage"
            @upload-success="changeImage"
            @before-remove="beforeRemove"
          ></vue-upload-multiple-image>
        </div>
        <div class="col-md-6">
          <label class="control-label">
            Dịch vụ cung cấp <span class="text-danger">(*)</span>
          </label>
          <multiselect
            v-model="selected"
            :options="options"
            :multiple="true"
            :show-labels="false"
            :allow-empty="true"
            @input="handleSelect"
            placeholder="Dịch vụ cung cấp"
            label="name"
            track-by="name"
          >
          </multiselect>
        </div>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>

<script>
import { useInput } from "../../../utils/utils";
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import Widget from "@/components/Widget/Widget";
import Multiselect from "vue-multiselect";
import VueUploadMultipleImage from "vue-upload-multiple-image";
import VuePlaceAutocomplete from "vue-place-autocomplete";
Vue.use(VuePlaceAutocomplete);

export default {
  name: "EditInfo",
  methods: {
    ...mapActions("form", [
      "handleInput",
      "handleImage",
      "handleCombobox",
      "initForm",
    ]),
    ...mapActions("serviceTypes", ["getAllTypes"]),
    useInput,
    changeImage(formData, index, fileList) {
      this.handleImage(["imagesCertificates", fileList]);
    },
    beforeRemove(index, done, fileList) {
      done();
      this.handleImage(["imagesCertificates", fileList]);
    },
    handleSelect(value) {
      this.handleCombobox(["serviceTypes", value]);
    },
    handleAddress(value) {
      this.addressField = value;
    },
  },
  created() {
    this.initForm("register");
    this.getAllTypes();
  },
  computed: {
    ...mapState("form", ["formData"]),
    ...mapState("serviceTypes", ["serviceTypes"]),
    options() {
      if (this.serviceTypes && this.serviceTypes.length) {
        return this.serviceTypes.map((type) => ({
          name: type.name,
        }));
      }
      return [];
    },
  },
  data() {
    return {
      addressField: null,
      selected: [],
      // options: [
      //   { name: "Makeup - Trang điểm", language: "JavaScript" },
      //   { name: "Waxing", language: "Ruby" },
      //   { name: "Nails - Làm móng", language: "Ruby" },
      //   { name: "Phun xăm thẩm mỹ", language: "JavaScript" },
      //   { name: "Chăm sóc & cắt tóc", language: "Ruby" },
      //   { name: "Chăm sóc da", language: "Ruby" },
      //   { name: "Massage", language: "Ruby" },
      // ],
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
