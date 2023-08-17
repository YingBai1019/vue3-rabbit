//creatRouter : instance object of router
//creatWebHistory: router in history mode 


import { createRouter, createWebHistory } from 'vue-router'

//import Login and Layout files
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  //the location of the corresponding relationship between path and component 
  routes: [
    {
      path:'/',
      component :Layout,
      children:[
        {path:'',
        component:Home,
        },
        {
          path:'category',
          component: Category
        }
      ]
    },

    {
      path:"/login",
      component: Login
    }
  ]
})

export default router
