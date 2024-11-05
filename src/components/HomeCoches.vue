<template>
  <div class="container mt-5">
    <h1 class="text-center">Home</h1>

    <div
      v-if="status == false"
      class="d-flex justify-content-center align-items-center"
      style="height: 300px"
    >
      <img src="@/assets/images/carga.webp" alt="Cargando..." />
    </div>

    <div class="table-responsive" v-else>
      <table class="table table-bordered table-striped text-center">
        <thead class="table-dark">
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coche in coches" :key="coche.idCoche">
            <td>{{ coche.marca }}</td>
            <td>{{ coche.modelo }}</td>
            <td>
              <img
                :src="coche.imagen"
                class="img-fluid"
                style="width: 15%"
                alt="img"
              />
            </td>
            <td>
              <router-link
                class="btn btn-warning"
                :to="'/details/' + coche.idCoche"
              >
                Details
              </router-link>
              <router-link
                class="btn btn-primary btn-sm me-2"
                :to="'/update/' + coche.idCoche"
              >
                Update
              </router-link>
              <!-- Botón para eliminar el coche con SweetAlert -->
              <button
                class="btn btn-danger btn-sm"
                @click="confirmarEliminarCoche(coche.idCoche)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ServicesCoches from "@/services/servicesCoches";

const service = new ServicesCoches();

export default {
  name: "HomeCoches",
  mounted() {
    this.cargarCoches();
  },
  data() {
    return {
      coches: [],
      status: false,
    };
  },
  methods: {
    cargarCoches() {
      service.getCoches().then((result) => {
        this.status = true;
        this.coches = result;
      });
    },
    confirmarEliminarCoche(idCoche) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.eliminarCoche(idCoche);
        }
      });
    },
    eliminarCoche(idCoche) {
      service
        .deleteCoche(idCoche)
        .then(() => {
          this.coches = this.coches.filter((coche) => coche.idCoche !== idCoche);
          Swal.fire("Eliminado", "El coche ha sido eliminado.", "success");
        })
        .catch((error) => {
          console.error("Error al eliminar el coche:", error);
          Swal.fire("Error", "No se pudo eliminar el coche.", "error");
        });
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 20px;
}
</style>
