import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import sitemap from '@/components/sitemap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Expansion from '@/components/Expansion'

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
          path: '/News',
          name: 'News',
          component: News
        },
        {
          path: '/sitemap',
          name: 'sitemap',
          component: sitemap
        },
      ]
    },
    {//Object
      path: '/Expansion',
      name: 'Expansion',
      component: Expansion
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
  ]
})
