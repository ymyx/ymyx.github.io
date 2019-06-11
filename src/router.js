import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import Search from "./views/Search/Search";


Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      meta:{
        tabbar:true,
        inde:0
      }
    },
    {
      path: '/topic',
      component:()=>import('./views/Topic/Topic.vue'),
      meta:{
        tabbar:true,
        index:0
      }
    },
    {
      path: '/category',
      component:()=>import('./views/Category/Category.vue'),
      meta:{
        tabbar:true,
        index:0
      }
    },
    {
      path: '/cart',
      component:()=>import('./views/Cart/Cart.vue'),
      meta:{
        tabbar:true,
        index:0
      }
    },
    {
      path: '/user',
      component:()=>import('./views/User/User.vue'),
      meta:{
        tabbar:true,
        index:0
      }
    },
    {
      path:'/search',
      component:()=>import('./views/Search/Search.vue'),
      index:0,
    },
    {
      path:'/list/:wd',
      component:()=>import('./views/List/List')
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
})
