import {createRouter, createWebHashHistory} from "vue-router";
import MvList from "../view/MvList.vue";
import MyPage from "../view/MyPage.vue";
import Home from "../view/Home.vue"
import Player from "../view/player.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/list', component: MvList},
        {path: '/my', component: MyPage},
        {path: "/play", component: Player},
        {path: '/play/:movie_id', component: Player},
    ]
})

export default router