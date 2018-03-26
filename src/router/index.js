import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/routes/Home';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect:'/home',
    },
    {
      name:'home',
      path: '/home',
      component:Home,
    },
  ]
})
