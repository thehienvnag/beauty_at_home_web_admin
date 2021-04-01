import { getAll } from "../utils/utils";
export default {
  namespaced: true,
  state: {
    serviceTypes: null,
  },
  mutations: {
    setTypes(state, types) {
      state.serviceTypes = types;
    },
  },
  actions: {
    async getAllTypes({ commit }) {
      const types = await getAll("service-types");
      commit("setTypes", types.data.content);
    },
  },
};
