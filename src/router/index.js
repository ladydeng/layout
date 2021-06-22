import Vue from "vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)

// 路由懒加载
// const Home = () => import ("../components/content/home/Home")
const Home = () => import("../views/home/Home")

const routes = [
    {
        path:"/",
        component:Home
    }
]

const router = new vueRouter({
    routes,
    mode:"history"
})

export default router
