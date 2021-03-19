<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    this.$router.push("");
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
