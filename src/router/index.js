import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage/HomePage.vue';
import Opportunities from '../components/Opportunities/Opportunities.vue';
import CP from '../components/Opportunities/SubComponents/CP.vue';
import Opensource from '../components/Opportunities/SubComponents/Opensource.vue';
import Scholarship from '../components/Opportunities/SubComponents/Scholarship.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    {
      path: '/opportunities',
      component: Opportunities,
      name: 'opportunities',
      children: [
        { path: 'opensource', component: Opensource },
        { path: 'cp', component: CP },
        { path: 'scholarship', component: Scholarship },
      ],
    },
  ],
});

export default router;
