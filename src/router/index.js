import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const Next = () => {
  return import("../views/Next.vue")
} 
const Users = () =>{
  return import ('../views/Users.vue')
}
const UsersDetail = () => import('../views/UsersDetail.vue') 
const UsersEdit = () => import('../views/UsersEdit.vue') 

Vue.use(VueRouter)

 
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/next',
    name: 'Next',
    component: Next
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    children: [
      {
        path: '/:id',
        name: 'users-detail',
        component: UsersDetail
      },
      {
        path: ":id/edit",
        name: "users-edit",
        component: UsersEdit
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: 'users'
  },
  {
    path: '/*',
    redirect: {name: 'Home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
