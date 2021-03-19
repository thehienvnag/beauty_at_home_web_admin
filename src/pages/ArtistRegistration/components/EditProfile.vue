<template>
    <div class="card">
      <!---->
      <div class="card-body">
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">
                  Họ tên
                </label>
                <!---->
                <input
                  aria-describedby="addon-right addon-left"
                  type="text"
                  placeholder="Họ tên"
                  class="form-control"
                  value="Cao Quỳnh Trang"
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
                  value="trangcq@gmail.com"
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
                  placeholder="Số điện thoại"
                  class="form-control"
                  value="0933 154 532"
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
                  placeholder="Địa chỉ"
                  class="form-control"
                  value="5/3 đường số 9"
                />
                <!---->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Về bản thân</label>
                <textarea
                  rows="5"
                  placeholder="Mô tả về bản thân bạn"
                  class="form-control border-input"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label class="control-label">
                Chứng chỉ học nghề hoặc giải thưởng
              </label>
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="images"
              ></vue-upload-multiple-image>
            </div>
            <div class="col-md-6">
              <label class="control-label">
                Dịch vụ cung cấp
              </label>
              <multiselect
                v-model="selected"
                :options="options"
                :multiple="true"
                :show-labels="false"
                :allow-empty="true"
                placeholder="Dịch vụ cung cấp"
                label="name"
                track-by="name"
              >
              </multiselect>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-info btn-fill float-right">
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
import Multiselect from "vue-multiselect";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "EditProfile",
  data() {
    return {
      images: [
        {
          path:
            "https://daotaothammydiemtrang.com/wp-content/uploads/2017/08/make-up.jpg",
          default: 1,
          highlight: 1,
          caption: "caption to display. receive", // Optional
        },
        {
          path:
            "https://vietbeautyacademy.edu.vn/ckfinder/userfiles/images/2018-vietbeauty-academy/cuoc-thi-tim-kiem-tai-nang-vietbeauty-lan-6-2018/make-up/co-gai-9x-va-giai-kim-cuong-bo-mon-makeup/Co-gai-9x-va-giai-kim-cuong-bo-mon-makeup-fantasy-vietbeauty-academy-5.png",
          default: 1,
          highlight: 1,
          caption: "caption to display. receive", // Optional
        },
      ],
      selected: [
        { name: "Makeup - Trang điểm", language: "JavaScript" },
        { name: "Waxing", language: "Ruby" },
        { name: "Nails - Làm móng", language: "Ruby" },
      ],
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
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
