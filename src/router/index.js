import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Step2 from '@/views/step2'
export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/step-2',
          name: 'Step2',
          component: Step2
        }
    ]
})
