<template>
  <div>
    <h1>Create Coche</h1>
    <h2 style="color: blue">{{ mensaje }}</h2>
    <form
      v-on:submit.prevent="insertarCoche"
      style="width: 500px; margin: 0 auto"
    >
      <label>Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />
      <label>Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />
      <label>Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />
      <label>Imagen</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <button class="btn btn-info">Create</button>
    </form>
  </div>
</template>

<script>
import ServicesCoches from "@/services/servicesCoches";
const service = new ServicesCoches();

export default {
  name: "CreateCoches",
  data() {
    return {
      mensaje: "",
      coche: {
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    insertarCoche() {
      service
        .insertarCoche(this.coche)
        .then((result) => {
          this.mensaje = result; // Mostramos el mensaje de éxito
          this.$router.push("/"); // Redireccionamos a la página principal
        })
        .catch((error) => {
          this.mensaje = "Error al insertar el coche: " + error.message;
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
