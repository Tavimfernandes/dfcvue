// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from './../components/Login/index.vue'
import Obras from '@/views/Obras.vue'
import Dashboard from '@/views/Dashboard.vue'
import TrackConstruction from '../views/TrackConstruction.vue';
import ConstructionDetails from '../views/ConstructionDetails.vue';
import CreateProject from '../components/CreateProject/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/obras',
    name: 'Obras',
    component: Obras,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/track',
    name: 'TrackConstruction',
    component: TrackConstruction,
  },
  {
    path: '/track/:code',
    name: 'ConstructionDetails',
    component: ConstructionDetails,
  },
  {
    path: '/create-project',
    name: 'CreateProject',
    component: CreateProject
  },
]

const router = createRouter({
  history: createWebHistory('/'),  // Define a base URL diretamente
  routes
})

// Navigation Guard to protect routes
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
