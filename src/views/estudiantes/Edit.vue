<template>
  <div>
    <h1 class="app-page-title">Editar datos de {{ estudiante.nombre }}</h1>

    <div class="row g-4 mb-4">
        <EstudianteForm @estudiante-creado="actualizarListado" :estudiante="estudiante"></EstudianteForm>
    </div>
  </div>
</template>

<script>
import EstudianteForm from "@/components/EstudianteForm.vue";
import EstudianteService from '@/services/EstudianteService.js'

export default {
    props: ['id'],
    components: {
        EstudianteForm,
    },
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