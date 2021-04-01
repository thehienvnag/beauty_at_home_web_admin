import { getById } from "../utils/utils";
export default {
  namespaced: true,
  state: {
    booking: null,
  },
  mutations: {
    setBooking(state, booking) {
      state.booking = booking;
    },
  },
  actions: {
    async getBookingById({ commit }, bookingId) {
      const booking = await getById("bookings", bookingId);
      commit("setBooking", booking.data);
    },
  },
};
