
import Vue from 'vue'
import Router from 'vue-router'
const Job = resolve => require(['../page/job'], resolve)
const Info = resolve => require(['../page/info'], resolve)
Vue.use(Router);
export default new Router({
  routes: [
     {
        path: '/job',
        component: Job,
        meta: { title: '工作' }
      },
        {
        path: '/info',
        component: Info,
        meta: { title: '个人信息' }
      },
  ]
})
