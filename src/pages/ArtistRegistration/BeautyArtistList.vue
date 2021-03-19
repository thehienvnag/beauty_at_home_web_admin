<template>
  <Widget title="<h3>Danh sách thợ đăng ký</h3>" customHeader>
    <div class="d-flex justify-content-between">
      <p>
        Thông tin đăng ký của thợ
      </p>
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>

    <div class="table-responsive">
      <b-table hover :fields="fields" :items="items" class="table-pointer">
        <template #cell(avatar)="data">
          <div class="user-column">
            <img :src="data.value" alt="" />
          </div>
        </template>
        <template #cell(status)="data">
          <b-badge
            v-if="data.value === 'Đợi'"
            variant="warning"
            style="width: 80px;"
            >{{ data.value }}</b-badge
          >
          <b-badge
            v-if="data.value === 'Chấp nhận'"
            variant="success"
            style="width: 80px;"
            >{{ data.value }}</b-badge
          >
          <b-badge
            v-if="data.value === 'Hủy'"
            variant="danger"
            style="width: 80px;"
            >{{ data.value }}</b-badge
          >
        </template>
        <template #cell(action)="">
          <b-button v-b-modal.modal-detail squared variant="outline-primary">
            Xem chi tiết
          </b-button>

          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content
              ><b-button id="btnSetting" squared variant="info"
                ><span class="fa fa-cog"></span></b-button
            ></template>
            <b-dropdown-item variant="success" href="#"
              >Chấp nhận</b-dropdown-item
            >
            <b-dropdown-item variant="danger" href="#">Hủy </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
      <b-modal
        size="xl"
        id="modal-detail"
        title="Thông tin chi tiết của thợ"
        body-class="custom-modal-body"
        footer-text-variant="white"
        body-bg-variant="white"
      >
        <div class="row">
          <div class="col-md-8">
            <EditProfile />
          </div>
          <div class="col-md-4">
            <ImageSection />
          </div>
        </div>
      </b-modal>
      <b-pagination-nav
        class="pagination"
        v-model="currentPage"
        :number-of-pages="pages"
        base-url="/#/admin/artist-registration/page-"
      ></b-pagination-nav>
    </div>
  </Widget>
</template>

<script>
import a1 from "@/assets/people/a1.jpg";
import a2 from "@/assets/people/a2.jpg";
import a3 from "@/assets/people/a3.jpg";
import a4 from "@/assets/people/a4.jpg";
import EditProfile from "./components/EditProfile";
import ImageSection from "./components/ImageSection";


import Widget from "@/components/Widget/Widget";

export default {
  name: "BeautyArtistList",
  components: {
    EditProfile,
    ImageSection,
    Widget
  },
  data() {
    return {
      currentPage: 1,
      pages: 20,
      fields: [
        {
          key: "Avatar",
          label: "Ảnh đại diện",
        },
        {
          key: "Name",
          label: "Họ tên",
        },
        {
          key: "Phone",
          label: "Số điện thoại",
        },
        {
          key: "Email",
        },
        {
          key: "Address",
          label: "Địa chỉ",
        },
        {
          key: "Status",
          label: "Trạng thái",
        },
        {
          key: "Action",
          label: "Hành động",
        },
      ],
      items: [
        {
          Avatar: a1,
          Phone: "0918 883 441",
          Name: "Quỳnh Như",
          Email: "nhunnqse@gmail.com",
          Status: "Đợi",
          Address: "765 Hồng Bàng, phường 1, quận 11",
        },
        {
          Avatar: a2,
          Phone: "0918 883 441",
          Name: "Đức Thịnh",
          Email: "thinhse@gmail.com",
          Status: "Hủy",
          Address: "32 Võ Văn Hát, quận 9",
        },
        {
          Avatar: a3,
          Phone: "0918 883 441",
          Name: "Đăng Khoa",
          Email: "khoase@gmail.com",
          Status: "Chấp nhận",
          Address: "72/4/6 Làng Tăng Phú, quận 9",
        },
        {
          Avatar: a4,
          Phone: "0918 883 441",
          Name: "Minh Khoa",
          Email: "mkhoase7@gmail.com",
          Status: "Đợi",
          Address: "6 đường số 9 Nguyễn Văn Tăng",
        },
      ],
    };
  },
  gotoDetail() {},
};
</script>

<style src="./ArtistRegistration.scss" lang="scss" scoped />
