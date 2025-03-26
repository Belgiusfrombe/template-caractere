import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ProjectView from '../views/ProjectView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import Contact from '../views/Contact.vue'
import Uiux from '../views/Uiux.vue'
import Dev from '../views/Dev.vue'
import Design from '../views/Design.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/project/:id',
    name: 'project-detail',
    component: ProjectDetailView,
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/uiux',
    name: 'uiux',
    component: Uiux
  },
  {
    path: '/dev',
    name: 'dev',
    component: Dev
  },
  {
    path: '/design',
    name: 'design',
    component: Design
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
