<template>
  <section class="notifications navbar-notifications">
    <header class="cardHeader card-header text-center">
      <div class="text-center mb-sm">
        <strong>You have 13 notifications</strong>
      </div>
    </header>
    <NewNotifictionsList v-if="newNotifications" />
    <NotifictionsList v-else-if="notificationsTabSelected === 1" />
    <NotifictionsList v-else />
    <footer class="cardFooter text-sm card-footer">
      <span class="fs-mini">Synced at: 21 Apr 2014 18:36</span>
      <b-button
        variant="link"
        @click="loadNotifications"
        :class="{
          disabled: isLoad,
          'btnNotificationsReload btn-xs float-right py-0': true,
        }"
      >
        <span v-if="isLoad"
          ><i class="la la-refresh la-spin" /> Loading...</span
        >
        <i v-else class="la la-refresh" />
      </b-button>
    </footer>
  </section>
</template>

<script>
import Vue from "vue";
import NewNotifictionsList from "./NotificationsDemo/NewNotificationsList";

export default {
  name: "Notification",
  components: {
    NewNotifictionsList,
  },
  data() {
    return {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false,
    };
  },
  methods: {
    changeNotificationsTab(tab) {
      Vue.set(this, "notificationsTabSelected", tab);
      Vue.set(this, "newNotifications", null);
    },
    loadNotifications() {
      Vue.set(this, "isLoad", true);

      setTimeout(() => {
        Vue.set(this, "newNotifications", "new notifications component");
        Vue.set(this, "isLoad", false);
        this.changeNotificationsTab(1);
      }, 1500);
    },
  },
};
</script>

<style src="./Notifications.scss" lang="scss" />
