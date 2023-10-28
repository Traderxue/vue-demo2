import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"",
    component:()=>import("@/views/index.vue"),
    children:[
      {
        path:"",
        component:()=>import("@/views/Home/home.vue"),
      },
      {
        path:"/home",
        component:()=>import("@/views/Home/home.vue"),
        children:[
          {
            path:'',
            component:()=>import("@/views/Home/components/zf.vue")
          },
          {
            path:'/up',
            component:()=>import("@/views/Home/components/zf.vue")
          },
          {
            path:'/deal',
            component:()=>import("@/views/Home/components/cj.vue")
          },
          {
            path:'/newcoin',
            component:()=>import("@/views/Home/components/xb.vue")
          },
        ]
      },
      {
        path:"/kline",
        component:()=>import("@/views/Kline/kline.vue")
      },
      {
        path:"/trade",
        component:()=>import("@/views/Trade/trade.vue")
      },
      {
        path:"/contract",
        component:()=>import("@/views/Contract/contract.vue")
      },
      {
        path:"/assets",
        component:()=>import("@/views/Assets/assets.vue")
      }      
    ]
   }
  ]
})

export default router
