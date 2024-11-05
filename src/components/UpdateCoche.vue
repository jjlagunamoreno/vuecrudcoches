<template>
  <div>
    <h1>Update Coche</h1>
    <form
      v-if="coche"
      v-on:submit.prevent="updateCoche"
      style="width: 500px; margin: 0 auto"
    >
      <input type="hidden" v-model="coche.idCoche" />
      <label>Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />
      <label>Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />
      <label>Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />
      <label>Imagen</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <button class="btn btn-warning">Update</button>
    </form>
  </div>
</template>

<script>
import ServicesCoches from "@/services/servicesCoches";
const service = new ServicesCoches();

export default {
  name: "UpdateCoche",
  data() {
    return {
      coche: null,
    };
  },
  methods: {
    updateCoche() {
      service
        .updateCoche(this.coche)
        .then((result) => {
          console.log(result);
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error al actualizar el coche:", error.message);
        });
    },
  },
  mounted() {
    let idCoche = this.$route.params.idCoche;
    service
      .detailsCoche(idCoche)
      .then((result) => {
        this.coche = result;
      })
      .catch((error) => {
        console.error("Error al cargar los detalles del coche:", error.message);
      });
  },
};
</script>

<style scoped>
form {
  margin-top: 20px;
}
</style>
