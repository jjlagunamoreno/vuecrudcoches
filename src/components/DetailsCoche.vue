<template>
  <div class="container mt-5">
    <h1 class="text-center">Detalles del Coche</h1>

    <!-- mostrar un loader mientras se cargan los datos -->
    <div
      v-if="status == false || !coche"
      class="d-flex justify-content-center align-items-center"
      style="height: 300px"
    >
      <p>Cargando...</p>
    </div>

    <!-- verifica que coche no sea null antes de mostrar los detalles -->
    <div v-else-if="coche" class="card mx-auto" style="width: 18rem">
      <img :src="coche.imagen" class="card-img-top" alt="Imagen del coche" />
      <div class="card-body">
        <h3 style="text-align: center">ID: {{ coche.idCoche }}</h3>
        <h5 class="card-title">{{ coche.marca }} - {{ coche.modelo }}</h5>
        <p class="card-text">
          <strong>Conductor:</strong> {{ coche.conductor }}
        </p>
        <router-link class="btn btn-primary" to="/">
          Volver a la lista
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesCoches from "@/services/servicesCoches";

const service = new ServicesCoches();

export default {
  name: "DetailsCoche",
  data() {
    return {
      coche: null, // Inicia como null para evitar errores
      status: false,
    };
  },
  mounted() {
    // Obtener el ID del coche desde la URL
    const idCoche = this.$route.params.idCoche;

    // Llamada al servicio para obtener los detalles del coche
    service
      .detailsCoche(idCoche)
      .then((result) => {
        this.coche = result; // Asignar los datos del coche
        this.status = true; // Cambiar el estado para indicar que la carga ha terminado
      })
      .catch((error) => {
        console.error("Error al cargar los detalles del coche:", error);
        this.status = true; // Cambiar el estado aunque haya error para evitar loader infinito
      });
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>
