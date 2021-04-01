<template>
  <div>
    <div class="d-flex mb-3 align-items-center">
      <b-button variant="outline-primary" @click="back"
        ><i class="fa fa-arrow-left mr-3" aria-hidden="true"></i>Back
      </b-button>
      <h5 class="ml-3 pt-2">Nội dung đơn</h5>
    </div>
    <div class="customer-summary">
      <p>
        <span class="font-weight-bold">Khách đặt:</span>
        {{ booking.customerAccount.displayName }}
      </p>
      <p>
        <span class="font-weight-bold">Địa điểm:</span> {{ booking.endAddress }}
      </p>
      <p>
        <span class="font-weight-bold">Ghi chú của khách:</span>
        {{ booking.note }}
      </p>
    </div>
    <div class="mt-3">
      <h5>Các dịch vụ trong đơn:</h5>
      <b-list-group>
        <b-list-group-item
          v-for="item in booking.bookingDetails"
          :key="item.id"
        >
          <div class="d-flex justify-content-between">
            <span> {{ item.quantity }}x {{ item.serviceName }} </span>
            <span>
              {{
                item.servicePrice
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
              }}đ
            </span>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="mt-3">
      <span class="font-weight-bold">Tổng đơn: </span>
      <span
        >{{
          booking.bookingDetails
            .reduce((acc, cur) => (acc += cur.servicePrice * cur.quantity), 0)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        }}đ</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "booking-detail",
  props: ["navigateDetail"],
  computed: {
    ...mapState("booking", ["booking"]),
  },
  methods: {
    back() {
      this.navigateDetail();
    },
  },
};
</script>

<style src="./BookingDetail.scss" lang="scss" scoped></style>
