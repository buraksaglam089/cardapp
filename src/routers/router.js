import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,

  },
  {
    path: '/game',
    name: 'Game View',
    component: Game
  }

] 
  const router = createRouter({
    history: createWebHistory(),
    routes,
  }); 
  export default router