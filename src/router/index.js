import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Step2 from '@/views/step2'
import Step0 from '@/views/step0'
import Step1 from '@/views/step1'
export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/step-2',
          name: 'Step2',
          component: Step2
        },
        {
            path: '/',
            name: 'Step0',
            component: Step0
        },
        {
            path: '/step-1',
            name: 'Step1',
            component: Step1
        }
    ]
})
