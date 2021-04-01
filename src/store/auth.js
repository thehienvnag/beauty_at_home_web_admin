import firebase from "firebase";
import { login, updateProfile } from "../utils/utils";
export default {
  namespaced: true,
  state: {
    authState: null,
    isLoginSuccess: false,
    updateData: null,
  },
  mutations: {
    setLoginState(state, loginState) {
      state.isLoginSuccess = loginState;
    },
    loginWithStore: (state, authState) => {
      state.authState = authState;
    },
    updatePart: (state, part) => {
      state.updateData = { ...state.updateData, ...part };
    },
    updateProfile: (state, updatedInfo) => {
      state.authState.addresses[0].location = updatedInfo.address;
      state.authState.displayName = updatedInfo.displayName;
      state.authState.phone = updatedInfo.phone;
      state.authState.gallery.images[0].imageUrl = updatedInfo.image;
    },
  },
  actions: {
    logout: async ({ commit }) => {
      await firebase.auth().signOut();
      commit("setLoginState", false);
      commit("authState", null);
    },
    loginWithStore: ({ commit }, loginType = "ADMIN") => {
      commit("setLoginState", false);
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then(async function(result) {
          // This gives you a Google Access Token.
          var token = await result.user.getIdToken();
          // The signed-in user info.
          var user = result.user;
          const displayName = user.email;
          const email = user.email;
          const avatar = user.photoURL;
          await login({
            idToken: token,
            displayName: displayName,
            email: email,
            avatar: avatar,
            loginType: loginType,
          })
            .then((authState) => {
              commit("setLoginState", true);
              commit("loginWithStore", authState.data);
            })
            .catch(() => {
              commit("setLoginState", false);
            });
        });
    },
    changeProfilePart: ({ commit }, part) => {
      commit("updatePart", part);
    },
    changeProfile: async ({ state }) => {
      const updateInfo = state.updateData;
      if (updateInfo) {
        await updateProfile(updateInfo, state.authState.uid);
      }
    },
  },
};
