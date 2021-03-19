import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

import Login from '@/pages/Login/Login';

import Register from '@/pages/Register/Register';

import Profile from '@/pages/Profile/Profile';

import Landing from '@/pages/Landing/Landing';


import BeautyArtistList from "@/pages/ArtistRegistration/BeautyArtistList"


import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

import NotificationsPage from '@/pages/Notifications/Notifications';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/admin-login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/admin',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'my-profile',
          name: "Profile",
          component: Profile
        },
        {
          path: 'artist-registration/:id?',
          name: "BeautyArtist",
          component: BeautyArtistList
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
      ],
    },
  ],
});
