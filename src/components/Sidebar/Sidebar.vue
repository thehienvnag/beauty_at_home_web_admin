<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
    >
      <header class="logo">
        <router-link to="/app/dashboard">
          <span class="primary-word">Beauty At Home</span>
        </router-link>
      </header>
      <h5 class="navTitle">
        ADMIN
      </h5>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Thống kê"
            link="/admin/dashboard"
            iconName="flaticon-home"
            index="dashboard"
            isHeader
        />
         <NavLink
            :activeItem="activeItem"
            header="Đăng Ký Của Thợ"
            link="/admin/artist-registration"
            glyphIcon="glyphicon glyphicon-list"
            index="artistRegistration"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Danh sách thợ"
            link="/admin/artist-list"
            glyphIcon="fa fa-users"
            index="artistRegistration"
            isHeader
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
     
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
