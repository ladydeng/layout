import Vue from 'vue'
import Vuex from 'vuex'
import router from 'vue-router'
Vue.use(Vuex)
Vue.use(router)

const store = new Vuex.Store({
    state: {
        isCollapse: false,
        // 当前活跃视图
        view: "home"
    },
    mutations: {
        // 隐藏菜单切换
        toggleCollapse(state, payload) {
            state.isCollapse = payload
        },
        
        // 保存当前活跃视图
        saveView(state, payload) {
            state.view = payload
        }
    }
})

export default store