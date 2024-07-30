import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import QuizView from '../views/QuizView.vue';
import ResultView from '../views/ResultView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;