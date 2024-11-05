import Global from "@/Global";

export default class ServicesCoches {
    insertarCoche(coche) {
        return new Promise(function (resolve, reject) {
            let request = "api/Coches/InsertCoche";
            let url = Global.urlApiCoches + request;
            // Excluimos el idCoche porque se genera automáticamente
            const cocheData = {
                marca: coche.marca,
                modelo: coche.modelo,
                conductor: coche.conductor,
                imagen: coche.imagen
            };
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cocheData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud: " + response.status);
                    }
                    // Algunos servidores no devuelven datos después de una inserción exitosa
                    // Para manejar esto, solo verificamos el estado
                    if (response.status === 200 || response.status === 201) {
                        resolve("Coche insertado correctamente.");
                    } else {
                        return response.json();
                    }
                })
                .then((data) => {
                    resolve(data); // En caso de que el servidor devuelva datos
                })
                .catch((error) => {
                    reject(error);
                    console.error("Error al insertar el coche:", error);
                });
        });
    }

    updateCoche(coche) {
        return new Promise(function (resolve, reject) {
            let request = "api/Coches/UpdateCoche";
            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(coche),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud: " + response.status);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                    console.error("Error al actualizar el coche:", error);
                });
        });
    }

    deleteCoche(idCoche) {
        return new Promise((resolve, reject) => {
            let request = `api/Coches/DeleteCoche/${idCoche}`;
            let url = Global.urlApiCoches + request;
            fetch(url, {
                method: "DELETE",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud: " + response.status);
                    }
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                    console.error("Error al eliminar el coche:", error);
                });
        });
    }

    getCoches() {
        return new Promise(function (resolve, reject) {
            let request = "api/Coches";
            let url = Global.urlApiCoches + request;
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud: " + response.status);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                    console.error("Error al obtener los datos:", error);
                });
        });
    }

    detailsCoche(idCoche) {
        return new Promise(function (resolve, reject) {
            let request = `api/Coches/FindCoche/${idCoche}`; // Asegúrate de que esta ruta sea correcta
            let url = Global.urlApiCoches + request;
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud: " + response.status);
                    }
                    return response.json();
                })
                .then((data) => {
                    resolve(data); // Resuelve los datos del coche específico
                })
                .catch((error) => {
                    reject(error); // Rechaza en caso de error
                    console.error("Error al obtener los detalles del coche:", error);
                });
        });
    }
}
