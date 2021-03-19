<template>
  <div class="logo-container">
    <img :src="appLogo" class="logo-login">
    <h1 class="logo-text">Beauty At Home</h1>
</div>
</template>

<script>
import appLogo from "../../assets/logo.png"
export default {
    name: "AppLogo",
    data() {
        return {
            appLogo: appLogo
        }
    }
}
</script>

<style src="./AppLogo.scss" lang="scss" scoped />
