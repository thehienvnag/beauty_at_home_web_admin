<template>
  <b-list-group class="listGroup thin-scroll">
    <b-list-group-item class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/Long.png"
          alt="..."
        />
      </span>
      <p class="m-0 overflow-hidden">
        1 new artist just signed up! Check out &nbsp;<a href="#">Đồng Hữu Long</a
        >'s registration.
        <time class="help-block m-0">
          2 mins ago
        </time>
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "NotificationsList",
};
</script>

<style src="./ListGroup.scss" lang="scss" />
