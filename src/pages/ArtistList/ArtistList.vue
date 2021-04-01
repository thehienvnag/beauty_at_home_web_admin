<template>
  <Widget title="<h3>Danh sách thợ</h3>" customHeader>
    <p>
      Thông tin về đánh giá khách hàng cho thợ
    </p>
    <div class="d-flex justify-content-between align-items-start">
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
        <template #cell(rating)="data">
          <div>
            <b-badge v-show="data.value.total == 0" variant="info"
              >Chưa có</b-badge
            >
            <p v-show="data.value.total > 0" class="rating-star">
              <i class="fa fa-star" aria-hidden="true"></i
              >{{ data.value.rateScore }} ({{ data.value.total }} đánh giá)
            </p>
          </div>
        </template>
        <template #cell(status)="data">
          <span v-if="data.value === 'INACTIVE'">
            <i class="fa fa-circle text-warning" aria-hidden="true"></i>
            Ngừng h.động
          </span>
          <span v-if="data.value === 'NEW'">
            <i class="fa fa-circle text-danger" aria-hidden="true"></i>
            Mới
          </span>
          <span v-if="data.value === 'ACTIVE'">
            <i class="fa fa-circle text-success" aria-hidden="true"></i>
            H.động
          </span>
        </template>
        <template #cell(action)="data">
          <b-button
            v-b-modal.modal-detail
            squared
            variant="outline-primary"
            @click="() => changeCurrentFeedbackList(data.value)"
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
            <b-dropdown-item href="#" @click="() => handleAccept(data.value)"
              >Cho phép hoạt động trở lại</b-dropdown-item
            >
            <b-dropdown-item
              href="#"
              @click="() => handleCancel(data.value)"
              variant="danger"
              >Tạm ngưng hoạt động</b-dropdown-item
            >
          </b-dropdown>
        </template>
      </b-table>
      <b-modal
        size="xl"
        id="modal-detail"
        title="Thông tin chi tiết"
        body-class="custom-modal-body"
        footer-text-variant="white"
        body-bg-variant="white"
      >
        <feedback-modal v-if="!isInDetail" :navigateDetail="navigateDetail" />
        <booking-detail v-if="isInDetail" :navigateDetail="navigateDetail" />
      </b-modal>
      <b-pagination-nav
        class="pagination"
        v-model="currentPage"
        :number-of-pages="listWorker.totalPage"
        base-url="/#/admin/artist-list/page-"
      ></b-pagination-nav>
    </div>
  </Widget>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import FeedbackModal from "./Components/FeedbackModal/FeedbackModal.vue";
import BookingDetail from "./Components/BookingDetail/BookingDetail.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "ArtistList",
  components: {
    Widget,
    FeedbackModal,
    BookingDetail,
  },
  data() {
    return {
      isInDetail: false,
      selectedStatus: null,

      selectedDate: null,
      currentPage: 1,
      selectedFilterIndex: -1,
      pages: 20,
      fields: [
        {
          key: "Pos",
          label: "#",
        },
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
          key: "Rating",
          label: "Đánh giá TB",
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
      // items: [
      //   {
      //     Pos: 1,
      //     Avatar: a1,
      //     Phone: "0918 883 441",
      //     Rating: "3.8",
      //     Name: "Quỳnh Như",
      //     Email: "nhunnqse@gmail.com",
      //     Status: "Dừng hoạt động",
      //   },
      //   {
      //     Pos: 2,
      //     Avatar: a2,
      //     Phone: "0918 883 441",
      //     Rating: "4.1",
      //     Name: "Đức Thịnh",
      //     Email: "thinhse@gmail.com",
      //     Status: "Tạm ngưng hoạt động",
      //   },
      //   {
      //     Pos: 3,
      //     Avatar: a3,
      //     Phone: "0918 883 441",
      //     Rating: "4.2",
      //     Name: "Đăng Khoa",
      //     Email: "khoase@gmail.com",
      //     Status: "Đang hoạt động",
      //   },
      //   {
      //     Pos: 4,
      //     Avatar: a4,
      //     Phone: "0918 883 441",
      //     Rating: "4.6",
      //     Name: "Minh Khoa",
      //     Email: "mkhoase7@gmail.com",
      //     Status: "Đang hoạt động",
      //   },
      // ],
    };
  },
  watch: {
    async $route(to, from) {
      const page = to.params.id.replace("page-", "");
      await this.getWorkersAtPage(page);
    },
  },
  computed: {
    ...mapState("worker", ["listWorker"]),
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
          Rating: { rateScore: worker.rateScore, total: worker.totalFeedback },
        }));
      }
      return [];
    },
  },
  async created() {
    this.getWorkersWithQuery("?role=WORKER&withRateScore=true");
  },
  methods: {
    ...mapActions("booking", ["getBookingById"]),
    ...mapActions("worker", [
      "getWorkersWithQuery",
      "getWorkersAtPage",
      "updateWorkerStatus",
    ]),
    ...mapActions("feedback", ["getWorkerFeedback"]),
    filter(index) {
      if (this.selectedFilterIndex === index) {
        this.selectedFilterIndex = -1;
      } else {
        this.selectedFilterIndex = index;
      }
    },
    handleAccept(workerId) {
      this.updateWorkerStatus([workerId, "ACTIVE"]);
    },
    handleCancel(workerId) {
      this.updateWorkerStatus([workerId, "INACTIVE"]);
    },
    navigateDetail(bookingId) {
      this.getBookingById(bookingId);
      this.isInDetail = !this.isInDetail;
    },
    handleSearch(e) {
      if (e.keyCode == 13) {
        this.getWorkersWithQuery("?role=WORKER&displayName=" + e.target.value);
      }
    },
    changeCurrentFeedbackList(workerId) {
      this.getWorkerFeedback(workerId);
    },
  },
};
</script>

<style src="./ArtistList.scss" lang="scss" scoped></style>
