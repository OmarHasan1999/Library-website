import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // scrollBehavior() {
  //   // always scroll to top
  //   return { top: 0 , behavior: 'smooth'}
  // },
  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
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

//  router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
  
  
//   document.title = `${to.name}`;

//   next()
// })

export default router
