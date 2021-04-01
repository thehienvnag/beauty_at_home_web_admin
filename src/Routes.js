import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";

import ArtistList from "@/pages/ArtistList/ArtistList";

import Login from "@/pages/Login/Login";

import Register from "@/pages/Register/Register";

import Profile from "@/pages/Profile/Profile";

import Landing from "@/pages/Landing/Landing";

import BeautyArtistList from "@/pages/ArtistRegistration/BeautyArtistList";

import ErrorPage from "@/pages/Error/Error";

// Main
import AnalyticsPage from "@/pages/Dashboard/Dashboard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/admin-login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
    {
      path: "/admin",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          name: "AnalyticsPage",
          component: AnalyticsPage,
        },
        {
          path: "my-profile",
          name: "Profile",
          component: Profile,
        },
        {
          path: "artist-registration/:id?",
          name: "BeautyArtist",
          component: BeautyArtistList,
        },
        {
          path: "artist-list/:id?",
          name: "Artist List",
          component: ArtistList,
        },
      ],
    },
  ],
});
