import { getAll, getById, updateStatus } from "../utils/utils";
export default {
  namespaced: true,
  state: {
    listWorker: null,
    currentWorker: null,
    query: null,
  },
  mutations: {
    setWorkerList(state, list) {
      state.listWorker = list;
    },
    setCurrentWorker(state, worker) {
      state.currentWorker = worker;
    },
    setWorkerStatus(state, values) {
      const id = values[0];
      const status = values[1];
      state.listWorker.content = state.listWorker.content.map((worker) => {
        if (worker.id == id) {
          worker = { ...worker, ...{ status: status } };
        }
        return worker;
      });
    },
    setQuery(state, query) {
      state.query = query;
    },
  },
  actions: {
    getListWorkerRegister: async ({ commit }) => {
      const list = await getAll("accounts?getNewFirst=true");
      commit("setWorkerList", list.data);
    },
    getWorkerById: async ({ commit }, id) => {
      const worker = await getById("accounts", id);
      commit("setCurrentWorker", worker.data);
    },
    async updateWorkerStatus({ commit }, values) {
      await updateStatus(`accounts`, values[0], `?accountStatus=${values[1]}`);
      commit("setWorkerStatus", [values[0], values[1]]);
    },
    searchWorker: async ({ commit }, keySearch) => {
      const list = await getAll("accounts?displayName=" + keySearch);
      commit("setWorkerList", list.data);
    },
    filterWorker: async ({ commit }, status) => {
      if (!status) {
        const list = await getAll("accounts?getNewFirst=true");
        commit("setWorkerList", list.data);
      } else {
        const list = await getAll("accounts?status=" + status);
        commit("setWorkerList", list.data);
      }
    },
    getWorkersWithQuery: async ({ commit }, query) => {
      const list = await getAll("accounts" + query + "&pageSize=10");
      commit("setWorkerList", list.data);
      commit("setQuery", query);
    },
    getWorkersAtPage: async ({ commit, state }, pageIndex) => {
      const query = state.query;
      const list = await getAll(
        "accounts" + query + "&pageIndex=" + pageIndex + "&pageSize=10"
      );
      commit("setWorkerList", list.data);
    },
  },
};
