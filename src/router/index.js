import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      children:[
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
        {
          path: '/Footer',
          name: 'Footer',
          component: Footer
        },
      ]
    },
  ]
})
