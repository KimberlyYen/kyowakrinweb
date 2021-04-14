import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import sitemap from '@/components/sitemap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Expansion from '@/components/Expansion'
import Privacy from '@/components/Privacy'
import law from '@/components/law'
import ContactUs from '@/components/ContactUs'
import Product from '@/components/Product'
import OurAsiaPacificOffices from '@/components/OurAsiaPacificOffices'
import AboutUs from '@/components/AboutUs'
import an from '@/components/an'
 


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
        {
          path: '/Privacy',
          name: 'Privacy',
          component: Privacy
        },
        {
          path: '/law',
          name: 'law',
          component: law
        },
        {
          path: '/ContactUs',
          name: 'ContactUs',
          component: ContactUs
        },
        {
          path: '/Product',
          name: 'Product',
          component: Product
        },
        {
          path: '/OurAsiaPacificOffices',
          name: 'OurAsiaPacificOffices',
          component: OurAsiaPacificOffices
        },       
        {
          path: '/an',
          name: 'an',
          component: an 
        },
        {
          path: '/AboutUs',
          name: 'AboutUs',
          component: AboutUs
        }
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
