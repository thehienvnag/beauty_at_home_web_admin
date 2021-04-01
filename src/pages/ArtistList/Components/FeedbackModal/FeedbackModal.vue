<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Đánh giá của thợ</h3>
      <div class="mb-3 row justify-content-end">
        <div class="col-md-12 d-flex align-items-start">
          <b-button variant="primary" @click="selectDateRange"
            >Chọn khoảng thời gian</b-button
          >
          <v-date-picker
            class="date-picker"
            v-if="showDatePicker"
            v-model="selectedDate"
            is-range
          />
          <p class="mt-1 ml-3">{{ start }} ----- {{ end }}</p>
        </div>
      </div>
      <b-table
        hover
        :fields="fields"
        :items="listData"
        class="table-pointer customer"
      >
        <template #cell(IssueDate)="data">
          <b-badge variant="secondary">{{ data.value.date }}</b-badge>
          <p>DV: {{ data.value.name }}</p>
        </template>
        <template #cell(Customer)="data">
          <div class="d-flex customer-summary">
            <img class="avatar" :src="data.value.avatar" alt="" />
            <div>
              <p class="ml-3 my-0">
                <span>Mã đơn: </span
                ><b-link @click="() => navigateDetail(data.value.idBooking)">{{
                  data.value.idBooking
                }}</b-link>
              </p>
              <p class="ml-3 my-0">
                <span>Khách hàng:</span> {{ data.value.name }}
              </p>
              <p class="ml-3 my-0">
                <span>Đánh giá:</span> {{ data.value.rating }}
                <i class="fa fa-star" aria-hidden="true" />
              </p>
            </div>
          </div>
        </template>
        <template #cell(Feedback)="data">
          <p class="feedback-content">
            {{ data.value }}
          </p>
        </template>
        <template #cell(Images)="data">
          <div class="feedback">
            <img
              v-for="(item, index) in data.value"
              :key="index"
              :src="item"
              alt=""
            />
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import DatePicker from "v-calendar/lib/components/date-picker.umd";
export default {
  props: ["navigateDetail"],
  name: "feedback-modal",
  components: { "v-date-picker": DatePicker },
  data() {
    return {
      showDatePicker: false,
      selectedFilterIndex: -1,
      selectedDate: null,
      fields: [
        {
          key: "IssueDate",
          label: "Ngày",
        },
        {
          key: "Customer",
          label: "Khách hàng",
        },
        {
          key: "Feedback",
          label: "Nội dung",
        },
        {
          key: "Images",
          label: "Hình Ảnh",
        },
      ],
      // items: [
      //   {
      //     IssueDate: "20-03-2021",
      //     Customer: {
      //       avatar: a5,
      //       idBooking: "SVF-026-20212103",
      //       name: "Huỳnh Thị Ngọc Hiền",
      //       rating: 1,
      //     },
      //     Feedback:
      //       "Trang điểm mạnh tay gây trầy xước da mặt. Không bao giờ sử dụng dịch vụ từ thợ này 1 lần nào nữa",
      //     Images: [
      //       "https://static2.yan.vn/YanNews/2167221/201809/toa-sang-lan-da-ngam-voi-layout-trang-diem-cuc-pham-tai-sao-khong-a479f79b.png",
      //     ],
      //   },
      //   {
      //     IssueDate: "20-03-2021",
      //     Customer: {
      //       avatar: a6,
      //       idBooking: "SVF-026-20212103",
      //       name: "Mai Quỳnh Anh",
      //       rating: 1,
      //     },
      //     Feedback:
      //       "Trang điểm thợ dùng sản phẩm không chất lượng, gây nổi mẩn da mặt.",
      //     Images: [
      //       "https://bloganchoi.com/wp-content/uploads/2020/07/da-nhay-cam-3.jpeg",
      //     ],
      //   },
      //   {
      //     IssueDate: "20-03-2021",
      //     Customer: {
      //       avatar: long,
      //       idBooking: "SVF-026-20212103",
      //       name: "Linh Ngọc Đàm",
      //       rating: 4,
      //     },
      //     Feedback:
      //       "Thợ phục vụ rất tốt, chu đáo, nhiệt tình. Trang điểm và làm tóc để mình đi dự tiệc rất đẹp.",
      //     Images: [
      //       "https://aodaitailoc.com/wp-content/uploads/2020/07/trang-diem-co-dau-1-1.jpg",

      //       "https://i.pinimg.com/originals/78/b9/a8/78b9a87cce565d1b13594e48c3a5cd61.jpg",
      //     ],
      //   },
      //   {
      //     IssueDate: "20-03-2021",
      //     Customer: {
      //       avatar: trang,
      //       idBooking: "SVF-026-20212103",
      //       name: "Nguyễn Thị Ngọc",
      //       rating: 5,
      //     },
      //     Feedback:
      //       "Thợ vui tính, nhiệt tình. Mình nhuộm tóc và uốn xoăn rất đẹp, tóc xoăn rất tự nhiên.",
      //     Images: [
      //       "https://kenh14cdn.com/2020/10/1/chahongofficial117165729652519065471235390353213949645307n-1601539663719865201407.jpg",
      //     ],
      //   },
      // ],
    };
  },
  computed: {
    ...mapState("feedback", ["listFeedback"]),
    start() {
      if (!this.selectedDate) {
        return "";
      }
      return this.selectedDate.start.toJSON();
    },
    end() {
      if (!this.selectedDate) {
        return "";
      }
      return this.selectedDate.end.toJSON();
    },
    listData() {
      if (!this.listFeedback?.content) {
        return [];
      }
      return this.listFeedback.content.map((feedback) => {
        return {
          IssueDate: {
            date: feedback.createDate,
            name: feedback.bookingDetail?.serviceName,
          },
          Customer: {
            avatar:
              feedback.bookingDetail?.booking?.customerAccount?.gallery
                ?.images[0]?.imageUrl,
            idBooking: feedback.bookingDetail?.booking?.id,
            name: feedback.bookingDetail?.booking?.customerAccount?.displayName,
            rating: feedback.rateScore,
          },
          Feedback: feedback.feedbackContent,
          Images: feedback.gallery?.images?.map((img) => img.imageUrl),
        };
      });
    },
  },
  methods: {
    ...mapActions("feedback", ["getWorkerFeedbackWithDateRange"]),
    selectDateRange() {
      this.showDatePicker = !this.showDatePicker;
      if (!this.showDatePicker) {
        this.getWorkerFeedbackWithDateRange([
          this.selectedDate.start.toJSON(),
          this.selectedDate.end.toJSON(),
        ]);
      }
    },
    filter(index) {
      if (this.selectedFilterIndex === index) {
        this.selectedFilterIndex = -1;
      } else {
        this.selectedFilterIndex = index;
      }
    },
  },
};
</script>

<style src="./FeedbackModal.scss" lang="scss" scoped></style>
