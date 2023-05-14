import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Identification from '../views/Identification.vue'
import Guidance from '../views/Guidance.vue'
import FAQ from '../views/FAQ.vue'
import Evaluation from '../views/Evaluation.vue'
import Reference from '../views/Reference.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Main,
        reindirect: '/home',
        children: [
            // 子路由
            { path: '/home', component: Home },
            { path: '/identification', component: Identification },
            { path: '/guidance', component: Guidance },
            { path: '/faq', component: FAQ },
            { path: '/evaluation', component: Evaluation },
            { path: '/reference', component: Reference },
        ]
    }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router