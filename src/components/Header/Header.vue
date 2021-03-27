<template>
  <b-navbar class="header d-print-none app-header">
    <!-- <b-nav>
      <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text
                ><i class="fi flaticon-search-2"
              /></b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-nav> -->
    <a class="navbarBrand d-md-none">
      <i class="fa fa-circle text-danger" />
      &nbsp; sing &nbsp;
      <i class="fa fa-circle text-primary" />
    </a>
    <b-nav class="ml-auto">
      <b-nav-item-dropdown
        class="notificationsMenu d-sm-down-none mr-2"
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right
      >
        <template slot="button-content">
          <span class="avatar rounded-circle thumb-sm float-left mr-2">
            <img class="img" :src="avatar" alt="..." />
          </span>
          <span class="px-2">{{ authState.displayName }}</span>
          <span class="ml-1 mr-2 circle text-white fw-bold avatar-badge"
            >9</span
          >
          <i class="fi flaticon-arrow-down px-2" />
        </template>
        <Notifications />
      </b-nav-item-dropdown>
      <b-nav-item-dropdown
        id="v-step-2"
        class="settingsDropdown d-sm-down-none"
        no-caret
        right
      >
        <template slot="button-content">
          <i class="fi flaticon-settings-10 px-2" />
        </template>
        <b-dropdown-item-button @click="goToProfile">
          <i class="fi flaticon-person px-3 mr-3" /> My
          Profile</b-dropdown-item-button
        >
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logoutView">
          <i class="fi flaticon-power-1 px-3 mr-3" /> Log Out
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Notifications from "@/components/Notifications/Notifications";

export default {
  name: "Header",
  components: { Notifications },
  computed: {
    ...mapState("layout", ["sidebarClose", "sidebarStatic"]),
    ...mapState("auth", ["authState"]),
    avatar() {
      return this.authState?.gallery?.images[0]?.imageUrl;
    },
  },
  methods: {
    ...mapActions("layout", [
      "toggleSidebar",
      "switchSidebar",
      "changeSidebarActive",
    ]),
    ...mapActions("auth", ["logout"]),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split("/");
        paths.pop();
        this.changeSidebarActive(paths.join("/"));
      }
    },
    async logoutView() {
      await this.logout();
      this.$router.push("/admin-login");
    },
    goToProfile() {
      this.$router.push("/admin/my-profile");
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
