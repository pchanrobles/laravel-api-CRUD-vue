<template>
  <div>
    <h1 class="app-page-title">Estudiantes</h1>

    <div class="row g-4 mb-4">
        <EstudianteForm @estudiante-creado="actualizarListado"></EstudianteForm>
    </div>
    <!-- row -->
    <div class="row g-4 mb-4">
      <!-- col -->
      <div
        v-for="estudiante in estudiantes"
        :key="estudiante.id"
        class="col-6 col-md-4 col-xl-3 col-xxl-2"
      >
        <EstudianteCard
          @estudiante-borrado="actualizarListado"
          :estudiante="estudiante"
        ></EstudianteCard>
        <!--//app-card-->
      </div>
      <!--//col-->
    </div>
    <!--//row-->
  </div>
</template>

<script>
import EstudianteCard from "@/components/EstudianteCard.vue";
import EstudianteForm from "@/components/EstudianteForm.vue";
import EstudianteService from "@/services/EstudianteService.js";

export default {
  components: {
    EstudianteCard,
    EstudianteForm,
  },
  data() {
    return {
      estudiantes: null,
    };
  },
  created() {
    EstudianteService.getEstudiantes()
      .then((respuesta) => {
        this.estudiantes = respuesta.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    actualizarListado() {
      this.estudiantes = null;
      EstudianteService.getEstudiantes()
        .then((respuesta) => {
          this.estudiantes = respuesta.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>