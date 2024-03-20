import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RestaurantsView from '../views/RestaurantsView.vue'
import DishesView from '../views/DishesView.vue'
import PaymentForm from '../views/PaymentForm.vue'
import ThankYouPage from '../views/ThankYouPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/restaurants/:category',
      name: 'restaurants',
      component: RestaurantsView,
    },
    {
      path: '/dishes/:restaurant',
      name: 'dishes',
      component: DishesView,
    },
    // view per il checkout
    {
      path: '/payment',
      name: 'payment',
      component: PaymentForm,
    },    
    // view per la thank-you-page
    {
      path: '/thankspage',
      name: 'thankspage',
      component: ThankYouPage,
    },
  ]
})

export default router
