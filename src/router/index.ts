import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/animes',
    name: 'AnimeList',
    component: () => import('../views/AnimeList.vue'),
  },
  {
    path: '/mangas',
    name: 'MangaList',
    component: () => import('../views/MangaList.vue'),
  },
  {
    path: '/characters',
    name: 'CharacterList',
    component: () => import('../views/CharacterList.vue'),
  },
  {
    path: '/users',
    name: 'USerList',
    component: () => import('../views/UserList.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
