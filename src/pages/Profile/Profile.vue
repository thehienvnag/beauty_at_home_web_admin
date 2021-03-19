<template>
  <div class="row">
    <div class="col-md-8">
        <EditProfile/>
    </div>
    <div class="col-md-4">
        <ImageSection/>
    </div>
  </div>
</template>

<script>
import EditProfile from "./components/EditProfile";
import ImageSection from "./components/ImageSection";

export default {
  name: "Profile",
  components: {
    EditProfile,
    ImageSection,
  },
};
</script>

<style src="./Profile.scss" lang="scss" scoped />
