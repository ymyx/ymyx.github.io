import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home'
import request from "./network/request";
import api from "./network/api";

Vue.use(Router)
var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        tabbar: true,
        inde: 0
      }
    },
    {
      path: '/topic',
      component: () => import('./views/Topic/Topic.vue'),
      meta: {
        tabbar: true,
        index: 0
      }
    },
    {
      path: '/category',
      component: () => import('./views/Category/Category.vue'),
      meta: {
        tabbar: true,
        index: 0
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart/Cart.vue'),
      meta: {
        tabbar: true,
        index: 0,
        auth: true
      }
    },
    {
      path: '/user',
      component: () => import('./views/User/User.vue'),
      meta: {
        tabbar: true,
        index: 0
      }
    },
    {
      path: '/search',
      component: () => import('./views/Search/Search.vue'),
      index: 0,
    },
    {
      path: '/list/:wd',
      component: () => import('./views/List/List')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      props: true,
      component: () => import('./views/Detail/Detail')
    },
    {
      path: "/login",
      name: 'login',
      props: true,
      component: () => import('./views/Login/Login'),
      async beforeEnter(to,from,next){
        await request({
          url:api.CartList
        });
        var auth = window.localStorage.getItem('yanxuan');

        if(auth){
          next('/')
        }else{
          next()
        }
      }
    },
    {
      path: "/register",
      name: 'register',
      props: true,
      component: () => import('./views/Register/Register'),
      async beforeEnter(to,from,next){
        await request({
          url:api.CartList
        });
        var auth = window.localStorage.getItem('yanxuan');

        if(auth){
          next('/')
        }else{
          next()
        }
      }

    },
    {
      path:'*',
      name:'404',
      props:true,
      component:()=>import('./views/Error/404')
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

router.beforeEach((to, from, next) => {
  if (to.meta.auth&&to.meta.auth===true) {
    var auth = window.localStorage.getItem('yanxuan');
    if(auth){
      next()
    }else{
      next({
        name:'login'
      })
    }
    return;
  }
  next()
})

export default router;
