import { getAll } from "../utils/utils";
export default {
  namespaced: true,
  state: {
    listFeedback: null,
    workerId: null,
  },
  mutations: {
    setFeedbackList(state, list) {
      state.listFeedback = list;
    },
    setWorkerId(state, workerId) {
      state.workerId = workerId;
    },
  },
  actions: {
    async getWorkerFeedback({ commit }, workerId) {
      const list = await getAll("feedbacks?workerId=" + workerId);
      commit("setFeedbackList", list.data);
      commit("setWorkerId", workerId);
    },
    async getWorkerFeedbackWithDateRange({ commit, state }, dateRanges) {
      const list = await getAll(
        "feedbacks?workerId=" +
          state.workerId +
          `&createDateAtMin=${dateRanges[0]}&createDateAtMax=${dateRanges[1]}`
      );
      commit("setFeedbackList", list.data);
    },
  },
};
