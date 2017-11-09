import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import DetailPage from '../pages/detail.vue'
import DetailCount from '../pages/detail/count.vue'
import DetailFore from '../pages/detail/forecast.vue'
import DetailAna from '../pages/detail/analysis.vue'
import DetailPublish from '../pages/detail/publish.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },{
      path:'/detail',
      component: DetailPage,
      redirect:'/detail/count',
      children:[
        {
          path:'count',
          component:DetailCount,
 
        },
        {
          path:'forecast',
          component:DetailFore
        },
        {
          path:'analysis',
          component:DetailAna
        },
        {
          path:'publish',
          component:DetailPublish
        }
      ]
    }
  ]
})
