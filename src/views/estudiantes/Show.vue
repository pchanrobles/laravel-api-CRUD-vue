<template>
  <div>
    <h1 class="app-page-title">Estudiante {{ estudiante.nombre }}</h1>

    <!-- row -->
    <div class="row g-4 mb-4">
      <!-- col -->
      <div class="col-12">
          <p>{{ estudiante.email }}</p>
          <p>{{ estudiante.created_at }}</p>
      </div>
      <!--//col-->
    </div>
    <!--//row-->
  </div>
</template>

<script>
import EstudianteService from '@/services/EstudianteService.js'

export default {
    props: ['id'],
    data() {
        return {
            estudiante: null
        }
    },
    created() {
        EstudianteService
        .getEstudiante(this.id)
        .then(respuesta => {
            this.estudiante = respuesta.data.datos
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style>

</style>