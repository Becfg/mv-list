import {createRouter, createWebHashHistory} from "vue-router";
import MvList from "../view/MvList.vue";
import MyPage from "../view/MyPage.vue";
import Home from "../view/Home.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/list', component: MvList},
        {path: '/my', component: MyPage},
    ]
})

export default router