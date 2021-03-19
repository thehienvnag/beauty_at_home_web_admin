<template>
  <b-list-group class="listGroup thin-scroll">
    <b-list-group-item class="listGroupItem bg-primary-light">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/Huy.png"
          alt="..."
        />
        <i class="status status-bottom bg-success" />
      </span>
      <time class="text-link help float-right">10 sec ago</time>
      <h6 class="m-0 fw-bold mb-1">Đăng Huy</h6>
      <p class="deemphasize text-ellipsis m-0">
        Chào, sáng nay bận rộn nhỉ?
      </p>
    </b-list-group-item>
    
  </b-list-group>
</template>

<script>
export default {
  name: "Messages",
};
</script>

<style src="./ListGroup.scss" lang="scss" />
