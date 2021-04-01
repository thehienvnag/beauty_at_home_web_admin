<template>
  <Widget title="<h3>Danh sách thợ đăng ký</h3>" customHeader>
    <div class="d-flex justify-content-between">
      <p>
        Thông tin đăng ký của thợ
      </p>
      <b-form-select @change="handleFilter" style="width: 200px;">
        <b-form-select-option :value="null">Tất cả</b-form-select-option>
        <b-form-select-option value="ACTIVE"
          >Đang hoạt động</b-form-select-option
        >
        <b-form-select-option value="NEW">Mới</b-form-select-option>
        <b-form-select-option value="INACTIVE"
          >Hủy</b-form-select-option
        ></b-form-select
      >
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          @keydown="handleSearch"
        />
      </div>
    </div>

    <div class="table-responsive">
      <b-table hover :fields="fields" :items="listData" class="table-pointer">
        <template #cell(avatar)="data">
          <div class="user-column">
            <img :src="data.value" alt="" />
          </div>
        </template>
        <template #cell(status)="data">
          <b-badge
            v-if="data.value === 'NEW'"
            variant="warning"
            style="width: 80px;"
            >MỚI</b-badge
          >
          <b-badge
            v-if="data.value === 'ACTIVE'"
            variant="success"
            style="width: 80px;"
            >H.ĐỘNG</b-badge
          >
          <b-badge
            v-if="data.value === 'INACTIVE'"
            variant="danger"
            style="width: 80px;"
            >HỦY</b-badge
          >
        </template>
        <template #cell(address)="data">
          <p style="width: 140px">{{ data.value }}</p>
        </template>
        <template #cell(action)="data">
          <b-button
            v-b-modal.modal-detail
            squared
            variant="outline-primary"
            @click="() => changeCurrentWorker(data.value)"
          >
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
            <b-dropdown-item
              variant="success"
              @click="() => handleAccept(data.value)"
              >Chấp nhận</b-dropdown-item
            >
            <b-dropdown-item
              variant="danger"
              @click="() => handleCancel(data.value)"
              >Hủy
            </b-dropdown-item>
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
            <EditProfile :currentWorker="currentWorker" />
          </div>
          <div class="col-md-4">
            <ImageSection :currentWorker="currentWorker" />
          </div>
        </div>
      </b-modal>
      <b-pagination-nav
        class="pagination"
        v-model="currentPage"
        :number-of-pages="this.listWorker.totalPage"
        base-url="/#/admin/artist-registration/page-"
      ></b-pagination-nav>
    </div>
  </Widget>
</template>

<script>
import EditProfile from "./components/EditProfile";
import ImageSection from "./components/ImageSection";
import { mapState, mapActions } from "vuex";
import Widget from "@/components/Widget/Widget";

export default {
  name: "BeautyArtistList",
  components: {
    EditProfile,
    ImageSection,
    Widget,
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
    };
  },
  watch: {
    async $route(to) {
      const page = to.params.id.replace("page-", "");
      await this.getWorkersAtPage(page);
    },
  },
  async created() {
    await this.getWorkersWithQuery("?getNewFirst=true");
  },
  computed: {
    ...mapState("worker", ["listWorker", "currentWorker"]),
    totalPage() {
      if (!this.listWorker) {
        return 1;
      }
      return this.listWorker.totalPage;
    },
    listData() {
      if (this.listWorker && this.listWorker.content.length) {
        return this.listWorker?.content.map((worker) => ({
          Avatar: worker.gallery?.images[0]?.imageUrl,
          Name: worker.displayName,
          Phone: worker.phone,
          Email: worker.email,
          Status: worker.status,
          Address: worker.addresses[0]?.location,
          Action: worker.id,
        }));
      }
      return [];
    },
  },
  methods: {
    ...mapActions("worker", [
      "getListWorkerRegister",
      "getWorkerById",
      "updateWorkerStatus",
      "searchWorker",
      "filterWorker",
      "getWorkersWithQuery",
      "getWorkersAtPage",
    ]),
    changeCurrentWorker(workerId) {
      this.getWorkerById(workerId);
    },
    handleAccept(workerId) {
      this.updateWorkerStatus([workerId, "ACTIVE"]);
    },
    handleCancel(workerId) {
      this.updateWorkerStatus([workerId, "INACTIVE"]);
    },
    handleSearch(e) {
      if (e.keyCode == 13) {
        this.getWorkersWithQuery("?role=WORKER&displayName=" + e.target.value);
      }
    },
    handleFilter(e) {
      if (!e) {
        this.getWorkersWithQuery("?getNewFirst=true");
      } else {
        this.getWorkersWithQuery("?role=WORKER&status=" + e);
      }
    },
  },
};
</script>

<style src="./ArtistRegistration.scss" lang="scss" scoped />
