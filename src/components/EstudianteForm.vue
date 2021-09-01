<template>
  <div class="app-card app-card-settings shadow-sm p-4">
    <div class="app-card-body">
      <form class="settings-form" @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="nombre"
            required=""
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" />
        </div>
        <button type="submit" class="btn app-btn-primary">Save Changes</button>
      </form>
    </div>
    <!--//app-card-body-->
  </div>
</template>

<script>
import EstudianteService from "@/services/EstudianteService.js";

export default {
  props: {
    estudiante: {
      type: Object,
    }
  },
  data() {
    return {
      nombre: null,
      email: null,
    };
  },
  created() {
    if(this.estudiante) {
      this.nombre = this.estudiante.nombre
      this.email = this.estudiante.email
    }
  },
  methods: {
    onSubmit() {
      let estudianteNuevo = {
        nombre: this.nombre,
        email: this.email,
      };

      if(this.estudiante) {
        // Actualizar
        EstudianteService
        .updateEstudiante(this.estudiante.id, estudianteNuevo)
        .then((respuesta) => {
            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Crear
        EstudianteService.createEstudiante(estudianteNuevo)
          .then((respuesta) => {
            this.$emit("estudiante-creado");
            console.log(respuesta.data);
          })
          .catch((error) => {
            console.log(error);
          });

        this.nombre = "";
        this.email = "";
      }
    },
  },
};
</script>

<style>
</style>