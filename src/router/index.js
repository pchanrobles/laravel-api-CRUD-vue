import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Cursos from '../views/Cursos.vue'
import Estudiantes from '../views/estudiantes/Index.vue'
import EstudianteDetails from '../views/estudiantes/Show.vue'
import EstudianteEdit from '../views/estudiantes/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/estudiantes',
    name: 'Estudiantes',
    component: Estudiantes
  },
  {
    path: '/estudiantes/:id',
    name: 'EstudianteDetails',
    props: true,
    component: EstudianteDetails
  },
  {
    path: '/estudiantes/:id/edit',
    name: 'EstudianteEdit',
    props: true,
    component: EstudianteEdit
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: Cursos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
