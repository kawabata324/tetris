import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TopPage from '../../pages/TopPage.vue'
import PlayPage from '../../pages/PlayPage.vue'

//各画面のルーティング情報を記述する
const routes: Array<RouteRecordRaw> = [
  {
    //画面のアクセスする際の一意なパス
    path: '/',
    //パスが特定可能な一意の名前
    name: 'TopPage',
    //パスにアクセスした際に遷移する画面
    component: TopPage,
  },
  {
    path: '/play',
    name: 'PlayPage',
    component: PlayPage
  }
]

//各画面のルーティング情報からルータを作成する
const router = createRouter({
  //画面遷移の履歴保持の実装 ほとんどの場合はcreateWebHistoryを指定する
  history: createWebHistory(),
  routes: routes,
});

//作成したrouterを外部に出す
export default router
