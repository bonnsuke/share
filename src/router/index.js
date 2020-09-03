import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SiginUp.vue';
import Profile from '../views/Profile.vue';
import Detail from '../views/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component:Login
  },
  {
    path: '/signup',
    name: 'signup',
    component:SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: '/Detail',
    component: Detail,
    // props: true
  },
  {
    path: '/profile',
    name: '/Profile',
    component: Profile,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
