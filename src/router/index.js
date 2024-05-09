import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 , behavior: 'smooth'}
  },
  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/quotesPage',
      name: 'quotesPage',
      component: () => import('../views/quotesView.vue')
    },
    
    {
      path: "/reviewsPage",
      name: "reviewsPage",
      component: () =>
        import("../views/reviewsView.vue"),
    },
    {
        path: "/detailPage/:title/:img/:pageNum/:year/:size/:cat/:file/:overView/",
        name: "detailPage",
        component: () =>
          import("../views/detailView.vue"),
        props:true,// Props'ları etkinleştirerek rotadan bileşene doğrudan iletilen parametreleri props olarak almasını sağlar
      
    },
    { 
       // Burada, site içindeki belirli bir yol dışındaki herhangi bir yol için PageNotFound bileşenine yönlendirme tanımlıyoruz.
  // Bu, kullanıcıların sitenin içinde olmayan bir URL'ye gittiğinde 404 sayfasının görüntülenmesini sağlar.
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () =>
        import("../views/PageNotFound.vue"),
  
  },
    
    
  ]
});

 router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
  
  document.title = `${to.name}`;

  next()
})

export default router
