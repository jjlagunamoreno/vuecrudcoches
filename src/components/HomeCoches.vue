<template>
  <div class="container mt-5">
    <h1 class="text-center">Home</h1>

    <!-- Centro la imagen del gif mientras se cargan los datos -->
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
              <!-- Botón para eliminar el coche -->
              <button
                class="btn btn-danger btn-sm"
                @click="eliminarCoche(coche.idCoche)"
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
    // Método para cargar los coches desde el servicio
    cargarCoches() {
      service.getCoches().then((result) => {
        this.status = true;
        this.coches = result;
      });
    },
    // Método para eliminar un coche
    eliminarCoche(idCoche) {
      if (confirm("¿Estás seguro de que deseas eliminar este coche?")) {
        service
          .deleteCoche(idCoche)
          .then(() => {
            // Filtramos la lista para quitar el coche eliminado
            this.coches = this.coches.filter((coche) => coche.idCoche !== idCoche);
          })
          .catch((error) => {
            console.error("Error al eliminar el coche:", error);
          });
      }
    },
  },
};
</script>
