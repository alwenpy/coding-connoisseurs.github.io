import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage/HomePage.vue';
import Opportunities from '../components/Opportunities/Opportunities.vue';
import CP from '../components/Opportunities/SubComponents/CP.vue';
import Opensource from '../components/Opportunities/SubComponents/Opensource.vue';
import Scholarship from '../components/Opportunities/SubComponents/Scholarship.vue';
import InternshipAndJobs from '../components/Opportunities/SubComponents/InternshipAndJobs.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    {
      path: '/opportunities',
      component: Opportunities,
      name: 'opportunities',
      children: [
        { path: '', component: Opensource, name: '' },
        { path: 'opensource', component: Opensource, name: 'opensource' },
        { path: 'cp', component: CP, name: 'cp' },
        { path: 'scholarship', component: Scholarship, name: 'scholarship' },
        { path: 'internshipandjobs', component: InternshipAndJobs, name: 'internshipandjobs' },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'oppurtunities' && from.name === 'opensource') next({ name: 'home' });
  else next();
});

export default router;
