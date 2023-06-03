const pastel = {
  leerReceta: false,
  conseguirIngredientes: false,
  masaPreparada: false,
};

const leerReceta = (pastel) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          pastel.leerReceta = true;
          if (!pastel.leerReceta) {
              // No se resuelve -> CATCH recibe esto
              reject("Tienes que leer la receta primero");
          }

          // Si si se resuelve -> THEN recibe esto
          resolve(pastel);
      }, 3000);
  });
};

// Declarar
const conseguirIngredientes = (pastelLeido) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          pastelLeido.conseguirIngredientes = true;
          if (!pastelLeido.conseguirIngredientes) {
              reject("No conseguimos los ingredientes del paste;");
          }

          resolve(pastelLeido);
      }, 3000);
  });
};

const prepararMasa = (pastelConIngredientes) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          pastelConIngredientes.masaPreparada = true;
          if (!pastelConIngredientes.masaPreparada) {
              reject("No se preparo la masa");
          }

          resolve(pastelConIngredientes);
      }, 2000);
  });
};

/**
 * Async/Await
 * Async es una palabra reservada ->  que indica cuando una FUNCION va a ser asincrona.
 * Await es una palabra reservada -> Que se utiliza dentro de una FUNCION ASIONCRONA, 
 * indica que tenemos que esperar a que la promesa se finalize
 * 
 * async function() {
 * }
 */

// sintaxis
// async function comunYCorriente() {

// }

// const arrowFunction = async () => {

// }

// Cuando usen async-await ->>>>>>> try {} catch {}
const terminarPastel = async (pastel) => {
  try {
    // Las promesas que queremos ejecutar y que resuelvan
    const pastelConRecetaLeida = await leerReceta(pastel)
    const pastelConIngredientesConseguidos = await conseguirIngredientes(pastelConRecetaLeida)
    const pastelConMasaPreparada = await prepararMasa(pastelConIngredientesConseguidos)
    console.log("pastelConMasaPreparada", pastelConMasaPreparada)
    return await pastelConMasaPreparada;
  }catch(err) {
    // Cualquier error que pase dentro del try, se maneja aqui.
    console.log("Error", err)
  }
}

const resultado = terminarPastel(pastel)
.then((pastel) => {
  console.log("pastel terminado", pastel)
})