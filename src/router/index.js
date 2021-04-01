import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
  ]
})
