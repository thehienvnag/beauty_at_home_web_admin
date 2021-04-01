export default {
  namespaced: true,
  state: {
    isFormData: false,
    formName: null,
    formData: null,
  },
  mutations: {
    initForm: (state, formName) => {
      if (formName != state.formName) {
        state.formName = null;
      }
    },
    setFormType: (state) => {
      state.isFormData = true;
    },
    setInput: (state, values) => {
      if (values) {
        state.formData = { ...state.formData, ...{ [values[0]]: values[1] } };
      }
    },
  },
  actions: {
    handleCombobox({ commit }, values) {
      const key = values[0];
      const value = values[1].map((item) => item.name).join(";");
      commit("setInput", [key, value]);
    },
    handleInput: ({ commit }, value) => {
      commit("setInput", value);
    },
    handleImage: ({ commit }, values) => {
      commit("setFormType");
      commit("setInput", [[values[0]], values[1]]);
    },
    initForm({ commit }, formName) {
      commit("initForm", formName);
    },
  },
};
